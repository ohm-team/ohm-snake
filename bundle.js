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
    const headControlService = new HeadControlService_1.default();
    headControlService.addEventListener('down', () => console.log('down'));
    headControlService.addEventListener('up', () => console.log('up'));
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
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const HeadControls_1 = __importDefault(__webpack_require__(/*! ./vendor/HeadControls */ "./src/services/HeadControlService/vendor/HeadControls.js"));
__webpack_require__(/*! ./vendor/HeadControls.js */ "./src/services/HeadControlService/vendor/HeadControls.js");
class HeadControlService extends EventTarget {
    constructor() {
        super();
        this.movementLocks = {
            vertical: false,
            horizontal: false,
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
        HeadControls_1.default.init({
            canvasId: 'head-preview',
            callbackMove: this.handleMove,
            callbackReady: function (errCode) {
                if (errCode) {
                    console.log('ERROR: THREE.HeadControls NOT READY. errCode =', errCode);
                }
                else {
                    HeadControls_1.default.toggle(true);
                }
            },
            NNCPath: './vendor/',
            animateDelay: 2,
        });
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


/***/ }),

/***/ "./src/services/HeadControlService/vendor/HeadControls.js":
/*!****************************************************************!*\
  !*** ./src/services/HeadControlService/vendor/HeadControls.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 260:2-16 */
/***/ ((module) => {

/*
  Use JEELIZ FACE FILTER API to control the movements of a camera
  This script has been put into shared because it can be used with different 3D engines
  We have at least 2 integration examples:
    - with CesiumJS for a head controlled Google Earth like demo
    - with THREE.JS for a camera controller (THREE.HeadControls)

   ==== INITIALIZATION ====
  HeadControls.init(spec) with spec =
  spec (*-> mandatory): 
    - settings: object. override default settings if specified
    - canvasId*: id of the canvas where the JEEFITAPI will be initialized. We will draw the face tracking on it
    - callbackReady: callback launched when the controller is ready. launched with errCode if error, false otherwise
    - callbackMove*: function to move the camera
    - disableRestPosition: do not offset the face position with a rest position. Default: false
    - NNCPath*: path of the NN net

  ==== OTHER METHODS ====
  HeadControls.toggle(<boolean>onOff): toggle on or off the HeadControls

*/

var HeadControls = (function(){
  const _defaultSettings = {
    detectionThreshold: 0.85, // sensibility, between 0 and 1. Less -> more sensitive
    detectionHysteresis: 0.05,
    tol: {
      rx: 5,// do not move if head turn more than this value (in degrees) from head rest position
      ry: 5,
      s: 5 // do not move forward/backward if head is larger/smaller than this percent from the rest position
    },
    sensibility: {
      rx: 1,
      ry: 1,
      s: 1
    }
  };

  // private variables:
  let _settings = null;
  const _returnValue = {
    dRx:0, dRy: 0,
    dZ: 0
  };

  // internal state:
  const _state = {
    isLoaded: false,
    isDetected:false,
    isEnabled: false,
    restHeadPosition: { // position of the head matching with No Move
      needsUpdate: false,
      s: 0,
      rx: 0,
      ry: 0
    }
  };

  let _lastTimestamp = 0;
  let _gl = null, _cv = null, _videoTexture = null, _videoTransformMat2 = null, _glHeadSearchDrawShaderProgram = null;
  let _headSearchUniformXys = null, _headSearchUniformVideoTransformMat2 = null;
  let _disableRestPosition = false;

  // private functions:
  function compute_delta(ref, val, tol, sensibility){
    if (Math.abs(ref-val)<tol){
      return 0;
    }
    return (val-ref) * sensibility;
  }

  function compile_shader(source, glType, typeString) {
    const glShader = _gl.createShader(glType);
    _gl.shaderSource(glShader, source);
    _gl.compileShader(glShader);
    if (!_gl.getShaderParameter(glShader, _gl.COMPILE_STATUS)) {
      alert("ERROR IN " + typeString +  " SHADER: " + _gl.getShaderInfoLog(glShader));
      return null;
    }
    return glShader;
  };

  function init_headSearchDraw(){
    // build _glHeadSearchDrawShaderProgram:
    const shaderVertexSource = "\n\
      attribute vec2 aat_position;\n\
      varying vec2 vUV;\n\
      \n\
      void main(void) {\n\
        gl_Position = vec4(aat_position, 0., 1.);\n\
        vUV = 0.5 + 0.5 * aat_position;\n\
        vUV.x = 1.-vUV.x; // mirror diplay\n\
      }";
    const shaderFragmentSource = "\n\
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
      }";

    const glShaderVertex = compile_shader(shaderVertexSource, _gl.VERTEX_SHADER, 'VERTEX');
    const glShaderFragment = compile_shader(shaderFragmentSource, _gl.FRAGMENT_SHADER, 'FRAGMENT');

    _glHeadSearchDrawShaderProgram = _gl.createProgram();
    _gl.attachShader(_glHeadSearchDrawShaderProgram, glShaderVertex);
    _gl.attachShader(_glHeadSearchDrawShaderProgram, glShaderFragment);

    _gl.linkProgram(_glHeadSearchDrawShaderProgram);
    const samplerVideo = _gl.getUniformLocation(_glHeadSearchDrawShaderProgram, 'samplerVideo');
    _headSearchUniformXys = _gl.getUniformLocation(_glHeadSearchDrawShaderProgram, 'uxys');
    _headSearchUniformVideoTransformMat2 = _gl.getUniformLocation(_glHeadSearchDrawShaderProgram, 'videoTransformMat2');

    _gl.useProgram(_glHeadSearchDrawShaderProgram);
    _gl.uniform1i(samplerVideo, 0);
  } //end init_headSearchDraw()

  function draw_headSearch(detectState){
    // unbind the current FBO and set the viewport as the whole canvas:
    _gl.viewport(0, 0, _cv.width, _cv.height);

    // use the head draw shader program and sync uniforms:
    _gl.useProgram(_glHeadSearchDrawShaderProgram);
    _gl.activeTexture(_gl.TEXTURE0);
    _gl.bindTexture(_gl.TEXTURE_2D, _videoTexture);
    _gl.uniform3f(_headSearchUniformXys, detectState.x, detectState.y, detectState.s);
    _gl.uniformMatrix2fv(_headSearchUniformVideoTransformMat2, false, _videoTransformMat2);

    // draw the square looking for the head
    // the VBO filling the whole screen is still bound to the context
    // fill the viewPort:
    _gl.drawElements(_gl.TRIANGLES, 3, _gl.UNSIGNED_SHORT, 0);
  }

  function compute_cameraMove(detectState){
    if (_state.isDetected && detectState.detected<_settings.detectionThreshold-_settings.detectionHysteresis){
      // DETECTION LOST
      
      _state.isDetected = false;
      _returnValue.dRx = 0;
      _returnValue.dRy = 0;
      _returnValue.dZ = 0;
    } else if (!_state.isDetected && detectState.detected>_settings.detectionThreshold+_settings.detectionHysteresis){
      // FACE DETECTED
      _state.isDetected = true;
    }

    if (_state.isEnabled){
      draw_headSearch(detectState);
    }

    if (!_state.isEnabled || !_state.isDetected || !_state.isLoaded){
      return _returnValue; // no camera move
    }

    if (_state.restHeadPosition.needsUpdate && !_disableRestPosition){
      _state.restHeadPosition.needsUpdate = false;
      _state.restHeadPosition.rx = detectState.rx;
      _state.restHeadPosition.ry = detectState.ry;
      _state.restHeadPosition.s = detectState.s;
      _lastTimestamp = Date.now();
    }

    // compute movement of the camera
    const ts = Date.now();
    const dt = ts - _lastTimestamp;
    _returnValue.dRx = dt * compute_delta(_state.restHeadPosition.rx, detectState.rx, _settings.tol.rx, _settings.sensibility.rx);
    _returnValue.dRy = dt * compute_delta(_state.restHeadPosition.ry, detectState.ry, _settings.tol.ry, _settings.sensibility.ry);
    _returnValue.dZ = dt * compute_delta(_state.restHeadPosition.s, detectState.s, _settings.tol.s, _settings.sensibility.s);
    
    _lastTimestamp = ts;
    return _returnValue;
  } //end compute_cameraMove()

  // public methods:
  const that = {
    init: function(spec){
      // set settings:
      if (typeof(spec.settings)==='undefined') spec.settings={};
      _disableRestPosition = (typeof(spec.disableRestPosition)==='undefined') ? false : spec.disableRestPosition;
      _settings = Object.assign({}, _defaultSettings, spec.settings);
      _settings.tol.rx *= Math.PI / 180; // convert from degrees to radians
      _settings.tol.ry *= Math.PI / 180;
      _settings.tol.s /= 100;

      // init the API:
       JEEFACEFILTERAPI.init({
        canvasId: spec.canvasId,
        NNCPath: spec.NNCPath, // root of NNC.json file
        callbackReady: function(errCode, jeeFaceFilterObj){
          if (errCode){
            console.log('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
            if (spec.callbackReady){
              spec.callbackReady(errCode);
            }
            return;
          }
          _gl = jeeFaceFilterObj['GL'];
          _videoTexture = jeeFaceFilterObj['videoTexture'];
          _videoTransformMat2 = jeeFaceFilterObj['videoTransformMat2'];
          _cv = jeeFaceFilterObj['canvasElement'];

          init_headSearchDraw();

          if (spec.callbackReady){
            spec.callbackReady(false);
          }
          _state.isLoaded = true;
        }, //end callbackReady()

        // called at each render iteration (drawing loop):
        callbackTrack: function(detectState){
          const mv = compute_cameraMove(detectState);
          mv.expressions = detectState.expressions;
          if (!_state.isEnabled){
            return;
          }
          if (mv.dRx!==0 || mv.dRy!==0 || mv.dZ!==0){
            spec.callbackMove(mv);
          }
        }
      }); //end JEEFACEFILTERAPI.init call
    }, //end init()

    toggle: function(isEnabled){
      if (_state.isEnabled===isEnabled){
        return true;
      } else if (!isEnabled){ //disable
        _state.isEnabled = false;
        return true;
      } else {
        _state.isEnabled = true;
        _state.restHeadPosition.needsUpdate = true;
        return true;
      }
    },

    reset_restHeadPosition: function(){
      _state.restHeadPosition.needsUpdate = true;
    }
  }; //end that
  return that;
})();

// Export ES6 module:
try {
  module.exports = HeadControls;
} catch(e){
  console.log('HeadControls ES6 Module not exported');
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvY29uc29sZS1zdWJzY3JpYmVyL2luZGV4LmpzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3N0eWxlL2luZGV4LnNjc3M/N2ViOSIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2ltYWdlQ2FwdHVyZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9IZWFkQ29udHJvbFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvdm9pY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS92ZW5kb3IvSGVhZENvbnRyb2xzLmpzIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxREFBcUQ7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBNkI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGRDtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHNIQUFzSDtBQUN0SDtBQUNBLGtEQUFrRCxpQkFBaUIscUJBQXFCLDBCQUEwQixvQkFBb0Isa0JBQWtCLGNBQWMsMkJBQTJCLDBCQUEwQixxQkFBcUIseUJBQXlCLEVBQUUsa0JBQWtCLHVDQUF1Qyx1QkFBdUIscUJBQXFCLGdDQUFnQywwQkFBMEIsMEJBQTBCLGdD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QUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLEM7Ozs7OztVQ3RRQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1YnNjcmliZSB0byB0aGUgY29uc29sZSBvdXRwdXQgXG4gKlxuICogQGF1dGhvciBTYW1zb24gUmFkdVxuICovIFxuKGZ1bmN0aW9uKCl7XG4gICAgdmFyIF9sb2cgPSBjb25zb2xlLmxvZztcbiAgICB2YXIgX3dhcm4gPSBjb25zb2xlLndhcm47XG4gICAgdmFyIF9lcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgdmFyIF9kZWJ1ZyA9IGNvbnNvbGUuZGVidWc7XG5cbiAgICB2YXIgQ29uc29sZVN1YnNjcmliZXIgPSB7XG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gX2xvZztcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiA9IF93YXJuO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciA9IF9lcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcgPSBfZGVidWc7XG4gICAgICAgIH0sIFxuICAgICAgICBiaW5kOiBmdW5jdGlvbihjYiwgcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBjYWxsYmFjayBmdW5jdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ZW50TG9nZ2luZyA9IEJvb2xlYW4ocHJldmVudExvZ2dpbmcpOyAvL2ZvcmNlIGJvb2xcblxuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfSU5GTyA9IFwiaW5mb1wiO1xuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfV0FSTiA9IFwid2FyblwiO1xuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfRVJST1IgPSBcImVycm9yXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9ERUJVRyA9IFwiZGVidWdcIjtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBjb25zb2xlLmluZm8gPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfbG9nKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9nLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9JTkZPLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF93YXJuKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd2Fybi5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfV0FSTiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX2Vycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZXJyb3IuY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX0VSUk9SLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfZGVidWcpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWJ1Zy5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfREVCVUcsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9leHBvcnRcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gQ29uc29sZVN1YnNjcmliZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIHdpbmRvdy5Db25zb2xlU3Vic2NyaWJlciA9IENvbnNvbGVTdWJzY3JpYmVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBleHBvcnQgbW9kdWxlLlwiKTtcbiAgICB9XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrOjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJidXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyB9XFxuICBidXR0b24uc3RhcnQge1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICMzODJiMjI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmc6IDEuMjVlbSAyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmYwZjA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMTg1OTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVlbTtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYmFja2dyb3VuZCAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7IH1cXG4gICAgYnV0dG9uLnN0YXJ0OjpiZWZvcmUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmOWM0ZDI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2IxODU5NztcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNzVlbSwgLTFlbSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYm94LXNoYWRvdyAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7IH1cXG4gICAgYnV0dG9uLnN0YXJ0OmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZlOWU5O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVlbSk7IH1cXG4gICAgICBidXR0b24uc3RhcnQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2IxODU5NztcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC41ZW0sIC0xZW0pOyB9XFxuICAgIGJ1dHRvbi5zdGFydDphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmU5ZTk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMGVtLCAwLjc1ZW0pOyB9XFxuICAgICAgYnV0dG9uLnN0YXJ0OmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjYjE4NTk3O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAtMWVtKTsgfVxcblxcbi50ZXh0Ym94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMCAwIDQ1cHggMDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHR1cm5hcm91bmQgMjBzIGluZmluaXRlOyB9XFxuXFxuLnRleHRib3gtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Y2ZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICMyNzIzNDM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTsgfVxcblxcbi50ZXh0Ym94LWZpZWxkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTVweDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEzcHg7IH1cXG5cXG4udGV4dGJveC1sYWJlbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC4ycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7IH1cXG5cXG4udGV4dGJveC1hY3Rpb24ge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWU4ZTg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuICAudGV4dGJveC1hY3Rpb25bZGlzYWJsZWRdIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiBzdmcge1xcbiAgZmlsbDogIzI3MjM0MztcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDY1JTsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1mYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmE4YTg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXNpZGUge1xcbiAgd2lkdGg6IDEwcHg7IH1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtYm90dG9tLFxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC10b3Age1xcbiAgaGVpZ2h0OiAxMHB4OyB9XFxuXFxuLnRleHRib3gtYWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2NlY2U7IH1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIgLnRleHRib3gtZmFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MjgyOyB9XFxuXFxuLnRleHRib3gtdGV4dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udDogMi41cmVtIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4udGV4dGJveC10ZXh0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbi50ZXh0Ym94LXRleHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4udGV4dGJveC1mYWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzIzNDM7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnRleHRib3gtc2lkZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTsgfVxcblxcbi50ZXh0Ym94LWJvdHRvbSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7IH1cXG5cXG4udGV4dGJveC10b3Age1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBob3ZlciB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHVybmFyb3VuZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7IH1cXG4gIDMzJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTsgfVxcbiAgNjclIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTsgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpOyB9XFxuICA2NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpOyB9IH1cXG5cXG4ucmVmZXJlbmNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAxNXB4OyB9XFxuXFxuLnJlZmVyZW5jZSBpbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7IH1cXG5cXG4uaGVhZC1wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwOyB9XFxuXFxuLmNvbnNvbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwOyB9XFxuXFxuYm9keSwgaHRtbCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhYWZmYTksICMxMWZmYmQpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5nYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE4cHg7IH1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdCdW5nZWUgU2hhZGUnO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4ucGhvdG8tY2FudmFzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9pbnB1dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvZ2FtZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvY29uc29sZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0VBVnRCO0lBWUksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixjQXRCVTtJQXVCVix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQXhCZ0I7SUF5QmhCLHlCQXRCaUI7SUF1QmpCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIscUdBQXFHLEVBQUE7SUFyQnpHO01BdUJNLGtCQUFrQjtNQUNsQixXQUFX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QWdCO0VBQ2hCLHdEQUF3RDtFQUN4RCxvREFBb0QsRUFBQTs7QUFHdEQ7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixlQUFlLEVBQUE7O0FBSWpCO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SdWJpazo3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuJGJnOiAjZmZmO1xcbiR0ZXh0OiAjMzgyYjIyO1xcbiRsaWdodC1waW5rOiAjZmZmMGYwO1xcbiRwaW5rOiAjZmZlOWU5O1xcbiRkYXJrLXBpbms6ICNmOWM0ZDI7XFxuJHBpbmstYm9yZGVyOiAjYjE4NTk3O1xcbiRwaW5rLXNoYWRvdzogI2ZmZTNlMjtcXG5cXG5cXG5idXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgJi5zdGFydCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogJHRleHQ7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmc6IDEuMjVlbSAyZW07XFxuICAgIGJhY2tncm91bmQ6ICRsaWdodC1waW5rO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkcGluay1ib3JkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVlbTtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYmFja2dyb3VuZCAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7XFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgYmFja2dyb3VuZDogJGRhcmstcGluaztcXG4gICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAkcGluay1ib3JkZXI7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjc1ZW0sIC0xZW0pO1xcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSksIGJveC1zaGFkb3cgMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpO1xcbiAgICB9XFxuICAgICY6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICRwaW5rO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVlbSk7XFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAkcGluay1ib3JkZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNWVtLCAtMWVtKTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgJjphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICRwaW5rO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBlbSwgMC43NWVtKTtcXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRwaW5rLWJvcmRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgLTFlbSk7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy9odHRwczovL2NvZGVwZW4uaW8vam91YW5tYXJjZWwvcGVuL1Bvd2JyZ3FcXG4udGV4dGJveCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW46IDAgMCA0NXB4IDA7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHR1cm5hcm91bmQgMjBzIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiB0dXJuYXJvdW5kIDIwcyBpbmZpbml0ZTtcXG59XFxuXFxuLnRleHRib3gtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Y2ZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICMyNzIzNDM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnRleHRib3gtZmllbGQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxNXB4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnRleHRib3gtbGFiZWwge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgLTAuMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyAtMC4ycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb24ge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWU4ZTg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgXFxuICAmW2Rpc2FibGVkXSB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiBzdmcge1xcbiAgZmlsbDogIzI3MjM0MztcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDY1JTtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LWZhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YThhODtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1zaWRlIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtYm90dG9tLFxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC10b3Age1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljY2VjZTtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uOmhvdmVyIC50ZXh0Ym94LWZhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2ODI4MjtcXG59XFxuXFxuLnRleHRib3gtdGV4dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udDogMi41cmVtIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGV4dGJveC10ZXh0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGV4dGJveC10ZXh0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50ZXh0Ym94LWZhY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjM0MztcXG4gIGxlZnQ6IDA7XFxufVxcblxcbi50ZXh0Ym94LXNpZGUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XFxufVxcblxcbi50ZXh0Ym94LWJvdHRvbSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxufVxcblxcbi50ZXh0Ym94LXRvcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGhvdmVyIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgfVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHVybmFyb3VuZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICB9XFxuICAzMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7XFxuICB9XFxuICA2NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gIH1cXG4gIDMzJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gIH1cXG4gIDY3JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ucmVmZXJlbmNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ucmVmZXJlbmNlIGltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXCIsXCIuaGVhZC1wcmV2aWV3IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cIixcIi5jb25zb2xlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cIixcIkBpbXBvcnQgXFxcIi4vYnV0dG9uXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2lucHV0XFxcIjtcXG5AaW1wb3J0IFxcXCIuL2dhbWVcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29uc29sZS5zY3NzXFxcIjtcXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYWFmZmE5LCAjMTFmZmJkKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZSc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnBob3RvLWNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbmFibGVNb2JpbGVDb25zb2xlID0gdm9pZCAwO1xuY29uc3QgY29uc29sZV9zdWJzY3JpYmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvbnNvbGUtc3Vic2NyaWJlclwiKSk7XG5jb25zdCBlbmFibGVNb2JpbGVDb25zb2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xuICAgIGNvbnNvbGVfc3Vic2NyaWJlcl8xLmRlZmF1bHQuYmluZCgoY2F0ZWdvcnksIGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlci5wdXNoKHsgY2F0ZWdvcnksIG1lc3NhZ2U6IGFyZ3NbMF0gfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlJykuaW5uZXJIVE1MID0gYnVmZmVyLm1hcCgobSkgPT4gYDxwPiR7bS5tZXNzYWdlfTwvcD5gKS5qb2luKCcnKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmVuYWJsZU1vYmlsZUNvbnNvbGUgPSBlbmFibGVNb2JpbGVDb25zb2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudGFrZVBob3RvID0gdm9pZCAwO1xubGV0IGltYWdlQ2FwdHVyZTtcbmxldCBpc0luaXQgPSBmYWxzZTtcbi8vIHRvZG86IHNob3cgbG9hZGVyIHVudGlsIGV2ZXJ5dGhpbmcgaXMgaW5pdGlhbGlzZWRcbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgaWYgKGlzSW5pdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlzSW5pdCA9IHRydWU7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAgICAgLnRoZW4oKG1lZGlhU3RyZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYWNrID0gbWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgICAgaW1hZ2VDYXB0dXJlID0gbmV3IEltYWdlQ2FwdHVyZSh0cmFjayk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbn07XG5jb25zdCB0YWtlUGhvdG8gPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB5aWVsZCBpbWFnZUNhcHR1cmVcbiAgICAgICAgLnRha2VQaG90bygpXG4gICAgICAgIC50aGVuKChibG9iKSA9PiBjcmVhdGVJbWFnZUJpdG1hcChibG9iKSlcbiAgICAgICAgLnRoZW4oKGltYWdlQml0bWFwKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWtlUGhvdG9DYW52YXMnKTtcbiAgICAgICAgY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkcmF3Q2FudmFzKGNhbnZhcywgaW1hZ2VCaXRtYXApO1xuICAgICAgICAvL2NhbnZhcy50b0Jsb2IoYXN5bmMgKGJsb2IpID0+IHtcbiAgICAgICAgLy8gIHRyeSB7XG4gICAgICAgIC8vICAgIGF3YWl0IGNyZWF0ZUZpbGUoYmxvYik7XG4gICAgICAgIC8vICAgIGF3YWl0IHJlYWRGaWxlKCk7XG4gICAgICAgIC8vICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vICAgIHRocm93IGU7XG4gICAgICAgIC8vICB9XG4gICAgICAgIC8vfSk7XG4gICAgfSk7XG59KTtcbmV4cG9ydHMudGFrZVBob3RvID0gdGFrZVBob3RvO1xuZnVuY3Rpb24gZHJhd0NhbnZhcyhjYW52YXMsIGltZykge1xuICAgIGNhbnZhcy53aWR0aCA9IGdldENvbXB1dGVkU3R5bGUoY2FudmFzKS53aWR0aC5zcGxpdCgncHgnKVswXTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLmhlaWdodC5zcGxpdCgncHgnKVswXTtcbiAgICBsZXQgcmF0aW8gPSBNYXRoLm1pbihjYW52YXMud2lkdGggLyBpbWcud2lkdGgsIGNhbnZhcy5oZWlnaHQgLyBpbWcuaGVpZ2h0KTtcbiAgICBsZXQgeCA9IChjYW52YXMud2lkdGggLSBpbWcud2lkdGggKiByYXRpbykgLyAyO1xuICAgIGxldCB5ID0gKGNhbnZhcy5oZWlnaHQgLSBpbWcuaGVpZ2h0ICogcmF0aW8pIC8gMjtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UoaW1nLCAwLCAwLCBpbWcud2lkdGgsIGltZy5oZWlnaHQsIHgsIHksIGltZy53aWR0aCAqIHJhdGlvLCBpbWcuaGVpZ2h0ICogcmF0aW8pO1xufVxuaW5pdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IEhlYWRDb250cm9sU2VydmljZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZVwiKSk7XG5jb25zdCBpbWFnZUNhcHR1cmVfMSA9IHJlcXVpcmUoXCIuL2ltYWdlQ2FwdHVyZVwiKTtcbnJlcXVpcmUoXCIuL3N0eWxlL2luZGV4LnNjc3NcIik7XG5jb25zdCB2b2ljZV8xID0gcmVxdWlyZShcIi4vdm9pY2VcIik7XG5jb25zdCBjb25zb2xlXzEgPSByZXF1aXJlKFwiLi9jb25zb2xlXCIpO1xuY29uc29sZV8xLmVuYWJsZU1vYmlsZUNvbnNvbGUoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgaGVhZENvbnRyb2xTZXJ2aWNlID0gbmV3IEhlYWRDb250cm9sU2VydmljZV8xLmRlZmF1bHQoKTtcbiAgICBoZWFkQ29udHJvbFNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignZG93bicsICgpID0+IGNvbnNvbGUubG9nKCdkb3duJykpO1xuICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCd1cCcsICgpID0+IGNvbnNvbGUubG9nKCd1cCcpKTtcbiAgICBoZWFkQ29udHJvbFNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbGVmdCcsICgpID0+IGNvbnNvbGUubG9nKCdsZWZ0JykpO1xuICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdyaWdodCcsICgpID0+IGNvbnNvbGUubG9nKCdyaWdodCcpKTtcbn0pO1xuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRCdXR0b24nKTtcbmNvbnN0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0Jyk7XG5jb25zdCBnYW1lU2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lSW5wdXQnKTtcbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgZ2FtZVNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG5hbWVJbnB1dC5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgICBpZiAobmFtZUlucHV0LnZhbHVlKSB7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc3RhcnRCdXR0b24ub25jbGljayA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBzdGFydEdhbWUobmFtZUlucHV0LnZhbHVlKTtcbiAgICB9KTtcbn07XG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyTmFtZSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgaW1hZ2VDYXB0dXJlXzEudGFrZVBob3RvKCk7XG4gICAgICAgIGdhbWVTY3JlZW4uc3R5bGUuZGlzcGxheSA9IG51bGw7XG4gICAgICAgIHN0YXJ0U2NyZWVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHZvaWNlXzEuc2V0VXBVc2VyKHBsYXllck5hbWUpO1xuICAgICAgICAvLyBzYXlTb21ldGhpbmcoUEhSQVNFUy5IRUxMTyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGFsZXJ0KGUpO1xuICAgIH1cbn0pO1xuaW5pdCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBIZWFkQ29udHJvbHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi92ZW5kb3IvSGVhZENvbnRyb2xzXCIpKTtcbnJlcXVpcmUoXCIuL3ZlbmRvci9IZWFkQ29udHJvbHMuanNcIik7XG5jbGFzcyBIZWFkQ29udHJvbFNlcnZpY2UgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubW92ZW1lbnRMb2NrcyA9IHtcbiAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZU1vdmUgPSAobXYpID0+IHtcbiAgICAgICAgICAgIGlmIChtdi5kUnggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF4aXNNb3ZlbWVudCh7IGF4aXM6ICd2ZXJ0aWNhbCcsIGF4aXNQb3NpdGlvbjogbXYuZFJ4LCBtYXhWYWx1ZTogJ2Rvd24nLCBtaW5WYWx1ZTogJ3VwJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtdi5kUnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF4aXNNb3ZlbWVudCh7IGF4aXM6ICdob3Jpem9udGFsJywgYXhpc1Bvc2l0aW9uOiBtdi5kUnksIG1heFZhbHVlOiAnbGVmdCcsIG1pblZhbHVlOiAncmlnaHQnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZUF4aXNNb3ZlbWVudCA9ICh7IGF4aXMsIGF4aXNQb3NpdGlvbiwgbWF4VmFsdWUsIG1pblZhbHVlLCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoYXhpc1Bvc2l0aW9uIDwgLTEwICYmICF0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQobWluVmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXhpc1Bvc2l0aW9uID4gMTAgJiYgIXRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChtYXhWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChheGlzUG9zaXRpb24gPiAtNSAmJiBheGlzUG9zaXRpb24gPCA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBIZWFkQ29udHJvbHNfMS5kZWZhdWx0LmluaXQoe1xuICAgICAgICAgICAgY2FudmFzSWQ6ICdoZWFkLXByZXZpZXcnLFxuICAgICAgICAgICAgY2FsbGJhY2tNb3ZlOiB0aGlzLmhhbmRsZU1vdmUsXG4gICAgICAgICAgICBjYWxsYmFja1JlYWR5OiBmdW5jdGlvbiAoZXJyQ29kZSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogVEhSRUUuSGVhZENvbnRyb2xzIE5PVCBSRUFEWS4gZXJyQ29kZSA9JywgZXJyQ29kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBIZWFkQ29udHJvbHNfMS5kZWZhdWx0LnRvZ2dsZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgTk5DUGF0aDogJy4vdmVuZG9yLycsXG4gICAgICAgICAgICBhbmltYXRlRGVsYXk6IDIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRDb250cm9sU2VydmljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIEhlYWRDb250cm9sU2VydmljZV8xID0gcmVxdWlyZShcIi4vSGVhZENvbnRyb2xTZXJ2aWNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEhlYWRDb250cm9sU2VydmljZV8xKS5kZWZhdWx0OyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNheVNvbWV0aGluZyA9IGV4cG9ydHMuc2V0VXBVc2VyID0gZXhwb3J0cy5QSFJBU0VTID0gdm9pZCAwO1xuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgVk9JQ0UgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSAnZW4tR0InKTtcbn0sIDUwMCk7XG5sZXQgVk9JQ0UgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSAnZW4tR0InKTtcbmV4cG9ydHMuUEhSQVNFUyA9IHtcbiAgICBIRUxMTzogJ2BIaSwgJXVzZXJuYW1lJS4gSGF2ZSBhIGdvb2QgZ2FtZScsXG4gICAgUklHSFQ6ICdHb29kIHJpZ2h0IHR1cm4sICV1c2VybmFtZSUnLFxufTtcbmxldCB1c2VyTmFtZSA9ICcnO1xuY29uc3Qgc2V0VXBVc2VyID0gKG5hbWUpID0+IHtcbiAgICB1c2VyTmFtZSA9IG5hbWU7XG59O1xuZXhwb3J0cy5zZXRVcFVzZXIgPSBzZXRVcFVzZXI7XG5jb25zdCBzYXlTb21ldGhpbmcgPSAodGV4dCkgPT4ge1xuICAgIGlmICghVk9JQ0UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHQucmVwbGFjZSgnJXVzZXJuYW1lJScsIHVzZXJOYW1lKSk7XG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gVk9JQ0U7XG4gICAgdXR0ZXJhbmNlLnZvbHVtZSA9IDE7XG4gICAgdXR0ZXJhbmNlLnBpdGNoID0gMTtcbiAgICB1dHRlcmFuY2UucmF0ZSA9IDE7XG4gICAgc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xuICAgIHNwZWVjaFN5bnRoZXNpcy5zcGVhayh1dHRlcmFuY2UpO1xufTtcbmV4cG9ydHMuc2F5U29tZXRoaW5nID0gc2F5U29tZXRoaW5nO1xuIiwiLypcbiAgVXNlIEpFRUxJWiBGQUNFIEZJTFRFUiBBUEkgdG8gY29udHJvbCB0aGUgbW92ZW1lbnRzIG9mIGEgY2FtZXJhXG4gIFRoaXMgc2NyaXB0IGhhcyBiZWVuIHB1dCBpbnRvIHNoYXJlZCBiZWNhdXNlIGl0IGNhbiBiZSB1c2VkIHdpdGggZGlmZmVyZW50IDNEIGVuZ2luZXNcbiAgV2UgaGF2ZSBhdCBsZWFzdCAyIGludGVncmF0aW9uIGV4YW1wbGVzOlxuICAgIC0gd2l0aCBDZXNpdW1KUyBmb3IgYSBoZWFkIGNvbnRyb2xsZWQgR29vZ2xlIEVhcnRoIGxpa2UgZGVtb1xuICAgIC0gd2l0aCBUSFJFRS5KUyBmb3IgYSBjYW1lcmEgY29udHJvbGxlciAoVEhSRUUuSGVhZENvbnRyb2xzKVxuXG4gICA9PT09IElOSVRJQUxJWkFUSU9OID09PT1cbiAgSGVhZENvbnRyb2xzLmluaXQoc3BlYykgd2l0aCBzcGVjID1cbiAgc3BlYyAoKi0+IG1hbmRhdG9yeSk6IFxuICAgIC0gc2V0dGluZ3M6IG9iamVjdC4gb3ZlcnJpZGUgZGVmYXVsdCBzZXR0aW5ncyBpZiBzcGVjaWZpZWRcbiAgICAtIGNhbnZhc0lkKjogaWQgb2YgdGhlIGNhbnZhcyB3aGVyZSB0aGUgSkVFRklUQVBJIHdpbGwgYmUgaW5pdGlhbGl6ZWQuIFdlIHdpbGwgZHJhdyB0aGUgZmFjZSB0cmFja2luZyBvbiBpdFxuICAgIC0gY2FsbGJhY2tSZWFkeTogY2FsbGJhY2sgbGF1bmNoZWQgd2hlbiB0aGUgY29udHJvbGxlciBpcyByZWFkeS4gbGF1bmNoZWQgd2l0aCBlcnJDb2RlIGlmIGVycm9yLCBmYWxzZSBvdGhlcndpc2VcbiAgICAtIGNhbGxiYWNrTW92ZSo6IGZ1bmN0aW9uIHRvIG1vdmUgdGhlIGNhbWVyYVxuICAgIC0gZGlzYWJsZVJlc3RQb3NpdGlvbjogZG8gbm90IG9mZnNldCB0aGUgZmFjZSBwb3NpdGlvbiB3aXRoIGEgcmVzdCBwb3NpdGlvbi4gRGVmYXVsdDogZmFsc2VcbiAgICAtIE5OQ1BhdGgqOiBwYXRoIG9mIHRoZSBOTiBuZXRcblxuICA9PT09IE9USEVSIE1FVEhPRFMgPT09PVxuICBIZWFkQ29udHJvbHMudG9nZ2xlKDxib29sZWFuPm9uT2ZmKTogdG9nZ2xlIG9uIG9yIG9mZiB0aGUgSGVhZENvbnRyb2xzXG5cbiovXG5cbnZhciBIZWFkQ29udHJvbHMgPSAoZnVuY3Rpb24oKXtcbiAgY29uc3QgX2RlZmF1bHRTZXR0aW5ncyA9IHtcbiAgICBkZXRlY3Rpb25UaHJlc2hvbGQ6IDAuODUsIC8vIHNlbnNpYmlsaXR5LCBiZXR3ZWVuIDAgYW5kIDEuIExlc3MgLT4gbW9yZSBzZW5zaXRpdmVcbiAgICBkZXRlY3Rpb25IeXN0ZXJlc2lzOiAwLjA1LFxuICAgIHRvbDoge1xuICAgICAgcng6IDUsLy8gZG8gbm90IG1vdmUgaWYgaGVhZCB0dXJuIG1vcmUgdGhhbiB0aGlzIHZhbHVlIChpbiBkZWdyZWVzKSBmcm9tIGhlYWQgcmVzdCBwb3NpdGlvblxuICAgICAgcnk6IDUsXG4gICAgICBzOiA1IC8vIGRvIG5vdCBtb3ZlIGZvcndhcmQvYmFja3dhcmQgaWYgaGVhZCBpcyBsYXJnZXIvc21hbGxlciB0aGFuIHRoaXMgcGVyY2VudCBmcm9tIHRoZSByZXN0IHBvc2l0aW9uXG4gICAgfSxcbiAgICBzZW5zaWJpbGl0eToge1xuICAgICAgcng6IDEsXG4gICAgICByeTogMSxcbiAgICAgIHM6IDFcbiAgICB9XG4gIH07XG5cbiAgLy8gcHJpdmF0ZSB2YXJpYWJsZXM6XG4gIGxldCBfc2V0dGluZ3MgPSBudWxsO1xuICBjb25zdCBfcmV0dXJuVmFsdWUgPSB7XG4gICAgZFJ4OjAsIGRSeTogMCxcbiAgICBkWjogMFxuICB9O1xuXG4gIC8vIGludGVybmFsIHN0YXRlOlxuICBjb25zdCBfc3RhdGUgPSB7XG4gICAgaXNMb2FkZWQ6IGZhbHNlLFxuICAgIGlzRGV0ZWN0ZWQ6ZmFsc2UsXG4gICAgaXNFbmFibGVkOiBmYWxzZSxcbiAgICByZXN0SGVhZFBvc2l0aW9uOiB7IC8vIHBvc2l0aW9uIG9mIHRoZSBoZWFkIG1hdGNoaW5nIHdpdGggTm8gTW92ZVxuICAgICAgbmVlZHNVcGRhdGU6IGZhbHNlLFxuICAgICAgczogMCxcbiAgICAgIHJ4OiAwLFxuICAgICAgcnk6IDBcbiAgICB9XG4gIH07XG5cbiAgbGV0IF9sYXN0VGltZXN0YW1wID0gMDtcbiAgbGV0IF9nbCA9IG51bGwsIF9jdiA9IG51bGwsIF92aWRlb1RleHR1cmUgPSBudWxsLCBfdmlkZW9UcmFuc2Zvcm1NYXQyID0gbnVsbCwgX2dsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtID0gbnVsbDtcbiAgbGV0IF9oZWFkU2VhcmNoVW5pZm9ybVh5cyA9IG51bGwsIF9oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiA9IG51bGw7XG4gIGxldCBfZGlzYWJsZVJlc3RQb3NpdGlvbiA9IGZhbHNlO1xuXG4gIC8vIHByaXZhdGUgZnVuY3Rpb25zOlxuICBmdW5jdGlvbiBjb21wdXRlX2RlbHRhKHJlZiwgdmFsLCB0b2wsIHNlbnNpYmlsaXR5KXtcbiAgICBpZiAoTWF0aC5hYnMocmVmLXZhbCk8dG9sKXtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gKHZhbC1yZWYpICogc2Vuc2liaWxpdHk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21waWxlX3NoYWRlcihzb3VyY2UsIGdsVHlwZSwgdHlwZVN0cmluZykge1xuICAgIGNvbnN0IGdsU2hhZGVyID0gX2dsLmNyZWF0ZVNoYWRlcihnbFR5cGUpO1xuICAgIF9nbC5zaGFkZXJTb3VyY2UoZ2xTaGFkZXIsIHNvdXJjZSk7XG4gICAgX2dsLmNvbXBpbGVTaGFkZXIoZ2xTaGFkZXIpO1xuICAgIGlmICghX2dsLmdldFNoYWRlclBhcmFtZXRlcihnbFNoYWRlciwgX2dsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgYWxlcnQoXCJFUlJPUiBJTiBcIiArIHR5cGVTdHJpbmcgKyAgXCIgU0hBREVSOiBcIiArIF9nbC5nZXRTaGFkZXJJbmZvTG9nKGdsU2hhZGVyKSk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdsU2hhZGVyO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGluaXRfaGVhZFNlYXJjaERyYXcoKXtcbiAgICAvLyBidWlsZCBfZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW06XG4gICAgY29uc3Qgc2hhZGVyVmVydGV4U291cmNlID0gXCJcXG5cXFxuICAgICAgYXR0cmlidXRlIHZlYzIgYWF0X3Bvc2l0aW9uO1xcblxcXG4gICAgICB2YXJ5aW5nIHZlYzIgdlVWO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdm9pZCBtYWluKHZvaWQpIHtcXG5cXFxuICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYWF0X3Bvc2l0aW9uLCAwLiwgMS4pO1xcblxcXG4gICAgICAgIHZVViA9IDAuNSArIDAuNSAqIGFhdF9wb3NpdGlvbjtcXG5cXFxuICAgICAgICB2VVYueCA9IDEuLXZVVi54OyAvLyBtaXJyb3IgZGlwbGF5XFxuXFxcbiAgICAgIH1cIjtcbiAgICBjb25zdCBzaGFkZXJGcmFnbWVudFNvdXJjZSA9IFwiXFxuXFxcbiAgICAgIHByZWNpc2lvbiBsb3dwIGZsb2F0O1xcblxcXG4gICAgICB2YXJ5aW5nIHZlYzIgdlVWO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgc2FtcGxlclZpZGVvO1xcblxcXG4gICAgICB1bmlmb3JtIG1hdDIgdmlkZW9UcmFuc2Zvcm1NYXQyO1xcblxcXG4gICAgICB1bmlmb3JtIHZlYzMgdXh5cztcXG5cXFxuICAgICAgXFxuXFxcbiAgICAgIHZvaWQgbWFpbih2b2lkKSB7XFxuXFxcbiAgICAgICAgdmVjMiB1dlZpZGVvQ2VudGVyZWQgPSAyLjAgKiB2aWRlb1RyYW5zZm9ybU1hdDIgKiAodlVWIC0gMC41KTtcXG5cXFxuICAgICAgICB2ZWMyIHV2VmlkZW8gPSB1dlZpZGVvQ2VudGVyZWQgKyAwLjU7XFxuXFxcbiAgICAgICAgdmVjMyBjb2xvclZpZGVvID0gdGV4dHVyZTJEKHNhbXBsZXJWaWRlbywgdXZWaWRlbykucmdiO1xcblxcXG4gICAgICAgIHZlYzIgcG9zID0gdlVWKjIuLXZlYzIoMS4sMS4pO1xcblxcXG4gICAgICAgIHZlYzIgaXNJbnNpZGUgPSBzdGVwKHV4eXMueHktdXh5cy56KnZlYzIoMS4sMS4pLCBwb3MpO1xcblxcXG4gICAgICAgIGlzSW5zaWRlICo9IHN0ZXAocG9zLCB1eHlzLnh5K3V4eXMueip2ZWMyKDEuLDEuKSk7XFxuXFxcbiAgICAgICAgdmVjMiBibGVuZENlbnRlckZhY3RvciA9IGFicyhwb3MtdXh5cy54eSkgLyB1eHlzLno7XFxuXFxcbiAgICAgICAgZmxvYXQgYWxwaGEgPSBpc0luc2lkZS54ICogaXNJbnNpZGUueSAqIHBvdyhtYXgoYmxlbmRDZW50ZXJGYWN0b3IueCwgYmxlbmRDZW50ZXJGYWN0b3IueSksIDMuKTtcXG5cXFxuICAgICAgICB2ZWMzIGNvbG9yID0gbWl4KGNvbG9yVmlkZW8sIHZlYzMoMC4sMC42LDEuKSwgYWxwaGEpO1xcblxcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4pO1xcblxcXG4gICAgICB9XCI7XG5cbiAgICBjb25zdCBnbFNoYWRlclZlcnRleCA9IGNvbXBpbGVfc2hhZGVyKHNoYWRlclZlcnRleFNvdXJjZSwgX2dsLlZFUlRFWF9TSEFERVIsICdWRVJURVgnKTtcbiAgICBjb25zdCBnbFNoYWRlckZyYWdtZW50ID0gY29tcGlsZV9zaGFkZXIoc2hhZGVyRnJhZ21lbnRTb3VyY2UsIF9nbC5GUkFHTUVOVF9TSEFERVIsICdGUkFHTUVOVCcpO1xuXG4gICAgX2dsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtID0gX2dsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBfZ2wuYXR0YWNoU2hhZGVyKF9nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgZ2xTaGFkZXJWZXJ0ZXgpO1xuICAgIF9nbC5hdHRhY2hTaGFkZXIoX2dsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCBnbFNoYWRlckZyYWdtZW50KTtcblxuICAgIF9nbC5saW5rUHJvZ3JhbShfZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgIGNvbnN0IHNhbXBsZXJWaWRlbyA9IF9nbC5nZXRVbmlmb3JtTG9jYXRpb24oX2dsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCAnc2FtcGxlclZpZGVvJyk7XG4gICAgX2hlYWRTZWFyY2hVbmlmb3JtWHlzID0gX2dsLmdldFVuaWZvcm1Mb2NhdGlvbihfZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sICd1eHlzJyk7XG4gICAgX2hlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyID0gX2dsLmdldFVuaWZvcm1Mb2NhdGlvbihfZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sICd2aWRlb1RyYW5zZm9ybU1hdDInKTtcblxuICAgIF9nbC51c2VQcm9ncmFtKF9nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSk7XG4gICAgX2dsLnVuaWZvcm0xaShzYW1wbGVyVmlkZW8sIDApO1xuICB9IC8vZW5kIGluaXRfaGVhZFNlYXJjaERyYXcoKVxuXG4gIGZ1bmN0aW9uIGRyYXdfaGVhZFNlYXJjaChkZXRlY3RTdGF0ZSl7XG4gICAgLy8gdW5iaW5kIHRoZSBjdXJyZW50IEZCTyBhbmQgc2V0IHRoZSB2aWV3cG9ydCBhcyB0aGUgd2hvbGUgY2FudmFzOlxuICAgIF9nbC52aWV3cG9ydCgwLCAwLCBfY3Yud2lkdGgsIF9jdi5oZWlnaHQpO1xuXG4gICAgLy8gdXNlIHRoZSBoZWFkIGRyYXcgc2hhZGVyIHByb2dyYW0gYW5kIHN5bmMgdW5pZm9ybXM6XG4gICAgX2dsLnVzZVByb2dyYW0oX2dsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtKTtcbiAgICBfZ2wuYWN0aXZlVGV4dHVyZShfZ2wuVEVYVFVSRTApO1xuICAgIF9nbC5iaW5kVGV4dHVyZShfZ2wuVEVYVFVSRV8yRCwgX3ZpZGVvVGV4dHVyZSk7XG4gICAgX2dsLnVuaWZvcm0zZihfaGVhZFNlYXJjaFVuaWZvcm1YeXMsIGRldGVjdFN0YXRlLngsIGRldGVjdFN0YXRlLnksIGRldGVjdFN0YXRlLnMpO1xuICAgIF9nbC51bmlmb3JtTWF0cml4MmZ2KF9oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiwgZmFsc2UsIF92aWRlb1RyYW5zZm9ybU1hdDIpO1xuXG4gICAgLy8gZHJhdyB0aGUgc3F1YXJlIGxvb2tpbmcgZm9yIHRoZSBoZWFkXG4gICAgLy8gdGhlIFZCTyBmaWxsaW5nIHRoZSB3aG9sZSBzY3JlZW4gaXMgc3RpbGwgYm91bmQgdG8gdGhlIGNvbnRleHRcbiAgICAvLyBmaWxsIHRoZSB2aWV3UG9ydDpcbiAgICBfZ2wuZHJhd0VsZW1lbnRzKF9nbC5UUklBTkdMRVMsIDMsIF9nbC5VTlNJR05FRF9TSE9SVCwgMCk7XG4gIH1cblxuICBmdW5jdGlvbiBjb21wdXRlX2NhbWVyYU1vdmUoZGV0ZWN0U3RhdGUpe1xuICAgIGlmIChfc3RhdGUuaXNEZXRlY3RlZCAmJiBkZXRlY3RTdGF0ZS5kZXRlY3RlZDxfc2V0dGluZ3MuZGV0ZWN0aW9uVGhyZXNob2xkLV9zZXR0aW5ncy5kZXRlY3Rpb25IeXN0ZXJlc2lzKXtcbiAgICAgIC8vIERFVEVDVElPTiBMT1NUXG4gICAgICBcbiAgICAgIF9zdGF0ZS5pc0RldGVjdGVkID0gZmFsc2U7XG4gICAgICBfcmV0dXJuVmFsdWUuZFJ4ID0gMDtcbiAgICAgIF9yZXR1cm5WYWx1ZS5kUnkgPSAwO1xuICAgICAgX3JldHVyblZhbHVlLmRaID0gMDtcbiAgICB9IGVsc2UgaWYgKCFfc3RhdGUuaXNEZXRlY3RlZCAmJiBkZXRlY3RTdGF0ZS5kZXRlY3RlZD5fc2V0dGluZ3MuZGV0ZWN0aW9uVGhyZXNob2xkK19zZXR0aW5ncy5kZXRlY3Rpb25IeXN0ZXJlc2lzKXtcbiAgICAgIC8vIEZBQ0UgREVURUNURURcbiAgICAgIF9zdGF0ZS5pc0RldGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoX3N0YXRlLmlzRW5hYmxlZCl7XG4gICAgICBkcmF3X2hlYWRTZWFyY2goZGV0ZWN0U3RhdGUpO1xuICAgIH1cblxuICAgIGlmICghX3N0YXRlLmlzRW5hYmxlZCB8fCAhX3N0YXRlLmlzRGV0ZWN0ZWQgfHwgIV9zdGF0ZS5pc0xvYWRlZCl7XG4gICAgICByZXR1cm4gX3JldHVyblZhbHVlOyAvLyBubyBjYW1lcmEgbW92ZVxuICAgIH1cblxuICAgIGlmIChfc3RhdGUucmVzdEhlYWRQb3NpdGlvbi5uZWVkc1VwZGF0ZSAmJiAhX2Rpc2FibGVSZXN0UG9zaXRpb24pe1xuICAgICAgX3N0YXRlLnJlc3RIZWFkUG9zaXRpb24ubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICAgIF9zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLnJ4ID0gZGV0ZWN0U3RhdGUucng7XG4gICAgICBfc3RhdGUucmVzdEhlYWRQb3NpdGlvbi5yeSA9IGRldGVjdFN0YXRlLnJ5O1xuICAgICAgX3N0YXRlLnJlc3RIZWFkUG9zaXRpb24ucyA9IGRldGVjdFN0YXRlLnM7XG4gICAgICBfbGFzdFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgLy8gY29tcHV0ZSBtb3ZlbWVudCBvZiB0aGUgY2FtZXJhXG4gICAgY29uc3QgdHMgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGR0ID0gdHMgLSBfbGFzdFRpbWVzdGFtcDtcbiAgICBfcmV0dXJuVmFsdWUuZFJ4ID0gZHQgKiBjb21wdXRlX2RlbHRhKF9zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLnJ4LCBkZXRlY3RTdGF0ZS5yeCwgX3NldHRpbmdzLnRvbC5yeCwgX3NldHRpbmdzLnNlbnNpYmlsaXR5LnJ4KTtcbiAgICBfcmV0dXJuVmFsdWUuZFJ5ID0gZHQgKiBjb21wdXRlX2RlbHRhKF9zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLnJ5LCBkZXRlY3RTdGF0ZS5yeSwgX3NldHRpbmdzLnRvbC5yeSwgX3NldHRpbmdzLnNlbnNpYmlsaXR5LnJ5KTtcbiAgICBfcmV0dXJuVmFsdWUuZFogPSBkdCAqIGNvbXB1dGVfZGVsdGEoX3N0YXRlLnJlc3RIZWFkUG9zaXRpb24ucywgZGV0ZWN0U3RhdGUucywgX3NldHRpbmdzLnRvbC5zLCBfc2V0dGluZ3Muc2Vuc2liaWxpdHkucyk7XG4gICAgXG4gICAgX2xhc3RUaW1lc3RhbXAgPSB0cztcbiAgICByZXR1cm4gX3JldHVyblZhbHVlO1xuICB9IC8vZW5kIGNvbXB1dGVfY2FtZXJhTW92ZSgpXG5cbiAgLy8gcHVibGljIG1ldGhvZHM6XG4gIGNvbnN0IHRoYXQgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oc3BlYyl7XG4gICAgICAvLyBzZXQgc2V0dGluZ3M6XG4gICAgICBpZiAodHlwZW9mKHNwZWMuc2V0dGluZ3MpPT09J3VuZGVmaW5lZCcpIHNwZWMuc2V0dGluZ3M9e307XG4gICAgICBfZGlzYWJsZVJlc3RQb3NpdGlvbiA9ICh0eXBlb2Yoc3BlYy5kaXNhYmxlUmVzdFBvc2l0aW9uKT09PSd1bmRlZmluZWQnKSA/IGZhbHNlIDogc3BlYy5kaXNhYmxlUmVzdFBvc2l0aW9uO1xuICAgICAgX3NldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHRTZXR0aW5ncywgc3BlYy5zZXR0aW5ncyk7XG4gICAgICBfc2V0dGluZ3MudG9sLnJ4ICo9IE1hdGguUEkgLyAxODA7IC8vIGNvbnZlcnQgZnJvbSBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICAgIF9zZXR0aW5ncy50b2wucnkgKj0gTWF0aC5QSSAvIDE4MDtcbiAgICAgIF9zZXR0aW5ncy50b2wucyAvPSAxMDA7XG5cbiAgICAgIC8vIGluaXQgdGhlIEFQSTpcbiAgICAgICBKRUVGQUNFRklMVEVSQVBJLmluaXQoe1xuICAgICAgICBjYW52YXNJZDogc3BlYy5jYW52YXNJZCxcbiAgICAgICAgTk5DUGF0aDogc3BlYy5OTkNQYXRoLCAvLyByb290IG9mIE5OQy5qc29uIGZpbGVcbiAgICAgICAgY2FsbGJhY2tSZWFkeTogZnVuY3Rpb24oZXJyQ29kZSwgamVlRmFjZUZpbHRlck9iail7XG4gICAgICAgICAgaWYgKGVyckNvZGUpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FOIEVSUk9SIEhBUFBFTlMuIFNPUlJZIEJSTyA6KCAuIEVSUiA9JywgZXJyQ29kZSk7XG4gICAgICAgICAgICBpZiAoc3BlYy5jYWxsYmFja1JlYWR5KXtcbiAgICAgICAgICAgICAgc3BlYy5jYWxsYmFja1JlYWR5KGVyckNvZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfZ2wgPSBqZWVGYWNlRmlsdGVyT2JqWydHTCddO1xuICAgICAgICAgIF92aWRlb1RleHR1cmUgPSBqZWVGYWNlRmlsdGVyT2JqWyd2aWRlb1RleHR1cmUnXTtcbiAgICAgICAgICBfdmlkZW9UcmFuc2Zvcm1NYXQyID0gamVlRmFjZUZpbHRlck9ialsndmlkZW9UcmFuc2Zvcm1NYXQyJ107XG4gICAgICAgICAgX2N2ID0gamVlRmFjZUZpbHRlck9ialsnY2FudmFzRWxlbWVudCddO1xuXG4gICAgICAgICAgaW5pdF9oZWFkU2VhcmNoRHJhdygpO1xuXG4gICAgICAgICAgaWYgKHNwZWMuY2FsbGJhY2tSZWFkeSl7XG4gICAgICAgICAgICBzcGVjLmNhbGxiYWNrUmVhZHkoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfc3RhdGUuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9LCAvL2VuZCBjYWxsYmFja1JlYWR5KClcblxuICAgICAgICAvLyBjYWxsZWQgYXQgZWFjaCByZW5kZXIgaXRlcmF0aW9uIChkcmF3aW5nIGxvb3ApOlxuICAgICAgICBjYWxsYmFja1RyYWNrOiBmdW5jdGlvbihkZXRlY3RTdGF0ZSl7XG4gICAgICAgICAgY29uc3QgbXYgPSBjb21wdXRlX2NhbWVyYU1vdmUoZGV0ZWN0U3RhdGUpO1xuICAgICAgICAgIG12LmV4cHJlc3Npb25zID0gZGV0ZWN0U3RhdGUuZXhwcmVzc2lvbnM7XG4gICAgICAgICAgaWYgKCFfc3RhdGUuaXNFbmFibGVkKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG12LmRSeCE9PTAgfHwgbXYuZFJ5IT09MCB8fCBtdi5kWiE9PTApe1xuICAgICAgICAgICAgc3BlYy5jYWxsYmFja01vdmUobXYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7IC8vZW5kIEpFRUZBQ0VGSUxURVJBUEkuaW5pdCBjYWxsXG4gICAgfSwgLy9lbmQgaW5pdCgpXG5cbiAgICB0b2dnbGU6IGZ1bmN0aW9uKGlzRW5hYmxlZCl7XG4gICAgICBpZiAoX3N0YXRlLmlzRW5hYmxlZD09PWlzRW5hYmxlZCl7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIGlmICghaXNFbmFibGVkKXsgLy9kaXNhYmxlXG4gICAgICAgIF9zdGF0ZS5pc0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfc3RhdGUuaXNFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgX3N0YXRlLnJlc3RIZWFkUG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVzZXRfcmVzdEhlYWRQb3NpdGlvbjogZnVuY3Rpb24oKXtcbiAgICAgIF9zdGF0ZS5yZXN0SGVhZFBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH07IC8vZW5kIHRoYXRcbiAgcmV0dXJuIHRoYXQ7XG59KSgpO1xuXG4vLyBFeHBvcnQgRVM2IG1vZHVsZTpcbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gSGVhZENvbnRyb2xzO1xufSBjYXRjaChlKXtcbiAgY29uc29sZS5sb2coJ0hlYWRDb250cm9scyBFUzYgTW9kdWxlIG5vdCBleHBvcnRlZCcpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9