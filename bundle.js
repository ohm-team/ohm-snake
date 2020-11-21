/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/console-subscriber/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-subscriber/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 72:48-62 */
/*! CommonJS bailout: module.exports is used directly at 73:8-22 */
/***/ (function(module) {

/**
 * Subscribe to the console output 
 *
 * @author Samson Radu
 */ 
(function(){
    var _log = console.log;
    var _warn = console.warn;
    var _error = console.error;
    var _debug = console.debug;

    var ConsoleSubscriber = {
        unbind: function(){
            console.log = _log;
            console.warn = _warn;
            console.error = _error;
            console.debug = _debug;
        }, 
        bind: function(cb, preventLogging){
            if (typeof cb !== 'function'){
                console.error("You must pass a valid callback function.");
                return false;
            }

            preventLogging = Boolean(preventLogging); //force bool

            const CATEGORY_INFO = "info";
            const CATEGORY_WARN = "warn";
            const CATEGORY_ERROR = "error";
            const CATEGORY_DEBUG = "debug";

            console.log = console.info = function(){
                if (_log){
                    if (!preventLogging){
                        _log.call(console, ...arguments);
                    }
                    cb(CATEGORY_INFO, arguments);
                }
            };

            console.warn = function(){
                if (_warn){
                    if (!preventLogging){
                        _warn.call(console, ...arguments);
                    }
                    cb(CATEGORY_WARN, arguments);
                }
            };

            console.error = function(){
                if (_error){
                    if (!preventLogging){
                        _error.call(console, ...arguments);
                    }
                    cb(CATEGORY_ERROR, arguments);
                }
            };

            console.debug = function(){
                if (_debug){
                    if (!preventLogging){
                        _debug.call(console, ...arguments);
                    }
                    cb(CATEGORY_DEBUG, arguments);
                }
            };

        }
    }

    //export
    if ( true && typeof module.exports !== 'undefined'){
        module.exports = ConsoleSubscriber;
    }
    else if (window && typeof window === 'object'){
        window.ConsoleSubscriber = ConsoleSubscriber;
    }
    else {
        console.error("Failed to export module.");
    }
})();


/***/ }),

/***/ "./node_modules/image-capture/src/imagecapture.js":
/*!********************************************************!*\
  !*** ./node_modules/image-capture/src/imagecapture.js ***!
  \********************************************************/
/*! namespace exports */
/*! export ImageCapture [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageCapture": function() { return /* binding */ ImageCapture; }
/* harmony export */ });
/**
 * MediaStream ImageCapture polyfill
 *
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

let ImageCapture = window.ImageCapture;

if (typeof ImageCapture === 'undefined') {
  ImageCapture = class {

    /**
     * TODO https://www.w3.org/TR/image-capture/#constructors
     *
     * @param {MediaStreamTrack} videoStreamTrack - A MediaStreamTrack of the 'video' kind
     */
    constructor(videoStreamTrack) {
      if (videoStreamTrack.kind !== 'video')
        throw new DOMException('NotSupportedError');

      this._videoStreamTrack = videoStreamTrack;
      if (!('readyState' in this._videoStreamTrack)) {
        // Polyfill for Firefox
        this._videoStreamTrack.readyState = 'live';
      }

      // MediaStream constructor not available until Chrome 55 - https://www.chromestatus.com/feature/5912172546752512
      this._previewStream = new MediaStream([videoStreamTrack]);
      this.videoElement = document.createElement('video');
      this.videoElementPlaying = new Promise(resolve => {
        this.videoElement.addEventListener('playing', resolve);
      });
      if (HTMLMediaElement) {
        this.videoElement.srcObject = this._previewStream;  // Safari 11 doesn't allow use of createObjectURL for MediaStream
      } else {
        this.videoElement.src = URL.createObjectURL(this._previewStream);
      }
      this.videoElement.muted = true;
      this.videoElement.setAttribute('playsinline', ''); // Required by Safari on iOS 11. See https://webkit.org/blog/6784
      this.videoElement.play();

      this.canvasElement = document.createElement('canvas');
      // TODO Firefox has https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas
      this.canvas2dContext = this.canvasElement.getContext('2d');
    }

    /**
     * https://w3c.github.io/mediacapture-image/index.html#dom-imagecapture-videostreamtrack
     * @return {MediaStreamTrack} The MediaStreamTrack passed into the constructor
     */
    get videoStreamTrack() {
      return this._videoStreamTrack;
    }

    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-getphotocapabilities
     * @return {Promise<PhotoCapabilities>} Fulfilled promise with
     * [PhotoCapabilities](https://www.w3.org/TR/image-capture/#idl-def-photocapabilities)
     * object on success, rejected promise on failure
     */
    getPhotoCapabilities() {
      return new Promise(function executorGPC(resolve, reject) {
        // TODO see https://github.com/w3c/mediacapture-image/issues/97
        const MediaSettingsRange = {
          current: 0, min: 0, max: 0,
        };
        resolve({
          exposureCompensation: MediaSettingsRange,
          exposureMode: 'none',
          fillLightMode: 'none',
          focusMode: 'none',
          imageHeight: MediaSettingsRange,
          imageWidth: MediaSettingsRange,
          iso: MediaSettingsRange,
          redEyeReduction: false,
          whiteBalanceMode: 'none',
          zoom: MediaSettingsRange,
        });
        reject(new DOMException('OperationError'));
      });
    }

    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-setoptions
     * @param {Object} photoSettings - Photo settings dictionary, https://www.w3.org/TR/image-capture/#idl-def-photosettings
     * @return {Promise<void>} Fulfilled promise on success, rejected promise on failure
     */
    setOptions(photoSettings = {}) {
      return new Promise(function executorSO(resolve, reject) {
        // TODO
      });
    }

    /**
     * TODO
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-takephoto
     * @return {Promise<Blob>} Fulfilled promise with [Blob](https://www.w3.org/TR/FileAPI/#blob)
     * argument on success; rejected promise on failure
     */
    takePhoto() {
      const self = this;
      return new Promise(function executorTP(resolve, reject) {
        // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
        // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
        if (self._videoStreamTrack.readyState !== 'live') {
          return reject(new DOMException('InvalidStateError'));
        }
        self.videoElementPlaying.then(() => {
          try {
            self.canvasElement.width = self.videoElement.videoWidth;
            self.canvasElement.height = self.videoElement.videoHeight;
            self.canvas2dContext.drawImage(self.videoElement, 0, 0);
            self.canvasElement.toBlob(resolve);
          } catch (error) {
            reject(new DOMException('UnknownError'));
          }
        });
      });
    }

    /**
     * Implements https://www.w3.org/TR/image-capture/#dom-imagecapture-grabframe
     * @return {Promise<ImageBitmap>} Fulfilled promise with
     * [ImageBitmap](https://www.w3.org/TR/html51/webappapis.html#webappapis-images)
     * argument on success; rejected promise on failure
     */
    grabFrame() {
      const self = this;
      return new Promise(function executorGF(resolve, reject) {
        // `If the readyState of the MediaStreamTrack provided in the constructor is not live,
        // return a promise rejected with a new DOMException whose name is "InvalidStateError".`
        if (self._videoStreamTrack.readyState !== 'live') {
          return reject(new DOMException('InvalidStateError'));
        }
        self.videoElementPlaying.then(() => {
          try {
            self.canvasElement.width = self.videoElement.videoWidth;
            self.canvasElement.height = self.videoElement.videoHeight;
            self.canvas2dContext.drawImage(self.videoElement, 0, 0);
            // TODO polyfill https://developer.mozilla.org/en-US/docs/Web/API/ImageBitmapFactories/createImageBitmap for IE
            resolve(window.createImageBitmap(self.canvasElement));
          } catch (error) {
            reject(new DOMException('UnknownError'));
          }
        });
      });
    }
  };
}

