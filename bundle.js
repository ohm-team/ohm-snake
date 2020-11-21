/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/console-subscriber/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-subscriber/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 72:48-62 */
/*! CommonJS bailout: module.exports is used directly at 73:8-22 */
/***/ ((module) => {

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Rubik:700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  height: 20px;\n  line-height: 3px;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  border: 0;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: 0.8em;\n  font-family: inherit; }\n  button.start {\n    font-family: 'Rubik', sans-serif;\n    font-weight: 600;\n    color: #382b22;\n    text-transform: uppercase;\n    padding: 1.25em 2em;\n    background: #fff0f0;\n    border: 2px solid #b18597;\n    border-radius: 0.75em;\n    transform-style: preserve-3d;\n    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1); }\n    button.start::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #f9c4d2;\n      border-radius: inherit;\n      box-shadow: 0 0 0 2px #b18597;\n      transform: translate3d(0, 0.75em, -1em);\n      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1); }\n    button.start:hover {\n      background: #ffe9e9;\n      transform: translate(0, 0.25em); }\n      button.start:hover::before {\n        box-shadow: 0 0 0 2px #b18597;\n        transform: translate3d(0, 0.5em, -1em); }\n    button.start:active {\n      background: #ffe9e9;\n      transform: translate(0em, 0.75em); }\n      button.start:active::before {\n        box-shadow: 0 0 0 2px #b18597;\n        transform: translate3d(0, 0, -1em); }\n\n.textbox {\n  width: 300px;\n  margin: 0 0 45px 0;\n  height: 60px;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: turnaround 20s infinite;\n  animation: turnaround 20s infinite; }\n\n.textbox-box {\n  background-color: #e3f6f5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 3px #272343;\n  position: relative;\n  -webkit-animation: hover 2s alternate infinite;\n  animation: hover 2s alternate infinite;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n\n.textbox-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  padding: 10px 15px 15px;\n  align-self: stretch;\n  border-radius: 5px;\n  font-size: 13px; }\n\n.textbox-label {\n  -webkit-transform: translateZ(20px);\n  transform: translateZ(20px);\n  text-transform: uppercase;\n  font-weight: bold;\n  -webkit-animation: hover 2s -0.2s alternate infinite;\n  animation: hover 2s -0.2s alternate infinite;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5)); }\n\n.textbox-action {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  margin-right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -border-radius: 100px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  background-color: #bae8e8;\n  position: relative;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .textbox-action[disabled] {\n    pointer-events: none;\n    visibility: hidden; }\n\n.textbox-action svg {\n  fill: #272343;\n  width: 65%;\n  height: 65%; }\n\n.textbox-action .textbox-face {\n  background-color: #66a8a8;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n\n.textbox-action .textbox-side {\n  width: 10px; }\n\n.textbox-action .textbox-bottom,\n.textbox-action .textbox-top {\n  height: 10px; }\n\n.textbox-action:hover {\n  cursor: pointer;\n  background-color: #9ccece; }\n\n.textbox-action:hover .textbox-face {\n  background-color: #468282; }\n\n.textbox-text {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  font: 2.5rem sans-serif;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  display: block;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));\n  font-size: 20px; }\n\n.textbox-text::-webkit-input-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text::-moz-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text:-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text::-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text::placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text:focus {\n  outline: none; }\n\n.textbox-face {\n  position: absolute;\n  background-color: #272343;\n  left: 0; }\n\n.textbox-side {\n  -webkit-transform: rotateY(90deg);\n  transform: rotateY(90deg);\n  height: 100%;\n  width: 20px;\n  top: 0;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%; }\n\n.textbox-bottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  height: 20px;\n  width: 100%;\n  bottom: 0;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%; }\n\n.textbox-top {\n  -webkit-transform: rotateX(-90deg);\n  transform: rotateX(-90deg);\n  height: 20px;\n  width: 100%;\n  top: 0;\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0; }\n\n@-webkit-keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px); }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px); } }\n\n@keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px); }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px); } }\n\n@-webkit-keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg); }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg); }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); } }\n\n@keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg); }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg); }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); } }\n\n.reference {\n  position: absolute;\n  right: 20px;\n  bottom: 15px; }\n\n.reference img {\n  width: 35px;\n  height: 35px; }\n\n.head-preview {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.console {\n  position: absolute;\n  border: 1px solid black;\n  top: 0;\n  left: 0; }\n\nbody, html {\n  margin: 0; }\n\nbody {\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(to bottom, #aaffa9, #11ffbd);\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif; }\n\n.game {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 18px; }\n\n.title {\n  font-family: 'Bungee Shade';\n  text-align: center;\n  font-size: 2em;\n  margin-bottom: 1em; }\n\n.photo-canvas {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/style/button.scss","webpack://./src/style/input.scss","webpack://./src/style/game.scss","webpack://./src/style/console.scss","webpack://./src/style/index.scss"],"names":[],"mappings":"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","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');\n\n$bg: #fff;\n$text: #382b22;\n$light-pink: #fff0f0;\n$pink: #ffe9e9;\n$dark-pink: #f9c4d2;\n$pink-border: #b18597;\n$pink-shadow: #ffe3e2;\n\n\nbutton {\n  height: 20px;\n  line-height: 3px;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  border: 0;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: 0.8em;\n  font-family: inherit;\n  &.start {\n    font-family: 'Rubik', sans-serif;\n    font-weight: 600;\n    color: $text;\n    text-transform: uppercase;\n    padding: 1.25em 2em;\n    background: $light-pink;\n    border: 2px solid $pink-border;\n    border-radius: 0.75em;\n    transform-style: preserve-3d;\n    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);\n    &::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: $dark-pink;\n      border-radius: inherit;\n      box-shadow: 0 0 0 2px $pink-border;\n      transform: translate3d(0, 0.75em, -1em);\n      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);\n    }\n    &:hover {\n      background: $pink;\n      transform: translate(0, 0.25em);\n      &::before {\n        box-shadow: 0 0 0 2px $pink-border;\n        transform: translate3d(0, 0.5em, -1em);\n      }\n    }\n    &:active {\n      background: $pink;\n      transform: translate(0em, 0.75em);\n      &::before {\n        box-shadow: 0 0 0 2px $pink-border;\n        transform: translate3d(0, 0, -1em);\n      }\n    }\n  }\n}\n","//https://codepen.io/jouanmarcel/pen/Powbrgq\n.textbox {\n  width: 300px;\n  margin: 0 0 45px 0;\n  height: 60px;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: turnaround 20s infinite;\n  animation: turnaround 20s infinite;\n}\n\n.textbox-box {\n  background-color: #e3f6f5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 3px #272343;\n  position: relative;\n  -webkit-animation: hover 2s alternate infinite;\n  animation: hover 2s alternate infinite;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.textbox-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  padding: 10px 15px 15px;\n  align-self: stretch;\n  border-radius: 5px;\n  font-size: 13px;\n}\n\n.textbox-label {\n  -webkit-transform: translateZ(20px);\n  transform: translateZ(20px);\n  text-transform: uppercase;\n  font-weight: bold;\n  -webkit-animation: hover 2s -0.2s alternate infinite;\n  animation: hover 2s -0.2s alternate infinite;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));\n}\n\n.textbox-action {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  margin-right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -border-radius: 100px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  background-color: #bae8e8;\n  position: relative;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  \n  &[disabled] {\n    pointer-events: none;\n    visibility: hidden;\n  }\n}\n\n.textbox-action svg {\n  fill: #272343;\n  width: 65%;\n  height: 65%;\n}\n\n.textbox-action .textbox-face {\n  background-color: #66a8a8;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.textbox-action .textbox-side {\n  width: 10px;\n}\n\n.textbox-action .textbox-bottom,\n.textbox-action .textbox-top {\n  height: 10px;\n}\n\n.textbox-action:hover {\n  cursor: pointer;\n  background-color: #9ccece;\n}\n\n.textbox-action:hover .textbox-face {\n  background-color: #468282;\n}\n\n.textbox-text {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  font: 2.5rem sans-serif;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  display: block;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));\n  font-size: 20px;\n}\n\n.textbox-text::-webkit-input-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text::-moz-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text:-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text::-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text::placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text:focus {\n  outline: none;\n}\n\n.textbox-face {\n  position: absolute;\n  background-color: #272343;\n  left: 0;\n}\n\n.textbox-side {\n  -webkit-transform: rotateY(90deg);\n  transform: rotateY(90deg);\n  height: 100%;\n  width: 20px;\n  top: 0;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%;\n}\n\n.textbox-bottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  height: 20px;\n  width: 100%;\n  bottom: 0;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n}\n\n.textbox-top {\n  -webkit-transform: rotateX(-90deg);\n  transform: rotateX(-90deg);\n  height: 20px;\n  width: 100%;\n  top: 0;\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n}\n\n@-webkit-keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px);\n  }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px);\n  }\n}\n\n@keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px);\n  }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px);\n  }\n}\n\n@-webkit-keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n  }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n}\n\n@keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n  }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n}\n\n.reference {\n  position: absolute;\n  right: 20px;\n  bottom: 15px;\n}\n\n.reference img {\n  width: 35px;\n  height: 35px;\n}\n",".head-preview {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n}",".console {\n    position: absolute;\n    border: 1px solid black;\n    top: 0;\n    left: 0;\n}","@import \"./button\";\n@import \"./input\";\n@import \"./game\";\n@import \"./console.scss\";\n\nbody, html {\n  margin: 0;\n}\n\nbody {\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: linear-gradient(to bottom, #aaffa9, #11ffbd);\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n.game {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 18px;\n}\n\n\n.title {\n  font-family: 'Bungee Shade';\n  text-align: center;\n  font-size: 2em;\n  margin-bottom: 1em;\n}\n\n.photo-canvas {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 15:0-14 */
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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

/***/ "./src/imageCapture.ts":
/*!*****************************!*\
  !*** ./src/imageCapture.ts ***!
  \*****************************/
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
exports.takePhoto = void 0;
let imageCapture;
let isInit = false;
// todo: show loader until everything is initialised
const init = () => {
    if (isInit) {
        return;
    }
    isInit = true;
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((mediaStream) => {
        const track = mediaStream.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);
    })
        .catch((error) => console.log(error));
};
const takePhoto = () => __awaiter(void 0, void 0, void 0, function* () {
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
init();


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 11:23-27 */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const HeadControlService_1 = __importDefault(__webpack_require__(/*! ./services/HeadControlService */ "./src/services/HeadControlService/index.ts"));
const imageCapture_1 = __webpack_require__(/*! ./imageCapture */ "./src/imageCapture.ts");
__webpack_require__(/*! ./style/index.scss */ "./src/style/index.scss");
const voice_1 = __webpack_require__(/*! ./voice */ "./src/voice.ts");
const console_1 = __webpack_require__(/*! ./console */ "./src/console.ts");
console_1.enableMobileConsole();
document.addEventListener('DOMContentLoaded', () => {
    const headControlService = new HeadControlService_1.default('head-preview', { disableRestPosition: false });
    headControlService.toggle(true);
    headControlService.addEventListener('mouse opened', () => console.log('mouse opened'));
    headControlService.addEventListener('mouse closed', () => console.log('mouse closed'));
    headControlService.addEventListener('left', () => console.log('left'));
    headControlService.addEventListener('right', () => console.log('right'));
});
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('start');
const gameScreen = document.getElementById('game');
const nameInput = document.getElementById('nameInput');
const init = () => {
    gameScreen.style.display = 'none';
    nameInput.oninput = () => {
        if (nameInput.value) {
            startButton.removeAttribute('disabled');
        }
        else {
            startButton.setAttribute('disabled', 'true');
        }
    };
    startButton.onclick = () => __awaiter(void 0, void 0, void 0, function* () {
        yield startGame(nameInput.value);
    });
};
const startGame = (playerName) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield imageCapture_1.takePhoto();
        gameScreen.style.display = null;
        startScreen.style.display = 'none';
        voice_1.setUpUser(playerName);
        // saySomething(PHRASES.HELLO);
    }
    catch (e) {
        alert(e);
    }
});
init();


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
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const defaultSettings = {
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
class HeadControlService extends EventTarget {
    constructor(canvasId, settings) {
        super();
        this.movementLocks = {
            vertical: false,
            horizontal: false,
            mouseOpened: false,
        };
        this.returnValue = {
            dRx: 0,
            dRy: 0,
            dZ: 0,
        };
        this.state = {
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
        this.lastTimestamp = 0;
        this.gl = null;
        this.cv = null;
        this.videoTexture = null;
        this.videoTransformMat2 = null;
        this.glHeadSearchDrawShaderProgram = null;
        this.headSearchUniformXys = null;
        this.headSearchUniformVideoTransformMat2 = null;
        this.disableRestPosition = false;
        this.handleMouseOpening = (detectState) => {
            if (detectState.ry < -3 || detectState.ry > 3) {
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
            if (mv.dRx !== 0) {
                this.handleAxisMovement({ axis: 'vertical', axisPosition: mv.dRx, maxValue: 'down', minValue: 'up' });
            }
            if (mv.dRy !== 0) {
                this.handleAxisMovement({ axis: 'horizontal', axisPosition: mv.dRy, maxValue: 'left', minValue: 'right' });
            }
        };
        this.handleAxisMovement = ({ axis, axisPosition, maxValue, minValue, }) => {
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
        this.settings = Object.assign(Object.assign({}, defaultSettings), settings);
        this.settings.tol.rx *= Math.PI / 180; // convert from degrees to radians
        this.settings.tol.ry *= Math.PI / 180;
        this.settings.tol.s /= 100;
        window.JEEFACEFILTERAPI.init({
            canvasId: canvasId,
            NNCPath: './vendor/',
            animateDelay: 2,
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
                const mv = this.computeCameraMove(detectState);
                mv.expressions = detectState.expressions;
                if (mv.dRx !== 0 || mv.dRy !== 0 || mv.dZ !== 0) {
                    this.handleMove(mv);
                }
                this.handleMouseOpening(detectState);
            },
        });
    }
    toggle(isEnabled) {
        if (this.state.isEnabled === isEnabled) {
            return true;
        }
        else if (!isEnabled) {
            //disable
            this.state.isEnabled = false;
            return true;
        }
        else {
            this.state.isEnabled = true;
            this.state.restHeadPosition.needsUpdate = true;
            return true;
        }
    }
    computeDelta(ref, val, tol, sensibility) {
        if (Math.abs(ref - val) < tol) {
            return 0;
        }
        return (val - ref) * sensibility;
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
    computeCameraMove(detectState) {
        if (this.state.isDetected && detectState.detected < this.settings.detectionThreshold - this.settings.detectionHysteresis) {
            // DETECTION LOST
            this.state.isDetected = false;
            this.returnValue.dRx = 0;
            this.returnValue.dRy = 0;
            this.returnValue.dZ = 0;
        }
        else if (!this.state.isDetected && detectState.detected - this.settings.detectionThreshold + this.settings.detectionHysteresis) {
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
exports.default = void 0;
var HeadControlService_1 = __webpack_require__(/*! ./HeadControlService */ "./src/services/HeadControlService/HeadControlService.ts");
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return __importDefault(HeadControlService_1).default; } }));


/***/ }),

/***/ "./src/voice.ts":
/*!**********************!*\
  !*** ./src/voice.ts ***!
  \**********************/
/*! flagged exports */
/*! export PHRASES [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saySomething [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setUpUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.saySomething = exports.setUpUser = exports.PHRASES = void 0;
setTimeout(() => {
    VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');
}, 500);
let VOICE = window.speechSynthesis.getVoices().find(({ lang }) => lang === 'en-GB');
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvY29uc29sZS1zdWJzY3JpYmVyL2luZGV4LmpzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3N0eWxlL2luZGV4LnNjc3M/N2ViOSIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2ltYWdlQ2FwdHVyZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9IZWFkQ29udHJvbFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvdm9pY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZEO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysc0hBQXNIO0FBQ3RIO0FBQ0Esa0RBQWtELGlCQUFpQixxQkFBcUIsMEJBQTBCLG9CQUFvQixrQkFBa0IsY0FBYywyQkFBMkIsMEJBQTBCLHFCQUFxQix5QkFBeUIsRUFBRSxrQkFBa0IsdUNBQXVDLHVCQUF1QixxQkFBcUIsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsZ0NBQWdDLDRCQUE0QixtQ0FBbUMsNEdBQTRHLEVBQUUsNEJBQTRCLDJCQUEyQixvQkFBb0Isb0JBQW9CLHFCQUFxQixlQUFlLGdCQUFnQixp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ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3Vic2NyaWJlIHRvIHRoZSBjb25zb2xlIG91dHB1dCBcbiAqXG4gKiBAYXV0aG9yIFNhbXNvbiBSYWR1XG4gKi8gXG4oZnVuY3Rpb24oKXtcbiAgICB2YXIgX2xvZyA9IGNvbnNvbGUubG9nO1xuICAgIHZhciBfd2FybiA9IGNvbnNvbGUud2FybjtcbiAgICB2YXIgX2Vycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICB2YXIgX2RlYnVnID0gY29uc29sZS5kZWJ1ZztcblxuICAgIHZhciBDb25zb2xlU3Vic2NyaWJlciA9IHtcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBfbG9nO1xuICAgICAgICAgICAgY29uc29sZS53YXJuID0gX3dhcm47XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yID0gX2Vycm9yO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyA9IF9kZWJ1ZztcbiAgICAgICAgfSwgXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uKGNiLCBwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIGNhbGxiYWNrIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZlbnRMb2dnaW5nID0gQm9vbGVhbihwcmV2ZW50TG9nZ2luZyk7IC8vZm9yY2UgYm9vbFxuXG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9JTkZPID0gXCJpbmZvXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9XQVJOID0gXCJ3YXJuXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9FUlJPUiA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgIGNvbnN0IENBVEVHT1JZX0RFQlVHID0gXCJkZWJ1Z1wiO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IGNvbnNvbGUuaW5mbyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9sb2cpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb2cuY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX0lORk8sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX3dhcm4pe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93YXJuLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9XQVJOLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lcnJvci5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfRVJST1IsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9kZWJ1Zyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX2RlYnVnLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9ERUJVRywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2V4cG9ydFxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBDb25zb2xlU3Vic2NyaWJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93ICYmIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKXtcbiAgICAgICAgd2luZG93LkNvbnNvbGVTdWJzY3JpYmVyID0gQ29uc29sZVN1YnNjcmliZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGV4cG9ydCBtb2R1bGUuXCIpO1xuICAgIH1cbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IH1cXG4gIGJ1dHRvbi5zdGFydCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogIzM4MmIyMjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMS4yNWVtIDJlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjBmMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2IxODU5NztcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBiYWNrZ3JvdW5kIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTsgfVxcbiAgICBidXR0b24uc3RhcnQ6OmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgYmFja2dyb3VuZDogI2Y5YzRkMjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjYjE4NTk3O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC43NWVtLCAtMWVtKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBib3gtc2hhZG93IDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTsgfVxcbiAgICBidXR0b24uc3RhcnQ6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmU5ZTk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4yNWVtKTsgfVxcbiAgICAgIGJ1dHRvbi5zdGFydDpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjYjE4NTk3O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjVlbSwgLTFlbSk7IH1cXG4gICAgYnV0dG9uLnN0YXJ0OmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZTllOTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sIDAuNzVlbSk7IH1cXG4gICAgICBidXR0b24uc3RhcnQ6YWN0aXZlOjpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNiMTg1OTc7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIC0xZW0pOyB9XFxuXFxuLnRleHRib3gge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAwIDAgNDVweCAwO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0dXJuYXJvdW5kIDIwcyBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7IH1cXG5cXG4udGV4dGJveC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjZmNTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggIzI3MjM0MztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuXFxuLnRleHRib3gtZmllbGQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxNXB4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDsgfVxcblxcbi50ZXh0Ym94LWxhYmVsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZThlODtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7IH1cXG4gIC50ZXh0Ym94LWFjdGlvbltkaXNhYmxlZF0ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnRleHRib3gtYWN0aW9uIHN2ZyB7XFxuICBmaWxsOiAjMjcyMzQzO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlOyB9XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LWZhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YThhODtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7IH1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtc2lkZSB7XFxuICB3aWR0aDogMTBweDsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1ib3R0b20sXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXRvcCB7XFxuICBoZWlnaHQ6IDEwcHg7IH1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljY2VjZTsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbjpob3ZlciAudGV4dGJveC1mYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyODI7IH1cXG5cXG4udGV4dGJveC10ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250OiAyLjVyZW0gc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi50ZXh0Ym94LXRleHQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbi50ZXh0Ym94LXRleHQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi50ZXh0Ym94LWZhY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjM0MztcXG4gIGxlZnQ6IDA7IH1cXG5cXG4udGV4dGJveC1zaWRlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjBweDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlOyB9XFxuXFxuLnRleHRib3gtYm90dG9tIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTsgfVxcblxcbi50ZXh0Ym94LXRvcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBob3ZlciB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpOyB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTsgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpOyB9XFxuICA2NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHR1cm5hcm91bmQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpOyB9XFxuICAzMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7IH1cXG4gIDY3JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7IH0gfVxcblxcbi5yZWZlcmVuY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDE1cHg7IH1cXG5cXG4ucmVmZXJlbmNlIGltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDsgfVxcblxcbi5oZWFkLXByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4uY29uc29sZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2FhZmZhOSwgIzExZmZiZCk7XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDsgfVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZSc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5waG90by1jYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9nYW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb25zb2xlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVlBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFWdEI7SUFZSSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGNBdEJVO0lBdUJWLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsbUJBeEJnQjtJQXlCaEIseUJBdEJpQjtJQXVCakIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixxR0FBcUcsRUFBQTtJQXJCekc7TUF1Qk0sa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxXQUFXO01BQ1gsWUFBWTtNQUNaLE1BQU07TUFDTixPQUFPO01BQ1AsUUFBUTtNQUNSLFNBQVM7TUFDVCxtQkFwQ2E7TUFxQ2Isc0JBQXNCO01BQ3RCLDZCQXJDZTtNQXNDZix1Q0FBdUM7TUFDdkMscUdBQXFHLEVBQUE7SUFuQzNHO01Bc0NNLG1CQTVDUTtNQTZDUiwrQkFBK0IsRUFBQTtNQXZDckM7UUF5Q1EsNkJBN0NhO1FBOENiLHNDQUFzQyxFQUFBO0lBMUM5QztNQThDTSxtQkFwRFE7TUFxRFIsaUNBQWlDLEVBQUE7TUEvQ3ZDO1FBaURRLDZCQXJEYTtRQXNEYixrQ0FBa0MsRUFBQTs7QUM3RDFDO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsMENBQTBD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LG9GQUFvRjtJQUNwRiw0RUFBNEUsRUFBQTtFQUU5RTtJQUNFLDJFQUEyRTtJQUMzRSxtRUFBbUUsRUFBQTtFQUVyRTtJQUNFLG1GQUFtRjtJQUNuRiwyRUFBMkUsRUFBQSxFQUFBOztBQUkvRTtFQUNFO0lBQ0UsbUZBQW1GO0lBQ25GLDJFQUEyRSxFQUFBO0VBRTdFO0lBQ0Usb0ZBQW9GO0lBQ3BGLDRFQUE0RSxFQUFBO0VBRTlFO0lBQ0UsMkVBQTJFO0lBQzNFLG1FQUFtRSxFQUFBO0VBRXJFO0lBQ0UsbUZBQW1GO0lBQ25GLDJFQUEyRSxFQUFBLEVBQUE7O0FBSS9FO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQ2xRZDtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQ0haO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixNQUFNO0VBQ04sT0FBTyxFQUFBOztBQ0NYO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsd0RBQXdEO0VBQ3hELG9EQUFvRCxFQUFBOztBQUd0RDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrOjcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kYmc6ICNmZmY7XFxuJHRleHQ6ICMzODJiMjI7XFxuJGxpZ2h0LXBpbms6ICNmZmYwZjA7XFxuJHBpbms6ICNmZmU5ZTk7XFxuJGRhcmstcGluazogI2Y5YzRkMjtcXG4kcGluay1ib3JkZXI6ICNiMTg1OTc7XFxuJHBpbmstc2hhZG93OiAjZmZlM2UyO1xcblxcblxcbmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAmLnN0YXJ0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAkdGV4dDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMS4yNWVtIDJlbTtcXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXBpbms7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRwaW5rLWJvcmRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBiYWNrZ3JvdW5kIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTtcXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZGFyay1waW5rO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRwaW5rLWJvcmRlcjtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNzVlbSwgLTFlbSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYm94LXNoYWRvdyAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7XFxuICAgIH1cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogJHBpbms7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4yNWVtKTtcXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRwaW5rLWJvcmRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC41ZW0sIC0xZW0pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogJHBpbms7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMGVtLCAwLjc1ZW0pO1xcbiAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHBpbmstYm9yZGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAtMWVtKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvL2h0dHBzOi8vY29kZXBlbi5pby9qb3Vhbm1hcmNlbC9wZW4vUG93YnJncVxcbi50ZXh0Ym94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMCAwIDQ1cHggMDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHR1cm5hcm91bmQgMjBzIGluZmluaXRlO1xcbn1cXG5cXG4udGV4dGJveC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjZmNTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggIzI3MjM0MztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4udGV4dGJveC1maWVsZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4udGV4dGJveC1sYWJlbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC4ycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZThlODtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICBcXG4gICZbZGlzYWJsZWRdIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIHN2ZyB7XFxuICBmaWxsOiAjMjcyMzQzO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlO1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtZmFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZhOGE4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXNpZGUge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1ib3R0b20sXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXRvcCB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNjZWNlO1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIgLnRleHRib3gtZmFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MjgyO1xcbn1cXG5cXG4udGV4dGJveC10ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250OiAyLjVyZW0gc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRleHRib3gtZmFjZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyMzQzO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnRleHRib3gtc2lkZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG59XFxuXFxuLnRleHRib3gtYm90dG9tIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG59XFxuXFxuLnRleHRib3gtdG9wIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gIH1cXG4gIDMzJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gIH1cXG4gIDY3JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR1cm5hcm91bmQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgfVxcbiAgNjclIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICB9XFxufVxcblxcbi5yZWZlcmVuY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDE1cHg7XFxufVxcblxcbi5yZWZlcmVuY2UgaW1nIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cIixcIi5oZWFkLXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVwiLFwiLmNvbnNvbGUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVwiLFwiQGltcG9ydCBcXFwiLi9idXR0b25cXFwiO1xcbkBpbXBvcnQgXFxcIi4vaW5wdXRcXFwiO1xcbkBpbXBvcnQgXFxcIi4vZ2FtZVxcXCI7XFxuQGltcG9ydCBcXFwiLi9jb25zb2xlLnNjc3NcXFwiO1xcblxcbmJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhYWZmYTksICMxMWZmYmQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ucGhvdG8tY2FudmFzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVuYWJsZU1vYmlsZUNvbnNvbGUgPSB2b2lkIDA7XG5jb25zdCBjb25zb2xlX3N1YnNjcmliZXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiY29uc29sZS1zdWJzY3JpYmVyXCIpKTtcbmNvbnN0IGVuYWJsZU1vYmlsZUNvbnNvbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVmZmVyID0gW107XG4gICAgY29uc29sZV9zdWJzY3JpYmVyXzEuZGVmYXVsdC5iaW5kKChjYXRlZ29yeSwgYXJncykgPT4ge1xuICAgICAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgYnVmZmVyLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnVmZmVyLnB1c2goeyBjYXRlZ29yeSwgbWVzc2FnZTogYXJnc1swXSB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnNvbGUnKS5pbm5lckhUTUwgPSBidWZmZXIubWFwKChtKSA9PiBgPHA+JHttLm1lc3NhZ2V9PC9wPmApLmpvaW4oJycpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuZW5hYmxlTW9iaWxlQ29uc29sZSA9IGVuYWJsZU1vYmlsZUNvbnNvbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50YWtlUGhvdG8gPSB2b2lkIDA7XG5sZXQgaW1hZ2VDYXB0dXJlO1xubGV0IGlzSW5pdCA9IGZhbHNlO1xuLy8gdG9kbzogc2hvdyBsb2FkZXIgdW50aWwgZXZlcnl0aGluZyBpcyBpbml0aWFsaXNlZFxuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBpZiAoaXNJbml0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXNJbml0ID0gdHJ1ZTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzXG4gICAgICAgIC5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSB9KVxuICAgICAgICAudGhlbigobWVkaWFTdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICBpbWFnZUNhcHR1cmUgPSBuZXcgSW1hZ2VDYXB0dXJlKHRyYWNrKTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcbmNvbnN0IHRha2VQaG90byA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGltYWdlQ2FwdHVyZVxuICAgICAgICAudGFrZVBob3RvKClcbiAgICAgICAgLnRoZW4oKGJsb2IpID0+IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpKVxuICAgICAgICAudGhlbigoaW1hZ2VCaXRtYXApID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rha2VQaG90b0NhbnZhcycpO1xuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRyYXdDYW52YXMoY2FudmFzLCBpbWFnZUJpdG1hcCk7XG4gICAgICAgIC8vY2FudmFzLnRvQmxvYihhc3luYyAoYmxvYikgPT4ge1xuICAgICAgICAvLyAgdHJ5IHtcbiAgICAgICAgLy8gICAgYXdhaXQgY3JlYXRlRmlsZShibG9iKTtcbiAgICAgICAgLy8gICAgYXdhaXQgcmVhZEZpbGUoKTtcbiAgICAgICAgLy8gIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gICAgdGhyb3cgZTtcbiAgICAgICAgLy8gIH1cbiAgICAgICAgLy99KTtcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy50YWtlUGhvdG8gPSB0YWtlUGhvdG87XG5mdW5jdGlvbiBkcmF3Q2FudmFzKGNhbnZhcywgaW1nKSB7XG4gICAgY2FudmFzLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoLnNwbGl0KCdweCcpWzBdO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuaGVpZ2h0LnNwbGl0KCdweCcpWzBdO1xuICAgIGxldCByYXRpbyA9IE1hdGgubWluKGNhbnZhcy53aWR0aCAvIGltZy53aWR0aCwgY2FudmFzLmhlaWdodCAvIGltZy5oZWlnaHQpO1xuICAgIGxldCB4ID0gKGNhbnZhcy53aWR0aCAtIGltZy53aWR0aCAqIHJhdGlvKSAvIDI7XG4gICAgbGV0IHkgPSAoY2FudmFzLmhlaWdodCAtIGltZy5oZWlnaHQgKiByYXRpbykgLyAyO1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgeCwgeSwgaW1nLndpZHRoICogcmF0aW8sIGltZy5oZWlnaHQgKiByYXRpbyk7XG59XG5pbml0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgSGVhZENvbnRyb2xTZXJ2aWNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vc2VydmljZXMvSGVhZENvbnRyb2xTZXJ2aWNlXCIpKTtcbmNvbnN0IGltYWdlQ2FwdHVyZV8xID0gcmVxdWlyZShcIi4vaW1hZ2VDYXB0dXJlXCIpO1xucmVxdWlyZShcIi4vc3R5bGUvaW5kZXguc2Nzc1wiKTtcbmNvbnN0IHZvaWNlXzEgPSByZXF1aXJlKFwiLi92b2ljZVwiKTtcbmNvbnN0IGNvbnNvbGVfMSA9IHJlcXVpcmUoXCIuL2NvbnNvbGVcIik7XG5jb25zb2xlXzEuZW5hYmxlTW9iaWxlQ29uc29sZSgpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBoZWFkQ29udHJvbFNlcnZpY2UgPSBuZXcgSGVhZENvbnRyb2xTZXJ2aWNlXzEuZGVmYXVsdCgnaGVhZC1wcmV2aWV3JywgeyBkaXNhYmxlUmVzdFBvc2l0aW9uOiBmYWxzZSB9KTtcbiAgICBoZWFkQ29udHJvbFNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZSBvcGVuZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnbW91c2Ugb3BlbmVkJykpO1xuICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZSBjbG9zZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnbW91c2UgY2xvc2VkJykpO1xuICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdsZWZ0JywgKCkgPT4gY29uc29sZS5sb2coJ2xlZnQnKSk7XG4gICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3JpZ2h0JywgKCkgPT4gY29uc29sZS5sb2coJ3JpZ2h0JykpO1xufSk7XG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xuY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcbmNvbnN0IGdhbWVTY3JlZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVJbnB1dCcpO1xuY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBnYW1lU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbmFtZUlucHV0Lm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChuYW1lSW5wdXQudmFsdWUpIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzdGFydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsdWUpO1xuICAgIH0pO1xufTtcbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXJOYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBpbWFnZUNhcHR1cmVfMS50YWtlUGhvdG8oKTtcbiAgICAgICAgZ2FtZVNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdm9pY2VfMS5zZXRVcFVzZXIocGxheWVyTmFtZSk7XG4gICAgICAgIC8vIHNheVNvbWV0aGluZyhQSFJBU0VTLkhFTExPKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgYWxlcnQoZSk7XG4gICAgfVxufSk7XG5pbml0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICBtb3VzZU9wZW5pbmdUcmVzaG9sZDogMC43LFxuICAgIG1vdXNlQ2xvc2luZ1RyZXNob2xkOiAwLjQsXG4gICAgZGlzYWJsZVJlc3RQb3NpdGlvbjogZmFsc2UsXG4gICAgLyoqIHNlbnNpYmlsaXR5LCBiZXR3ZWVuIDAgYW5kIDEuIExlc3MgLT4gbW9yZSBzZW5zaXRpdmUgKi9cbiAgICBkZXRlY3Rpb25UaHJlc2hvbGQ6IDAuODUsXG4gICAgZGV0ZWN0aW9uSHlzdGVyZXNpczogMC4wNSxcbiAgICB0b2w6IHtcbiAgICAgICAgLyoqIGRvIG5vdCBtb3ZlIGlmIGhlYWQgdHVybiBtb3JlIHRoYW4gdGhpcyB2YWx1ZSAoaW4gZGVncmVlcykgZnJvbSBoZWFkIHJlc3QgcG9zaXRpb24gKi9cbiAgICAgICAgcng6IDUsXG4gICAgICAgIHJ5OiA1LFxuICAgICAgICAvKiogZG8gbm90IG1vdmUgZm9yd2FyZC9iYWNrd2FyZCBpZiBoZWFkIGlzIGxhcmdlci9zbWFsbGVyIHRoYW4gdGhpcyBwZXJjZW50IGZyb20gdGhlIHJlc3QgcG9zaXRpb24gKi9cbiAgICAgICAgczogNSxcbiAgICB9LFxuICAgIHNlbnNpYmlsaXR5OiB7XG4gICAgICAgIHJ4OiAxLFxuICAgICAgICByeTogMSxcbiAgICAgICAgczogMSxcbiAgICB9LFxufTtcbmNsYXNzIEhlYWRDb250cm9sU2VydmljZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNJZCwgc2V0dGluZ3MpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzID0ge1xuICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZU9wZW5lZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmV0dXJuVmFsdWUgPSB7XG4gICAgICAgICAgICBkUng6IDAsXG4gICAgICAgICAgICBkUnk6IDAsXG4gICAgICAgICAgICBkWjogMCxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3RIZWFkUG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbiBvZiB0aGUgaGVhZCBtYXRjaGluZyB3aXRoIE5vIE1vdmVcbiAgICAgICAgICAgICAgICBuZWVkc1VwZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgczogMCxcbiAgICAgICAgICAgICAgICByeDogMCxcbiAgICAgICAgICAgICAgICByeTogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubGFzdFRpbWVzdGFtcCA9IDA7XG4gICAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgICAgICB0aGlzLmN2ID0gbnVsbDtcbiAgICAgICAgdGhpcy52aWRlb1RleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvVHJhbnNmb3JtTWF0MiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtWHlzID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiA9IG51bGw7XG4gICAgICAgIHRoaXMuZGlzYWJsZVJlc3RQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlT3BlbmluZyA9IChkZXRlY3RTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRldGVjdFN0YXRlLnJ5IDwgLTMgfHwgZGV0ZWN0U3RhdGUucnkgPiAzKSB7XG4gICAgICAgICAgICAgICAgLy8gSGVhZCBzaG91bGQgYmUgaW4gdGhlIGNlbnRlciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtb3V0aE9wZW5pbmcgPSAoZGV0ZWN0U3RhdGUuZXhwcmVzc2lvbnNbMF0gLSAwLjIpICogNS4wO1xuICAgICAgICAgICAgbW91dGhPcGVuaW5nID0gTWF0aC5taW4oTWF0aC5tYXgobW91dGhPcGVuaW5nLCAwKSwgMSk7XG4gICAgICAgICAgICBpZiAobW91dGhPcGVuaW5nID4gdGhpcy5zZXR0aW5ncy5tb3VzZU9wZW5pbmdUcmVzaG9sZCAmJiAhdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb3VzZSBvcGVuZWQnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vdXRoT3BlbmluZyA8IHRoaXMuc2V0dGluZ3MubW91c2VDbG9zaW5nVHJlc2hvbGQgJiYgdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzLm1vdXNlT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2UgY2xvc2VkJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlID0gKG12KSA9PiB7XG4gICAgICAgICAgICBpZiAobXYuZFJ4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQoeyBheGlzOiAndmVydGljYWwnLCBheGlzUG9zaXRpb246IG12LmRSeCwgbWF4VmFsdWU6ICdkb3duJywgbWluVmFsdWU6ICd1cCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXYuZFJ5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQoeyBheGlzOiAnaG9yaXpvbnRhbCcsIGF4aXNQb3NpdGlvbjogbXYuZFJ5LCBtYXhWYWx1ZTogJ2xlZnQnLCBtaW5WYWx1ZTogJ3JpZ2h0JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQgPSAoeyBheGlzLCBheGlzUG9zaXRpb24sIG1heFZhbHVlLCBtaW5WYWx1ZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA8IC0xMCAmJiAhdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1pblZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA+IDEwICYmICF0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQobWF4VmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXhpc1Bvc2l0aW9uID4gLTUgJiYgYXhpc1Bvc2l0aW9uIDwgNSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFNldHRpbmdzKSwgc2V0dGluZ3MpO1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRvbC5yeCAqPSBNYXRoLlBJIC8gMTgwOyAvLyBjb252ZXJ0IGZyb20gZGVncmVlcyB0byByYWRpYW5zXG4gICAgICAgIHRoaXMuc2V0dGluZ3MudG9sLnJ5ICo9IE1hdGguUEkgLyAxODA7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MudG9sLnMgLz0gMTAwO1xuICAgICAgICB3aW5kb3cuSkVFRkFDRUZJTFRFUkFQSS5pbml0KHtcbiAgICAgICAgICAgIGNhbnZhc0lkOiBjYW52YXNJZCxcbiAgICAgICAgICAgIE5OQ1BhdGg6ICcuL3ZlbmRvci8nLFxuICAgICAgICAgICAgYW5pbWF0ZURlbGF5OiAyLFxuICAgICAgICAgICAgY2FsbGJhY2tSZWFkeTogKGVyckNvZGUsIGplZUZhY2VGaWx0ZXJPYmopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBTiBFUlJPUiBIQVBQRU5TLiBTT1JSWSBCUk8gOiggLiBFUlIgPScsIGVyckNvZGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZ2wgPSBqZWVGYWNlRmlsdGVyT2JqWydHTCddO1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UZXh0dXJlID0gamVlRmFjZUZpbHRlck9ialsndmlkZW9UZXh0dXJlJ107XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1RyYW5zZm9ybU1hdDIgPSBqZWVGYWNlRmlsdGVyT2JqWyd2aWRlb1RyYW5zZm9ybU1hdDInXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN2ID0gamVlRmFjZUZpbHRlck9ialsnY2FudmFzRWxlbWVudCddO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEhlYWRTZWFyY2hEcmF3KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gY2FsbGVkIGF0IGVhY2ggcmVuZGVyIGl0ZXJhdGlvbiAoZHJhd2luZyBsb29wKTpcbiAgICAgICAgICAgIGNhbGxiYWNrVHJhY2s6IChkZXRlY3RTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtdiA9IHRoaXMuY29tcHV0ZUNhbWVyYU1vdmUoZGV0ZWN0U3RhdGUpO1xuICAgICAgICAgICAgICAgIG12LmV4cHJlc3Npb25zID0gZGV0ZWN0U3RhdGUuZXhwcmVzc2lvbnM7XG4gICAgICAgICAgICAgICAgaWYgKG12LmRSeCAhPT0gMCB8fCBtdi5kUnkgIT09IDAgfHwgbXYuZFogIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKG12KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU9wZW5pbmcoZGV0ZWN0U3RhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvZ2dsZShpc0VuYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFbmFibGVkID09PSBpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIC8vZGlzYWJsZVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0VuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXB1dGVEZWx0YShyZWYsIHZhbCwgdG9sLCBzZW5zaWJpbGl0eSkge1xuICAgICAgICBpZiAoTWF0aC5hYnMocmVmIC0gdmFsKSA8IHRvbCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh2YWwgLSByZWYpICogc2Vuc2liaWxpdHk7XG4gICAgfVxuICAgIGNvbXBpbGVTaGFkZXIoc291cmNlLCBnbFR5cGUsIHR5cGVTdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZ2xTaGFkZXIgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcihnbFR5cGUpO1xuICAgICAgICB0aGlzLmdsLnNoYWRlclNvdXJjZShnbFNoYWRlciwgc291cmNlKTtcbiAgICAgICAgdGhpcy5nbC5jb21waWxlU2hhZGVyKGdsU2hhZGVyKTtcbiAgICAgICAgaWYgKCF0aGlzLmdsLmdldFNoYWRlclBhcmFtZXRlcihnbFNoYWRlciwgdGhpcy5nbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdFUlJPUiBJTiAnICsgdHlwZVN0cmluZyArICcgU0hBREVSOiAnICsgdGhpcy5nbC5nZXRTaGFkZXJJbmZvTG9nKGdsU2hhZGVyKSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2xTaGFkZXI7XG4gICAgfVxuICAgIGluaXRIZWFkU2VhcmNoRHJhdygpIHtcbiAgICAgICAgLy8gYnVpbGQgdGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbTpcbiAgICAgICAgY29uc3Qgc2hhZGVyVmVydGV4U291cmNlID0gJ1xcblxcXG4gICAgICBhdHRyaWJ1dGUgdmVjMiBhYXRfcG9zaXRpb247XFxuXFxcbiAgICAgIHZhcnlpbmcgdmVjMiB2VVY7XFxuXFxcbiAgICAgIFxcblxcXG4gICAgICB2b2lkIG1haW4odm9pZCkge1xcblxcXG4gICAgICAgIGdsX1Bvc2l0aW9uID0gdmVjNChhYXRfcG9zaXRpb24sIDAuLCAxLik7XFxuXFxcbiAgICAgICAgdlVWID0gMC41ICsgMC41ICogYWF0X3Bvc2l0aW9uO1xcblxcXG4gICAgICAgIHZVVi54ID0gMS4tdlVWLng7IC8vIG1pcnJvciBkaXBsYXlcXG5cXFxuICAgICAgfSc7XG4gICAgICAgIGNvbnN0IHNoYWRlckZyYWdtZW50U291cmNlID0gJ1xcblxcXG4gICAgICBwcmVjaXNpb24gbG93cCBmbG9hdDtcXG5cXFxuICAgICAgdmFyeWluZyB2ZWMyIHZVVjtcXG5cXFxuICAgICAgXFxuXFxcbiAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHNhbXBsZXJWaWRlbztcXG5cXFxuICAgICAgdW5pZm9ybSBtYXQyIHZpZGVvVHJhbnNmb3JtTWF0MjtcXG5cXFxuICAgICAgdW5pZm9ybSB2ZWMzIHV4eXM7XFxuXFxcbiAgICAgIFxcblxcXG4gICAgICB2b2lkIG1haW4odm9pZCkge1xcblxcXG4gICAgICAgIHZlYzIgdXZWaWRlb0NlbnRlcmVkID0gMi4wICogdmlkZW9UcmFuc2Zvcm1NYXQyICogKHZVViAtIDAuNSk7XFxuXFxcbiAgICAgICAgdmVjMiB1dlZpZGVvID0gdXZWaWRlb0NlbnRlcmVkICsgMC41O1xcblxcXG4gICAgICAgIHZlYzMgY29sb3JWaWRlbyA9IHRleHR1cmUyRChzYW1wbGVyVmlkZW8sIHV2VmlkZW8pLnJnYjtcXG5cXFxuICAgICAgICB2ZWMyIHBvcyA9IHZVVioyLi12ZWMyKDEuLDEuKTtcXG5cXFxuICAgICAgICB2ZWMyIGlzSW5zaWRlID0gc3RlcCh1eHlzLnh5LXV4eXMueip2ZWMyKDEuLDEuKSwgcG9zKTtcXG5cXFxuICAgICAgICBpc0luc2lkZSAqPSBzdGVwKHBvcywgdXh5cy54eSt1eHlzLnoqdmVjMigxLiwxLikpO1xcblxcXG4gICAgICAgIHZlYzIgYmxlbmRDZW50ZXJGYWN0b3IgPSBhYnMocG9zLXV4eXMueHkpIC8gdXh5cy56O1xcblxcXG4gICAgICAgIGZsb2F0IGFscGhhID0gaXNJbnNpZGUueCAqIGlzSW5zaWRlLnkgKiBwb3cobWF4KGJsZW5kQ2VudGVyRmFjdG9yLngsIGJsZW5kQ2VudGVyRmFjdG9yLnkpLCAzLik7XFxuXFxcbiAgICAgICAgdmVjMyBjb2xvciA9IG1peChjb2xvclZpZGVvLCB2ZWMzKDAuLDAuNiwxLiksIGFscGhhKTtcXG5cXFxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLDEuKTtcXG5cXFxuICAgICAgfSc7XG4gICAgICAgIGNvbnN0IGdsU2hhZGVyVmVydGV4ID0gdGhpcy5jb21waWxlU2hhZGVyKHNoYWRlclZlcnRleFNvdXJjZSwgdGhpcy5nbC5WRVJURVhfU0hBREVSLCAnVkVSVEVYJyk7XG4gICAgICAgIGNvbnN0IGdsU2hhZGVyRnJhZ21lbnQgPSB0aGlzLmNvbXBpbGVTaGFkZXIoc2hhZGVyRnJhZ21lbnRTb3VyY2UsIHRoaXMuZ2wuRlJBR01FTlRfU0hBREVSLCAnRlJBR01FTlQnKTtcbiAgICAgICAgdGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCBnbFNoYWRlclZlcnRleCk7XG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sIGdsU2hhZGVyRnJhZ21lbnQpO1xuICAgICAgICB0aGlzLmdsLmxpbmtQcm9ncmFtKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgICAgICBjb25zdCBzYW1wbGVyVmlkZW8gPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCAnc2FtcGxlclZpZGVvJyk7XG4gICAgICAgIHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1YeXMgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCAndXh5cycpO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgJ3ZpZGVvVHJhbnNmb3JtTWF0MicpO1xuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHNhbXBsZXJWaWRlbywgMCk7XG4gICAgfVxuICAgIGRyYXdIZWFkU2VhcmNoKGRldGVjdFN0YXRlKSB7XG4gICAgICAgIC8vIHVuYmluZCB0aGUgY3VycmVudCBGQk8gYW5kIHNldCB0aGUgdmlld3BvcnQgYXMgdGhlIHdob2xlIGNhbnZhczpcbiAgICAgICAgdGhpcy5nbC52aWV3cG9ydCgwLCAwLCB0aGlzLmN2LndpZHRoLCB0aGlzLmN2LmhlaWdodCk7XG4gICAgICAgIC8vIHVzZSB0aGUgaGVhZCBkcmF3IHNoYWRlciBwcm9ncmFtIGFuZCBzeW5jIHVuaWZvcm1zOlxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwKTtcbiAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMudmlkZW9UZXh0dXJlKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtM2YodGhpcy5oZWFkU2VhcmNoVW5pZm9ybVh5cywgZGV0ZWN0U3RhdGUueCwgZGV0ZWN0U3RhdGUueSwgZGV0ZWN0U3RhdGUucyk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDJmdih0aGlzLmhlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyLCBmYWxzZSwgdGhpcy52aWRlb1RyYW5zZm9ybU1hdDIpO1xuICAgICAgICAvLyBkcmF3IHRoZSBzcXVhcmUgbG9va2luZyBmb3IgdGhlIGhlYWRcbiAgICAgICAgLy8gdGhlIFZCTyBmaWxsaW5nIHRoZSB3aG9sZSBzY3JlZW4gaXMgc3RpbGwgYm91bmQgdG8gdGhlIGNvbnRleHRcbiAgICAgICAgLy8gZmlsbCB0aGUgdmlld1BvcnQ6XG4gICAgICAgIHRoaXMuZ2wuZHJhd0VsZW1lbnRzKHRoaXMuZ2wuVFJJQU5HTEVTLCAzLCB0aGlzLmdsLlVOU0lHTkVEX1NIT1JULCAwKTtcbiAgICB9XG4gICAgY29tcHV0ZUNhbWVyYU1vdmUoZGV0ZWN0U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNEZXRlY3RlZCAmJiBkZXRlY3RTdGF0ZS5kZXRlY3RlZCA8IHRoaXMuc2V0dGluZ3MuZGV0ZWN0aW9uVGhyZXNob2xkIC0gdGhpcy5zZXR0aW5ncy5kZXRlY3Rpb25IeXN0ZXJlc2lzKSB7XG4gICAgICAgICAgICAvLyBERVRFQ1RJT04gTE9TVFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pc0RldGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJldHVyblZhbHVlLmRSeCA9IDA7XG4gICAgICAgICAgICB0aGlzLnJldHVyblZhbHVlLmRSeSA9IDA7XG4gICAgICAgICAgICB0aGlzLnJldHVyblZhbHVlLmRaID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5zdGF0ZS5pc0RldGVjdGVkICYmIGRldGVjdFN0YXRlLmRldGVjdGVkIC0gdGhpcy5zZXR0aW5ncy5kZXRlY3Rpb25UaHJlc2hvbGQgKyB0aGlzLnNldHRpbmdzLmRldGVjdGlvbkh5c3RlcmVzaXMpIHtcbiAgICAgICAgICAgIC8vIEZBQ0UgREVURUNURURcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNEZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdIZWFkU2VhcmNoKGRldGVjdFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNFbmFibGVkIHx8ICF0aGlzLnN0YXRlLmlzRGV0ZWN0ZWQgfHwgIXRoaXMuc3RhdGUuaXNMb2FkZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJldHVyblZhbHVlOyAvLyBubyBjYW1lcmEgbW92ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnJlc3RIZWFkUG9zaXRpb24ubmVlZHNVcGRhdGUgJiYgIXRoaXMuZGlzYWJsZVJlc3RQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLm5lZWRzVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0YXRlLnJlc3RIZWFkUG9zaXRpb24ucnggPSBkZXRlY3RTdGF0ZS5yeDtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUucmVzdEhlYWRQb3NpdGlvbi5yeSA9IGRldGVjdFN0YXRlLnJ5O1xuICAgICAgICAgICAgdGhpcy5zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLnMgPSBkZXRlY3RTdGF0ZS5zO1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb21wdXRlIG1vdmVtZW50IG9mIHRoZSBjYW1lcmFcbiAgICAgICAgY29uc3QgdHMgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBkdCA9IHRzIC0gdGhpcy5sYXN0VGltZXN0YW1wO1xuICAgICAgICB0aGlzLnJldHVyblZhbHVlLmRSeCA9IGR0ICogdGhpcy5jb21wdXRlRGVsdGEodGhpcy5zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLnJ4LCBkZXRlY3RTdGF0ZS5yeCwgdGhpcy5zZXR0aW5ncy50b2wucngsIHRoaXMuc2V0dGluZ3Muc2Vuc2liaWxpdHkucngpO1xuICAgICAgICB0aGlzLnJldHVyblZhbHVlLmRSeSA9IGR0ICogdGhpcy5jb21wdXRlRGVsdGEodGhpcy5zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLnJ5LCBkZXRlY3RTdGF0ZS5yeSwgdGhpcy5zZXR0aW5ncy50b2wucnksIHRoaXMuc2V0dGluZ3Muc2Vuc2liaWxpdHkucnkpO1xuICAgICAgICB0aGlzLnJldHVyblZhbHVlLmRaID0gZHQgKiB0aGlzLmNvbXB1dGVEZWx0YSh0aGlzLnN0YXRlLnJlc3RIZWFkUG9zaXRpb24ucywgZGV0ZWN0U3RhdGUucywgdGhpcy5zZXR0aW5ncy50b2wucywgdGhpcy5zZXR0aW5ncy5zZW5zaWJpbGl0eS5zKTtcbiAgICAgICAgdGhpcy5sYXN0VGltZXN0YW1wID0gdHM7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHVyblZhbHVlO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRDb250cm9sU2VydmljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIEhlYWRDb250cm9sU2VydmljZV8xID0gcmVxdWlyZShcIi4vSGVhZENvbnRyb2xTZXJ2aWNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEhlYWRDb250cm9sU2VydmljZV8xKS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNheVNvbWV0aGluZyA9IGV4cG9ydHMuc2V0VXBVc2VyID0gZXhwb3J0cy5QSFJBU0VTID0gdm9pZCAwO1xuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgVk9JQ0UgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSAnZW4tR0InKTtcbn0sIDUwMCk7XG5sZXQgVk9JQ0UgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSAnZW4tR0InKTtcbmV4cG9ydHMuUEhSQVNFUyA9IHtcbiAgICBIRUxMTzogJ2BIaSwgJXVzZXJuYW1lJS4gSGF2ZSBhIGdvb2QgZ2FtZScsXG4gICAgUklHSFQ6ICdHb29kIHJpZ2h0IHR1cm4sICV1c2VybmFtZSUnLFxufTtcbmxldCB1c2VyTmFtZSA9ICcnO1xuY29uc3Qgc2V0VXBVc2VyID0gKG5hbWUpID0+IHtcbiAgICB1c2VyTmFtZSA9IG5hbWU7XG59O1xuZXhwb3J0cy5zZXRVcFVzZXIgPSBzZXRVcFVzZXI7XG5jb25zdCBzYXlTb21ldGhpbmcgPSAodGV4dCkgPT4ge1xuICAgIGlmICghVk9JQ0UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHQucmVwbGFjZSgnJXVzZXJuYW1lJScsIHVzZXJOYW1lKSk7XG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gVk9JQ0U7XG4gICAgdXR0ZXJhbmNlLnZvbHVtZSA9IDE7XG4gICAgdXR0ZXJhbmNlLnBpdGNoID0gMTtcbiAgICB1dHRlcmFuY2UucmF0ZSA9IDE7XG4gICAgc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xuICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayh1dHRlcmFuY2UpO1xufTtcbmV4cG9ydHMuc2F5U29tZXRoaW5nID0gc2F5U29tZXRoaW5nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=