type EVENT_NAME = 'up' | 'down' | 'left' | 'right' | 'mouse opened' | 'mouse closed';

interface HeadControlServiceSettings {
  /** from 0 to 1 */
  mouseOpeningTreshold: number;
  /** from 0 to 1 */
  mouseClosingTreshold: number;
  /** from 0 to 1 */
  headMovementStartedTreshold: number;
  /** from 0 to 1 */
  headMovementStoppedTreshold: number;
}

type DetectState = {
  /** the face detection probability, between 0 and 1 */
  detected: number;
  /** The 2D coordinates of the center of the detection frame in the viewport, from left to right, between -1 and 1 */
  x: number;
  /** The 2D coordinates of the center of the detection frame in the viewport, from bottom to top, between -1 and 1 */
  y: number;
  /** the scale along the horizontal axis of the detection frame, between 0 and 1 (1 for the full width). The detection frame is always square. */
  s: number;
  /** the Euler angles of the head rotation in radians. */
  rx: number;
  /** the Euler angles of the head rotation in radians. */
  ry: number;
  /** the Euler angles of the head rotation in radians. */
  rz: number;
  /** array listing the facial expression coefficients. expressions[0]: mouth opening coefficient (0 → mouth closed, 1 → mouth fully opened). */
  expressions: number[];
};

const defaultSettings: HeadControlServiceSettings = {
  mouseOpeningTreshold: 0.6,
  mouseClosingTreshold: 0.5,
  headMovementStartedTreshold: 0.15,
  headMovementStoppedTreshold: 0.08,
};

class HeadControlService extends EventTarget {
  private movementLocks: { [key in 'vertical' | 'horizontal' | 'mouseOpened']: boolean } = {
    vertical: false,
    horizontal: false,
    mouseOpened: false,
  };

  private settings: HeadControlServiceSettings;

  private state = {
    isLoaded: false,
    isDetected: false,
    isEnabled: false,
  };

  private gl = null;
  private cv = null;
  private videoTexture = null;
  private videoTransformMat2 = null;
  private glHeadSearchDrawShaderProgram = null;
  private headSearchUniformXys = null;
  private headSearchUniformVideoTransformMat2 = null;