window.ImageCapture = ImageCapture;


/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/console.ts":
/*!************************!*\
  !*** ./src/console.ts ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.enableMobileConsole = void 0;
const console_subscriber_1 = __importDefault(__webpack_require__(/*! console-subscriber */ "./node_modules/console-subscriber/index.js"));
const enableMobileConsole = () => {
    const buffer = [];
    console_subscriber_1.default.bind((category, args) => {
        if (buffer.length === 5) {
            buffer.shift();
        }
        buffer.push({ category, message: args[0] });
        document.getElementById('console').innerHTML = buffer.map((m) => `<p>${m.message}</p>`).join('');
    });
};
exports.enableMobileConsole = enableMobileConsole;


/***/ }),

/***/ "./src/declare.ts":
/*!************************!*\
  !*** ./src/declare.ts ***!
  \************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const console_1 = __webpack_require__(/*! ./console */ "./src/console.ts");
const HeadControlService_1 = __webpack_require__(/*! ./services/HeadControlService */ "./src/services/HeadControlService/index.ts");
const imageCapture_1 = __webpack_require__(/*! ./services/ImageCaptureService/imageCapture */ "./src/services/ImageCaptureService/imageCapture.ts");
const voice_1 = __webpack_require__(/*! ./services/VoiceService/voice */ "./src/services/VoiceService/voice.ts");
__webpack_require__(/*! ./declare */ "./src/declare.ts");
__webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
const startButton = $('#startButton');
const preloader = $('#preloader');
const startScreen = $('#start');
const gameScreen = $('#game');
const nameInput = $('#nameInput');
const initAllAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all([imageCapture_1.initImageCapture(), voice_1.initVoiceService(), HeadControlService_1.initHeadControl()])
        .then(() => {
        preloader.hide();
        startScreen.show();
    })
        .catch((e) => {
        console.log(e);
    });
});
const initApp = () => __awaiter(void 0, void 0, void 0, function* () {
    preloader.show();
    gameScreen.hide();
    startScreen.hide();
    yield initAllAPI();
    nameInput.on('input', () => {
        if (nameInput.val()) {
            startButton.prop('disabled', false);
        }
        else {
            startButton.prop('disabled', true);
        }
    });
    startButton.click(() => __awaiter(void 0, void 0, void 0, function* () {
        yield startGame(nameInput.val());
    }));
});
const startGame = (playerName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield imageCapture_1.takePhoto();
        gameScreen.show();
        startScreen.hide();
        voice_1.setUpUser(playerName);
        // saySomething(PHRASES.HELLO);
    }
    catch (e) {
        alert(e);
    }
});
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    console_1.enableMobileConsole();
    yield initApp();
});


/***/ }),

/***/ "./src/services/HeadControlService/HeadControlService.ts":
/*!***************************************************************!*\
  !*** ./src/services/HeadControlService/HeadControlService.ts ***!
  \***************************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const defaultSettings = {
    mouseOpeningTreshold: 0.6,
    mouseClosingTreshold: 0.5,
    headMovementStartedTreshold: 0.15,
    headMovementStoppedTreshold: 0.08,
};
class HeadControlService extends EventTarget {
    constructor(canvasId, settings) {
        super();
        this.movementLocks = {
            vertical: false,
            horizontal: false,
            mouseOpened: false,
        };
        this.state = {
            isLoaded: false,
            isDetected: false,
            isEnabled: false,
        };
        this.gl = null;
        this.cv = null;
        this.videoTexture = null;
        this.videoTransformMat2 = null;
        this.glHeadSearchDrawShaderProgram = null;
        this.headSearchUniformXys = null;
        this.headSearchUniformVideoTransformMat2 = null;
        this.handleMouseOpening = (detectState) => {
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
        this.handleMove = (mv) => {
            if (mv.rx !== 0) {
                this.handleAxisMovement({ axis: 'vertical', axisPosition: mv.rx, maxValue: 'down', minValue: 'up' });
            }
            if (mv.ry !== 0) {
                this.handleAxisMovement({ axis: 'horizontal', axisPosition: mv.ry, maxValue: 'left', minValue: 'right' });
            }
        };
        this.handleAxisMovement = ({ axis, axisPosition, maxValue, minValue, }) => {
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
        this.settings = Object.assign(Object.assign({}, defaultSettings), settings);
        window.JEEFACEFILTERAPI.init({
            canvasId: canvasId,
            NNCPath: './vendor/',
            animateDelay: 20,
            callbackReady: (errCode, jeeFaceFilterObj) => {
                if (errCode) {
                    if ((errCode = 'WEBCAM_UNAVAILABLE')) {
                        settings.onCameraPersmissionFailed && settings.onCameraPersmissionFailed();
                        return;
                    }
                    console.error('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
                    return;
                }
                this.gl = jeeFaceFilterObj['GL'];
                this.videoTexture = jeeFaceFilterObj['videoTexture'];
                this.videoTransformMat2 = jeeFaceFilterObj['videoTransformMat2'];
                this.cv = jeeFaceFilterObj['canvasElement'];
                this.initHeadSearchDraw();
                this.state.isLoaded = true;
                settings.onReady && settings.onReady();
            },
            // called at each render iteration (drawing loop):
            callbackTrack: (detectState) => {
                if (!this.state.isEnabled) {
                    return;
                }
                this.drawHeadSearch(detectState);
                this.handleMove(detectState);
                this.handleMouseOpening(detectState);
            },
        });
    }
    toggle(isEnabled) {
        if (this.state.isEnabled === isEnabled) {
            return true;
        }
        this.state.isEnabled = isEnabled;
        return true;
    }
    compileShader(source, glType, typeString) {
        const glShader = this.gl.createShader(glType);
        this.gl.shaderSource(glShader, source);
        this.gl.compileShader(glShader);
        if (!this.gl.getShaderParameter(glShader, this.gl.COMPILE_STATUS)) {
            alert('ERROR IN ' + typeString + ' SHADER: ' + this.gl.getShaderInfoLog(glShader));
            return null;
        }
        return glShader;
    }
    initHeadSearchDraw() {
        // build this.glHeadSearchDrawShaderProgram:
        const shaderVertexSource = '\n\
      attribute vec2 aat_position;\n\
      varying vec2 vUV;\n\
      \n\
      void main(void) {\n\
        gl_Position = vec4(aat_position, 0., 1.);\n\
        vUV = 0.5 + 0.5 * aat_position;\n\
        vUV.x = 1.-vUV.x; // mirror diplay\n\
      }';
        const shaderFragmentSource = '\n\
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
    drawHeadSearch(detectState) {
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
exports.default = HeadControlService;


/***/ }),

