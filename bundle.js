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
            onReady: () => resolve(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvY29uc29sZS1zdWJzY3JpYmVyL2luZGV4LmpzIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9pbWFnZS1jYXB0dXJlL3NyYy9pbWFnZWNhcHR1cmUuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3N0eWxlL2luZGV4LnNjc3M/NTU2YiIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvY29uc29sZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvZGVjbGFyZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9IZWFkQ29udHJvbFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvc2VydmljZXMvSW1hZ2VDYXB0dXJlU2VydmljZS9pbWFnZUNhcHR1cmUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL1ZvaWNlU2VydmljZS92b2ljZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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LG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsaUJBQWlCLEdBQUcsZUFBZSxHQUFHLHdCQUF3QjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Qsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7VUMzQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3Vic2NyaWJlIHRvIHRoZSBjb25zb2xlIG91dHB1dCBcbiAqXG4gKiBAYXV0aG9yIFNhbXNvbiBSYWR1XG4gKi8gXG4oZnVuY3Rpb24oKXtcbiAgICB2YXIgX2xvZyA9IGNvbnNvbGUubG9nO1xuICAgIHZhciBfd2FybiA9IGNvbnNvbGUud2FybjtcbiAgICB2YXIgX2Vycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICB2YXIgX2RlYnVnID0gY29uc29sZS5kZWJ1ZztcblxuICAgIHZhciBDb25zb2xlU3Vic2NyaWJlciA9IHtcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBfbG9nO1xuICAgICAgICAgICAgY29uc29sZS53YXJuID0gX3dhcm47XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yID0gX2Vycm9yO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyA9IF9kZWJ1ZztcbiAgICAgICAgfSwgXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uKGNiLCBwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIGNhbGxiYWNrIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZlbnRMb2dnaW5nID0gQm9vbGVhbihwcmV2ZW50TG9nZ2luZyk7IC8vZm9yY2UgYm9vbFxuXG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9JTkZPID0gXCJpbmZvXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9XQVJOID0gXCJ3YXJuXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9FUlJPUiA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgIGNvbnN0IENBVEVHT1JZX0RFQlVHID0gXCJkZWJ1Z1wiO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IGNvbnNvbGUuaW5mbyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9sb2cpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb2cuY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX0lORk8sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX3dhcm4pe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93YXJuLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9XQVJOLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lcnJvci5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfRVJST1IsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9kZWJ1Zyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX2RlYnVnLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9ERUJVRywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2V4cG9ydFxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBDb25zb2xlU3Vic2NyaWJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93ICYmIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKXtcbiAgICAgICAgd2luZG93LkNvbnNvbGVTdWJzY3JpYmVyID0gQ29uc29sZVN1YnNjcmliZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGV4cG9ydCBtb2R1bGUuXCIpO1xuICAgIH1cbn0pKCk7XG4iLCIvKipcbiAqIE1lZGlhU3RyZWFtIEltYWdlQ2FwdHVyZSBwb2x5ZmlsbFxuICpcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuZXhwb3J0IGxldCBJbWFnZUNhcHR1cmUgPSB3aW5kb3cuSW1hZ2VDYXB0dXJlO1xuXG5pZiAodHlwZW9mIEltYWdlQ2FwdHVyZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgSW1hZ2VDYXB0dXJlID0gY2xhc3Mge1xuXG4gICAgLyoqXG4gICAgICogVE9ETyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jY29uc3RydWN0b3JzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01lZGlhU3RyZWFtVHJhY2t9IHZpZGVvU3RyZWFtVHJhY2sgLSBBIE1lZGlhU3RyZWFtVHJhY2sgb2YgdGhlICd2aWRlbycga2luZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZpZGVvU3RyZWFtVHJhY2spIHtcbiAgICAgIGlmICh2aWRlb1N0cmVhbVRyYWNrLmtpbmQgIT09ICd2aWRlbycpXG4gICAgICAgIHRocm93IG5ldyBET01FeGNlcHRpb24oJ05vdFN1cHBvcnRlZEVycm9yJyk7XG5cbiAgICAgIHRoaXMuX3ZpZGVvU3RyZWFtVHJhY2sgPSB2aWRlb1N0cmVhbVRyYWNrO1xuICAgICAgaWYgKCEoJ3JlYWR5U3RhdGUnIGluIHRoaXMuX3ZpZGVvU3RyZWFtVHJhY2spKSB7XG4gICAgICAgIC8vIFBvbHlmaWxsIGZvciBGaXJlZm94XG4gICAgICAgIHRoaXMuX3ZpZGVvU3RyZWFtVHJhY2sucmVhZHlTdGF0ZSA9ICdsaXZlJztcbiAgICAgIH1cblxuICAgICAgLy8gTWVkaWFTdHJlYW0gY29uc3RydWN0b3Igbm90IGF2YWlsYWJsZSB1bnRpbCBDaHJvbWUgNTUgLSBodHRwczovL3d3dy5jaHJvbWVzdGF0dXMuY29tL2ZlYXR1cmUvNTkxMjE3MjU0Njc1MjUxMlxuICAgICAgdGhpcy5fcHJldmlld1N0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbShbdmlkZW9TdHJlYW1UcmFja10pO1xuICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgdGhpcy52aWRlb0VsZW1lbnRQbGF5aW5nID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsYXlpbmcnLCByZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKEhUTUxNZWRpYUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gdGhpcy5fcHJldmlld1N0cmVhbTsgIC8vIFNhZmFyaSAxMSBkb2Vzbid0IGFsbG93IHVzZSBvZiBjcmVhdGVPYmplY3RVUkwgZm9yIE1lZGlhU3RyZWFtXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHRoaXMuX3ByZXZpZXdTdHJlYW0pO1xuICAgICAgfVxuICAgICAgdGhpcy52aWRlb0VsZW1lbnQubXV0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy52aWRlb0VsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICcnKTsgLy8gUmVxdWlyZWQgYnkgU2FmYXJpIG9uIGlPUyAxMS4gU2VlIGh0dHBzOi8vd2Via2l0Lm9yZy9ibG9nLzY3ODRcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50LnBsYXkoKTtcblxuICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAvLyBUT0RPIEZpcmVmb3ggaGFzIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9PZmZzY3JlZW5DYW52YXNcbiAgICAgIHRoaXMuY2FudmFzMmRDb250ZXh0ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL21lZGlhY2FwdHVyZS1pbWFnZS9pbmRleC5odG1sI2RvbS1pbWFnZWNhcHR1cmUtdmlkZW9zdHJlYW10cmFja1xuICAgICAqIEByZXR1cm4ge01lZGlhU3RyZWFtVHJhY2t9IFRoZSBNZWRpYVN0cmVhbVRyYWNrIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGdldCB2aWRlb1N0cmVhbVRyYWNrKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvU3RyZWFtVHJhY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW1wbGVtZW50cyBodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jZG9tLWltYWdlY2FwdHVyZS1nZXRwaG90b2NhcGFiaWxpdGllc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UGhvdG9DYXBhYmlsaXRpZXM+fSBGdWxmaWxsZWQgcHJvbWlzZSB3aXRoXG4gICAgICogW1Bob3RvQ2FwYWJpbGl0aWVzXShodHRwczovL3d3dy53My5vcmcvVFIvaW1hZ2UtY2FwdHVyZS8jaWRsLWRlZi1waG90b2NhcGFiaWxpdGllcylcbiAgICAgKiBvYmplY3Qgb24gc3VjY2VzcywgcmVqZWN0ZWQgcHJvbWlzZSBvbiBmYWlsdXJlXG4gICAgICovXG4gICAgZ2V0UGhvdG9DYXBhYmlsaXRpZXMoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3JHUEMocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIFRPRE8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvbWVkaWFjYXB0dXJlLWltYWdlL2lzc3Vlcy85N1xuICAgICAgICBjb25zdCBNZWRpYVNldHRpbmdzUmFuZ2UgPSB7XG4gICAgICAgICAgY3VycmVudDogMCwgbWluOiAwLCBtYXg6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgIGV4cG9zdXJlQ29tcGVuc2F0aW9uOiBNZWRpYVNldHRpbmdzUmFuZ2UsXG4gICAgICAgICAgZXhwb3N1cmVNb2RlOiAnbm9uZScsXG4gICAgICAgICAgZmlsbExpZ2h0TW9kZTogJ25vbmUnLFxuICAgICAgICAgIGZvY3VzTW9kZTogJ25vbmUnLFxuICAgICAgICAgIGltYWdlSGVpZ2h0OiBNZWRpYVNldHRpbmdzUmFuZ2UsXG4gICAgICAgICAgaW1hZ2VXaWR0aDogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIGlzbzogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIHJlZEV5ZVJlZHVjdGlvbjogZmFsc2UsXG4gICAgICAgICAgd2hpdGVCYWxhbmNlTW9kZTogJ25vbmUnLFxuICAgICAgICAgIHpvb206IE1lZGlhU2V0dGluZ3NSYW5nZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdPcGVyYXRpb25FcnJvcicpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2RvbS1pbWFnZWNhcHR1cmUtc2V0b3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwaG90b1NldHRpbmdzIC0gUGhvdG8gc2V0dGluZ3MgZGljdGlvbmFyeSwgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2lkbC1kZWYtcGhvdG9zZXR0aW5nc1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59IEZ1bGZpbGxlZCBwcm9taXNlIG9uIHN1Y2Nlc3MsIHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIHNldE9wdGlvbnMocGhvdG9TZXR0aW5ncyA9IHt9KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3JTTyhyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVE9ET1xuICAgICAqIEltcGxlbWVudHMgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2RvbS1pbWFnZWNhcHR1cmUtdGFrZXBob3RvXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxCbG9iPn0gRnVsZmlsbGVkIHByb21pc2Ugd2l0aCBbQmxvYl0oaHR0cHM6Ly93d3cudzMub3JnL1RSL0ZpbGVBUEkvI2Jsb2IpXG4gICAgICogYXJndW1lbnQgb24gc3VjY2VzczsgcmVqZWN0ZWQgcHJvbWlzZSBvbiBmYWlsdXJlXG4gICAgICovXG4gICAgdGFrZVBob3RvKCkge1xuICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZXhlY3V0b3JUUChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gYElmIHRoZSByZWFkeVN0YXRlIG9mIHRoZSBNZWRpYVN0cmVhbVRyYWNrIHByb3ZpZGVkIGluIHRoZSBjb25zdHJ1Y3RvciBpcyBub3QgbGl2ZSxcbiAgICAgICAgLy8gcmV0dXJuIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIGEgbmV3IERPTUV4Y2VwdGlvbiB3aG9zZSBuYW1lIGlzIFwiSW52YWxpZFN0YXRlRXJyb3JcIi5gXG4gICAgICAgIGlmIChzZWxmLl92aWRlb1N0cmVhbVRyYWNrLnJlYWR5U3RhdGUgIT09ICdsaXZlJykge1xuICAgICAgICAgIHJldHVybiByZWplY3QobmV3IERPTUV4Y2VwdGlvbignSW52YWxpZFN0YXRlRXJyb3InKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi52aWRlb0VsZW1lbnRQbGF5aW5nLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQud2lkdGggPSBzZWxmLnZpZGVvRWxlbWVudC52aWRlb1dpZHRoO1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LmhlaWdodCA9IHNlbGYudmlkZW9FbGVtZW50LnZpZGVvSGVpZ2h0O1xuICAgICAgICAgICAgc2VsZi5jYW52YXMyZENvbnRleHQuZHJhd0ltYWdlKHNlbGYudmlkZW9FbGVtZW50LCAwLCAwKTtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzRWxlbWVudC50b0Jsb2IocmVzb2x2ZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdVbmtub3duRXJyb3InKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2RvbS1pbWFnZWNhcHR1cmUtZ3JhYmZyYW1lXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxJbWFnZUJpdG1hcD59IEZ1bGZpbGxlZCBwcm9taXNlIHdpdGhcbiAgICAgKiBbSW1hZ2VCaXRtYXBdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNTEvd2ViYXBwYXBpcy5odG1sI3dlYmFwcGFwaXMtaW1hZ2VzKVxuICAgICAqIGFyZ3VtZW50IG9uIHN1Y2Nlc3M7IHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIGdyYWJGcmFtZSgpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yR0YocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIGBJZiB0aGUgcmVhZHlTdGF0ZSBvZiB0aGUgTWVkaWFTdHJlYW1UcmFjayBwcm92aWRlZCBpbiB0aGUgY29uc3RydWN0b3IgaXMgbm90IGxpdmUsXG4gICAgICAgIC8vIHJldHVybiBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBhIG5ldyBET01FeGNlcHRpb24gd2hvc2UgbmFtZSBpcyBcIkludmFsaWRTdGF0ZUVycm9yXCIuYFxuICAgICAgICBpZiAoc2VsZi5fdmlkZW9TdHJlYW1UcmFjay5yZWFkeVN0YXRlICE9PSAnbGl2ZScpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0ludmFsaWRTdGF0ZUVycm9yJykpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYudmlkZW9FbGVtZW50UGxheWluZy50aGVuKCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LndpZHRoID0gc2VsZi52aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzRWxlbWVudC5oZWlnaHQgPSBzZWxmLnZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzMmRDb250ZXh0LmRyYXdJbWFnZShzZWxmLnZpZGVvRWxlbWVudCwgMCwgMCk7XG4gICAgICAgICAgICAvLyBUT0RPIHBvbHlmaWxsIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbWFnZUJpdG1hcEZhY3Rvcmllcy9jcmVhdGVJbWFnZUJpdG1hcCBmb3IgSUVcbiAgICAgICAgICAgIHJlc29sdmUod2luZG93LmNyZWF0ZUltYWdlQml0bWFwKHNlbGYuY2FudmFzRWxlbWVudCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignVW5rbm93bkVycm9yJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5cbndpbmRvdy5JbWFnZUNhcHR1cmUgPSBJbWFnZUNhcHR1cmU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW5hYmxlTW9iaWxlQ29uc29sZSA9IHZvaWQgMDtcbmNvbnN0IGNvbnNvbGVfc3Vic2NyaWJlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjb25zb2xlLXN1YnNjcmliZXJcIikpO1xuY29uc3QgZW5hYmxlTW9iaWxlQ29uc29sZSA9ICgpID0+IHtcbiAgICBjb25zdCBidWZmZXIgPSBbXTtcbiAgICBjb25zb2xlX3N1YnNjcmliZXJfMS5kZWZhdWx0LmJpbmQoKGNhdGVnb3J5LCBhcmdzKSA9PiB7XG4gICAgICAgIGlmIChidWZmZXIubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXIucHVzaCh7IGNhdGVnb3J5LCBtZXNzYWdlOiBhcmdzWzBdIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc29sZScpLmlubmVySFRNTCA9IGJ1ZmZlci5tYXAoKG0pID0+IGA8cD4ke20ubWVzc2FnZX08L3A+YCkuam9pbignJyk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5lbmFibGVNb2JpbGVDb25zb2xlID0gZW5hYmxlTW9iaWxlQ29uc29sZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnNvbGVfMSA9IHJlcXVpcmUoXCIuL2NvbnNvbGVcIik7XG5jb25zdCBIZWFkQ29udHJvbFNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZVwiKTtcbmNvbnN0IGltYWdlQ2FwdHVyZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvSW1hZ2VDYXB0dXJlU2VydmljZS9pbWFnZUNhcHR1cmVcIik7XG5jb25zdCB2b2ljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvVm9pY2VTZXJ2aWNlL3ZvaWNlXCIpO1xucmVxdWlyZShcIi4vZGVjbGFyZVwiKTtcbnJlcXVpcmUoXCIuL3N0eWxlL2luZGV4LnNjc3NcIik7XG5jb25zdCBzdGFydEJ1dHRvbiA9ICQoJyNzdGFydEJ1dHRvbicpO1xuY29uc3QgcHJlbG9hZGVyID0gJCgnI3ByZWxvYWRlcicpO1xuY29uc3Qgc3RhcnRTY3JlZW4gPSAkKCcjc3RhcnQnKTtcbmNvbnN0IGdhbWVTY3JlZW4gPSAkKCcjZ2FtZScpO1xuY29uc3QgbmFtZUlucHV0ID0gJCgnI25hbWVJbnB1dCcpO1xuY29uc3QgaW5pdEFsbEFQSSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbaW1hZ2VDYXB0dXJlXzEuaW5pdEltYWdlQ2FwdHVyZSgpLCB2b2ljZV8xLmluaXRWb2ljZVNlcnZpY2UoKSwgSGVhZENvbnRyb2xTZXJ2aWNlXzEuaW5pdEhlYWRDb250cm9sKCldKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHByZWxvYWRlci5oaWRlKCk7XG4gICAgICAgIHN0YXJ0U2NyZWVuLnNob3coKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgfSk7XG59KTtcbmNvbnN0IGluaXRBcHAgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBwcmVsb2FkZXIuc2hvdygpO1xuICAgIGdhbWVTY3JlZW4uaGlkZSgpO1xuICAgIHN0YXJ0U2NyZWVuLmhpZGUoKTtcbiAgICB5aWVsZCBpbml0QWxsQVBJKCk7XG4gICAgbmFtZUlucHV0Lm9uKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgaWYgKG5hbWVJbnB1dC52YWwoKSkge1xuICAgICAgICAgICAgc3RhcnRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc3RhcnRCdXR0b24uY2xpY2soKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsKCkpO1xuICAgIH0pKTtcbn0pO1xuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllck5hbWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIGltYWdlQ2FwdHVyZV8xLnRha2VQaG90bygpO1xuICAgICAgICBnYW1lU2NyZWVuLnNob3coKTtcbiAgICAgICAgc3RhcnRTY3JlZW4uaGlkZSgpO1xuICAgICAgICB2b2ljZV8xLnNldFVwVXNlcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgLy8gc2F5U29tZXRoaW5nKFBIUkFTRVMuSEVMTE8pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBhbGVydChlKTtcbiAgICB9XG59KTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zb2xlXzEuZW5hYmxlTW9iaWxlQ29uc29sZSgpO1xuICAgIHlpZWxkIGluaXRBcHAoKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgbW91c2VPcGVuaW5nVHJlc2hvbGQ6IDAuNixcbiAgICBtb3VzZUNsb3NpbmdUcmVzaG9sZDogMC41LFxuICAgIGhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZDogMC4xNSxcbiAgICBoZWFkTW92ZW1lbnRTdG9wcGVkVHJlc2hvbGQ6IDAuMDgsXG59O1xuY2xhc3MgSGVhZENvbnRyb2xTZXJ2aWNlIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0lkLCBzZXR0aW5ncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3MgPSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNlT3BlbmVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3YgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvVGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmlkZW9UcmFuc2Zvcm1NYXQyID0gbnVsbDtcbiAgICAgICAgdGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1YeXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU9wZW5pbmcgPSAoZGV0ZWN0U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChkZXRlY3RTdGF0ZS5yeSA8IC0xICogdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQgfHwgZGV0ZWN0U3RhdGUucnkgPiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIC8vIEhlYWQgc2hvdWxkIGJlIGluIHRoZSBjZW50ZXIgcG9zaXRpb25cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbW91dGhPcGVuaW5nID0gKGRldGVjdFN0YXRlLmV4cHJlc3Npb25zWzBdIC0gMC4yKSAqIDUuMDtcbiAgICAgICAgICAgIG1vdXRoT3BlbmluZyA9IE1hdGgubWluKE1hdGgubWF4KG1vdXRoT3BlbmluZywgMCksIDEpO1xuICAgICAgICAgICAgaWYgKG1vdXRoT3BlbmluZyA+IHRoaXMuc2V0dGluZ3MubW91c2VPcGVuaW5nVHJlc2hvbGQgJiYgIXRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2Ugb3BlbmVkJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3V0aE9wZW5pbmcgPCB0aGlzLnNldHRpbmdzLm1vdXNlQ2xvc2luZ1RyZXNob2xkICYmIHRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ21vdXNlIGNsb3NlZCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZSA9IChtdikgPT4ge1xuICAgICAgICAgICAgaWYgKG12LnJ4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQoeyBheGlzOiAndmVydGljYWwnLCBheGlzUG9zaXRpb246IG12LnJ4LCBtYXhWYWx1ZTogJ2Rvd24nLCBtaW5WYWx1ZTogJ3VwJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtdi5yeSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXhpc01vdmVtZW50KHsgYXhpczogJ2hvcml6b250YWwnLCBheGlzUG9zaXRpb246IG12LnJ5LCBtYXhWYWx1ZTogJ2xlZnQnLCBtaW5WYWx1ZTogJ3JpZ2h0JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQgPSAoeyBheGlzLCBheGlzUG9zaXRpb24sIG1heFZhbHVlLCBtaW5WYWx1ZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA8IC0xICogdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQgJiYgIXRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChtaW5WYWx1ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChheGlzUG9zaXRpb24gPiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZCAmJiAhdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1heFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA+IC0xICogdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdG9wcGVkVHJlc2hvbGQgJiYgYXhpc1Bvc2l0aW9uIDwgdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdG9wcGVkVHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncyksIHNldHRpbmdzKTtcbiAgICAgICAgd2luZG93LkpFRUZBQ0VGSUxURVJBUEkuaW5pdCh7XG4gICAgICAgICAgICBjYW52YXNJZDogY2FudmFzSWQsXG4gICAgICAgICAgICBOTkNQYXRoOiAnLi92ZW5kb3IvJyxcbiAgICAgICAgICAgIGFuaW1hdGVEZWxheTogMjAsXG4gICAgICAgICAgICBjYWxsYmFja1JlYWR5OiAoZXJyQ29kZSwgamVlRmFjZUZpbHRlck9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZXJyQ29kZSA9ICdXRUJDQU1fVU5BVkFJTEFCTEUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25DYW1lcmFQZXJzbWlzc2lvbkZhaWxlZCAmJiBzZXR0aW5ncy5vbkNhbWVyYVBlcnNtaXNzaW9uRmFpbGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQU4gRVJST1IgSEFQUEVOUy4gU09SUlkgQlJPIDooIC4gRVJSID0nLCBlcnJDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdsID0gamVlRmFjZUZpbHRlck9ialsnR0wnXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVGV4dHVyZSA9IGplZUZhY2VGaWx0ZXJPYmpbJ3ZpZGVvVGV4dHVyZSddO1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UcmFuc2Zvcm1NYXQyID0gamVlRmFjZUZpbHRlck9ialsndmlkZW9UcmFuc2Zvcm1NYXQyJ107XG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IGplZUZhY2VGaWx0ZXJPYmpbJ2NhbnZhc0VsZW1lbnQnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRIZWFkU2VhcmNoRHJhdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uUmVhZHkgJiYgc2V0dGluZ3Mub25SZWFkeSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGNhbGxlZCBhdCBlYWNoIHJlbmRlciBpdGVyYXRpb24gKGRyYXdpbmcgbG9vcCk6XG4gICAgICAgICAgICBjYWxsYmFja1RyYWNrOiAoZGV0ZWN0U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SGVhZFNlYXJjaChkZXRlY3RTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKGRldGVjdFN0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vdXNlT3BlbmluZyhkZXRlY3RTdGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9nZ2xlKGlzRW5hYmxlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0VuYWJsZWQgPT09IGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb21waWxlU2hhZGVyKHNvdXJjZSwgZ2xUeXBlLCB0eXBlU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGdsU2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIoZ2xUeXBlKTtcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2UoZ2xTaGFkZXIsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihnbFNoYWRlcik7XG4gICAgICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZ2xTaGFkZXIsIHRoaXMuZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgICAgICBhbGVydCgnRVJST1IgSU4gJyArIHR5cGVTdHJpbmcgKyAnIFNIQURFUjogJyArIHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhnbFNoYWRlcikpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdsU2hhZGVyO1xuICAgIH1cbiAgICBpbml0SGVhZFNlYXJjaERyYXcoKSB7XG4gICAgICAgIC8vIGJ1aWxkIHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW06XG4gICAgICAgIGNvbnN0IHNoYWRlclZlcnRleFNvdXJjZSA9ICdcXG5cXFxuICAgICAgYXR0cmlidXRlIHZlYzIgYWF0X3Bvc2l0aW9uO1xcblxcXG4gICAgICB2YXJ5aW5nIHZlYzIgdlVWO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdm9pZCBtYWluKHZvaWQpIHtcXG5cXFxuICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYWF0X3Bvc2l0aW9uLCAwLiwgMS4pO1xcblxcXG4gICAgICAgIHZVViA9IDAuNSArIDAuNSAqIGFhdF9wb3NpdGlvbjtcXG5cXFxuICAgICAgICB2VVYueCA9IDEuLXZVVi54OyAvLyBtaXJyb3IgZGlwbGF5XFxuXFxcbiAgICAgIH0nO1xuICAgICAgICBjb25zdCBzaGFkZXJGcmFnbWVudFNvdXJjZSA9ICdcXG5cXFxuICAgICAgcHJlY2lzaW9uIGxvd3AgZmxvYXQ7XFxuXFxcbiAgICAgIHZhcnlpbmcgdmVjMiB2VVY7XFxuXFxcbiAgICAgIFxcblxcXG4gICAgICB1bmlmb3JtIHNhbXBsZXIyRCBzYW1wbGVyVmlkZW87XFxuXFxcbiAgICAgIHVuaWZvcm0gbWF0MiB2aWRlb1RyYW5zZm9ybU1hdDI7XFxuXFxcbiAgICAgIHVuaWZvcm0gdmVjMyB1eHlzO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdm9pZCBtYWluKHZvaWQpIHtcXG5cXFxuICAgICAgICB2ZWMyIHV2VmlkZW9DZW50ZXJlZCA9IDIuMCAqIHZpZGVvVHJhbnNmb3JtTWF0MiAqICh2VVYgLSAwLjUpO1xcblxcXG4gICAgICAgIHZlYzIgdXZWaWRlbyA9IHV2VmlkZW9DZW50ZXJlZCArIDAuNTtcXG5cXFxuICAgICAgICB2ZWMzIGNvbG9yVmlkZW8gPSB0ZXh0dXJlMkQoc2FtcGxlclZpZGVvLCB1dlZpZGVvKS5yZ2I7XFxuXFxcbiAgICAgICAgdmVjMiBwb3MgPSB2VVYqMi4tdmVjMigxLiwxLik7XFxuXFxcbiAgICAgICAgdmVjMiBpc0luc2lkZSA9IHN0ZXAodXh5cy54eS11eHlzLnoqdmVjMigxLiwxLiksIHBvcyk7XFxuXFxcbiAgICAgICAgaXNJbnNpZGUgKj0gc3RlcChwb3MsIHV4eXMueHkrdXh5cy56KnZlYzIoMS4sMS4pKTtcXG5cXFxuICAgICAgICB2ZWMyIGJsZW5kQ2VudGVyRmFjdG9yID0gYWJzKHBvcy11eHlzLnh5KSAvIHV4eXMuejtcXG5cXFxuICAgICAgICBmbG9hdCBhbHBoYSA9IGlzSW5zaWRlLnggKiBpc0luc2lkZS55ICogcG93KG1heChibGVuZENlbnRlckZhY3Rvci54LCBibGVuZENlbnRlckZhY3Rvci55KSwgMy4pO1xcblxcXG4gICAgICAgIHZlYzMgY29sb3IgPSBtaXgoY29sb3JWaWRlbywgdmVjMygwLiwwLjYsMS4pLCBhbHBoYSk7XFxuXFxcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwxLik7XFxuXFxcbiAgICAgIH0nO1xuICAgICAgICBjb25zdCBnbFNoYWRlclZlcnRleCA9IHRoaXMuY29tcGlsZVNoYWRlcihzaGFkZXJWZXJ0ZXhTb3VyY2UsIHRoaXMuZ2wuVkVSVEVYX1NIQURFUiwgJ1ZFUlRFWCcpO1xuICAgICAgICBjb25zdCBnbFNoYWRlckZyYWdtZW50ID0gdGhpcy5jb21waWxlU2hhZGVyKHNoYWRlckZyYWdtZW50U291cmNlLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUiwgJ0ZSQUdNRU5UJyk7XG4gICAgICAgIHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0gPSB0aGlzLmdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIodGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgZ2xTaGFkZXJWZXJ0ZXgpO1xuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCBnbFNoYWRlckZyYWdtZW50KTtcbiAgICAgICAgdGhpcy5nbC5saW5rUHJvZ3JhbSh0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgY29uc3Qgc2FtcGxlclZpZGVvID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgJ3NhbXBsZXJWaWRlbycpO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtWHlzID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgJ3V4eXMnKTtcbiAgICAgICAgdGhpcy5oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sICd2aWRlb1RyYW5zZm9ybU1hdDInKTtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaShzYW1wbGVyVmlkZW8sIDApO1xuICAgIH1cbiAgICBkcmF3SGVhZFNlYXJjaChkZXRlY3RTdGF0ZSkge1xuICAgICAgICAvLyB1bmJpbmQgdGhlIGN1cnJlbnQgRkJPIGFuZCBzZXQgdGhlIHZpZXdwb3J0IGFzIHRoZSB3aG9sZSBjYW52YXM6XG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5jdi53aWR0aCwgdGhpcy5jdi5oZWlnaHQpO1xuICAgICAgICAvLyB1c2UgdGhlIGhlYWQgZHJhdyBzaGFkZXIgcHJvZ3JhbSBhbmQgc3luYyB1bmlmb3JtczpcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnZpZGVvVGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTNmKHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1YeXMsIGRldGVjdFN0YXRlLngsIGRldGVjdFN0YXRlLnksIGRldGVjdFN0YXRlLnMpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgyZnYodGhpcy5oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiwgZmFsc2UsIHRoaXMudmlkZW9UcmFuc2Zvcm1NYXQyKTtcbiAgICAgICAgLy8gZHJhdyB0aGUgc3F1YXJlIGxvb2tpbmcgZm9yIHRoZSBoZWFkXG4gICAgICAgIC8vIHRoZSBWQk8gZmlsbGluZyB0aGUgd2hvbGUgc2NyZWVuIGlzIHN0aWxsIGJvdW5kIHRvIHRoZSBjb250ZXh0XG4gICAgICAgIC8vIGZpbGwgdGhlIHZpZXdQb3J0OlxuICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyh0aGlzLmdsLlRSSUFOR0xFUywgMywgdGhpcy5nbC5VTlNJR05FRF9TSE9SVCwgMCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZENvbnRyb2xTZXJ2aWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXRIZWFkQ29udHJvbCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmNvbnN0IEhlYWRDb250cm9sU2VydmljZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0hlYWRDb250cm9sU2VydmljZVwiKSk7XG52YXIgSGVhZENvbnRyb2xTZXJ2aWNlXzIgPSByZXF1aXJlKFwiLi9IZWFkQ29udHJvbFNlcnZpY2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoSGVhZENvbnRyb2xTZXJ2aWNlXzIpLmRlZmF1bHQ7IH0gfSk7XG5jb25zdCBpbml0SGVhZENvbnRyb2wgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZENvbnRyb2xTZXJ2aWNlID0gbmV3IEhlYWRDb250cm9sU2VydmljZV8xLmRlZmF1bHQoJ2hlYWQtcHJldmlldycsIHtcbiAgICAgICAgICAgIG9uUmVhZHk6ICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgICAgIG9uQ2FtZXJhUGVyc21pc3Npb25GYWlsZWQ6ICgpID0+IGFsZXJ0KCdUaGlzIGdhbWUgaXMgaGVhZC1jb250cm9sbGVkLiBZb3UgbmVlZCB0byBlbmFibGUgY2FtZXJhIHRvIHBsYXkgdGhlIGdhbWUuJyksXG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkQ29udHJvbFNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICAgICAgICBoZWFkQ29udHJvbFNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Ugb3BlbmVkJywgKCkgPT4gY29uc29sZS5sb2coJ21vdXNlIG9wZW5lZCcpKTtcbiAgICAgICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlIGNsb3NlZCcsICgpID0+IGNvbnNvbGUubG9nKCdtb3VzZSBjbG9zZWQnKSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdsZWZ0JywgKCkgPT4gY29uc29sZS5sb2coJ2xlZnQnKSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdyaWdodCcsICgpID0+IGNvbnNvbGUubG9nKCdyaWdodCcpKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmluaXRIZWFkQ29udHJvbCA9IGluaXRIZWFkQ29udHJvbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXRJbWFnZUNhcHR1cmUgPSBleHBvcnRzLnRha2VQaG90byA9IHZvaWQgMDtcbnJlcXVpcmUoXCJpbWFnZS1jYXB0dXJlXCIpO1xubGV0IGltYWdlQ2FwdHVyZTtcbmxldCBpc0luaXQgPSBmYWxzZTtcbmNvbnN0IHRha2VQaG90byA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmICghaW1hZ2VDYXB0dXJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgeWllbGQgaW1hZ2VDYXB0dXJlXG4gICAgICAgIC50YWtlUGhvdG8oKVxuICAgICAgICAudGhlbigoYmxvYikgPT4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYikpXG4gICAgICAgIC50aGVuKChpbWFnZUJpdG1hcCkgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFrZVBob3RvQ2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZHJhd0NhbnZhcyhjYW52YXMsIGltYWdlQml0bWFwKTtcbiAgICAgICAgLy9jYW52YXMudG9CbG9iKGFzeW5jIChibG9iKSA9PiB7XG4gICAgICAgIC8vICB0cnkge1xuICAgICAgICAvLyAgICBhd2FpdCBjcmVhdGVGaWxlKGJsb2IpO1xuICAgICAgICAvLyAgICBhd2FpdCByZWFkRmlsZSgpO1xuICAgICAgICAvLyAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyAgICB0aHJvdyBlO1xuICAgICAgICAvLyAgfVxuICAgICAgICAvL30pO1xuICAgIH0pO1xufSk7XG5leHBvcnRzLnRha2VQaG90byA9IHRha2VQaG90bztcbmZ1bmN0aW9uIGRyYXdDYW52YXMoY2FudmFzLCBpbWcpIHtcbiAgICBjYW52YXMud2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGguc3BsaXQoJ3B4JylbMF07XG4gICAgY2FudmFzLmhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5oZWlnaHQuc3BsaXQoJ3B4JylbMF07XG4gICAgbGV0IHJhdGlvID0gTWF0aC5taW4oY2FudmFzLndpZHRoIC8gaW1nLndpZHRoLCBjYW52YXMuaGVpZ2h0IC8gaW1nLmhlaWdodCk7XG4gICAgbGV0IHggPSAoY2FudmFzLndpZHRoIC0gaW1nLndpZHRoICogcmF0aW8pIC8gMjtcbiAgICBsZXQgeSA9IChjYW52YXMuaGVpZ2h0IC0gaW1nLmhlaWdodCAqIHJhdGlvKSAvIDI7XG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB4LCB5LCBpbWcud2lkdGggKiByYXRpbywgaW1nLmhlaWdodCAqIHJhdGlvKTtcbn1cbmNvbnN0IGluaXRJbWFnZUNhcHR1cmUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoaXNJbml0KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgaXNJbml0ID0gdHJ1ZTtcbiAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAgICAgLnRoZW4oKG1lZGlhU3RyZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYWNrID0gbWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgICAgY29uc29sZS5sb2coSW1hZ2VDYXB0dXJlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGltYWdlQ2FwdHVyZSA9IG5ldyBJbWFnZUNhcHR1cmUodHJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoJ0ltYWdlIGNhcHR1cmUgaXMgbm90IHN1cHBvcnRlZCBvbiB5b3VyIGRldmljZSA6KCcpO1xuICAgIH0pO1xufSk7XG5leHBvcnRzLmluaXRJbWFnZUNhcHR1cmUgPSBpbml0SW1hZ2VDYXB0dXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2F5U29tZXRoaW5nID0gZXhwb3J0cy5zZXRVcFVzZXIgPSBleHBvcnRzLlBIUkFTRVMgPSBleHBvcnRzLmluaXRWb2ljZVNlcnZpY2UgPSB2b2lkIDA7XG5sZXQgVk9JQ0U7XG5jb25zdCBpbml0Vm9pY2VTZXJ2aWNlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVk9JQ0UgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSAnZW4tR0InKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSk7XG59KTtcbmV4cG9ydHMuaW5pdFZvaWNlU2VydmljZSA9IGluaXRWb2ljZVNlcnZpY2U7XG5leHBvcnRzLlBIUkFTRVMgPSB7XG4gICAgSEVMTE86ICdgSGksICV1c2VybmFtZSUuIEhhdmUgYSBnb29kIGdhbWUnLFxuICAgIFJJR0hUOiAnR29vZCByaWdodCB0dXJuLCAldXNlcm5hbWUlJyxcbn07XG5sZXQgdXNlck5hbWUgPSAnJztcbmNvbnN0IHNldFVwVXNlciA9IChuYW1lKSA9PiB7XG4gICAgdXNlck5hbWUgPSBuYW1lO1xufTtcbmV4cG9ydHMuc2V0VXBVc2VyID0gc2V0VXBVc2VyO1xuY29uc3Qgc2F5U29tZXRoaW5nID0gKHRleHQpID0+IHtcbiAgICBpZiAoIVZPSUNFKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSh0ZXh0LnJlcGxhY2UoJyV1c2VybmFtZSUnLCB1c2VyTmFtZSkpO1xuICAgIHV0dGVyYW5jZS52b2ljZSA9IFZPSUNFO1xuICAgIHV0dGVyYW5jZS52b2x1bWUgPSAxO1xuICAgIHV0dGVyYW5jZS5waXRjaCA9IDE7XG4gICAgdXR0ZXJhbmNlLnJhdGUgPSAxO1xuICAgIHNwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtcbiAgICBzcGVlY2hTeW50aGVzaXMuc3BlYWsodXR0ZXJhbmNlKTtcbn07XG5leHBvcnRzLnNheVNvbWV0aGluZyA9IHNheVNvbWV0aGluZztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=