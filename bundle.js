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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/index.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/index.scss ***!
  \*****************************************************************************************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.*, module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Rubik:700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "button {\n  height: 20px;\n  line-height: 3px;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  border: 0;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: 0.8em;\n  font-family: inherit; }\n  button.start {\n    font-family: 'Rubik', sans-serif;\n    font-weight: 600;\n    color: #382b22;\n    text-transform: uppercase;\n    padding: 1.25em 2em;\n    background: #fff0f0;\n    border: 2px solid #b18597;\n    border-radius: 0.75em;\n    transform-style: preserve-3d;\n    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1); }\n    button.start::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: #f9c4d2;\n      border-radius: inherit;\n      box-shadow: 0 0 0 2px #b18597;\n      transform: translate3d(0, 0.75em, -1em);\n      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1); }\n    button.start:hover {\n      background: #ffe9e9;\n      transform: translate(0, 0.25em); }\n      button.start:hover::before {\n        box-shadow: 0 0 0 2px #b18597;\n        transform: translate3d(0, 0.5em, -1em); }\n    button.start:active {\n      background: #ffe9e9;\n      transform: translate(0em, 0.75em); }\n      button.start:active::before {\n        box-shadow: 0 0 0 2px #b18597;\n        transform: translate3d(0, 0, -1em); }\n\n.textbox {\n  width: 300px;\n  margin: 0 0 45px 0;\n  height: 60px;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: turnaround 20s infinite;\n  animation: turnaround 20s infinite; }\n\n.textbox-box {\n  background-color: #e3f6f5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 3px #272343;\n  position: relative;\n  -webkit-animation: hover 2s alternate infinite;\n  animation: hover 2s alternate infinite;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n\n.textbox-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  padding: 10px 15px 15px;\n  align-self: stretch;\n  border-radius: 5px;\n  font-size: 13px; }\n\n.textbox-label {\n  -webkit-transform: translateZ(20px);\n  transform: translateZ(20px);\n  text-transform: uppercase;\n  font-weight: bold;\n  -webkit-animation: hover 2s -0.2s alternate infinite;\n  animation: hover 2s -0.2s alternate infinite;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5)); }\n\n.textbox-action {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  margin-right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -border-radius: 100px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  background-color: #bae8e8;\n  position: relative;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n  .textbox-action[disabled] {\n    pointer-events: none;\n    visibility: hidden; }\n\n.textbox-action svg {\n  fill: #272343;\n  width: 65%;\n  height: 65%; }\n\n.textbox-action .textbox-face {\n  background-color: #66a8a8;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease; }\n\n.textbox-action .textbox-side {\n  width: 10px; }\n\n.textbox-action .textbox-bottom,\n.textbox-action .textbox-top {\n  height: 10px; }\n\n.textbox-action:hover {\n  cursor: pointer;\n  background-color: #9ccece; }\n\n.textbox-action:hover .textbox-face {\n  background-color: #468282; }\n\n.textbox-text {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  font: 2.5rem sans-serif;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  display: block;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));\n  font-size: 20px; }\n\n.textbox-text::-webkit-input-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text::-moz-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text:-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text::-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text::placeholder {\n  color: #272343;\n  opacity: 0.5; }\n\n.textbox-text:focus {\n  outline: none; }\n\n.textbox-face {\n  position: absolute;\n  background-color: #272343;\n  left: 0; }\n\n.textbox-side {\n  -webkit-transform: rotateY(90deg);\n  transform: rotateY(90deg);\n  height: 100%;\n  width: 20px;\n  top: 0;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%; }\n\n.textbox-bottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  height: 20px;\n  width: 100%;\n  bottom: 0;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%; }\n\n.textbox-top {\n  -webkit-transform: rotateX(-90deg);\n  transform: rotateX(-90deg);\n  height: 20px;\n  width: 100%;\n  top: 0;\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0; }\n\n@-webkit-keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px); }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px); } }\n\n@keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px); }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px); } }\n\n@-webkit-keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg); }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg); }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); } }\n\n@keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg); }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg); }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg); } }\n\n.reference {\n  position: absolute;\n  right: 20px;\n  bottom: 15px; }\n\n.reference img {\n  width: 35px;\n  height: 35px; }\n\n.head-preview {\n  position: absolute;\n  bottom: 0;\n  right: 0; }\n\n.console {\n  position: absolute;\n  border: 1px solid black;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px 20px; }\n  .console p {\n    margin: 2px 0; }\n\n.loader {\n  position: relative;\n  width: 50px;\n  height: 50px; }\n  .loader .yellow {\n    width: 10px;\n    height: 10px;\n    background: #06634a;\n    -webkit-animation: food 1.8s infinite linear;\n    animation: food 1.8s infinite linear; }\n  .loader .snake_1, .loader .snake_2, .loader .snake_3, .loader .snake_4, .loader .snake_5, .loader .snake_6, .loader .snake_7, .loader .snake_8, .loader .snake_9 {\n    width: 10px;\n    height: 10px;\n    background: #fff;\n    position: absolute;\n    -webkit-animation: animate 1.8s infinite linear;\n    animation: animate 1.8s infinite linear; }\n  .loader .snake_1 {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s; }\n  .loader .snake_2 {\n    -webkit-animation-delay: 0.05s;\n    animation-delay: 0.05s; }\n  .loader .snake_3 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s; }\n  .loader .snake_4 {\n    -webkit-animation-delay: 0.15s;\n    animation-delay: 0.15s; }\n  .loader .snake_5 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s; }\n  .loader .snake_6 {\n    -webkit-animation-delay: 0.25s;\n    animation-delay: 0.25s; }\n\n@keyframes animate {\n  0% {\n    top: 0px;\n    left: 0px; }\n  25% {\n    top: 0px;\n    left: 40px; }\n  50% {\n    top: 40px;\n    left: 40px; }\n  75% {\n    top: 40px;\n    left: 0px; }\n  100% {\n    top: 0px;\n    left: 0px; } }\n\n@keyframes food {\n  0% {\n    opacity: 0; }\n  25% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  75% {\n    opacity: 1; }\n  100% {\n    opacity: 1; } }\n\nbody, html {\n  margin: 0; }\n\nbody {\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif; }\n\n.game {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(to bottom, #aaffa9, #11ffbd);\n  flex-direction: column;\n  font-size: 18px; }\n\n.title {\n  font-family: 'Bungee Shade';\n  text-align: center;\n  font-size: 2em;\n  margin-bottom: 1em; }\n\n.photo-canvas {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/style/button.scss","webpack://./src/style/input.scss","webpack://./src/style/game.scss","webpack://./src/style/console.scss","webpack://./src/style/loader.scss","webpack://./src/style/index.scss"],"names":[],"mappings":"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","sourcesContent":["\n@import url('https://fonts.googleapis.com/css?family=Rubik:700&display=swap');\n\n$bg: #fff;\n$text: #382b22;\n$light-pink: #fff0f0;\n$pink: #ffe9e9;\n$dark-pink: #f9c4d2;\n$pink-border: #b18597;\n$pink-shadow: #ffe3e2;\n\n\nbutton {\n  height: 20px;\n  line-height: 3px;\n  display: inline-block;\n  cursor: pointer;\n  outline: none;\n  border: 0;\n  vertical-align: middle;\n  text-decoration: none;\n  font-size: 0.8em;\n  font-family: inherit;\n  &.start {\n    font-family: 'Rubik', sans-serif;\n    font-weight: 600;\n    color: $text;\n    text-transform: uppercase;\n    padding: 1.25em 2em;\n    background: $light-pink;\n    border: 2px solid $pink-border;\n    border-radius: 0.75em;\n    transform-style: preserve-3d;\n    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);\n    &::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: $dark-pink;\n      border-radius: inherit;\n      box-shadow: 0 0 0 2px $pink-border;\n      transform: translate3d(0, 0.75em, -1em);\n      transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);\n    }\n    &:hover {\n      background: $pink;\n      transform: translate(0, 0.25em);\n      &::before {\n        box-shadow: 0 0 0 2px $pink-border;\n        transform: translate3d(0, 0.5em, -1em);\n      }\n    }\n    &:active {\n      background: $pink;\n      transform: translate(0em, 0.75em);\n      &::before {\n        box-shadow: 0 0 0 2px $pink-border;\n        transform: translate3d(0, 0, -1em);\n      }\n    }\n  }\n}\n","//https://codepen.io/jouanmarcel/pen/Powbrgq\n.textbox {\n  width: 300px;\n  margin: 0 0 45px 0;\n  height: 60px;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: turnaround 20s infinite;\n  animation: turnaround 20s infinite;\n}\n\n.textbox-box {\n  background-color: #e3f6f5;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  box-shadow: inset 0 0 0 3px #272343;\n  position: relative;\n  -webkit-animation: hover 2s alternate infinite;\n  animation: hover 2s alternate infinite;\n  height: 100%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.textbox-field {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  padding: 10px 15px 15px;\n  align-self: stretch;\n  border-radius: 5px;\n  font-size: 13px;\n}\n\n.textbox-label {\n  -webkit-transform: translateZ(20px);\n  transform: translateZ(20px);\n  text-transform: uppercase;\n  font-weight: bold;\n  -webkit-animation: hover 2s -0.2s alternate infinite;\n  animation: hover 2s -0.2s alternate infinite;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));\n}\n\n.textbox-action {\n  height: 80px;\n  width: 80px;\n  min-width: 80px;\n  margin-right: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -border-radius: 100px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  background-color: #bae8e8;\n  position: relative;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  \n  &[disabled] {\n    pointer-events: none;\n    visibility: hidden;\n  }\n}\n\n.textbox-action svg {\n  fill: #272343;\n  width: 65%;\n  height: 65%;\n}\n\n.textbox-action .textbox-face {\n  background-color: #66a8a8;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n\n.textbox-action .textbox-side {\n  width: 10px;\n}\n\n.textbox-action .textbox-bottom,\n.textbox-action .textbox-top {\n  height: 10px;\n}\n\n.textbox-action:hover {\n  cursor: pointer;\n  background-color: #9ccece;\n}\n\n.textbox-action:hover .textbox-face {\n  background-color: #468282;\n}\n\n.textbox-text {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  font: 2.5rem sans-serif;\n  -webkit-animation: hover 2s -0.4s alternate infinite;\n  animation: hover 2s -0.4s alternate infinite;\n  display: block;\n  color: #272343;\n  -webkit-filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.5));\n  font-size: 20px;\n}\n\n.textbox-text::-webkit-input-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text::-moz-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text:-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text::-ms-input-placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text::placeholder {\n  color: #272343;\n  opacity: 0.5;\n}\n\n.textbox-text:focus {\n  outline: none;\n}\n\n.textbox-face {\n  position: absolute;\n  background-color: #272343;\n  left: 0;\n}\n\n.textbox-side {\n  -webkit-transform: rotateY(90deg);\n  transform: rotateY(90deg);\n  height: 100%;\n  width: 20px;\n  top: 0;\n  -webkit-transform-origin: 0% 50%;\n  transform-origin: 0% 50%;\n}\n\n.textbox-bottom {\n  -webkit-transform: rotateX(90deg);\n  transform: rotateX(90deg);\n  height: 20px;\n  width: 100%;\n  bottom: 0;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n}\n\n.textbox-top {\n  -webkit-transform: rotateX(-90deg);\n  transform: rotateX(-90deg);\n  height: 20px;\n  width: 100%;\n  top: 0;\n  -webkit-transform-origin: 50% 0;\n  transform-origin: 50% 0;\n}\n\n@-webkit-keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px);\n  }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px);\n  }\n}\n\n@keyframes hover {\n  from {\n    -webkit-transform: translateZ(10px);\n    transform: translateZ(10px);\n  }\n  to {\n    -webkit-transform: translateZ(20px);\n    transform: translateZ(20px);\n  }\n}\n\n@-webkit-keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n  }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n}\n\n@keyframes turnaround {\n  0% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n  33% {\n    -webkit-transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n    transform: perspective(500px) rotateY(20deg) rotateZ(-10deg) rotateX(-30deg);\n  }\n  67% {\n    -webkit-transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n    transform: perspective(0) rotateY(0deg) rotateZ(0deg) rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n    transform: perspective(500px) rotateY(70deg) rotateZ(-10deg) rotateX(30deg);\n  }\n}\n\n.reference {\n  position: absolute;\n  right: 20px;\n  bottom: 15px;\n}\n\n.reference img {\n  width: 35px;\n  height: 35px;\n}\n",".head-preview {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n}",".console {\n  position: absolute;\n  border: 1px solid black;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 5px 20px;\n  \n  p {\n    margin: 2px 0;\n  }\n}\n",".loader {\n  position: relative;\n  width: 50px;\n  height: 50px;\n  \n  .yellow {\n    width: 10px;\n    height: 10px;\n    background: #06634a;\n    -webkit-animation: food 1.8s infinite linear;\n    animation: food 1.8s infinite linear;\n  }\n  \n  .snake_1, .snake_2, .snake_3, .snake_4, .snake_5, .snake_6, .snake_7, .snake_8, .snake_9 {\n    width: 10px;\n    height: 10px;\n    background: #fff;\n    position: absolute;\n    -webkit-animation: animate 1.8s infinite linear;\n    animation: animate 1.8s infinite linear;\n  }\n  \n  .snake_1 {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n  }\n  \n  .snake_2 {\n    -webkit-animation-delay: 0.05s;\n    animation-delay: 0.05s;\n  }\n  \n  .snake_3 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n  }\n  \n  .snake_4 {\n    -webkit-animation-delay: 0.15s;\n    animation-delay: 0.15s;\n  }\n  \n  .snake_5 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n  }\n  \n  .snake_6 {\n    -webkit-animation-delay: 0.25s;\n    animation-delay: 0.25s;\n  }\n}\n\n@keyframes animate {\n  0% {\n    top: 0px;\n    left: 0px;\n  }\n  25% {\n    top: 0px;\n    left: 40px;\n  }\n  50% {\n    top: 40px;\n    left: 40px;\n  }\n  75% {\n    top: 40px;\n    left: 0px;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n  }\n}\n\n@keyframes food {\n  0% {\n    opacity: 0;\n  }\n  25% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n","@import \"./button\";\n@import \"./input\";\n@import \"./game\";\n@import \"./console\";\n@import \"./loader\";\n\n$background-gradient: linear-gradient(to bottom, #aaffa9, #11ffbd);\n\nbody, html {\n  margin: 0;\n}\n\nbody {\n  position: fixed;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  font-family: \"Helvetica Neue\", Helvetica, sans-serif;\n}\n\n.game {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: $background-gradient;\n  flex-direction: column;\n  font-size: 18px;\n}\n\n\n.title {\n  font-family: 'Bungee Shade';\n  text-align: center;\n  font-size: 2em;\n  margin-bottom: 1em;\n}\n\n.photo-canvas {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 9:0-14 */
/***/ (function(module) {

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
/***/ (function(module) {

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
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 230:0-14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
    return Promise.all([imageCapture_1.initImageCapture(), voice_1.initVoiceService(), HeadControlService_1.initHeadControl()]).then(() => {
        preloader.hide();
        startScreen.show();
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
            onReady: resolve,
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
exports.initImageCapture = exports.takePhoto = void 0;
let imageCapture;
let isInit = false;
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
const initImageCapture = () => __awaiter(void 0, void 0, void 0, function* () {
    if (isInit) {
        return Promise.resolve();
    }
    isInit = true;
    return navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
        const track = mediaStream.getVideoTracks()[0];
        imageCapture = new ImageCapture(track);
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvY29uc29sZS1zdWJzY3JpYmVyL2luZGV4LmpzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3N0eWxlL2luZGV4LnNjc3M/ZTM2YyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2NvbnNvbGUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2RlY2xhcmUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zZXJ2aWNlcy9IZWFkQ29udHJvbFNlcnZpY2UvSGVhZENvbnRyb2xTZXJ2aWNlLnRzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zZXJ2aWNlcy9IZWFkQ29udHJvbFNlcnZpY2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0ltYWdlQ2FwdHVyZVNlcnZpY2UvaW1hZ2VDYXB0dXJlLnRzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zZXJ2aWNlcy9Wb2ljZVNlcnZpY2Uvdm9pY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxLQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZEO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Ysc0hBQXNIO0FBQ3RIO0FBQ0Esa0RBQWtELGlCQUFpQixxQkFBcUIsMEJBQTBCLG9CQUFvQixrQkFBa0IsY0FBYywyQkFBMkIsMEJBQTBCLHFCQUFxQix5QkFBeUIsRUFBRSxrQkFBa0IsdUNBQXVDLHVCQUF1QixxQkFBcUIsZ0NBQWdDLDBCQUEwQiww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YSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxtQkFBbUIsT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGtCQUFrQixPQUFPLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLGdCQUFnQixLQUFLLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksaUJBQWlCLE1BQU0sVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxLQUFLLFlBQVksa0JBQWtCLE1BQU0sWUFBWSx3QkFBd0IsTUFBTSxLQUFLLFlBQVksa0JBQWtCLE1BQU0sWUFBWSx3QkFBd0IsTUFBTSxLQUFLLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFlBQVksd0JBQXdCLE1BQU0sS0FBSyxZQUFZLGtCQUFrQixNQUFNLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxrQkFBa0IsTUFBTSxZQUFZLHdCQUF3QixNQUFNLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixNQUFNLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsaUJBQWlCLE1BQU0sZ0JBQWdCLE1BQU0sWUFBWSxXQUFXLGVBQWUsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxtQkFBbUIsTUFBTSxLQUFLLFVBQVUsZUFBZSxLQUFLLFVBQVUsZUFBZSxLQUFLLFVBQVUsZUFBZSxLQUFLLFVBQVUsZUFBZSxLQUFLLFVBQVUscUJBQXFCLEtBQUssS0FBSyxlQUFlLEtBQUssZUFBZSxLQUFLLGVBQWUsS0FBSyxlQUFlLEtBQUsscUJBQXFCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsY0FBYyxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsV0FBVyxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsbUhBQW1ILGNBQWMsaUJBQWlCLHVCQUF1QixpQkFBaUIsc0JBQXNCLHdCQUF3Qix3QkFBd0IsY0FBYyxpQkFBaUIscUJBQXFCLDBCQUEwQixvQkFBb0Isa0JBQWtCLGNBQWMsMkJBQTJCLDBCQUEwQixxQkFBcUIseUJBQXlCLGFBQWEsdUNBQXVDLHVCQUF1QixtQkFBbUIsZ0NBQWdDLDBCQUEwQiw4QkFBOEIscUNBQXFDLDRCQUE0QixtQ0FBbUMsNEdBQTRHLGlCQUFpQiwyQkFBMkIsb0JBQW9CLG9CQUFvQixxQkFBcUIsZUFBZSxnQkFBZ0IsaUJBQWlCLGtCQUFrQiwrQkFBK0IsK0JBQStCLDJDQUEyQyxnREFBZ0QsOEdBQThHLE9BQU8sZUFBZSwwQkFBMEIsd0NBQXdDLG1CQUFtQiw2Q0FBNkMsaURBQWlELFNBQVMsT0FBTyxnQkFBZ0IsMEJBQTBCLDBDQUEwQyxtQkFBbUIsNkNBQTZDLDZDQUE2QyxTQUFTLE9BQU8sS0FBSyxHQUFHLDZEQUE2RCxpQkFBaUIsdUJBQXVCLGlCQUFpQix1QkFBdUIseUNBQXlDLGlDQUFpQywrQ0FBK0MsdUNBQXVDLEdBQUcsa0JBQWtCLDhCQUE4Qix5QkFBeUIsa0JBQWtCLDhCQUE4Qix3QkFBd0IsNkJBQTZCLDRCQUE0Qix3Q0FBd0MsdUJBQXVCLG1EQUFtRCwyQ0FBMkMsaUJBQWlCLHlDQUF5QyxpQ0FBaUMsc0NBQXNDLDhCQUE4QixHQUFHLG9CQUFvQix5QkFBeUIsa0JBQWtCLGlDQUFpQyxrQ0FBa0MsMkJBQTJCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLG9CQUFvQix3Q0FBd0MsZ0NBQWdDLDhCQUE4QixzQkFBc0IseURBQXlELGlEQUFpRCxtQkFBbUIsNkRBQTZELEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0Isb0JBQW9CLHVCQUF1Qix5QkFBeUIsa0JBQWtCLDhCQUE4Qix3QkFBd0IsNkJBQTZCLDRCQUE0QiwwQkFBMEIseUNBQXlDLGlDQUFpQyx5REFBeUQsaURBQWlELDhCQUE4Qix1QkFBdUIsc0NBQXNDLDhCQUE4QixxQkFBcUIsMkJBQTJCLHlCQUF5QixLQUFLLEdBQUcseUJBQXlCLGtCQUFrQixlQUFlLGdCQUFnQixHQUFHLG1DQUFtQyw4QkFBOEIsc0NBQXNDLDhCQUE4QixHQUFHLG1DQUFtQyxnQkFBZ0IsR0FBRyxvRUFBb0UsaUJBQWlCLEdBQUcsMkJBQTJCLG9CQUFvQiw4QkFBOEIsR0FBRyx5Q0FBeUMsOEJBQThCLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtDQUFrQyw0QkFBNEIseURBQXlELGlEQUFpRCxtQkFBbUIsbUJBQW1CLDZEQUE2RCxvQkFBb0IsR0FBRyw4Q0FBOEMsbUJBQW1CLGlCQUFpQixHQUFHLHFDQUFxQyxtQkFBbUIsaUJBQWlCLEdBQUcseUNBQXlDLG1CQUFtQixpQkFBaUIsR0FBRywwQ0FBMEMsbUJBQW1CLGlCQUFpQixHQUFHLGdDQUFnQyxtQkFBbUIsaUJBQWlCLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLG1CQUFtQix1QkFBdUIsOEJBQThCLFlBQVksR0FBRyxtQkFBbUIsc0NBQXNDLDhCQUE4QixpQkFBaUIsZ0JBQWdCLFdBQVcscUNBQXFDLDZCQUE2QixHQUFHLHFCQUFxQixzQ0FBc0MsOEJBQThCLGlCQUFpQixnQkFBZ0IsY0FBYyx1Q0FBdUMsK0JBQStCLEdBQUcsa0JBQWtCLHVDQUF1QywrQkFBK0IsaUJBQWlCLGdCQUFnQixXQUFXLG9DQUFvQyw0QkFBNEIsR0FBRyw4QkFBOEIsVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssUUFBUSwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRyxzQkFBc0IsVUFBVSwwQ0FBMEMsa0NBQWtDLEtBQUssUUFBUSwwQ0FBMEMsa0NBQWtDLEtBQUssR0FBRyxtQ0FBbUMsUUFBUSwwRkFBMEYsa0ZBQWtGLEtBQUssU0FBUywyRkFBMkYsbUZBQW1GLEtBQUssU0FBUyxrRkFBa0YsMEVBQTBFLEtBQUssVUFBVSwwRkFBMEYsa0ZBQWtGLEtBQUssR0FBRywyQkFBMkIsUUFBUSwwRkFBMEYsa0ZBQWtGLEtBQUssU0FBUywyRkFBMkYsbUZBQW1GLEtBQUssU0FBUyxrRkFBa0YsMEVBQTBFLEtBQUssVUFBVSwwRkFBMEYsa0ZBQWtGLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixHQUFHLG9CQUFvQix5QkFBeUIsZ0JBQWdCLGVBQWUsR0FBRyxhQUFhLHVCQUF1Qiw0QkFBNEIsV0FBVyxZQUFZLGFBQWEsc0JBQXNCLFdBQVcsb0JBQW9CLEtBQUssR0FBRyxjQUFjLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQkFBa0IsbUJBQW1CLDBCQUEwQixtREFBbUQsMkNBQTJDLEtBQUssa0dBQWtHLGtCQUFrQixtQkFBbUIsdUJBQXVCLHlCQUF5QixzREFBc0QsOENBQThDLEtBQUssa0JBQWtCLGtDQUFrQywwQkFBMEIsS0FBSyxrQkFBa0IscUNBQXFDLDZCQUE2QixLQUFLLGtCQUFrQixvQ0FBb0MsNEJBQTRCLEtBQUssa0JBQWtCLHFDQUFxQyw2QkFBNkIsS0FBSyxrQkFBa0Isb0NBQW9DLDRCQUE0QixLQUFLLGtCQUFrQixxQ0FBcUMsNkJBQTZCLEtBQUssR0FBRyx3QkFBd0IsUUFBUSxlQUFlLGdCQUFnQixLQUFLLFNBQVMsZUFBZSxpQkFBaUIsS0FBSyxTQUFTLGdCQUFnQixpQkFBaUIsS0FBSyxTQUFTLGdCQUFnQixnQkFBZ0IsS0FBSyxVQUFVLGVBQWUsZ0JBQWdCLEtBQUssR0FBRyxxQkFBcUIsUUFBUSxpQkFBaUIsS0FBSyxTQUFTLGlCQUFpQixLQUFLLFNBQVMsaUJBQWlCLEtBQUssU0FBUyxpQkFBaUIsS0FBSyxVQUFVLGlCQUFpQixLQUFLLEdBQUcsNEJBQTRCLHNCQUFzQixxQkFBcUIsd0JBQXdCLHVCQUF1Qix1RUFBdUUsZ0JBQWdCLGNBQWMsR0FBRyxVQUFVLG9CQUFvQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixpQkFBaUIscUJBQXFCLDJEQUEyRCxHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQ0FBcUMsMkJBQTJCLG9CQUFvQixHQUFHLGNBQWMsZ0NBQWdDLHVCQUF1QixtQkFBbUIsdUJBQXVCLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsdUJBQXVCLFdBQVcsWUFBWSxrQkFBa0IsR0FBRyxxQkFBcUI7QUFDdnV3QjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CNEY7QUFDNUYsWUFBb0w7O0FBRXBMOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGlLQUFPOzs7O0FBSXhCLCtEQUFlLHdLQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQzVRYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELDJCQUEyQjtBQUMzQiw2Q0FBNkMsbUJBQU8sQ0FBQyxzRUFBb0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCwrRUFBK0UsVUFBVTtBQUN6RixLQUFLO0FBQ0w7QUFDQSwyQkFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmQ7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0RoRDtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxrQkFBa0IsbUJBQU8sQ0FBQyxtQ0FBVztBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQyxpRkFBK0I7QUFDcEUsdUJBQXVCLG1CQUFPLENBQUMsdUdBQTZDO0FBQzVFLGdCQUFnQixtQkFBTyxDQUFDLDJFQUErQjtBQUN2RCxtQkFBTyxDQUFDLG1DQUFXO0FBQ25CLG1CQUFPLENBQUMsa0RBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RFk7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsMEVBQTBFO0FBQ25IO0FBQ0E7QUFDQSx5Q0FBeUMsK0VBQStFO0FBQ3hIO0FBQ0E7QUFDQSxvQ0FBb0MsMENBQTBDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQyx1QkFBdUI7QUFDdkI7QUFDQSx1QkFBdUI7QUFDdkIsaURBQWlEO0FBQ2pELHVDQUF1QztBQUN2Qyx5QkFBeUI7QUFDekIsT0FBTztBQUNQO0FBQ0EsMkJBQTJCO0FBQzNCLHVCQUF1QjtBQUN2QjtBQUNBLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMsd0JBQXdCO0FBQ3hCO0FBQ0EsdUJBQXVCO0FBQ3ZCLHNFQUFzRTtBQUN0RSw2Q0FBNkM7QUFDN0MsK0RBQStEO0FBQy9ELHNDQUFzQztBQUN0Qyw4REFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELDJEQUEyRDtBQUMzRCx1R0FBdUc7QUFDdkcsNkRBQTZEO0FBQzdELHNDQUFzQztBQUN0QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbExGO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsdUJBQXVCLEdBQUcsZUFBZTtBQUN6Qyw2Q0FBNkMsbUJBQU8sQ0FBQyxxRkFBc0I7QUFDM0UsMkJBQTJCLG1CQUFPLENBQUMscUZBQXNCO0FBQ3pELDJDQUEwQyxDQUFDLHFDQUFxQyxzREFBc0QsRUFBRSxFQUFFLEVBQUM7QUFDM0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7QUN0QlY7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsd0JBQXdCLEdBQUcsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7QUFDWCxLQUFLO0FBQ0wsQ0FBQztBQUNELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWM7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Qsd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7QUNwRFg7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0Qsb0JBQW9CLEdBQUcsaUJBQWlCLEdBQUcsZUFBZSxHQUFHLHdCQUF3QjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDO0FBQ0Qsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7Ozs7Ozs7VUMzQ3BCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLDBCQUEwQixFQUFFO1dBQzFDLGNBQWMsZUFBZTtXQUM3QixnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFN1YnNjcmliZSB0byB0aGUgY29uc29sZSBvdXRwdXQgXG4gKlxuICogQGF1dGhvciBTYW1zb24gUmFkdVxuICovIFxuKGZ1bmN0aW9uKCl7XG4gICAgdmFyIF9sb2cgPSBjb25zb2xlLmxvZztcbiAgICB2YXIgX3dhcm4gPSBjb25zb2xlLndhcm47XG4gICAgdmFyIF9lcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgdmFyIF9kZWJ1ZyA9IGNvbnNvbGUuZGVidWc7XG5cbiAgICB2YXIgQ29uc29sZVN1YnNjcmliZXIgPSB7XG4gICAgICAgIHVuYmluZDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nID0gX2xvZztcbiAgICAgICAgICAgIGNvbnNvbGUud2FybiA9IF93YXJuO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvciA9IF9lcnJvcjtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcgPSBfZGVidWc7XG4gICAgICAgIH0sIFxuICAgICAgICBiaW5kOiBmdW5jdGlvbihjYiwgcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBtdXN0IHBhc3MgYSB2YWxpZCBjYWxsYmFjayBmdW5jdGlvbi5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ZW50TG9nZ2luZyA9IEJvb2xlYW4ocHJldmVudExvZ2dpbmcpOyAvL2ZvcmNlIGJvb2xcblxuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfSU5GTyA9IFwiaW5mb1wiO1xuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfV0FSTiA9IFwid2FyblwiO1xuICAgICAgICAgICAgY29uc3QgQ0FURUdPUllfRVJST1IgPSBcImVycm9yXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9ERUJVRyA9IFwiZGVidWdcIjtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBjb25zb2xlLmluZm8gPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfbG9nKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9nLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9JTkZPLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybiA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF93YXJuKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfd2Fybi5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfV0FSTiwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX2Vycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZXJyb3IuY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX0VSUk9SLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfZGVidWcpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWJ1Zy5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfREVCVUcsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9leHBvcnRcbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gQ29uc29sZVN1YnNjcmliZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIHdpbmRvdy5Db25zb2xlU3Vic2NyaWJlciA9IENvbnNvbGVTdWJzY3JpYmVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBleHBvcnQgbW9kdWxlLlwiKTtcbiAgICB9XG59KSgpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrOjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJidXR0b24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDNweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyB9XFxuICBidXR0b24uc3RhcnQge1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICMzODJiMjI7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBhZGRpbmc6IDEuMjVlbSAyZW07XFxuICAgIGJhY2tncm91bmQ6ICNmZmYwZjA7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNiMTg1OTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVlbTtcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYmFja2dyb3VuZCAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7IH1cXG4gICAgYnV0dG9uLnN0YXJ0OjpiZWZvcmUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmOWM0ZDI7XFxuICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2IxODU5NztcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNzVlbSwgLTFlbSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYm94LXNoYWRvdyAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7IH1cXG4gICAgYnV0dG9uLnN0YXJ0OmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZlOWU5O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAuMjVlbSk7IH1cXG4gICAgICBidXR0b24uc3RhcnQ6aG92ZXI6OmJlZm9yZSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2IxODU5NztcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC41ZW0sIC0xZW0pOyB9XFxuICAgIGJ1dHRvbi5zdGFydDphY3RpdmUge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmU5ZTk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMGVtLCAwLjc1ZW0pOyB9XFxuICAgICAgYnV0dG9uLnN0YXJ0OmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjYjE4NTk3O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAtMWVtKTsgfVxcblxcbi50ZXh0Ym94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMCAwIDQ1cHggMDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHR1cm5hcm91bmQgMjBzIGluZmluaXRlOyB9XFxuXFxuLnRleHRib3gtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2Y2ZjU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4ICMyNzIzNDM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTsgfVxcblxcbi50ZXh0Ym94LWZpZWxkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTVweDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEzcHg7IH1cXG5cXG4udGV4dGJveC1sYWJlbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC4ycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7IH1cXG5cXG4udGV4dGJveC1hY3Rpb24ge1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBtaW4td2lkdGg6IDgwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgLWJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWU4ZTg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuICAudGV4dGJveC1hY3Rpb25bZGlzYWJsZWRdIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiBzdmcge1xcbiAgZmlsbDogIzI3MjM0MztcXG4gIHdpZHRoOiA2NSU7XFxuICBoZWlnaHQ6IDY1JTsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1mYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmE4YTg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXNpZGUge1xcbiAgd2lkdGg6IDEwcHg7IH1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtYm90dG9tLFxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC10b3Age1xcbiAgaGVpZ2h0OiAxMHB4OyB9XFxuXFxuLnRleHRib3gtYWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2NlY2U7IH1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIgLnRleHRib3gtZmFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MjgyOyB9XFxuXFxuLnRleHRib3gtdGV4dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udDogMi41cmVtIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4udGV4dGJveC10ZXh0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbi50ZXh0Ym94LXRleHQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7IH1cXG5cXG4udGV4dGJveC1mYWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzIzNDM7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnRleHRib3gtc2lkZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTsgfVxcblxcbi50ZXh0Ym94LWJvdHRvbSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7IH1cXG5cXG4udGV4dGJveC10b3Age1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7IH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTsgfSB9XFxuXFxuQGtleWZyYW1lcyBob3ZlciB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdHVybmFyb3VuZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7IH1cXG4gIDMzJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTsgfVxcbiAgNjclIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpOyB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTsgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpOyB9XFxuICA2NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpOyB9IH1cXG5cXG4ucmVmZXJlbmNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgYm90dG9tOiAxNXB4OyB9XFxuXFxuLnJlZmVyZW5jZSBpbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7IH1cXG5cXG4uaGVhZC1wcmV2aWV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwOyB9XFxuXFxuLmNvbnNvbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiA1cHggMjBweDsgfVxcbiAgLmNvbnNvbGUgcCB7XFxuICAgIG1hcmdpbjogMnB4IDA7IH1cXG5cXG4ubG9hZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4OyB9XFxuICAubG9hZGVyIC55ZWxsb3cge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDY2MzRhO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZm9vZCAxLjhzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBmb29kIDEuOHMgaW5maW5pdGUgbGluZWFyOyB9XFxuICAubG9hZGVyIC5zbmFrZV8xLCAubG9hZGVyIC5zbmFrZV8yLCAubG9hZGVyIC5zbmFrZV8zLCAubG9hZGVyIC5zbmFrZV80LCAubG9hZGVyIC5zbmFrZV81LCAubG9hZGVyIC5zbmFrZV82LCAubG9hZGVyIC5zbmFrZV83LCAubG9hZGVyIC5zbmFrZV84LCAubG9hZGVyIC5zbmFrZV85IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYW5pbWF0ZSAxLjhzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlIDEuOHMgaW5maW5pdGUgbGluZWFyOyB9XFxuICAubG9hZGVyIC5zbmFrZV8xIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzOyB9XFxuICAubG9hZGVyIC5zbmFrZV8yIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMDVzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMDVzOyB9XFxuICAubG9hZGVyIC5zbmFrZV8zIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xczsgfVxcbiAgLmxvYWRlciAuc25ha2VfNCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1czsgfVxcbiAgLmxvYWRlciAuc25ha2VfNSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cXG4gIC5sb2FkZXIgLnNuYWtlXzYge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4yNXM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcbiAgMCUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4OyB9XFxuICAyNSUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogNDBweDsgfVxcbiAgNTAlIHtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBsZWZ0OiA0MHB4OyB9XFxuICA3NSUge1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGxlZnQ6IDBweDsgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7IH0gfVxcblxcbkBrZXlmcmFtZXMgZm9vZCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDc1JSB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgfVxcblxcbi5nYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhYWZmYTksICMxMWZmYmQpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDsgfVxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZSc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxcblxcbi5waG90by1jYW52YXMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9idXR0b24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9nYW1lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9jb25zb2xlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9sb2FkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFNB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QTs7QUFHWDtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9EQUFvRCxFQUFBOztBQUd0RDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsd0RBdEJnRTtFQXVCaEUsc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFJakI7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGFBQWEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJ1YmlrOjcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kYmc6ICNmZmY7XFxuJHRleHQ6ICMzODJiMjI7XFxuJGxpZ2h0LXBpbms6ICNmZmYwZjA7XFxuJHBpbms6ICNmZmU5ZTk7XFxuJGRhcmstcGluazogI2Y5YzRkMjtcXG4kcGluay1ib3JkZXI6ICNiMTg1OTc7XFxuJHBpbmstc2hhZG93OiAjZmZlM2UyO1xcblxcblxcbmJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAmLnN0YXJ0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAkdGV4dDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMS4yNWVtIDJlbTtcXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0LXBpbms7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRwaW5rLWJvcmRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBiYWNrZ3JvdW5kIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTtcXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHJpZ2h0OiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZGFyay1waW5rO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XFxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRwaW5rLWJvcmRlcjtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAuNzVlbSwgLTFlbSk7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKSwgYm94LXNoYWRvdyAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSk7XFxuICAgIH1cXG4gICAgJjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogJHBpbms7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4yNWVtKTtcXG4gICAgICAmOjpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICRwaW5rLWJvcmRlcjtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC41ZW0sIC0xZW0pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAmOmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogJHBpbms7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMGVtLCAwLjc1ZW0pO1xcbiAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHBpbmstYm9yZGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAtMWVtKTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIvL2h0dHBzOi8vY29kZXBlbi5pby9qb3Vhbm1hcmNlbC9wZW4vUG93YnJncVxcbi50ZXh0Ym94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbjogMCAwIDQ1cHggMDtcXG4gIGhlaWdodDogNjBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7XFxuICBhbmltYXRpb246IHR1cm5hcm91bmQgMjBzIGluZmluaXRlO1xcbn1cXG5cXG4udGV4dGJveC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjZmNTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggIzI3MjM0MztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4udGV4dGJveC1maWVsZCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweCAxNXB4IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4udGV4dGJveC1sYWJlbCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC4ycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZThlODtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICBcXG4gICZbZGlzYWJsZWRdIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIHN2ZyB7XFxuICBmaWxsOiAjMjcyMzQzO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlO1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtZmFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZhOGE4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXNpZGUge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1ib3R0b20sXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXRvcCB7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWNjZWNlO1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIgLnRleHRib3gtZmFjZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY4MjgyO1xcbn1cXG5cXG4udGV4dGJveC10ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250OiAyLjVyZW0gc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi50ZXh0Ym94LXRleHQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRleHRib3gtZmFjZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyMzQzO1xcbiAgbGVmdDogMDtcXG59XFxuXFxuLnRleHRib3gtc2lkZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcXG59XFxuXFxuLnRleHRib3gtYm90dG9tIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG59XFxuXFxuLnRleHRib3gtdG9wIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgaG92ZXIge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gIH1cXG4gIDMzJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSgyMGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoLTMwZGVnKTtcXG4gIH1cXG4gIDY3JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR1cm5hcm91bmQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgfVxcbiAgNjclIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICB9XFxufVxcblxcbi5yZWZlcmVuY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDE1cHg7XFxufVxcblxcbi5yZWZlcmVuY2UgaW1nIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG5cIixcIi5oZWFkLXByZXZpZXcge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxufVwiLFwiLmNvbnNvbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIFxcbiAgcCB7XFxuICAgIG1hcmdpbjogMnB4IDA7XFxuICB9XFxufVxcblwiLFwiLmxvYWRlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIFxcbiAgLnllbGxvdyB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwNjYzNGE7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb29kIDEuOHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGZvb2QgMS44cyBpbmZpbml0ZSBsaW5lYXI7XFxuICB9XFxuICBcXG4gIC5zbmFrZV8xLCAuc25ha2VfMiwgLnNuYWtlXzMsIC5zbmFrZV80LCAuc25ha2VfNSwgLnNuYWtlXzYsIC5zbmFrZV83LCAuc25ha2VfOCwgLnNuYWtlXzkge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlIDEuOHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMS44cyBpbmZpbml0ZSBsaW5lYXI7XFxuICB9XFxuICBcXG4gIC5zbmFrZV8xIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbiAgfVxcbiAgXFxuICAuc25ha2VfMiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjA1cztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjA1cztcXG4gIH1cXG4gIFxcbiAgLnNuYWtlXzMge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xcbiAgfVxcbiAgXFxuICAuc25ha2VfNCB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcXG4gIH1cXG4gIFxcbiAgLnNuYWtlXzUge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4ycztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbiAgfVxcbiAgXFxuICAuc25ha2VfNiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBhbmltYXRlIHtcXG4gIDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiA0MHB4O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBsZWZ0OiA0MHB4O1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgdG9wOiA0MHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmb29kIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDI1JSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICA1MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5cIixcIkBpbXBvcnQgXFxcIi4vYnV0dG9uXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2lucHV0XFxcIjtcXG5AaW1wb3J0IFxcXCIuL2dhbWVcXFwiO1xcbkBpbXBvcnQgXFxcIi4vY29uc29sZVxcXCI7XFxuQGltcG9ydCBcXFwiLi9sb2FkZXJcXFwiO1xcblxcbiRiYWNrZ3JvdW5kLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYWFmZmE5LCAjMTFmZmJkKTtcXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZ2FtZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1ncmFkaWVudDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcblxcbi50aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0J1bmdlZSBTaGFkZSc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnBob3RvLWNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZW5hYmxlTW9iaWxlQ29uc29sZSA9IHZvaWQgMDtcbmNvbnN0IGNvbnNvbGVfc3Vic2NyaWJlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJjb25zb2xlLXN1YnNjcmliZXJcIikpO1xuY29uc3QgZW5hYmxlTW9iaWxlQ29uc29sZSA9ICgpID0+IHtcbiAgICBjb25zdCBidWZmZXIgPSBbXTtcbiAgICBjb25zb2xlX3N1YnNjcmliZXJfMS5kZWZhdWx0LmJpbmQoKGNhdGVnb3J5LCBhcmdzKSA9PiB7XG4gICAgICAgIGlmIChidWZmZXIubGVuZ3RoID09PSA1KSB7XG4gICAgICAgICAgICBidWZmZXIuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICBidWZmZXIucHVzaCh7IGNhdGVnb3J5LCBtZXNzYWdlOiBhcmdzWzBdIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uc29sZScpLmlubmVySFRNTCA9IGJ1ZmZlci5tYXAoKG0pID0+IGA8cD4ke20ubWVzc2FnZX08L3A+YCkuam9pbignJyk7XG4gICAgfSk7XG59O1xuZXhwb3J0cy5lbmFibGVNb2JpbGVDb25zb2xlID0gZW5hYmxlTW9iaWxlQ29uc29sZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGNvbnNvbGVfMSA9IHJlcXVpcmUoXCIuL2NvbnNvbGVcIik7XG5jb25zdCBIZWFkQ29udHJvbFNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZVwiKTtcbmNvbnN0IGltYWdlQ2FwdHVyZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvSW1hZ2VDYXB0dXJlU2VydmljZS9pbWFnZUNhcHR1cmVcIik7XG5jb25zdCB2b2ljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvVm9pY2VTZXJ2aWNlL3ZvaWNlXCIpO1xucmVxdWlyZShcIi4vZGVjbGFyZVwiKTtcbnJlcXVpcmUoXCIuL3N0eWxlL2luZGV4LnNjc3NcIik7XG5jb25zdCBzdGFydEJ1dHRvbiA9ICQoJyNzdGFydEJ1dHRvbicpO1xuY29uc3QgcHJlbG9hZGVyID0gJCgnI3ByZWxvYWRlcicpO1xuY29uc3Qgc3RhcnRTY3JlZW4gPSAkKCcjc3RhcnQnKTtcbmNvbnN0IGdhbWVTY3JlZW4gPSAkKCcjZ2FtZScpO1xuY29uc3QgbmFtZUlucHV0ID0gJCgnI25hbWVJbnB1dCcpO1xuY29uc3QgaW5pdEFsbEFQSSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbaW1hZ2VDYXB0dXJlXzEuaW5pdEltYWdlQ2FwdHVyZSgpLCB2b2ljZV8xLmluaXRWb2ljZVNlcnZpY2UoKSwgSGVhZENvbnRyb2xTZXJ2aWNlXzEuaW5pdEhlYWRDb250cm9sKCldKS50aGVuKCgpID0+IHtcbiAgICAgICAgcHJlbG9hZGVyLmhpZGUoKTtcbiAgICAgICAgc3RhcnRTY3JlZW4uc2hvdygpO1xuICAgIH0pO1xufSk7XG5jb25zdCBpbml0QXBwID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcHJlbG9hZGVyLnNob3coKTtcbiAgICBnYW1lU2NyZWVuLmhpZGUoKTtcbiAgICBzdGFydFNjcmVlbi5oaWRlKCk7XG4gICAgeWllbGQgaW5pdEFsbEFQSSgpO1xuICAgIG5hbWVJbnB1dC5vbignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgIGlmIChuYW1lSW5wdXQudmFsKCkpIHtcbiAgICAgICAgICAgIHN0YXJ0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHN0YXJ0QnV0dG9uLmNsaWNrKCgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBzdGFydEdhbWUobmFtZUlucHV0LnZhbCgpKTtcbiAgICB9KSk7XG59KTtcbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXJOYW1lKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBpbWFnZUNhcHR1cmVfMS50YWtlUGhvdG8oKTtcbiAgICAgICAgZ2FtZVNjcmVlbi5zaG93KCk7XG4gICAgICAgIHN0YXJ0U2NyZWVuLmhpZGUoKTtcbiAgICAgICAgdm9pY2VfMS5zZXRVcFVzZXIocGxheWVyTmFtZSk7XG4gICAgICAgIC8vIHNheVNvbWV0aGluZyhQSFJBU0VTLkhFTExPKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgYWxlcnQoZSk7XG4gICAgfVxufSk7XG53aW5kb3cub25sb2FkID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc29sZV8xLmVuYWJsZU1vYmlsZUNvbnNvbGUoKTtcbiAgICB5aWVsZCBpbml0QXBwKCk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIG1vdXNlT3BlbmluZ1RyZXNob2xkOiAwLjYsXG4gICAgbW91c2VDbG9zaW5nVHJlc2hvbGQ6IDAuNSxcbiAgICBoZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQ6IDAuMTUsXG4gICAgaGVhZE1vdmVtZW50U3RvcHBlZFRyZXNob2xkOiAwLjA4LFxufTtcbmNsYXNzIEhlYWRDb250cm9sU2VydmljZSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNJZCwgc2V0dGluZ3MpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzID0ge1xuICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXG4gICAgICAgICAgICBtb3VzZU9wZW5lZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc0RldGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRW5hYmxlZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2wgPSBudWxsO1xuICAgICAgICB0aGlzLmN2ID0gbnVsbDtcbiAgICAgICAgdGhpcy52aWRlb1RleHR1cmUgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvVHJhbnNmb3JtTWF0MiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtWHlzID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VPcGVuaW5nID0gKGRldGVjdFN0YXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGV0ZWN0U3RhdGUucnkgPCAtMSAqIHRoaXMuc2V0dGluZ3MuaGVhZE1vdmVtZW50U3RhcnRlZFRyZXNob2xkIHx8IGRldGVjdFN0YXRlLnJ5ID4gdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAvLyBIZWFkIHNob3VsZCBiZSBpbiB0aGUgY2VudGVyIHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG1vdXRoT3BlbmluZyA9IChkZXRlY3RTdGF0ZS5leHByZXNzaW9uc1swXSAtIDAuMikgKiA1LjA7XG4gICAgICAgICAgICBtb3V0aE9wZW5pbmcgPSBNYXRoLm1pbihNYXRoLm1heChtb3V0aE9wZW5pbmcsIDApLCAxKTtcbiAgICAgICAgICAgIGlmIChtb3V0aE9wZW5pbmcgPiB0aGlzLnNldHRpbmdzLm1vdXNlT3BlbmluZ1RyZXNob2xkICYmICF0aGlzLm1vdmVtZW50TG9ja3MubW91c2VPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3MubW91c2VPcGVuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ21vdXNlIG9wZW5lZCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW91dGhPcGVuaW5nIDwgdGhpcy5zZXR0aW5ncy5tb3VzZUNsb3NpbmdUcmVzaG9sZCAmJiB0aGlzLm1vdmVtZW50TG9ja3MubW91c2VPcGVuZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3MubW91c2VPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdtb3VzZSBjbG9zZWQnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZU1vdmUgPSAobXYpID0+IHtcbiAgICAgICAgICAgIGlmIChtdi5yeCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXhpc01vdmVtZW50KHsgYXhpczogJ3ZlcnRpY2FsJywgYXhpc1Bvc2l0aW9uOiBtdi5yeCwgbWF4VmFsdWU6ICdkb3duJywgbWluVmFsdWU6ICd1cCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXYucnkgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUF4aXNNb3ZlbWVudCh7IGF4aXM6ICdob3Jpem9udGFsJywgYXhpc1Bvc2l0aW9uOiBtdi5yeSwgbWF4VmFsdWU6ICdsZWZ0JywgbWluVmFsdWU6ICdyaWdodCcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQXhpc01vdmVtZW50ID0gKHsgYXhpcywgYXhpc1Bvc2l0aW9uLCBtYXhWYWx1ZSwgbWluVmFsdWUsIH0pID0+IHtcbiAgICAgICAgICAgIGlmIChheGlzUG9zaXRpb24gPCAtMSAqIHRoaXMuc2V0dGluZ3MuaGVhZE1vdmVtZW50U3RhcnRlZFRyZXNob2xkICYmICF0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQobWluVmFsdWUpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXhpc1Bvc2l0aW9uID4gdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQgJiYgIXRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChtYXhWYWx1ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChheGlzUG9zaXRpb24gPiAtMSAqIHRoaXMuc2V0dGluZ3MuaGVhZE1vdmVtZW50U3RvcHBlZFRyZXNob2xkICYmIGF4aXNQb3NpdGlvbiA8IHRoaXMuc2V0dGluZ3MuaGVhZE1vdmVtZW50U3RvcHBlZFRyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U2V0dGluZ3MpLCBzZXR0aW5ncyk7XG4gICAgICAgIHdpbmRvdy5KRUVGQUNFRklMVEVSQVBJLmluaXQoe1xuICAgICAgICAgICAgY2FudmFzSWQ6IGNhbnZhc0lkLFxuICAgICAgICAgICAgTk5DUGF0aDogJy4vdmVuZG9yLycsXG4gICAgICAgICAgICBhbmltYXRlRGVsYXk6IDIwLFxuICAgICAgICAgICAgY2FsbGJhY2tSZWFkeTogKGVyckNvZGUsIGplZUZhY2VGaWx0ZXJPYmopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGVyckNvZGUgPSAnV0VCQ0FNX1VOQVZBSUxBQkxFJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uQ2FtZXJhUGVyc21pc3Npb25GYWlsZWQgJiYgc2V0dGluZ3Mub25DYW1lcmFQZXJzbWlzc2lvbkZhaWxlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FOIEVSUk9SIEhBUFBFTlMuIFNPUlJZIEJSTyA6KCAuIEVSUiA9JywgZXJyQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nbCA9IGplZUZhY2VGaWx0ZXJPYmpbJ0dMJ107XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1RleHR1cmUgPSBqZWVGYWNlRmlsdGVyT2JqWyd2aWRlb1RleHR1cmUnXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVHJhbnNmb3JtTWF0MiA9IGplZUZhY2VGaWx0ZXJPYmpbJ3ZpZGVvVHJhbnNmb3JtTWF0MiddO1xuICAgICAgICAgICAgICAgIHRoaXMuY3YgPSBqZWVGYWNlRmlsdGVyT2JqWydjYW52YXNFbGVtZW50J107XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0SGVhZFNlYXJjaERyYXcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5vblJlYWR5ICYmIHNldHRpbmdzLm9uUmVhZHkoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBjYWxsZWQgYXQgZWFjaCByZW5kZXIgaXRlcmF0aW9uIChkcmF3aW5nIGxvb3ApOlxuICAgICAgICAgICAgY2FsbGJhY2tUcmFjazogKGRldGVjdFN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmlzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0hlYWRTZWFyY2goZGV0ZWN0U3RhdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW92ZShkZXRlY3RTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU9wZW5pbmcoZGV0ZWN0U3RhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHRvZ2dsZShpc0VuYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNFbmFibGVkID09PSBpc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29tcGlsZVNoYWRlcihzb3VyY2UsIGdsVHlwZSwgdHlwZVN0cmluZykge1xuICAgICAgICBjb25zdCBnbFNoYWRlciA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKGdsVHlwZSk7XG4gICAgICAgIHRoaXMuZ2wuc2hhZGVyU291cmNlKGdsU2hhZGVyLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmdsLmNvbXBpbGVTaGFkZXIoZ2xTaGFkZXIpO1xuICAgICAgICBpZiAoIXRoaXMuZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGdsU2hhZGVyLCB0aGlzLmdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICAgICAgYWxlcnQoJ0VSUk9SIElOICcgKyB0eXBlU3RyaW5nICsgJyBTSEFERVI6ICcgKyB0aGlzLmdsLmdldFNoYWRlckluZm9Mb2coZ2xTaGFkZXIpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnbFNoYWRlcjtcbiAgICB9XG4gICAgaW5pdEhlYWRTZWFyY2hEcmF3KCkge1xuICAgICAgICAvLyBidWlsZCB0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtOlxuICAgICAgICBjb25zdCBzaGFkZXJWZXJ0ZXhTb3VyY2UgPSAnXFxuXFxcbiAgICAgIGF0dHJpYnV0ZSB2ZWMyIGFhdF9wb3NpdGlvbjtcXG5cXFxuICAgICAgdmFyeWluZyB2ZWMyIHZVVjtcXG5cXFxuICAgICAgXFxuXFxcbiAgICAgIHZvaWQgbWFpbih2b2lkKSB7XFxuXFxcbiAgICAgICAgZ2xfUG9zaXRpb24gPSB2ZWM0KGFhdF9wb3NpdGlvbiwgMC4sIDEuKTtcXG5cXFxuICAgICAgICB2VVYgPSAwLjUgKyAwLjUgKiBhYXRfcG9zaXRpb247XFxuXFxcbiAgICAgICAgdlVWLnggPSAxLi12VVYueDsgLy8gbWlycm9yIGRpcGxheVxcblxcXG4gICAgICB9JztcbiAgICAgICAgY29uc3Qgc2hhZGVyRnJhZ21lbnRTb3VyY2UgPSAnXFxuXFxcbiAgICAgIHByZWNpc2lvbiBsb3dwIGZsb2F0O1xcblxcXG4gICAgICB2YXJ5aW5nIHZlYzIgdlVWO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgc2FtcGxlclZpZGVvO1xcblxcXG4gICAgICB1bmlmb3JtIG1hdDIgdmlkZW9UcmFuc2Zvcm1NYXQyO1xcblxcXG4gICAgICB1bmlmb3JtIHZlYzMgdXh5cztcXG5cXFxuICAgICAgXFxuXFxcbiAgICAgIHZvaWQgbWFpbih2b2lkKSB7XFxuXFxcbiAgICAgICAgdmVjMiB1dlZpZGVvQ2VudGVyZWQgPSAyLjAgKiB2aWRlb1RyYW5zZm9ybU1hdDIgKiAodlVWIC0gMC41KTtcXG5cXFxuICAgICAgICB2ZWMyIHV2VmlkZW8gPSB1dlZpZGVvQ2VudGVyZWQgKyAwLjU7XFxuXFxcbiAgICAgICAgdmVjMyBjb2xvclZpZGVvID0gdGV4dHVyZTJEKHNhbXBsZXJWaWRlbywgdXZWaWRlbykucmdiO1xcblxcXG4gICAgICAgIHZlYzIgcG9zID0gdlVWKjIuLXZlYzIoMS4sMS4pO1xcblxcXG4gICAgICAgIHZlYzIgaXNJbnNpZGUgPSBzdGVwKHV4eXMueHktdXh5cy56KnZlYzIoMS4sMS4pLCBwb3MpO1xcblxcXG4gICAgICAgIGlzSW5zaWRlICo9IHN0ZXAocG9zLCB1eHlzLnh5K3V4eXMueip2ZWMyKDEuLDEuKSk7XFxuXFxcbiAgICAgICAgdmVjMiBibGVuZENlbnRlckZhY3RvciA9IGFicyhwb3MtdXh5cy54eSkgLyB1eHlzLno7XFxuXFxcbiAgICAgICAgZmxvYXQgYWxwaGEgPSBpc0luc2lkZS54ICogaXNJbnNpZGUueSAqIHBvdyhtYXgoYmxlbmRDZW50ZXJGYWN0b3IueCwgYmxlbmRDZW50ZXJGYWN0b3IueSksIDMuKTtcXG5cXFxuICAgICAgICB2ZWMzIGNvbG9yID0gbWl4KGNvbG9yVmlkZW8sIHZlYzMoMC4sMC42LDEuKSwgYWxwaGEpO1xcblxcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsMS4pO1xcblxcXG4gICAgICB9JztcbiAgICAgICAgY29uc3QgZ2xTaGFkZXJWZXJ0ZXggPSB0aGlzLmNvbXBpbGVTaGFkZXIoc2hhZGVyVmVydGV4U291cmNlLCB0aGlzLmdsLlZFUlRFWF9TSEFERVIsICdWRVJURVgnKTtcbiAgICAgICAgY29uc3QgZ2xTaGFkZXJGcmFnbWVudCA9IHRoaXMuY29tcGlsZVNoYWRlcihzaGFkZXJGcmFnbWVudFNvdXJjZSwgdGhpcy5nbC5GUkFHTUVOVF9TSEFERVIsICdGUkFHTUVOVCcpO1xuICAgICAgICB0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgICAgIHRoaXMuZ2wuYXR0YWNoU2hhZGVyKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sIGdsU2hhZGVyVmVydGV4KTtcbiAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIodGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgZ2xTaGFkZXJGcmFnbWVudCk7XG4gICAgICAgIHRoaXMuZ2wubGlua1Byb2dyYW0odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSk7XG4gICAgICAgIGNvbnN0IHNhbXBsZXJWaWRlbyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sICdzYW1wbGVyVmlkZW8nKTtcbiAgICAgICAgdGhpcy5oZWFkU2VhcmNoVW5pZm9ybVh5cyA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sICd1eHlzJyk7XG4gICAgICAgIHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1WaWRlb1RyYW5zZm9ybU1hdDIgPSB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCAndmlkZW9UcmFuc2Zvcm1NYXQyJyk7XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtMWkoc2FtcGxlclZpZGVvLCAwKTtcbiAgICB9XG4gICAgZHJhd0hlYWRTZWFyY2goZGV0ZWN0U3RhdGUpIHtcbiAgICAgICAgLy8gdW5iaW5kIHRoZSBjdXJyZW50IEZCTyBhbmQgc2V0IHRoZSB2aWV3cG9ydCBhcyB0aGUgd2hvbGUgY2FudmFzOlxuICAgICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMuY3Yud2lkdGgsIHRoaXMuY3YuaGVpZ2h0KTtcbiAgICAgICAgLy8gdXNlIHRoZSBoZWFkIGRyYXcgc2hhZGVyIHByb2dyYW0gYW5kIHN5bmMgdW5pZm9ybXM6XG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTApO1xuICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy52aWRlb1RleHR1cmUpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0zZih0aGlzLmhlYWRTZWFyY2hVbmlmb3JtWHlzLCBkZXRlY3RTdGF0ZS54LCBkZXRlY3RTdGF0ZS55LCBkZXRlY3RTdGF0ZS5zKTtcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4MmZ2KHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1WaWRlb1RyYW5zZm9ybU1hdDIsIGZhbHNlLCB0aGlzLnZpZGVvVHJhbnNmb3JtTWF0Mik7XG4gICAgICAgIC8vIGRyYXcgdGhlIHNxdWFyZSBsb29raW5nIGZvciB0aGUgaGVhZFxuICAgICAgICAvLyB0aGUgVkJPIGZpbGxpbmcgdGhlIHdob2xlIHNjcmVlbiBpcyBzdGlsbCBib3VuZCB0byB0aGUgY29udGV4dFxuICAgICAgICAvLyBmaWxsIHRoZSB2aWV3UG9ydDpcbiAgICAgICAgdGhpcy5nbC5kcmF3RWxlbWVudHModGhpcy5nbC5UUklBTkdMRVMsIDMsIHRoaXMuZ2wuVU5TSUdORURfU0hPUlQsIDApO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IEhlYWRDb250cm9sU2VydmljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pbml0SGVhZENvbnRyb2wgPSBleHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5jb25zdCBIZWFkQ29udHJvbFNlcnZpY2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9IZWFkQ29udHJvbFNlcnZpY2VcIikpO1xudmFyIEhlYWRDb250cm9sU2VydmljZV8yID0gcmVxdWlyZShcIi4vSGVhZENvbnRyb2xTZXJ2aWNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX19pbXBvcnREZWZhdWx0KEhlYWRDb250cm9sU2VydmljZV8yKS5kZWZhdWx0OyB9IH0pO1xuY29uc3QgaW5pdEhlYWRDb250cm9sID0gKCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRDb250cm9sU2VydmljZSA9IG5ldyBIZWFkQ29udHJvbFNlcnZpY2VfMS5kZWZhdWx0KCdoZWFkLXByZXZpZXcnLCB7XG4gICAgICAgICAgICBvblJlYWR5OiByZXNvbHZlLFxuICAgICAgICAgICAgb25DYW1lcmFQZXJzbWlzc2lvbkZhaWxlZDogKCkgPT4gYWxlcnQoJ1RoaXMgZ2FtZSBpcyBoZWFkLWNvbnRyb2xsZWQuIFlvdSBuZWVkIHRvIGVuYWJsZSBjYW1lcmEgdG8gcGxheSB0aGUgZ2FtZS4nKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS50b2dnbGUodHJ1ZSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZSBvcGVuZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnbW91c2Ugb3BlbmVkJykpO1xuICAgICAgICBoZWFkQ29udHJvbFNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2UgY2xvc2VkJywgKCkgPT4gY29uc29sZS5sb2coJ21vdXNlIGNsb3NlZCcpKTtcbiAgICAgICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2xlZnQnLCAoKSA9PiBjb25zb2xlLmxvZygnbGVmdCcpKTtcbiAgICAgICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ3JpZ2h0JywgKCkgPT4gY29uc29sZS5sb2coJ3JpZ2h0JykpO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaW5pdEhlYWRDb250cm9sID0gaW5pdEhlYWRDb250cm9sO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdEltYWdlQ2FwdHVyZSA9IGV4cG9ydHMudGFrZVBob3RvID0gdm9pZCAwO1xubGV0IGltYWdlQ2FwdHVyZTtcbmxldCBpc0luaXQgPSBmYWxzZTtcbmNvbnN0IHRha2VQaG90byA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGltYWdlQ2FwdHVyZVxuICAgICAgICAudGFrZVBob3RvKClcbiAgICAgICAgLnRoZW4oKGJsb2IpID0+IGNyZWF0ZUltYWdlQml0bWFwKGJsb2IpKVxuICAgICAgICAudGhlbigoaW1hZ2VCaXRtYXApID0+IHtcbiAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rha2VQaG90b0NhbnZhcycpO1xuICAgICAgICBjYW52YXMuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRyYXdDYW52YXMoY2FudmFzLCBpbWFnZUJpdG1hcCk7XG4gICAgICAgIC8vY2FudmFzLnRvQmxvYihhc3luYyAoYmxvYikgPT4ge1xuICAgICAgICAvLyAgdHJ5IHtcbiAgICAgICAgLy8gICAgYXdhaXQgY3JlYXRlRmlsZShibG9iKTtcbiAgICAgICAgLy8gICAgYXdhaXQgcmVhZEZpbGUoKTtcbiAgICAgICAgLy8gIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gICAgdGhyb3cgZTtcbiAgICAgICAgLy8gIH1cbiAgICAgICAgLy99KTtcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy50YWtlUGhvdG8gPSB0YWtlUGhvdG87XG5mdW5jdGlvbiBkcmF3Q2FudmFzKGNhbnZhcywgaW1nKSB7XG4gICAgY2FudmFzLndpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShjYW52YXMpLndpZHRoLnNwbGl0KCdweCcpWzBdO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykuaGVpZ2h0LnNwbGl0KCdweCcpWzBdO1xuICAgIGxldCByYXRpbyA9IE1hdGgubWluKGNhbnZhcy53aWR0aCAvIGltZy53aWR0aCwgY2FudmFzLmhlaWdodCAvIGltZy5oZWlnaHQpO1xuICAgIGxldCB4ID0gKGNhbnZhcy53aWR0aCAtIGltZy53aWR0aCAqIHJhdGlvKSAvIDI7XG4gICAgbGV0IHkgPSAoY2FudmFzLmhlaWdodCAtIGltZy5oZWlnaHQgKiByYXRpbykgLyAyO1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWcsIDAsIDAsIGltZy53aWR0aCwgaW1nLmhlaWdodCwgeCwgeSwgaW1nLndpZHRoICogcmF0aW8sIGltZy5oZWlnaHQgKiByYXRpbyk7XG59XG5jb25zdCBpbml0SW1hZ2VDYXB0dXJlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgaWYgKGlzSW5pdCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGlzSW5pdCA9IHRydWU7XG4gICAgcmV0dXJuIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSkudGhlbigobWVkaWFTdHJlYW0pID0+IHtcbiAgICAgICAgY29uc3QgdHJhY2sgPSBtZWRpYVN0cmVhbS5nZXRWaWRlb1RyYWNrcygpWzBdO1xuICAgICAgICBpbWFnZUNhcHR1cmUgPSBuZXcgSW1hZ2VDYXB0dXJlKHRyYWNrKTtcbiAgICB9KTtcbn0pO1xuZXhwb3J0cy5pbml0SW1hZ2VDYXB0dXJlID0gaW5pdEltYWdlQ2FwdHVyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNheVNvbWV0aGluZyA9IGV4cG9ydHMuc2V0VXBVc2VyID0gZXhwb3J0cy5QSFJBU0VTID0gZXhwb3J0cy5pbml0Vm9pY2VTZXJ2aWNlID0gdm9pZCAwO1xubGV0IFZPSUNFO1xuY29uc3QgaW5pdFZvaWNlU2VydmljZSA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFZPSUNFID0gd2luZG93LnNwZWVjaFN5bnRoZXNpcy5nZXRWb2ljZXMoKS5maW5kKCh7IGxhbmcgfSkgPT4gbGFuZyA9PT0gJ2VuLUdCJyk7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9LCA1MDApO1xuICAgIH0pO1xufSk7XG5leHBvcnRzLmluaXRWb2ljZVNlcnZpY2UgPSBpbml0Vm9pY2VTZXJ2aWNlO1xuZXhwb3J0cy5QSFJBU0VTID0ge1xuICAgIEhFTExPOiAnYEhpLCAldXNlcm5hbWUlLiBIYXZlIGEgZ29vZCBnYW1lJyxcbiAgICBSSUdIVDogJ0dvb2QgcmlnaHQgdHVybiwgJXVzZXJuYW1lJScsXG59O1xubGV0IHVzZXJOYW1lID0gJyc7XG5jb25zdCBzZXRVcFVzZXIgPSAobmFtZSkgPT4ge1xuICAgIHVzZXJOYW1lID0gbmFtZTtcbn07XG5leHBvcnRzLnNldFVwVXNlciA9IHNldFVwVXNlcjtcbmNvbnN0IHNheVNvbWV0aGluZyA9ICh0ZXh0KSA9PiB7XG4gICAgaWYgKCFWT0lDRSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UodGV4dC5yZXBsYWNlKCcldXNlcm5hbWUlJywgdXNlck5hbWUpKTtcbiAgICB1dHRlcmFuY2Uudm9pY2UgPSBWT0lDRTtcbiAgICB1dHRlcmFuY2Uudm9sdW1lID0gMTtcbiAgICB1dHRlcmFuY2UucGl0Y2ggPSAxO1xuICAgIHV0dGVyYW5jZS5yYXRlID0gMTtcbiAgICBzcGVlY2hTeW50aGVzaXMuY2FuY2VsKCk7XG4gICAgc3BlZWNoU3ludGhlc2lzLnNwZWFrKHV0dGVyYW5jZSk7XG59O1xuZXhwb3J0cy5zYXlTb21ldGhpbmcgPSBzYXlTb21ldGhpbmc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==