/***/ "./src/services/HeadControlService/index.ts":
/*!**************************************************!*\
  !*** ./src/services/HeadControlService/index.ts ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initHeadControl = exports.default = void 0;
const HeadControlService_1 = __importDefault(__webpack_require__(/*! ./HeadControlService */ "./src/services/HeadControlService/HeadControlService.ts"));
var HeadControlService_2 = __webpack_require__(/*! ./HeadControlService */ "./src/services/HeadControlService/HeadControlService.ts");
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(HeadControlService_2).default; } }));
const initHeadControl = () => {
    return new Promise((resolve, reject) => {
        const headControlService = new HeadControlService_1.default('head-preview', {
            onReady: () => {
                console.log('head control is ready');
                resolve();
            },
            onCameraPersmissionFailed: () => alert('This game is head-controlled. You need to enable camera to play the game.'),
        });
        headControlService.toggle(true);
        headControlService.addEventListener('mouse opened', () => console.log('mouse opened'));
        headControlService.addEventListener('mouse closed', () => console.log('mouse closed'));
        headControlService.addEventListener('left', () => console.log('left'));
        headControlService.addEventListener('right', () => console.log('right'));
    });
};
exports.initHeadControl = initHeadControl;


/***/ }),

/***/ "./src/services/ImageCaptureService/imageCapture.ts":
/*!**********************************************************!*\
  !*** ./src/services/ImageCaptureService/imageCapture.ts ***!
  \**********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initImageCapture = exports.takePhoto = void 0;
__webpack_require__(/*! image-capture */ "./node_modules/image-capture/src/imagecapture.js");
let imageCapture;
let isInit = false;
const takePhoto = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!imageCapture) {
        return;
    }
    yield imageCapture
        .takePhoto()
        .then((blob) => createImageBitmap(blob))
        .then((imageBitmap) => {
        const canvas = document.querySelector('#takePhotoCanvas');
        canvas.style.display = 'block';
        drawCanvas(canvas, imageBitmap);
        //canvas.toBlob(async (blob) => {
        //  try {
        //    await createFile(blob);
        //    await readFile();
        //  } catch (e) {
        //    throw e;
        //  }
        //});
    });
});
exports.takePhoto = takePhoto;
function drawCanvas(canvas, img) {
    canvas.width = getComputedStyle(canvas).width.split('px')[0];
    canvas.height = getComputedStyle(canvas).height.split('px')[0];
    let ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    let x = (canvas.width - img.width * ratio) / 2;
    let y = (canvas.height - img.height * ratio) / 2;
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height, x, y, img.width * ratio, img.height * ratio);
}
const initImageCapture = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isInit) {
        return Promise.resolve();
    }
    isInit = true;
    return navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
        const track = mediaStream.getVideoTracks()[0];
        console.log(ImageCapture);
        try {
            imageCapture = new ImageCapture(track);
        }
        catch (e) {
            throw e;
        }
    })
        .catch(() => {
        alert('Image capture is not supported on your device :(');
    });
});
exports.initImageCapture = initImageCapture;


/***/ }),