  constructor(canvasId: string, settings: Partial<HeadControlServiceSettings>) {
    super();
    this.settings = { ...defaultSettings, ...settings };

    window.JEEFACEFILTERAPI.init({
      canvasId: canvasId,
      NNCPath: './vendor/',
      animateDelay: 20, //avoid DOM lags
      callbackReady: (errCode, jeeFaceFilterObj) => {
        if (errCode) {
          console.error('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
          return;
        }
        this.gl = jeeFaceFilterObj['GL'];
        this.videoTexture = jeeFaceFilterObj['videoTexture'];
        this.videoTransformMat2 = jeeFaceFilterObj['videoTransformMat2'];
        this.cv = jeeFaceFilterObj['canvasElement'];

        this.initHeadSearchDraw();
        this.state.isLoaded = true;
      },
      // called at each render iteration (drawing loop):
      callbackTrack: (detectState: DetectState) => {
        if (!this.state.isEnabled) {
          return;
        }

        this.drawHeadSearch(detectState);
        this.handleMove(detectState);
        this.handleMouseOpening(detectState);
      },
    });
  }

  public toggle(isEnabled: boolean): boolean {
    if (this.state.isEnabled === isEnabled) {
      return true;
    }
    this.state.isEnabled = isEnabled;
    return true;
  }

  private handleMouseOpening = (detectState: DetectState) => {
    if (detectState.ry < -1 * this.settings.headMovementStartedTreshold || detectState.ry > this.settings.headMovementStartedTreshold) {
      // Head should be in the center position
      return;
    }
    let mouthOpening = (detectState.expressions[0] - 0.2) * 5.0;
    mouthOpening = Math.min(Math.max(mouthOpening, 0), 1);
    if (mouthOpening > this.settings.mouseOpeningTreshold && !this.movementLocks.mouseOpened) {
      this.movementLocks.mouseOpened = true;
      this.dispatchEvent(new Event('mouse opened'));
      return;
    }
    if (mouthOpening < this.settings.mouseClosingTreshold && this.movementLocks.mouseOpened) {
      this.movementLocks.mouseOpened = false;
      this.dispatchEvent(new Event('mouse closed'));
      return;
    }
  };

  private handleMove = (mv: DetectState) => {
    if (mv.rx !== 0) {
      this.handleAxisMovement({ axis: 'vertical', axisPosition: mv.rx, maxValue: 'down', minValue: 'up' });
    }
    if (mv.ry !== 0) {
      this.handleAxisMovement({ axis: 'horizontal', axisPosition: mv.ry, maxValue: 'left', minValue: 'right' });
    }
  };

  private handleAxisMovement = ({
    axis,
    axisPosition,
    maxValue,
    minValue,
  }: {
    axis: 'horizontal' | 'vertical';
    axisPosition: number;
    maxValue: EVENT_NAME;
    minValue: EVENT_NAME;
  }) => {
    if (axisPosition < -1 * this.settings.headMovementStartedTreshold && !this.movementLocks[axis]) {
      this.movementLocks[axis] = true;
      this.dispatchEvent(new Event(minValue));
      return;
    }
    if (axisPosition > this.settings.headMovementStartedTreshold && !this.movementLocks[axis]) {
      this.movementLocks[axis] = true;
      this.dispatchEvent(new Event(maxValue));
      return;
    }
    if (axisPosition > -1 * this.settings.headMovementStoppedTreshold && axisPosition < this.settings.headMovementStoppedTreshold) {
      this.movementLocks[axis] = false;
      return;
    }
  };

  private compileShader(source, glType, typeString) {
    const glShader = this.gl.createShader(glType);
    this.gl.shaderSource(glShader, source);
    this.gl.compileShader(glShader);
    if (!this.gl.getShaderParameter(glShader, this.gl.COMPILE_STATUS)) {
      alert('ERROR IN ' + typeString + ' SHADER: ' + this.gl.getShaderInfoLog(glShader));
      return null;
    }
    return glShader;
  }

  private initHeadSearchDraw() {
    // build this.glHeadSearchDrawShaderProgram:
    const shaderVertexSource =
      '\n\
      attribute vec2 aat_position;\n\
      varying vec2 vUV;\n\
      \n\
      void main(void) {\n\
        gl_Position = vec4(aat_position, 0., 1.);\n\
        vUV = 0.5 + 0.5 * aat_position;\n\
        vUV.x = 1.-vUV.x; // mirror diplay\n\
      }';
    const shaderFragmentSource =
      '\n\
      precision lowp float;\n\
      varying vec2 vUV;\n\
      \n\
      uniform sampler2D samplerVideo;\n\
      uniform mat2 videoTransformMat2;\n\
      uniform vec3 uxys;\n\
      \n\
      void main(void) {\n\
        vec2 uvVideoCentered = 2.0 * videoTransformMat2 * (vUV - 0.5);\n\
        vec2 uvVideo = uvVideoCentered + 0.5;\n\
        vec3 colorVideo = texture2D(samplerVideo, uvVideo).rgb;\n\
        vec2 pos = vUV*2.-vec2(1.,1.);\n\
        vec2 isInside = step(uxys.xy-uxys.z*vec2(1.,1.), pos);\n\
        isInside *= step(pos, uxys.xy+uxys.z*vec2(1.,1.));\n\
        vec2 blendCenterFactor = abs(pos-uxys.xy) / uxys.z;\n\
        float alpha = isInside.x * isInside.y * pow(max(blendCenterFactor.x, blendCenterFactor.y), 3.);\n\
        vec3 color = mix(colorVideo, vec3(0.,0.6,1.), alpha);\n\
        gl_FragColor = vec4(color,1.);\n\
      }';

    const glShaderVertex = this.compileShader(shaderVertexSource, this.gl.VERTEX_SHADER, 'VERTEX');
    const glShaderFragment = this.compileShader(shaderFragmentSource, this.gl.FRAGMENT_SHADER, 'FRAGMENT');

    this.glHeadSearchDrawShaderProgram = this.gl.createProgram();
    this.gl.attachShader(this.glHeadSearchDrawShaderProgram, glShaderVertex);
    this.gl.attachShader(this.glHeadSearchDrawShaderProgram, glShaderFragment);

    this.gl.linkProgram(this.glHeadSearchDrawShaderProgram);
    const samplerVideo = this.gl.getUniformLocation(this.glHeadSearchDrawShaderProgram, 'samplerVideo');
    this.headSearchUniformXys = this.gl.getUniformLocation(this.glHeadSearchDrawShaderProgram, 'uxys');
    this.headSearchUniformVideoTransformMat2 = this.gl.getUniformLocation(this.glHeadSearchDrawShaderProgram, 'videoTransformMat2');

    this.gl.useProgram(this.glHeadSearchDrawShaderProgram);
    this.gl.uniform1i(samplerVideo, 0);
  }

  private drawHeadSearch(detectState: DetectState) {
    // unbind the current FBO and set the viewport as the whole canvas:
    this.gl.viewport(0, 0, this.cv.width, this.cv.height);

    // use the head draw shader program and sync uniforms:
    this.gl.useProgram(this.glHeadSearchDrawShaderProgram);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.videoTexture);
    this.gl.uniform3f(this.headSearchUniformXys, detectState.x, detectState.y, detectState.s);
    this.gl.uniformMatrix2fv(this.headSearchUniformVideoTransformMat2, false, this.videoTransformMat2);

    // draw the square looking for the head
    // the VBO filling the whole screen is still bound to the context
    // fill the viewPort:
    this.gl.drawElements(this.gl.TRIANGLES, 3, this.gl.UNSIGNED_SHORT, 0);
  }
}

declare global {
  interface Window {
    JEEFACEFILTERAPI: {
      init: (settings: {
        canvasId: string;
        NNCPath: string;
        /**  It is used only in normal rendering mode (not in slow rendering mode). With this statement you can set accurately the number of milliseconds during which the browser wait at the end of the rendering loop before starting another detection. If you use the canvas of this API as a secondary element (for example in PACMAN or EARTH NAVIGATION demos) you should set a small animateDelay value (for example 2 milliseconds) in order to avoid rendering lags. */
        animateDelay: number;
        callbackReady: (errCode: string, jeeFaceFilterObj) => void;
        callbackTrack: (detectState: DetectState) => void;
      }) => void;
    };
  }
}

export default HeadControlService;
