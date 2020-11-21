type EVENT_NAME = 'up' | 'down' | 'left' | 'right' | 'mouse opened' | 'mouse closed';

interface HeadControlServiceSettings {
  /** from 0 to 1 */
  mouseOpeningTreshold: number;
  /** from 0 to 1 */
  mouseClosingTreshold: number;
  disableRestPosition: boolean;
  detectionThreshold: number;
  detectionHysteresis: number;
  tol: {
    rx: number;
    ry: number;
    s: number;
  };
  sensibility: {
    rx: number;
    ry: number;
    s: number;
  };
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
  mouseOpeningTreshold: 0.7,
  mouseClosingTreshold: 0.4,
  disableRestPosition: false,
  /** sensibility, between 0 and 1. Less -> more sensitive */
  detectionThreshold: 0.85,
  detectionHysteresis: 0.05,
  tol: {
    /** do not move if head turn more than this value (in degrees) from head rest position */
    rx: 5,
    ry: 5,
    /** do not move forward/backward if head is larger/smaller than this percent from the rest position */
    s: 5,
  },
  sensibility: {
    rx: 1,
    ry: 1,
    s: 1,
  },
};

type Movement = {
  dRy: number;
  dRx: number;
  dZ: number;
  expressions: {
    [key: number]: number;
  };
};

class HeadControlService extends EventTarget {
  private movementLocks: { [key in 'vertical' | 'horizontal' | 'mouseOpened']: boolean } = {
    vertical: false,
    horizontal: false,
    mouseOpened: false,
  };

  private settings: HeadControlServiceSettings;
  private returnValue = {
    dRx: 0,
    dRy: 0,
    dZ: 0,
  };

  private state = {
    isLoaded: false,
    isDetected: false,
    isEnabled: false,
    restHeadPosition: {
      // position of the head matching with No Move
      needsUpdate: false,
      s: 0,
      rx: 0,
      ry: 0,
    },
  };

  private lastTimestamp = 0;
  private gl = null;
  private cv = null;
  private videoTexture = null;
  private videoTransformMat2 = null;
  private glHeadSearchDrawShaderProgram = null;
  private headSearchUniformXys = null;
  private headSearchUniformVideoTransformMat2 = null;
  private disableRestPosition = false;

  constructor(canvasId: string, settings: Partial<HeadControlServiceSettings>) {
    super();
    this.settings = { ...defaultSettings, ...settings };
    this.settings.tol.rx *= Math.PI / 180; // convert from degrees to radians
    this.settings.tol.ry *= Math.PI / 180;
    this.settings.tol.s /= 100;

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
      callbackTrack: (detectState) => {
        if (!this.state.isEnabled) {
          return;
        }
        const mv: Partial<Movement> = this.computeCameraMove(detectState);
        mv.expressions = detectState.expressions;

        if (mv.dRx !== 0 || mv.dRy !== 0 || mv.dZ !== 0) {
          this.handleMove(mv as Movement);
        }

        this.handleMouseOpening(detectState);
      },
    });
  }

  public toggle(isEnabled: boolean) {
    if (this.state.isEnabled === isEnabled) {
      return true;
    } else if (!isEnabled) {
      //disable
      this.state.isEnabled = false;
      return true;
    } else {
      this.state.isEnabled = true;
      this.state.restHeadPosition.needsUpdate = true;
      return true;
    }
  }

  private handleMouseOpening = (detectState: DetectState) => {
    if (detectState.ry < -1 || detectState.ry > 1) {
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

  private handleMove = (mv: Movement) => {
    if (mv.dRx !== 0) {
      this.handleAxisMovement({ axis: 'vertical', axisPosition: mv.dRx, maxValue: 'down', minValue: 'up' });
    }
    if (mv.dRy !== 0) {
      this.handleAxisMovement({ axis: 'horizontal', axisPosition: mv.dRy, maxValue: 'left', minValue: 'right' });
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
    if (axisPosition < -10 && !this.movementLocks[axis]) {
      this.movementLocks[axis] = true;
      this.dispatchEvent(new Event(minValue));
      return;
    }
    if (axisPosition > 10 && !this.movementLocks[axis]) {
      this.movementLocks[axis] = true;
      this.dispatchEvent(new Event(maxValue));
      return;
    }
    if (axisPosition > -5 && axisPosition < 5) {
      this.movementLocks[axis] = false;
      return;
    }
  };

  private computeDelta(ref, val, tol, sensibility) {
    if (Math.abs(ref - val) < tol) {
      return 0;
    }
    return (val - ref) * sensibility;
  }

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

  private computeCameraMove(detectState: DetectState) {
    if (this.state.isDetected && detectState.detected < this.settings.detectionThreshold - this.settings.detectionHysteresis) {
      // DETECTION LOST

      this.state.isDetected = false;
      this.returnValue.dRx = 0;
      this.returnValue.dRy = 0;
      this.returnValue.dZ = 0;
    } else if (!this.state.isDetected && detectState.detected - this.settings.detectionThreshold + this.settings.detectionHysteresis) {
      // FACE DETECTED
      this.state.isDetected = true;
    }

    if (this.state.isEnabled) {
      this.drawHeadSearch(detectState);
    }

    if (!this.state.isEnabled || !this.state.isDetected || !this.state.isLoaded) {
      return this.returnValue; // no camera move
    }

    if (this.state.restHeadPosition.needsUpdate && !this.disableRestPosition) {
      this.state.restHeadPosition.needsUpdate = false;
      this.state.restHeadPosition.rx = detectState.rx;
      this.state.restHeadPosition.ry = detectState.ry;
      this.state.restHeadPosition.s = detectState.s;
      this.lastTimestamp = Date.now();
    }

    // compute movement of the camera
    const ts = Date.now();
    const dt = ts - this.lastTimestamp;
    this.returnValue.dRx = dt * this.computeDelta(this.state.restHeadPosition.rx, detectState.rx, this.settings.tol.rx, this.settings.sensibility.rx);
    this.returnValue.dRy = dt * this.computeDelta(this.state.restHeadPosition.ry, detectState.ry, this.settings.tol.ry, this.settings.sensibility.ry);
    this.returnValue.dZ = dt * this.computeDelta(this.state.restHeadPosition.s, detectState.s, this.settings.tol.s, this.settings.sensibility.s);

    this.lastTimestamp = ts;
    return this.returnValue;
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