/***/ "./src/services/VoiceService/voice.ts":
/*!********************************************!*\
  !*** ./src/services/VoiceService/voice.ts ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saySomething = exports.setUpUser = exports.PHRASES = exports.initVoiceService = void 0;
let VOICE;
const initVoiceService = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        setTimeout(() => {
            VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');
            resolve(true);
        }, 500);
    });
});
exports.initVoiceService = initVoiceService;
exports.PHRASES = {
    HELLO: '`Hi, %username%. Have a good game',
    RIGHT: 'Good right turn, %username%',
};
let userName = '';
const setUpUser = (name) => {
    userName = name;
};
exports.setUpUser = setUpUser;
const saySomething = (text) => {
    if (!VOICE) {
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text.replace('%username%', userName));
    utterance.voice = VOICE;
    utterance.volume = 1;
    utterance.pitch = 1;
    utterance.rate = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
};
exports.saySomething = saySomething;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvY29uc29sZS1zdWJzY3JpYmVyL2luZGV4LmpzIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9pbWFnZS1jYXB0dXJlL3NyYy9pbWFnZWNhcHR1cmUuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3N0eWxlL2luZGV4LnNjc3M/NTU2YiIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvY29uc29sZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvZGVjbGFyZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9IZWFkQ29udHJvbFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvc2VydmljZXMvSW1hZ2VDYXB0dXJlU2VydmljZS9pbWFnZUNhcHR1cmUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL1ZvaWNlU2VydmljZS92b2ljZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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RUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxvQkFBb0IsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUcsd0JBQXdCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELE9BQU87QUFDckU7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMLENBQUM7QUFDRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjs7Ozs7OztVQzNDcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWJzY3JpYmUgdG8gdGhlIGNvbnNvbGUgb3V0cHV0IFxuICpcbiAqIEBhdXRob3IgU2Ftc29uIFJhZHVcbiAqLyBcbihmdW5jdGlvbigpe1xuICAgIHZhciBfbG9nID0gY29uc29sZS5sb2c7XG4gICAgdmFyIF93YXJuID0gY29uc29sZS53YXJuO1xuICAgIHZhciBfZXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgIHZhciBfZGVidWcgPSBjb25zb2xlLmRlYnVnO1xuXG4gICAgdmFyIENvbnNvbGVTdWJzY3JpYmVyID0ge1xuICAgICAgICB1bmJpbmQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IF9sb2c7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4gPSBfd2FybjtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IgPSBfZXJyb3I7XG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnID0gX2RlYnVnO1xuICAgICAgICB9LCBcbiAgICAgICAgYmluZDogZnVuY3Rpb24oY2IsIHByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgbXVzdCBwYXNzIGEgdmFsaWQgY2FsbGJhY2sgZnVuY3Rpb24uXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldmVudExvZ2dpbmcgPSBCb29sZWFuKHByZXZlbnRMb2dnaW5nKTsgLy9mb3JjZSBib29sXG5cbiAgICAgICAgICAgIGNvbnN0IENBVEVHT1JZX0lORk8gPSBcImluZm9cIjtcbiAgICAgICAgICAgIGNvbnN0IENBVEVHT1JZX1dBUk4gPSBcIndhcm5cIjtcbiAgICAgICAgICAgIGNvbnN0IENBVEVHT1JZX0VSUk9SID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfREVCVUcgPSBcImRlYnVnXCI7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gY29uc29sZS5pbmZvID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX2xvZyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX2xvZy5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfSU5GTywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4gPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfd2Fybil7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX3dhcm4uY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX1dBUk4sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9lcnJvcil7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX2Vycm9yLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9FUlJPUiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX2RlYnVnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZGVidWcuY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX0RFQlVHLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vZXhwb3J0XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IENvbnNvbGVTdWJzY3JpYmVyO1xuICAgIH1cbiAgICBlbHNlIGlmICh3aW5kb3cgJiYgdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpe1xuICAgICAgICB3aW5kb3cuQ29uc29sZVN1YnNjcmliZXIgPSBDb25zb2xlU3Vic2NyaWJlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZXhwb3J0IG1vZHVsZS5cIik7XG4gICAgfVxufSkoKTtcbiIsIi8qKlxuICogTWVkaWFTdHJlYW0gSW1hZ2VDYXB0dXJlIHBvbHlmaWxsXG4gKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5leHBvcnQgbGV0IEltYWdlQ2FwdHVyZSA9IHdpbmRvdy5JbWFnZUNhcHR1cmU7XG5cbmlmICh0eXBlb2YgSW1hZ2VDYXB0dXJlID09PSAndW5kZWZpbmVkJykge1xuICBJbWFnZUNhcHR1cmUgPSBjbGFzcyB7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNjb25zdHJ1Y3RvcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWVkaWFTdHJlYW1UcmFja30gdmlkZW9TdHJlYW1UcmFjayAtIEEgTWVkaWFTdHJlYW1UcmFjayBvZiB0aGUgJ3ZpZGVvJyBraW5kXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodmlkZW9TdHJlYW1UcmFjaykge1xuICAgICAgaWYgKHZpZGVvU3RyZWFtVHJhY2sua2luZCAhPT0gJ3ZpZGVvJylcbiAgICAgICAgdGhyb3cgbmV3IERPTUV4Y2VwdGlvbignTm90U3VwcG9ydGVkRXJyb3InKTtcblxuICAgICAgdGhpcy5fdmlkZW9TdHJlYW1UcmFjayA9IHZpZGVvU3RyZWFtVHJhY2s7XG4gICAgICBpZiAoISgncmVhZHlTdGF0ZScgaW4gdGhpcy5fdmlkZW9TdHJlYW1UcmFjaykpIHtcbiAgICAgICAgLy8gUG9seWZpbGwgZm9yIEZpcmVmb3hcbiAgICAgICAgdGhpcy5fdmlkZW9TdHJlYW1UcmFjay5yZWFkeVN0YXRlID0gJ2xpdmUnO1xuICAgICAgfVxuXG4gICAgICAvLyBNZWRpYVN0cmVhbSBjb25zdHJ1Y3RvciBub3QgYXZhaWxhYmxlIHVudGlsIENocm9tZSA1NSAtIGh0dHBzOi8vd3d3LmNocm9tZXN0YXR1cy5jb20vZmVhdHVyZS81OTEyMTcyNTQ2NzUyNTEyXG4gICAgICB0aGlzLl9wcmV2aWV3U3RyZWFtID0gbmV3IE1lZGlhU3RyZWFtKFt2aWRlb1N0cmVhbVRyYWNrXSk7XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudFBsYXlpbmcgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGxheWluZycsIHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgICBpZiAoSFRNTE1lZGlhRWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSB0aGlzLl9wcmV2aWV3U3RyZWFtOyAgLy8gU2FmYXJpIDExIGRvZXNuJ3QgYWxsb3cgdXNlIG9mIGNyZWF0ZU9iamVjdFVSTCBmb3IgTWVkaWFTdHJlYW1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50LnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5fcHJldmlld1N0cmVhbSk7XG4gICAgICB9XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudC5tdXRlZCA9IHRydWU7XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJycpOyAvLyBSZXF1aXJlZCBieSBTYWZhcmkgb24gaU9TIDExLiBTZWUgaHR0cHM6Ly93ZWJraXQub3JnL2Jsb2cvNjc4NFxuICAgICAgdGhpcy52aWRlb0VsZW1lbnQucGxheSgpO1xuXG4gICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIC8vIFRPRE8gRmlyZWZveCBoYXMgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL09mZnNjcmVlbkNhbnZhc1xuICAgICAgdGhpcy5jYW52YXMyZENvbnRleHQgPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBodHRwczovL3czYy5naXRodWIuaW8vbWVkaWFjYXB0dXJlLWltYWdlL2luZGV4Lmh0bWwjZG9tLWltYWdlY2FwdHVyZS12aWRlb3N0cmVhbXRyYWNrXG4gICAgICogQHJldHVybiB7TWVkaWFTdHJlYW1UcmFja30gVGhlIE1lZGlhU3RyZWFtVHJhY2sgcGFzc2VkIGludG8gdGhlIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZ2V0IHZpZGVvU3RyZWFtVHJhY2soKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlkZW9TdHJlYW1UcmFjaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRzIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNkb20taW1hZ2VjYXB0dXJlLWdldHBob3RvY2FwYWJpbGl0aWVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxQaG90b0NhcGFiaWxpdGllcz59IEZ1bGZpbGxlZCBwcm9taXNlIHdpdGhcbiAgICAgKiBbUGhvdG9DYXBhYmlsaXRpZXNdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNpZGwtZGVmLXBob3RvY2FwYWJpbGl0aWVzKVxuICAgICAqIG9iamVjdCBvbiBzdWNjZXNzLCByZWplY3RlZCBwcm9taXNlIG9uIGZhaWx1cmVcbiAgICAgKi9cbiAgICBnZXRQaG90b0NhcGFiaWxpdGllcygpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvckdQQyhyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gVE9ETyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3czYy9tZWRpYWNhcHR1cmUtaW1hZ2UvaXNzdWVzLzk3XG4gICAgICAgIGNvbnN0IE1lZGlhU2V0dGluZ3NSYW5nZSA9IHtcbiAgICAgICAgICBjdXJyZW50OiAwLCBtaW46IDAsIG1heDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgZXhwb3N1cmVDb21wZW5zYXRpb246IE1lZGlhU2V0dGluZ3NSYW5nZSxcbiAgICAgICAgICBleHBvc3VyZU1vZGU6ICdub25lJyxcbiAgICAgICAgICBmaWxsTGlnaHRNb2RlOiAnbm9uZScsXG4gICAgICAgICAgZm9jdXNNb2RlOiAnbm9uZScsXG4gICAgICAgICAgaW1hZ2VIZWlnaHQ6IE1lZGlhU2V0dGluZ3NSYW5nZSxcbiAgICAgICAgICBpbWFnZVdpZHRoOiBNZWRpYVNldHRpbmdzUmFuZ2UsXG4gICAgICAgICAgaXNvOiBNZWRpYVNldHRpbmdzUmFuZ2UsXG4gICAgICAgICAgcmVkRXllUmVkdWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICB3aGl0ZUJhbGFuY2VNb2RlOiAnbm9uZScsXG4gICAgICAgICAgem9vbTogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ09wZXJhdGlvbkVycm9yJykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jZG9tLWltYWdlY2FwdHVyZS1zZXRvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBob3RvU2V0dGluZ3MgLSBQaG90byBzZXR0aW5ncyBkaWN0aW9uYXJ5LCBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jaWRsLWRlZi1waG90b3NldHRpbmdzXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn0gRnVsZmlsbGVkIHByb21pc2Ugb24gc3VjY2VzcywgcmVqZWN0ZWQgcHJvbWlzZSBvbiBmYWlsdXJlXG4gICAgICovXG4gICAgc2V0T3B0aW9ucyhwaG90b1NldHRpbmdzID0ge30pIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvclNPKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUT0RPXG4gICAgICogSW1wbGVtZW50cyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jZG9tLWltYWdlY2FwdHVyZS10YWtlcGhvdG9cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEJsb2I+fSBGdWxmaWxsZWQgcHJvbWlzZSB3aXRoIFtCbG9iXShodHRwczovL3d3dy53My5vcmcvVFIvRmlsZUFQSS8jYmxvYilcbiAgICAgKiBhcmd1bWVudCBvbiBzdWNjZXNzOyByZWplY3RlZCBwcm9taXNlIG9uIGZhaWx1cmVcbiAgICAgKi9cbiAgICB0YWtlUGhvdG8oKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvclRQKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBgSWYgdGhlIHJlYWR5U3RhdGUgb2YgdGhlIE1lZGlhU3RyZWFtVHJhY2sgcHJvdmlkZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGlzIG5vdCBsaXZlLFxuICAgICAgICAvLyByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXcgRE9NRXhjZXB0aW9uIHdob3NlIG5hbWUgaXMgXCJJbnZhbGlkU3RhdGVFcnJvclwiLmBcbiAgICAgICAgaWYgKHNlbGYuX3ZpZGVvU3RyZWFtVHJhY2sucmVhZHlTdGF0ZSAhPT0gJ2xpdmUnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdJbnZhbGlkU3RhdGVFcnJvcicpKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnZpZGVvRWxlbWVudFBsYXlpbmcudGhlbigoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzRWxlbWVudC53aWR0aCA9IHNlbGYudmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gc2VsZi52aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgICAgICAgICBzZWxmLmNhbnZhczJkQ29udGV4dC5kcmF3SW1hZ2Uoc2VsZi52aWRlb0VsZW1lbnQsIDAsIDApO1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LnRvQmxvYihyZXNvbHZlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ1Vua25vd25FcnJvcicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jZG9tLWltYWdlY2FwdHVyZS1ncmFiZnJhbWVcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPEltYWdlQml0bWFwPn0gRnVsZmlsbGVkIHByb21pc2Ugd2l0aFxuICAgICAqIFtJbWFnZUJpdG1hcF0oaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1MS93ZWJhcHBhcGlzLmh0bWwjd2ViYXBwYXBpcy1pbWFnZXMpXG4gICAgICogYXJndW1lbnQgb24gc3VjY2VzczsgcmVqZWN0ZWQgcHJvbWlzZSBvbiBmYWlsdXJlXG4gICAgICovXG4gICAgZ3JhYkZyYW1lKCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3JHRihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gYElmIHRoZSByZWFkeVN0YXRlIG9mIHRoZSBNZWRpYVN0cmVhbVRyYWNrIHByb3ZpZGVkIGluIHRoZSBjb25zdHJ1Y3RvciBpcyBub3QgbGl2ZSxcbiAgICAgICAgLy8gcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3IERPTUV4Y2VwdGlvbiB3aG9zZSBuYW1lIGlzIFwiSW52YWxpZFN0YXRlRXJyb3JcIi5gXG4gICAgICAgIGlmIChzZWxmLl92aWRlb1N0cmVhbVRyYWNrLnJlYWR5U3RhdGUgIT09ICdsaXZlJykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignSW52YWxpZFN0YXRlRXJyb3InKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi52aWRlb0VsZW1lbnRQbGF5aW5nLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQud2lkdGggPSBzZWxmLnZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LmhlaWdodCA9IHNlbGYudmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi5jYW52YXMyZENvbnRleHQuZHJhd0ltYWdlKHNlbGYudmlkZW9FbGVtZW50LCAwLCAwKTtcbiAgICAgICAgICAgIC8vIFRPRE8gcG9seWZpbGwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ltYWdlQml0bWFwRmFjdG9yaWVzL2NyZWF0ZUltYWdlQml0bWFwIGZvciBJRVxuICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3cuY3JlYXRlSW1hZ2VCaXRtYXAoc2VsZi5jYW52YXNFbGVtZW50KSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdVbmtub3duRXJyb3InKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxud2luZG93LkltYWdlQ2FwdHVyZSA9IEltYWdlQ2FwdHVyZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbmFibGVNb2JpbGVDb25zb2xlID0gdm9pZCAwO1xuY29uc3QgY29uc29sZV9zdWJzY3JpYmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvbnNvbGUtc3Vic2NyaWJlclwiKSk7XG5jb25zdCBlbmFibGVNb2JpbGVDb25zb2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xuICAgIGNvbnNvbGVfc3Vic2NyaWJlcl8xLmRlZmF1bHQuYmluZCgoY2F0ZWdvcnksIGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlci5wdXNoKHsgY2F0ZWdvcnksIG1lc3NhZ2U6IGFyZ3NbMF0gfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlJykuaW5uZXJIVE1MID0gYnVmZmVyLm1hcCgobSkgPT4gYDxwPiR7bS5tZXNzYWdlfTwvcD5gKS5qb2luKCcnKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmVuYWJsZU1vYmlsZUNvbnNvbGUgPSBlbmFibGVNb2JpbGVDb25zb2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc29sZV8xID0gcmVxdWlyZShcIi4vY29uc29sZVwiKTtcbmNvbnN0IEhlYWRDb250cm9sU2VydmljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvSGVhZENvbnRyb2xTZXJ2aWNlXCIpO1xuY29uc3QgaW1hZ2VDYXB0dXJlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9JbWFnZUNhcHR1cmVTZXJ2aWNlL2ltYWdlQ2FwdHVyZVwiKTtcbmNvbnN0IHZvaWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9Wb2ljZVNlcnZpY2Uvdm9pY2VcIik7XG5yZXF1aXJlKFwiLi9kZWNsYXJlXCIpO1xucmVxdWlyZShcIi4vc3R5bGUvaW5kZXguc2Nzc1wiKTtcbmNvbnN0IHN0YXJ0QnV0dG9uID0gJCgnI3N0YXJ0QnV0dG9uJyk7XG5jb25zdCBwcmVsb2FkZXIgPSAkKCcjcHJlbG9hZGVyJyk7XG5jb25zdCBzdGFydFNjcmVlbiA9ICQoJyNzdGFydCcpO1xuY29uc3QgZ2FtZVNjcmVlbiA9ICQoJyNnYW1lJyk7XG5jb25zdCBuYW1lSW5wdXQgPSAkKCcjbmFtZUlucHV0Jyk7XG5jb25zdCBpbml0QWxsQVBJID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtpbWFnZUNhcHR1cmVfMS5pbml0SW1hZ2VDYXB0dXJlKCksIHZvaWNlXzEuaW5pdFZvaWNlU2VydmljZSgpLCBIZWFkQ29udHJvbFNlcnZpY2VfMS5pbml0SGVhZENvbnRyb2woKV0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcHJlbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgc3RhcnRTY3JlZW4uc2hvdygpO1xuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9KTtcbn0pO1xuY29uc3QgaW5pdEFwcCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHByZWxvYWRlci5zaG93KCk7XG4gICAgZ2FtZVNjcmVlbi5oaWRlKCk7XG4gICAgc3RhcnRTY3JlZW4uaGlkZSgpO1xuICAgIHlpZWxkIGluaXRBbGxBUEkoKTtcbiAgICBuYW1lSW5wdXQub24oJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICBpZiAobmFtZUlucHV0LnZhbCgpKSB7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzdGFydEJ1dHRvbi5jbGljaygoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgc3RhcnRHYW1lKG5hbWVJbnB1dC52YWwoKSk7XG4gICAgfSkpO1xufSk7XG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyTmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgaW1hZ2VDYXB0dXJlXzEudGFrZVBob3RvKCk7XG4gICAgICAgIGdhbWVTY3JlZW4uc2hvdygpO1xuICAgICAgICBzdGFydFNjcmVlbi5oaWRlKCk7XG4gICAgICAgIHZvaWNlXzEuc2V0VXBVc2VyKHBsYXllck5hbWUpO1xuICAgICAgICAvLyBzYXlTb21ldGhpbmcoUEhSQVNFUy5IRUxMTyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGFsZXJ0KGUpO1xuICAgIH1cbn0pO1xud2luZG93Lm9ubG9hZCA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnNvbGVfMS5lbmFibGVNb2JpbGVDb25zb2xlKCk7XG4gICAgeWllbGQgaW5pdEFwcCgpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICBtb3VzZU9wZW5pbmdUcmVzaG9sZDogMC42LFxuICAgIG1vdXNlQ2xvc2luZ1RyZXNob2xkOiAwLjUsXG4gICAgaGVhZE1vdmVtZW50U3RhcnRlZFRyZXNob2xkOiAwLjE1LFxuICAgIGhlYWRNb3ZlbWVudFN0b3BwZWRUcmVzaG9sZDogMC4wOCxcbn07XG5jbGFzcyBIZWFkQ29udHJvbFNlcnZpY2UgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzSWQsIHNldHRpbmdzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW92ZW1lbnRMb2NrcyA9IHtcbiAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICAgICAgbW91c2VPcGVuZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNEZXRlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICBpc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdsID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdiA9IG51bGw7XG4gICAgICAgIHRoaXMudmlkZW9UZXh0dXJlID0gbnVsbDtcbiAgICAgICAgdGhpcy52aWRlb1RyYW5zZm9ybU1hdDIgPSBudWxsO1xuICAgICAgICB0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkU2VhcmNoVW5pZm9ybVh5cyA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1WaWRlb1RyYW5zZm9ybU1hdDIgPSBudWxsO1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlT3BlbmluZyA9IChkZXRlY3RTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRldGVjdFN0YXRlLnJ5IDwgLTEgKiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZCB8fCBkZXRlY3RTdGF0ZS5yeSA+IHRoaXMuc2V0dGluZ3MuaGVhZE1vdmVtZW50U3RhcnRlZFRyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgLy8gSGVhZCBzaG91bGQgYmUgaW4gdGhlIGNlbnRlciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtb3V0aE9wZW5pbmcgPSAoZGV0ZWN0U3RhdGUuZXhwcmVzc2lvbnNbMF0gLSAwLjIpICogNS4wO1xuICAgICAgICAgICAgbW91dGhPcGVuaW5nID0gTWF0aC5taW4oTWF0aC5tYXgobW91dGhPcGVuaW5nLCAwKSwgMSk7XG4gICAgICAgICAgICBpZiAobW91dGhPcGVuaW5nID4gdGhpcy5zZXR0aW5ncy5tb3VzZU9wZW5pbmdUcmVzaG9sZCAmJiAhdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb3VzZSBvcGVuZWQnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vdXRoT3BlbmluZyA8IHRoaXMuc2V0dGluZ3MubW91c2VDbG9zaW5nVHJlc2hvbGQgJiYgdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2UgY2xvc2VkJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlID0gKG12KSA9PiB7XG4gICAgICAgICAgICBpZiAobXYucnggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF4aXNNb3ZlbWVudCh7IGF4aXM6ICd2ZXJ0aWNhbCcsIGF4aXNQb3NpdGlvbjogbXYucngsIG1heFZhbHVlOiAnZG93bicsIG1pblZhbHVlOiAndXAnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG12LnJ5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQoeyBheGlzOiAnaG9yaXpvbnRhbCcsIGF4aXNQb3NpdGlvbjogbXYucnksIG1heFZhbHVlOiAnbGVmdCcsIG1pblZhbHVlOiAncmlnaHQnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUF4aXNNb3ZlbWVudCA9ICh7IGF4aXMsIGF4aXNQb3NpdGlvbiwgbWF4VmFsdWUsIG1pblZhbHVlLCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXhpc1Bvc2l0aW9uIDwgLTEgKiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZCAmJiAhdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1pblZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA+IHRoaXMuc2V0dGluZ3MuaGVhZE1vdmVtZW50U3RhcnRlZFRyZXNob2xkICYmICF0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQobWF4VmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXhpc1Bvc2l0aW9uID4gLTEgKiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0b3BwZWRUcmVzaG9sZCAmJiBheGlzUG9zaXRpb24gPCB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0b3BwZWRUcmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzKSwgc2V0dGluZ3MpO1xuICAgICAgICB3aW5kb3cuSkVFRkFDRUZJTFRFUkFQSS5pbml0KHtcbiAgICAgICAgICAgIGNhbnZhc0lkOiBjYW52YXNJZCxcbiAgICAgICAgICAgIE5OQ1BhdGg6ICcuL3ZlbmRvci8nLFxuICAgICAgICAgICAgYW5pbWF0ZURlbGF5OiAyMCxcbiAgICAgICAgICAgIGNhbGxiYWNrUmVhZHk6IChlcnJDb2RlLCBqZWVGYWNlRmlsdGVyT2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChlcnJDb2RlID0gJ1dFQkNBTV9VTkFWQUlMQUJMRScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5vbkNhbWVyYVBlcnNtaXNzaW9uRmFpbGVkICYmIHNldHRpbmdzLm9uQ2FtZXJhUGVyc21pc3Npb25GYWlsZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBTiBFUlJPUiBIQVBQRU5TLiBTT1JSWSBCUk8gOiggLiBFUlIgPScsIGVyckNvZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wgPSBqZWVGYWNlRmlsdGVyT2JqWydHTCddO1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UZXh0dXJlID0gamVlRmFjZUZpbHRlck9ialsndmlkZW9UZXh0dXJlJ107XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1RyYW5zZm9ybU1hdDIgPSBqZWVGYWNlRmlsdGVyT2JqWyd2aWRlb1RyYW5zZm9ybU1hdDInXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0gamVlRmFjZUZpbHRlck9ialsnY2FudmFzRWxlbWVudCddO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEhlYWRTZWFyY2hEcmF3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3Mub25SZWFkeSAmJiBzZXR0aW5ncy5vblJlYWR5KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gY2FsbGVkIGF0IGVhY2ggcmVuZGVyIGl0ZXJhdGlvbiAoZHJhd2luZyBsb29wKTpcbiAgICAgICAgICAgIGNhbGxiYWNrVHJhY2s6IChkZXRlY3RTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdIZWFkU2VhcmNoKGRldGVjdFN0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vdmUoZGV0ZWN0U3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW91c2VPcGVuaW5nKGRldGVjdFN0YXRlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0b2dnbGUoaXNFbmFibGVkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmlzRW5hYmxlZCA9PT0gaXNFbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbXBpbGVTaGFkZXIoc291cmNlLCBnbFR5cGUsIHR5cGVTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZ2xTaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcihnbFR5cGUpO1xuICAgICAgICB0aGlzLmdsLnNoYWRlclNvdXJjZShnbFNoYWRlciwgc291cmNlKTtcbiAgICAgICAgdGhpcy5nbC5jb21waWxlU2hhZGVyKGdsU2hhZGVyKTtcbiAgICAgICAgaWYgKCF0aGlzLmdsLmdldFNoYWRlclBhcmFtZXRlcihnbFNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdFUlJPUiBJTiAnICsgdHlwZVN0cmluZyArICcgU0hBREVSOiAnICsgdGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKGdsU2hhZGVyKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2xTaGFkZXI7XG4gICAgfVxuICAgIGluaXRIZWFkU2VhcmNoRHJhdygpIHtcbiAgICAgICAgLy8gYnVpbGQgdGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbTpcbiAgICAgICAgY29uc3Qgc2hhZGVyVmVydGV4U291cmNlID0gJ1xcblxcXG4gICAgICBhdHRyaWJ1dGUgdmVjMiBhYXRfcG9zaXRpb247XFxuXFxcbiAgICAgIHZhcnlpbmcgdmVjMiB2VVY7XFxuXFxcbiAgICAgIFxcblxcXG4gICAgICB2b2lkIG1haW4odm9pZCkge1xcblxcXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhYXRfcG9zaXRpb24sIDAuLCAxLik7XFxuXFxcbiAgICAgICAgdlVWID0gMC41ICsgMC41ICogYWF0X3Bvc2l0aW9uO1xcblxcXG4gICAgICAgIHZVVi54ID0gMS4tdlVWLng7IC8vIG1pcnJvciBkaXBsYXlcXG5cXFxuICAgICAgfSc7XG4gICAgICAgIGNvbnN0IHNoYWRlckZyYWdtZW50U291cmNlID0gJ1xcblxcXG4gICAgICBwcmVjaXNpb24gbG93cCBmbG9hdDtcXG5cXFxuICAgICAgdmFyeWluZyB2ZWMyIHZVVjtcXG5cXFxuICAgICAgXFxuXFxcbiAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHNhbXBsZXJWaWRlbztcXG5cXFxuICAgICAgdW5pZm9ybSBtYXQyIHZpZGVvVHJhbnNmb3JtTWF0MjtcXG5cXFxuICAgICAgdW5pZm9ybSB2ZWMzIHV4eXM7XFxuXFxcbiAgICAgIFxcblxcXG4gICAgICB2b2lkIG1haW4odm9pZCkge1xcblxcXG4gICAgICAgIHZlYzIgdXZWaWRlb0NlbnRlcmVkID0gMi4wICogdmlkZW9UcmFuc2Zvcm1NYXQyICogKHZVViAtIDAuNSk7XFxuXFxcbiAgICAgICAgdmVjMiB1dlZpZGVvID0gdXZWaWRlb0NlbnRlcmVkICsgMC41O1xcblxcXG4gICAgICAgIHZlYzMgY29sb3JWaWRlbyA9IHRleHR1cmUyRChzYW1wbGVyVmlkZW8sIHV2VmlkZW8pLnJnYjtcXG5cXFxuICAgICAgICB2ZWMyIHBvcyA9IHZVVioyLi12ZWMyKDEuLDEuKTtcXG5cXFxuICAgICAgICB2ZWMyIGlzSW5zaWRlID0gc3RlcCh1eHlzLnh5LXV4eXMueip2ZWMyKDEuLDEuKSwgcG9zKTtcXG5cXFxuICAgICAgICBpc0luc2lkZSAqPSBzdGVwKHBvcywgdXh5cy54eSt1eHlzLnoqdmVjMigxLiwxLikpO1xcblxcXG4gICAgICAgIHZlYzIgYmxlbmRDZW50ZXJGYWN0b3IgPSBhYnMocG9zLXV4eXMueHkpIC8gdXh5cy56O1xcblxcXG4gICAgICAgIGZsb2F0IGFscGhhID0gaXNJbnNpZGUueCAqIGlzSW5zaWRlLnkgKiBwb3cobWF4KGJsZW5kQ2VudGVyRmFjdG9yLngsIGJsZW5kQ2VudGVyRmFjdG9yLnkpLCAzLik7XFxuXFxcbiAgICAgICAgdmVjMyBjb2xvciA9IG1peChjb2xvclZpZGVvLCB2ZWMzKDAuLDAuNiwxLiksIGFscGhhKTtcXG5cXFxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLDEuKTtcXG5cXFxuICAgICAgfSc7XG4gICAgICAgIGNvbnN0IGdsU2hhZGVyVmVydGV4ID0gdGhpcy5jb21waWxlU2hhZGVyKHNoYWRlclZlcnRleFNvdXJjZSwgdGhpcy5nbC5WRVJURVhfU0hBREVSLCAnVkVSVEVYJyk7XG4gICAgICAgIGNvbnN0IGdsU2hhZGVyRnJhZ21lbnQgPSB0aGlzLmNvbXBpbGVTaGFkZXIoc2hhZGVyRnJhZ21lbnRTb3VyY2UsIHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSLCAnRlJBR01FTlQnKTtcbiAgICAgICAgdGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCBnbFNoYWRlclZlcnRleCk7XG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sIGdsU2hhZGVyRnJhZ21lbnQpO1xuICAgICAgICB0aGlzLmdsLmxpbmtQcm9ncmFtKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgICAgICBjb25zdCBzYW1wbGVyVmlkZW8gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCAnc2FtcGxlclZpZGVvJyk7XG4gICAgICAgIHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1YeXMgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCAndXh5cycpO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgJ3ZpZGVvVHJhbnNmb3JtTWF0MicpO1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHNhbXBsZXJWaWRlbywgMCk7XG4gICAgfVxuICAgIGRyYXdIZWFkU2VhcmNoKGRldGVjdFN0YXRlKSB7XG4gICAgICAgIC8vIHVuYmluZCB0aGUgY3VycmVudCBGQk8gYW5kIHNldCB0aGUgdmlld3BvcnQgYXMgdGhlIHdob2xlIGNhbnZhczpcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmN2LndpZHRoLCB0aGlzLmN2LmhlaWdodCk7XG4gICAgICAgIC8vIHVzZSB0aGUgaGVhZCBkcmF3IHNoYWRlciBwcm9ncmFtIGFuZCBzeW5jIHVuaWZvcm1zOlxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudmlkZW9UZXh0dXJlKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtM2YodGhpcy5oZWFkU2VhcmNoVW5pZm9ybVh5cywgZGV0ZWN0U3RhdGUueCwgZGV0ZWN0U3RhdGUueSwgZGV0ZWN0U3RhdGUucyk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDJmdih0aGlzLmhlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyLCBmYWxzZSwgdGhpcy52aWRlb1RyYW5zZm9ybU1hdDIpO1xuICAgICAgICAvLyBkcmF3IHRoZSBzcXVhcmUgbG9va2luZyBmb3IgdGhlIGhlYWRcbiAgICAgICAgLy8gdGhlIFZCTyBmaWxsaW5nIHRoZSB3aG9sZSBzY3JlZW4gaXMgc3RpbGwgYm91bmQgdG8gdGhlIGNvbnRleHRcbiAgICAgICAgLy8gZmlsbCB0aGUgdmlld1BvcnQ6XG4gICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMuZ2wuVFJJQU5HTEVTLCAzLCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBIZWFkQ29udHJvbFNlcnZpY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdEhlYWRDb250cm9sID0gZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuY29uc3QgSGVhZENvbnRyb2xTZXJ2aWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vSGVhZENvbnRyb2xTZXJ2aWNlXCIpKTtcbnZhciBIZWFkQ29udHJvbFNlcnZpY2VfMiA9IHJlcXVpcmUoXCIuL0hlYWRDb250cm9sU2VydmljZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChIZWFkQ29udHJvbFNlcnZpY2VfMikuZGVmYXVsdDsgfSB9KTtcbmNvbnN0IGluaXRIZWFkQ29udHJvbCA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBoZWFkQ29udHJvbFNlcnZpY2UgPSBuZXcgSGVhZENvbnRyb2xTZXJ2aWNlXzEuZGVmYXVsdCgnaGVhZC1wcmV2aWV3Jywge1xuICAgICAgICAgICAgb25SZWFkeTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWFkIGNvbnRyb2wgaXMgcmVhZHknKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DYW1lcmFQZXJzbWlzc2lvbkZhaWxlZDogKCkgPT4gYWxlcnQoJ1RoaXMgZ2FtZSBpcyBoZWFkLWNvbnRyb2xsZWQuIFlvdSBuZWVkIHRvIGVuYWJsZSBjYW1lcmEgdG8gcGxheSB0aGUgZ2FtZS4nKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS50b2dnbGUodHJ1ZSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZSBvcGVuZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnbW91c2Ugb3BlbmVkJykpO1xuICAgICAgICBoZWFkQ29udHJvbFNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2UgY2xvc2VkJywgKCkgPT4gY29uc29sZS5sb2coJ21vdXNlIGNsb3NlZCcpKTtcbiAgICAgICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2xlZnQnLCAoKSA9PiBjb25zb2xlLmxvZygnbGVmdCcpKTtcbiAgICAgICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3JpZ2h0JywgKCkgPT4gY29uc29sZS5sb2coJ3JpZ2h0JykpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaW5pdEhlYWRDb250cm9sID0gaW5pdEhlYWRDb250cm9sO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdEltYWdlQ2FwdHVyZSA9IGV4cG9ydHMudGFrZVBob3RvID0gdm9pZCAwO1xucmVxdWlyZShcImltYWdlLWNhcHR1cmVcIik7XG5sZXQgaW1hZ2VDYXB0dXJlO1xubGV0IGlzSW5pdCA9IGZhbHNlO1xuY29uc3QgdGFrZVBob3RvID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKCFpbWFnZUNhcHR1cmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB5aWVsZCBpbWFnZUNhcHR1cmVcbiAgICAgICAgLnRha2VQaG90bygpXG4gICAgICAgIC50aGVuKChibG9iKSA9PiBjcmVhdGVJbWFnZUJpdG1hcChibG9iKSlcbiAgICAgICAgLnRoZW4oKGltYWdlQml0bWFwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWtlUGhvdG9DYW52YXMnKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkcmF3Q2FudmFzKGNhbnZhcywgaW1hZ2VCaXRtYXApO1xuICAgICAgICAvL2NhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IHtcbiAgICAgICAgLy8gIHRyeSB7XG4gICAgICAgIC8vICAgIGF3YWl0IGNyZWF0ZUZpbGUoYmxvYik7XG4gICAgICAgIC8vICAgIGF3YWl0IHJlYWRGaWxlKCk7XG4gICAgICAgIC8vICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vICAgIHRocm93IGU7XG4gICAgICAgIC8vICB9XG4gICAgICAgIC8vfSk7XG4gICAgfSk7XG59KTtcbmV4cG9ydHMudGFrZVBob3RvID0gdGFrZVBob3RvO1xuZnVuY3Rpb24gZHJhd0NhbnZhcyhjYW52YXMsIGltZykge1xuICAgIGNhbnZhcy53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aC5zcGxpdCgncHgnKVswXTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodC5zcGxpdCgncHgnKVswXTtcbiAgICBsZXQgcmF0aW8gPSBNYXRoLm1pbihjYW52YXMud2lkdGggLyBpbWcud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyBpbWcuaGVpZ2h0KTtcbiAgICBsZXQgeCA9IChjYW52YXMud2lkdGggLSBpbWcud2lkdGggKiByYXRpbykgLyAyO1xuICAgIGxldCB5ID0gKGNhbnZhcy5oZWlnaHQgLSBpbWcuaGVpZ2h0ICogcmF0aW8pIC8gMjtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHgsIHksIGltZy53aWR0aCAqIHJhdGlvLCBpbWcuaGVpZ2h0ICogcmF0aW8pO1xufVxuY29uc3QgaW5pdEltYWdlQ2FwdHVyZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmIChpc0luaXQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBpc0luaXQgPSB0cnVlO1xuICAgIHJldHVybiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgIC5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxuICAgICAgICAudGhlbigobWVkaWFTdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICBjb25zb2xlLmxvZyhJbWFnZUNhcHR1cmUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW1hZ2VDYXB0dXJlID0gbmV3IEltYWdlQ2FwdHVyZSh0cmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICBhbGVydCgnSW1hZ2UgY2FwdHVyZSBpcyBub3Qgc3VwcG9ydGVkIG9uIHlvdXIgZGV2aWNlIDooJyk7XG4gICAgfSk7XG59KTtcbmV4cG9ydHMuaW5pdEltYWdlQ2FwdHVyZSA9IGluaXRJbWFnZUNhcHR1cmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zYXlTb21ldGhpbmcgPSBleHBvcnRzLnNldFVwVXNlciA9IGV4cG9ydHMuUEhSQVNFUyA9IGV4cG9ydHMuaW5pdFZvaWNlU2VydmljZSA9IHZvaWQgMDtcbmxldCBWT0lDRTtcbmNvbnN0IGluaXRWb2ljZVNlcnZpY2UgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBWT0lDRSA9IHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuZ2V0Vm9pY2VzKCkuZmluZCgoeyBsYW5nIH0pID0+IGxhbmcgPT09ICdlbi1HQicpO1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy5pbml0Vm9pY2VTZXJ2aWNlID0gaW5pdFZvaWNlU2VydmljZTtcbmV4cG9ydHMuUEhSQVNFUyA9IHtcbiAgICBIRUxMTzogJ2BIaSwgJXVzZXJuYW1lJS4gSGF2ZSBhIGdvb2QgZ2FtZScsXG4gICAgUklHSFQ6ICdHb29kIHJpZ2h0IHR1cm4sICV1c2VybmFtZSUnLFxufTtcbmxldCB1c2VyTmFtZSA9ICcnO1xuY29uc3Qgc2V0VXBVc2VyID0gKG5hbWUpID0+IHtcbiAgICB1c2VyTmFtZSA9IG5hbWU7XG59O1xuZXhwb3J0cy5zZXRVcFVzZXIgPSBzZXRVcFVzZXI7XG5jb25zdCBzYXlTb21ldGhpbmcgPSAodGV4dCkgPT4ge1xuICAgIGlmICghVk9JQ0UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHQucmVwbGFjZSgnJXVzZXJuYW1lJScsIHVzZXJOYW1lKSk7XG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gVk9JQ0U7XG4gICAgdXR0ZXJhbmNlLnZvbHVtZSA9IDE7XG4gICAgdXR0ZXJhbmNlLnBpdGNoID0gMTtcbiAgICB1dHRlcmFuY2UucmF0ZSA9IDE7XG4gICAgc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xuICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayh1dHRlcmFuY2UpO1xufTtcbmV4cG9ydHMuc2F5U29tZXRoaW5nID0gc2F5U29tZXRoaW5nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==