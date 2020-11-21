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
        imageCapture = new ImageCapture(track);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9ub2RlX21vZHVsZXMvY29uc29sZS1zdWJzY3JpYmVyL2luZGV4LmpzIiwid2VicGFjazovL29obS1zbmFrZS8uL3NyYy9zdHlsZS9pbmRleC5zY3NzIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vbm9kZV9tb2R1bGVzL2ltYWdlLWNhcHR1cmUvc3JjL2ltYWdlY2FwdHVyZS5qcyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvc3R5bGUvaW5kZXguc2Nzcz9lMzZjIiwid2VicGFjazovL29obS1zbmFrZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvY29uc29sZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvZGVjbGFyZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9IZWFkQ29udHJvbFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL0hlYWRDb250cm9sU2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2UvLi9zcmMvc2VydmljZXMvSW1hZ2VDYXB0dXJlU2VydmljZS9pbWFnZUNhcHR1cmUudHMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlLy4vc3JjL3NlcnZpY2VzL1ZvaWNlU2VydmljZS92b2ljZS50cyIsIndlYnBhY2s6Ly9vaG0tc25ha2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29obS1zbmFrZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2htLXNuYWtlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLEtBQTZCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkQ7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRixzSEFBc0g7QUFDdEg7QUFDQSxrREFBa0QsaUJBQWlCLHFCQUFxQiwwQkFBMEIsb0JBQW9CLGtCQUFrQixjQUFjLDJCQUEy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QkFBa0IsTUFBTSxZQUFZLGFBQWEsWUFBWSxhQUFhLGFBQWEsY0FBYyxlQUFlLGNBQWMsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxhQUFhLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGlCQUFpQixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxhQUFhLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxpQkFBaUIsTUFBTSxVQUFVLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssWUFBWSxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUs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IiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU3Vic2NyaWJlIHRvIHRoZSBjb25zb2xlIG91dHB1dCBcbiAqXG4gKiBAYXV0aG9yIFNhbXNvbiBSYWR1XG4gKi8gXG4oZnVuY3Rpb24oKXtcbiAgICB2YXIgX2xvZyA9IGNvbnNvbGUubG9nO1xuICAgIHZhciBfd2FybiA9IGNvbnNvbGUud2FybjtcbiAgICB2YXIgX2Vycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICB2YXIgX2RlYnVnID0gY29uc29sZS5kZWJ1ZztcblxuICAgIHZhciBDb25zb2xlU3Vic2NyaWJlciA9IHtcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cgPSBfbG9nO1xuICAgICAgICAgICAgY29uc29sZS53YXJuID0gX3dhcm47XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yID0gX2Vycm9yO1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyA9IF9kZWJ1ZztcbiAgICAgICAgfSwgXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uKGNiLCBwcmV2ZW50TG9nZ2luZyl7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWW91IG11c3QgcGFzcyBhIHZhbGlkIGNhbGxiYWNrIGZ1bmN0aW9uLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZlbnRMb2dnaW5nID0gQm9vbGVhbihwcmV2ZW50TG9nZ2luZyk7IC8vZm9yY2UgYm9vbFxuXG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9JTkZPID0gXCJpbmZvXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9XQVJOID0gXCJ3YXJuXCI7XG4gICAgICAgICAgICBjb25zdCBDQVRFR09SWV9FUlJPUiA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgIGNvbnN0IENBVEVHT1JZX0RFQlVHID0gXCJkZWJ1Z1wiO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyA9IGNvbnNvbGUuaW5mbyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9sb2cpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb2cuY2FsbChjb25zb2xlLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKENBVEVHT1JZX0lORk8sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS53YXJuID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoX3dhcm4pe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF93YXJuLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9XQVJOLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChfZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRMb2dnaW5nKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lcnJvci5jYWxsKGNvbnNvbGUsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2IoQ0FURUdPUllfRVJST1IsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKF9kZWJ1Zyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudExvZ2dpbmcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX2RlYnVnLmNhbGwoY29uc29sZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYihDQVRFR09SWV9ERUJVRywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL2V4cG9ydFxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBDb25zb2xlU3Vic2NyaWJlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93ICYmIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKXtcbiAgICAgICAgd2luZG93LkNvbnNvbGVTdWJzY3JpYmVyID0gQ29uc29sZVN1YnNjcmliZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGV4cG9ydCBtb2R1bGUuXCIpO1xuICAgIH1cbn0pKCk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJ1dHRvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IH1cXG4gIGJ1dHRvbi5zdGFydCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogIzM4MmIyMjtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcGFkZGluZzogMS4yNWVtIDJlbTtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjBmMDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2IxODU5NztcXG4gICAgYm9yZGVyLXJhZGl1czogMC43NWVtO1xcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBiYWNrZ3JvdW5kIDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTsgfVxcbiAgICBidXR0b24uc3RhcnQ6OmJlZm9yZSB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgYmFja2dyb3VuZDogI2Y5YzRkMjtcXG4gICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjYjE4NTk3O1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC43NWVtLCAtMWVtKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBib3gtc2hhZG93IDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTsgfVxcbiAgICBidXR0b24uc3RhcnQ6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmU5ZTk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMC4yNWVtKTsgfVxcbiAgICAgIGJ1dHRvbi5zdGFydDpob3Zlcjo6YmVmb3JlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjYjE4NTk3O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjVlbSwgLTFlbSk7IH1cXG4gICAgYnV0dG9uLnN0YXJ0OmFjdGl2ZSB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZTllOTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sIDAuNzVlbSk7IH1cXG4gICAgICBidXR0b24uc3RhcnQ6YWN0aXZlOjpiZWZvcmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNiMTg1OTc7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIC0xZW0pOyB9XFxuXFxuLnRleHRib3gge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAwIDAgNDVweCAwO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0dXJuYXJvdW5kIDIwcyBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7IH1cXG5cXG4udGV4dGJveC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjZmNTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggIzI3MjM0MztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlOyB9XFxuXFxuLnRleHRib3gtZmllbGQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCAxNXB4O1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDsgfVxcblxcbi50ZXh0Ym94LWxhYmVsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIG1pbi13aWR0aDogODBweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAtYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhZThlODtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7IH1cXG4gIC50ZXh0Ym94LWFjdGlvbltkaXNhYmxlZF0ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuLnRleHRib3gtYWN0aW9uIHN2ZyB7XFxuICBmaWxsOiAjMjcyMzQzO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNjUlOyB9XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LWZhY2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YThhODtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7IH1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtc2lkZSB7XFxuICB3aWR0aDogMTBweDsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1ib3R0b20sXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LXRvcCB7XFxuICBoZWlnaHQ6IDEwcHg7IH1cXG5cXG4udGV4dGJveC1hY3Rpb246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljY2VjZTsgfVxcblxcbi50ZXh0Ym94LWFjdGlvbjpob3ZlciAudGV4dGJveC1mYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyODI7IH1cXG5cXG4udGV4dGJveC10ZXh0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250OiAyLjVyZW0gc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBhbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi50ZXh0Ym94LXRleHQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuXFxuLnRleHRib3gtdGV4dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG4udGV4dGJveC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbi50ZXh0Ym94LXRleHQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbi50ZXh0Ym94LWZhY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjM0MztcXG4gIGxlZnQ6IDA7IH1cXG5cXG4udGV4dGJveC1zaWRlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjBweDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlOyB9XFxuXFxuLnRleHRib3gtYm90dG9tIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTsgfVxcblxcbi50ZXh0Ym94LXRvcCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDsgfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBob3ZlciB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTsgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGhvdmVyIHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwcHgpOyB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyB0dXJuYXJvdW5kIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTsgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpOyB9XFxuICA2NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7IH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIHR1cm5hcm91bmQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpOyB9XFxuICAzMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7IH1cXG4gIDY3JSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgwKSByb3RhdGVZKDBkZWcpIHJvdGF0ZVooMGRlZykgcm90YXRlWCgwZGVnKTsgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7IH0gfVxcblxcbi5yZWZlcmVuY2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3R0b206IDE1cHg7IH1cXG5cXG4ucmVmZXJlbmNlIGltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDsgfVxcblxcbi5oZWFkLXByZXZpZXcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4uY29uc29sZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4OyB9XFxuICAuY29uc29sZSBwIHtcXG4gICAgbWFyZ2luOiAycHggMDsgfVxcblxcbi5sb2FkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7IH1cXG4gIC5sb2FkZXIgLnllbGxvdyB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICMwNjYzNGE7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmb29kIDEuOHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGZvb2QgMS44cyBpbmZpbml0ZSBsaW5lYXI7IH1cXG4gIC5sb2FkZXIgLnNuYWtlXzEsIC5sb2FkZXIgLnNuYWtlXzIsIC5sb2FkZXIgLnNuYWtlXzMsIC5sb2FkZXIgLnNuYWtlXzQsIC5sb2FkZXIgLnNuYWtlXzUsIC5sb2FkZXIgLnNuYWtlXzYsIC5sb2FkZXIgLnNuYWtlXzcsIC5sb2FkZXIgLnNuYWtlXzgsIC5sb2FkZXIgLnNuYWtlXzkge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltYXRlIDEuOHMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IGFuaW1hdGUgMS44cyBpbmZpbml0ZSBsaW5lYXI7IH1cXG4gIC5sb2FkZXIgLnNuYWtlXzEge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7IH1cXG4gIC5sb2FkZXIgLnNuYWtlXzIge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4wNXM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4wNXM7IH1cXG4gIC5sb2FkZXIgLnNuYWtlXzMge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4xcztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XFxuICAubG9hZGVyIC5zbmFrZV80IHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMTVzOyB9XFxuICAubG9hZGVyIC5zbmFrZV81IHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxcbiAgLmxvYWRlciAuc25ha2VfNiB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI1cztcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsgfVxcblxcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XFxuICAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7IH1cXG4gIDI1JSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiA0MHB4OyB9XFxuICA1MCUge1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGxlZnQ6IDQwcHg7IH1cXG4gIDc1JSB7XFxuICAgIHRvcDogNDBweDtcXG4gICAgbGVmdDogMHB4OyB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDsgfSB9XFxuXFxuQGtleWZyYW1lcyBmb29kIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgNzUlIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbmJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmdhbWUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2FhZmZhOSwgIzExZmZiZCk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxOHB4OyB9XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtOyB9XFxuXFxuLnBob3RvLWNhbnZhcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2dhbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbnNvbGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2xvYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsU0FBUztFQUNULHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0VBVnRCO0lBWUksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixjQXRCVTtJQXVCVix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQXhCZ0I7SUF5QmhCLHlCQXRCaUI7SUF1QmpCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIscUdBQXFHLEVBQUE7SUFyQnpHO01BdUJNLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixNQUFNO01BQ04sT0FBTztNQUNQLFFBQVE7TUFDUixTQUFTO01BQ1QsbUJBcENhO01BcUNiLHNCQUFzQjtNQUN0Qiw2QkFyQ2U7TUFzQ2YsdUNBQXVDO01BQ3ZDLHFHQUFxRyxFQUFBO0lBbkMzRztNQXNDTSxtQkE1Q1E7TUE2Q1IsK0JBQStCLEVBQUE7TUF2Q3JDO1FBeUNRLDZCQTdDYTtRQThDYixzQ0FBc0MsRUFBQTtJQTFDOUM7TUE4Q00sbUJBcERRO01BcURSLGlDQUFpQyxFQUFBO01BL0N2QztRQWlEUSw2QkFyRGE7UUFzRGIsa0NBQWtDLEVBQUE7O0FDN0QxQztFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLDBDQUEwQztFQUMxQyxrQ0FBa0MsRUFBQTs7QUFHcEM7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix5QkFBeUI7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SUFDRSxTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBRVo7SUFDRSxTQUFTO0lBQ1QsU0FBUyxFQUFBO0VBRVg7SUFDRSxRQUFRO0lBQ1IsU0FBUyxFQUFBLEVBQUE7O0FBSWI7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FDbEZkO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0RBQW9ELEVBQUE7O0FBR3REO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qix3REF0QmdFO0VBdUJoRSxzQkFBc0I7RUFDdEIsZUFBZSxFQUFBOztBQUlqQjtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRiZzogI2ZmZjtcXG4kdGV4dDogIzM4MmIyMjtcXG4kbGlnaHQtcGluazogI2ZmZjBmMDtcXG4kcGluazogI2ZmZTllOTtcXG4kZGFyay1waW5rOiAjZjljNGQyO1xcbiRwaW5rLWJvcmRlcjogI2IxODU5NztcXG4kcGluay1zaGFkb3c6ICNmZmUzZTI7XFxuXFxuXFxuYnV0dG9uIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICYuc3RhcnQge1xcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICR0ZXh0O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBwYWRkaW5nOiAxLjI1ZW0gMmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAkbGlnaHQtcGluaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgJHBpbmstYm9yZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1ZW07XFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC41OCwgMSksIGJhY2tncm91bmQgMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpO1xcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgYm90dG9tOiAwO1xcbiAgICAgIGJhY2tncm91bmQ6ICRkYXJrLXBpbms7XFxuICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHBpbmstYm9yZGVyO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMC43NWVtLCAtMWVtKTtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpLCBib3gtc2hhZG93IDE1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAxKTtcXG4gICAgfVxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkcGluaztcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwLjI1ZW0pO1xcbiAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggJHBpbmstYm9yZGVyO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLjVlbSwgLTFlbSk7XFxuICAgICAgfVxcbiAgICB9XFxuICAgICY6YWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkcGluaztcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwZW0sIDAuNzVlbSk7XFxuICAgICAgJjo6YmVmb3JlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAkcGluay1ib3JkZXI7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIC0xZW0pO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIi8vaHR0cHM6Ly9jb2RlcGVuLmlvL2pvdWFubWFyY2VsL3Blbi9Qb3dicmdxXFxuLnRleHRib3gge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWFyZ2luOiAwIDAgNDVweCAwO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0dXJuYXJvdW5kIDIwcyBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogdHVybmFyb3VuZCAyMHMgaW5maW5pdGU7XFxufVxcblxcbi50ZXh0Ym94LWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmNmY1O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCAjMjcyMzQzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxufVxcblxcbi50ZXh0Ym94LWZpZWxkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4IDE1cHggMTVweDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi50ZXh0Ym94LWxhYmVsIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDIwcHgpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjJzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuMnMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgY29sb3I6ICMyNzIzNDM7XFxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjUpKTtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIHtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgbWluLXdpZHRoOiA4MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC1ib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgYW5pbWF0aW9uOiBob3ZlciAycyAtMC40cyBhbHRlcm5hdGUgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFlOGU4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIFxcbiAgJltkaXNhYmxlZF0ge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4udGV4dGJveC1hY3Rpb24gc3ZnIHtcXG4gIGZpbGw6ICMyNzIzNDM7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA2NSU7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbiAudGV4dGJveC1mYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmE4YTg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbn1cXG5cXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtc2lkZSB7XFxuICB3aWR0aDogMTBweDtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uIC50ZXh0Ym94LWJvdHRvbSxcXG4udGV4dGJveC1hY3Rpb24gLnRleHRib3gtdG9wIHtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuLnRleHRib3gtYWN0aW9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2NlY2U7XFxufVxcblxcbi50ZXh0Ym94LWFjdGlvbjpob3ZlciAudGV4dGJveC1mYWNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjgyODI7XFxufVxcblxcbi50ZXh0Ym94LXRleHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQ6IDIuNXJlbSBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGhvdmVyIDJzIC0wLjRzIGFsdGVybmF0ZSBpbmZpbml0ZTtcXG4gIGFuaW1hdGlvbjogaG92ZXIgMnMgLTAuNHMgYWx0ZXJuYXRlIGluZmluaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGV4dGJveC10ZXh0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGV4dGJveC10ZXh0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGV4dGJveC10ZXh0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjMjcyMzQzO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG4udGV4dGJveC10ZXh0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogIzI3MjM0MztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLnRleHRib3gtdGV4dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGV4dGJveC1mYWNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzIzNDM7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4udGV4dGJveC1zaWRlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWSg5MGRlZyk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMjBweDtcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xcbn1cXG5cXG4udGV4dGJveC1ib3R0b20ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDkwZGVnKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xcbn1cXG5cXG4udGV4dGJveC10b3Age1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBob3ZlciB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBob3ZlciB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMjBweCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigyMHB4KTtcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHR1cm5hcm91bmQge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgfVxcbiAgMzMlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDIwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgtMzBkZWcpO1xcbiAgfVxcbiAgNjclIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDApIHJvdGF0ZVkoMGRlZykgcm90YXRlWigwZGVnKSByb3RhdGVYKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdHVybmFyb3VuZCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWSg3MGRlZykgcm90YXRlWigtMTBkZWcpIHJvdGF0ZVgoMzBkZWcpO1xcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICB9XFxuICAzMyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoMjBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKC0zMGRlZyk7XFxuICB9XFxuICA2NyUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMCkgcm90YXRlWSgwZGVnKSByb3RhdGVaKDBkZWcpIHJvdGF0ZVgoMGRlZyk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVZKDcwZGVnKSByb3RhdGVaKC0xMGRlZykgcm90YXRlWCgzMGRlZyk7XFxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVkoNzBkZWcpIHJvdGF0ZVooLTEwZGVnKSByb3RhdGVYKDMwZGVnKTtcXG4gIH1cXG59XFxuXFxuLnJlZmVyZW5jZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG4gIGJvdHRvbTogMTVweDtcXG59XFxuXFxuLnJlZmVyZW5jZSBpbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblwiLFwiLmhlYWQtcHJldmlldyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG59XCIsXCIuY29uc29sZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgXFxuICBwIHtcXG4gICAgbWFyZ2luOiAycHggMDtcXG4gIH1cXG59XFxuXCIsXCIubG9hZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgXFxuICAueWVsbG93IHtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogIzA2NjM0YTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZvb2QgMS44cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogZm9vZCAxLjhzIGluZmluaXRlIGxpbmVhcjtcXG4gIH1cXG4gIFxcbiAgLnNuYWtlXzEsIC5zbmFrZV8yLCAuc25ha2VfMywgLnNuYWtlXzQsIC5zbmFrZV81LCAuc25ha2VfNiwgLnNuYWtlXzcsIC5zbmFrZV84LCAuc25ha2VfOSB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUgMS44cyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAxLjhzIGluZmluaXRlIGxpbmVhcjtcXG4gIH1cXG4gIFxcbiAgLnNuYWtlXzEge1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMHM7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxuICB9XFxuICBcXG4gIC5zbmFrZV8yIHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMDVzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMDVzO1xcbiAgfVxcbiAgXFxuICAuc25ha2VfMyB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XFxuICB9XFxuICBcXG4gIC5zbmFrZV80IHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMTVzO1xcbiAgfVxcbiAgXFxuICAuc25ha2VfNSB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XFxuICB9XFxuICBcXG4gIC5zbmFrZV82IHtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMjVzO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xcbiAgMCUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDQwcHg7XFxuICB9XFxuICA1MCUge1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGxlZnQ6IDQwcHg7XFxuICB9XFxuICA3NSUge1xcbiAgICB0b3A6IDQwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZvb2Qge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMjUlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICA3NSUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcblwiLFwiQGltcG9ydCBcXFwiLi9idXR0b25cXFwiO1xcbkBpbXBvcnQgXFxcIi4vaW5wdXRcXFwiO1xcbkBpbXBvcnQgXFxcIi4vZ2FtZVxcXCI7XFxuQGltcG9ydCBcXFwiLi9jb25zb2xlXFxcIjtcXG5AaW1wb3J0IFxcXCIuL2xvYWRlclxcXCI7XFxuXFxuJGJhY2tncm91bmQtZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhYWZmYTksICMxMWZmYmQpO1xcblxcbmJvZHksIGh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5nYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWdyYWRpZW50O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnVuZ2VlIFNoYWRlJztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ucGhvdG8tY2FudmFzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiLyoqXG4gKiBNZWRpYVN0cmVhbSBJbWFnZUNhcHR1cmUgcG9seWZpbGxcbiAqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmV4cG9ydCBsZXQgSW1hZ2VDYXB0dXJlID0gd2luZG93LkltYWdlQ2FwdHVyZTtcblxuaWYgKHR5cGVvZiBJbWFnZUNhcHR1cmUgPT09ICd1bmRlZmluZWQnKSB7XG4gIEltYWdlQ2FwdHVyZSA9IGNsYXNzIHtcblxuICAgIC8qKlxuICAgICAqIFRPRE8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2NvbnN0cnVjdG9yc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtNZWRpYVN0cmVhbVRyYWNrfSB2aWRlb1N0cmVhbVRyYWNrIC0gQSBNZWRpYVN0cmVhbVRyYWNrIG9mIHRoZSAndmlkZW8nIGtpbmRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2aWRlb1N0cmVhbVRyYWNrKSB7XG4gICAgICBpZiAodmlkZW9TdHJlYW1UcmFjay5raW5kICE9PSAndmlkZW8nKVxuICAgICAgICB0aHJvdyBuZXcgRE9NRXhjZXB0aW9uKCdOb3RTdXBwb3J0ZWRFcnJvcicpO1xuXG4gICAgICB0aGlzLl92aWRlb1N0cmVhbVRyYWNrID0gdmlkZW9TdHJlYW1UcmFjaztcbiAgICAgIGlmICghKCdyZWFkeVN0YXRlJyBpbiB0aGlzLl92aWRlb1N0cmVhbVRyYWNrKSkge1xuICAgICAgICAvLyBQb2x5ZmlsbCBmb3IgRmlyZWZveFxuICAgICAgICB0aGlzLl92aWRlb1N0cmVhbVRyYWNrLnJlYWR5U3RhdGUgPSAnbGl2ZSc7XG4gICAgICB9XG5cbiAgICAgIC8vIE1lZGlhU3RyZWFtIGNvbnN0cnVjdG9yIG5vdCBhdmFpbGFibGUgdW50aWwgQ2hyb21lIDU1IC0gaHR0cHM6Ly93d3cuY2hyb21lc3RhdHVzLmNvbS9mZWF0dXJlLzU5MTIxNzI1NDY3NTI1MTJcbiAgICAgIHRoaXMuX3ByZXZpZXdTdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oW3ZpZGVvU3RyZWFtVHJhY2tdKTtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50UGxheWluZyA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdwbGF5aW5nJywgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChIVE1MTWVkaWFFbGVtZW50KSB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdCA9IHRoaXMuX3ByZXZpZXdTdHJlYW07ICAvLyBTYWZhcmkgMTEgZG9lc24ndCBhbGxvdyB1c2Ugb2YgY3JlYXRlT2JqZWN0VVJMIGZvciBNZWRpYVN0cmVhbVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLl9wcmV2aWV3U3RyZWFtKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlkZW9FbGVtZW50Lm11dGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50LnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAnJyk7IC8vIFJlcXVpcmVkIGJ5IFNhZmFyaSBvbiBpT1MgMTEuIFNlZSBodHRwczovL3dlYmtpdC5vcmcvYmxvZy82Nzg0XG4gICAgICB0aGlzLnZpZGVvRWxlbWVudC5wbGF5KCk7XG5cbiAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgLy8gVE9ETyBGaXJlZm94IGhhcyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvT2Zmc2NyZWVuQ2FudmFzXG4gICAgICB0aGlzLmNhbnZhczJkQ29udGV4dCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9tZWRpYWNhcHR1cmUtaW1hZ2UvaW5kZXguaHRtbCNkb20taW1hZ2VjYXB0dXJlLXZpZGVvc3RyZWFtdHJhY2tcbiAgICAgKiBAcmV0dXJuIHtNZWRpYVN0cmVhbVRyYWNrfSBUaGUgTWVkaWFTdHJlYW1UcmFjayBwYXNzZWQgaW50byB0aGUgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBnZXQgdmlkZW9TdHJlYW1UcmFjaygpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aWRlb1N0cmVhbVRyYWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEltcGxlbWVudHMgaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2RvbS1pbWFnZWNhcHR1cmUtZ2V0cGhvdG9jYXBhYmlsaXRpZXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFBob3RvQ2FwYWJpbGl0aWVzPn0gRnVsZmlsbGVkIHByb21pc2Ugd2l0aFxuICAgICAqIFtQaG90b0NhcGFiaWxpdGllc10oaHR0cHM6Ly93d3cudzMub3JnL1RSL2ltYWdlLWNhcHR1cmUvI2lkbC1kZWYtcGhvdG9jYXBhYmlsaXRpZXMpXG4gICAgICogb2JqZWN0IG9uIHN1Y2Nlc3MsIHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIGdldFBob3RvQ2FwYWJpbGl0aWVzKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yR1BDKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBUT0RPIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdzNjL21lZGlhY2FwdHVyZS1pbWFnZS9pc3N1ZXMvOTdcbiAgICAgICAgY29uc3QgTWVkaWFTZXR0aW5nc1JhbmdlID0ge1xuICAgICAgICAgIGN1cnJlbnQ6IDAsIG1pbjogMCwgbWF4OiAwLFxuICAgICAgICB9O1xuICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICBleHBvc3VyZUNvbXBlbnNhdGlvbjogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIGV4cG9zdXJlTW9kZTogJ25vbmUnLFxuICAgICAgICAgIGZpbGxMaWdodE1vZGU6ICdub25lJyxcbiAgICAgICAgICBmb2N1c01vZGU6ICdub25lJyxcbiAgICAgICAgICBpbWFnZUhlaWdodDogTWVkaWFTZXR0aW5nc1JhbmdlLFxuICAgICAgICAgIGltYWdlV2lkdGg6IE1lZGlhU2V0dGluZ3NSYW5nZSxcbiAgICAgICAgICBpc286IE1lZGlhU2V0dGluZ3NSYW5nZSxcbiAgICAgICAgICByZWRFeWVSZWR1Y3Rpb246IGZhbHNlLFxuICAgICAgICAgIHdoaXRlQmFsYW5jZU1vZGU6ICdub25lJyxcbiAgICAgICAgICB6b29tOiBNZWRpYVNldHRpbmdzUmFuZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignT3BlcmF0aW9uRXJyb3InKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRzIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNkb20taW1hZ2VjYXB0dXJlLXNldG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGhvdG9TZXR0aW5ncyAtIFBob3RvIHNldHRpbmdzIGRpY3Rpb25hcnksIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNpZGwtZGVmLXBob3Rvc2V0dGluZ3NcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fSBGdWxmaWxsZWQgcHJvbWlzZSBvbiBzdWNjZXNzLCByZWplY3RlZCBwcm9taXNlIG9uIGZhaWx1cmVcbiAgICAgKi9cbiAgICBzZXRPcHRpb25zKHBob3RvU2V0dGluZ3MgPSB7fSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yU08ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRPRE9cbiAgICAgKiBJbXBsZW1lbnRzIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNkb20taW1hZ2VjYXB0dXJlLXRha2VwaG90b1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8QmxvYj59IEZ1bGZpbGxlZCBwcm9taXNlIHdpdGggW0Jsb2JdKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9GaWxlQVBJLyNibG9iKVxuICAgICAqIGFyZ3VtZW50IG9uIHN1Y2Nlc3M7IHJlamVjdGVkIHByb21pc2Ugb24gZmFpbHVyZVxuICAgICAqL1xuICAgIHRha2VQaG90bygpIHtcbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGV4ZWN1dG9yVFAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIC8vIGBJZiB0aGUgcmVhZHlTdGF0ZSBvZiB0aGUgTWVkaWFTdHJlYW1UcmFjayBwcm92aWRlZCBpbiB0aGUgY29uc3RydWN0b3IgaXMgbm90IGxpdmUsXG4gICAgICAgIC8vIHJldHVybiBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCBhIG5ldyBET01FeGNlcHRpb24gd2hvc2UgbmFtZSBpcyBcIkludmFsaWRTdGF0ZUVycm9yXCIuYFxuICAgICAgICBpZiAoc2VsZi5fdmlkZW9TdHJlYW1UcmFjay5yZWFkeVN0YXRlICE9PSAnbGl2ZScpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ0ludmFsaWRTdGF0ZUVycm9yJykpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYudmlkZW9FbGVtZW50UGxheWluZy50aGVuKCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VsZi5jYW52YXNFbGVtZW50LndpZHRoID0gc2VsZi52aWRlb0VsZW1lbnQudmlkZW9XaWR0aDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzRWxlbWVudC5oZWlnaHQgPSBzZWxmLnZpZGVvRWxlbWVudC52aWRlb0hlaWdodDtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzMmRDb250ZXh0LmRyYXdJbWFnZShzZWxmLnZpZGVvRWxlbWVudCwgMCwgMCk7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQudG9CbG9iKHJlc29sdmUpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignVW5rbm93bkVycm9yJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbXBsZW1lbnRzIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9pbWFnZS1jYXB0dXJlLyNkb20taW1hZ2VjYXB0dXJlLWdyYWJmcmFtZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8SW1hZ2VCaXRtYXA+fSBGdWxmaWxsZWQgcHJvbWlzZSB3aXRoXG4gICAgICogW0ltYWdlQml0bWFwXShodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUxL3dlYmFwcGFwaXMuaHRtbCN3ZWJhcHBhcGlzLWltYWdlcylcbiAgICAgKiBhcmd1bWVudCBvbiBzdWNjZXNzOyByZWplY3RlZCBwcm9taXNlIG9uIGZhaWx1cmVcbiAgICAgKi9cbiAgICBncmFiRnJhbWUoKSB7XG4gICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBleGVjdXRvckdGKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAvLyBgSWYgdGhlIHJlYWR5U3RhdGUgb2YgdGhlIE1lZGlhU3RyZWFtVHJhY2sgcHJvdmlkZWQgaW4gdGhlIGNvbnN0cnVjdG9yIGlzIG5vdCBsaXZlLFxuICAgICAgICAvLyByZXR1cm4gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggYSBuZXcgRE9NRXhjZXB0aW9uIHdob3NlIG5hbWUgaXMgXCJJbnZhbGlkU3RhdGVFcnJvclwiLmBcbiAgICAgICAgaWYgKHNlbGYuX3ZpZGVvU3RyZWFtVHJhY2sucmVhZHlTdGF0ZSAhPT0gJ2xpdmUnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdJbnZhbGlkU3RhdGVFcnJvcicpKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLnZpZGVvRWxlbWVudFBsYXlpbmcudGhlbigoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlbGYuY2FudmFzRWxlbWVudC53aWR0aCA9IHNlbGYudmlkZW9FbGVtZW50LnZpZGVvV2lkdGg7XG4gICAgICAgICAgICBzZWxmLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gc2VsZi52aWRlb0VsZW1lbnQudmlkZW9IZWlnaHQ7XG4gICAgICAgICAgICBzZWxmLmNhbnZhczJkQ29udGV4dC5kcmF3SW1hZ2Uoc2VsZi52aWRlb0VsZW1lbnQsIDAsIDApO1xuICAgICAgICAgICAgLy8gVE9ETyBwb2x5ZmlsbCBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW1hZ2VCaXRtYXBGYWN0b3JpZXMvY3JlYXRlSW1hZ2VCaXRtYXAgZm9yIElFXG4gICAgICAgICAgICByZXNvbHZlKHdpbmRvdy5jcmVhdGVJbWFnZUJpdG1hcChzZWxmLmNhbnZhc0VsZW1lbnQpKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBET01FeGNlcHRpb24oJ1Vua25vd25FcnJvcicpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuXG53aW5kb3cuSW1hZ2VDYXB0dXJlID0gSW1hZ2VDYXB0dXJlO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbmFibGVNb2JpbGVDb25zb2xlID0gdm9pZCAwO1xuY29uc3QgY29uc29sZV9zdWJzY3JpYmVyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImNvbnNvbGUtc3Vic2NyaWJlclwiKSk7XG5jb25zdCBlbmFibGVNb2JpbGVDb25zb2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1ZmZlciA9IFtdO1xuICAgIGNvbnNvbGVfc3Vic2NyaWJlcl8xLmRlZmF1bHQuYmluZCgoY2F0ZWdvcnksIGFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlci5wdXNoKHsgY2F0ZWdvcnksIG1lc3NhZ2U6IGFyZ3NbMF0gfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25zb2xlJykuaW5uZXJIVE1MID0gYnVmZmVyLm1hcCgobSkgPT4gYDxwPiR7bS5tZXNzYWdlfTwvcD5gKS5qb2luKCcnKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmVuYWJsZU1vYmlsZUNvbnNvbGUgPSBlbmFibGVNb2JpbGVDb25zb2xlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc29sZV8xID0gcmVxdWlyZShcIi4vY29uc29sZVwiKTtcbmNvbnN0IEhlYWRDb250cm9sU2VydmljZV8xID0gcmVxdWlyZShcIi4vc2VydmljZXMvSGVhZENvbnRyb2xTZXJ2aWNlXCIpO1xuY29uc3QgaW1hZ2VDYXB0dXJlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9JbWFnZUNhcHR1cmVTZXJ2aWNlL2ltYWdlQ2FwdHVyZVwiKTtcbmNvbnN0IHZvaWNlXzEgPSByZXF1aXJlKFwiLi9zZXJ2aWNlcy9Wb2ljZVNlcnZpY2Uvdm9pY2VcIik7XG5yZXF1aXJlKFwiLi9kZWNsYXJlXCIpO1xucmVxdWlyZShcIi4vc3R5bGUvaW5kZXguc2Nzc1wiKTtcbmNvbnN0IHN0YXJ0QnV0dG9uID0gJCgnI3N0YXJ0QnV0dG9uJyk7XG5jb25zdCBwcmVsb2FkZXIgPSAkKCcjcHJlbG9hZGVyJyk7XG5jb25zdCBzdGFydFNjcmVlbiA9ICQoJyNzdGFydCcpO1xuY29uc3QgZ2FtZVNjcmVlbiA9ICQoJyNnYW1lJyk7XG5jb25zdCBuYW1lSW5wdXQgPSAkKCcjbmFtZUlucHV0Jyk7XG5jb25zdCBpbml0QWxsQVBJID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtpbWFnZUNhcHR1cmVfMS5pbml0SW1hZ2VDYXB0dXJlKCksIHZvaWNlXzEuaW5pdFZvaWNlU2VydmljZSgpLCBIZWFkQ29udHJvbFNlcnZpY2VfMS5pbml0SGVhZENvbnRyb2woKV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcmVsb2FkZXIuaGlkZSgpO1xuICAgICAgICBzdGFydFNjcmVlbi5zaG93KCk7XG4gICAgfSk7XG59KTtcbmNvbnN0IGluaXRBcHAgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBwcmVsb2FkZXIuc2hvdygpO1xuICAgIGdhbWVTY3JlZW4uaGlkZSgpO1xuICAgIHN0YXJ0U2NyZWVuLmhpZGUoKTtcbiAgICB5aWVsZCBpbml0QWxsQVBJKCk7XG4gICAgbmFtZUlucHV0Lm9uKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgaWYgKG5hbWVJbnB1dC52YWwoKSkge1xuICAgICAgICAgICAgc3RhcnRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydEJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc3RhcnRCdXR0b24uY2xpY2soKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIHN0YXJ0R2FtZShuYW1lSW5wdXQudmFsKCkpO1xuICAgIH0pKTtcbn0pO1xuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllck5hbWUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIGltYWdlQ2FwdHVyZV8xLnRha2VQaG90bygpO1xuICAgICAgICBnYW1lU2NyZWVuLnNob3coKTtcbiAgICAgICAgc3RhcnRTY3JlZW4uaGlkZSgpO1xuICAgICAgICB2b2ljZV8xLnNldFVwVXNlcihwbGF5ZXJOYW1lKTtcbiAgICAgICAgLy8gc2F5U29tZXRoaW5nKFBIUkFTRVMuSEVMTE8pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBhbGVydChlKTtcbiAgICB9XG59KTtcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zb2xlXzEuZW5hYmxlTW9iaWxlQ29uc29sZSgpO1xuICAgIHlpZWxkIGluaXRBcHAoKTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkZWZhdWx0U2V0dGluZ3MgPSB7XG4gICAgbW91c2VPcGVuaW5nVHJlc2hvbGQ6IDAuNixcbiAgICBtb3VzZUNsb3NpbmdUcmVzaG9sZDogMC41LFxuICAgIGhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZDogMC4xNSxcbiAgICBoZWFkTW92ZW1lbnRTdG9wcGVkVHJlc2hvbGQ6IDAuMDgsXG59O1xuY2xhc3MgSGVhZENvbnRyb2xTZXJ2aWNlIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0lkLCBzZXR0aW5ncykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3MgPSB7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdXNlT3BlbmVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nbCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3YgPSBudWxsO1xuICAgICAgICB0aGlzLnZpZGVvVGV4dHVyZSA9IG51bGw7XG4gICAgICAgIHRoaXMudmlkZW9UcmFuc2Zvcm1NYXQyID0gbnVsbDtcbiAgICAgICAgdGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1YeXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtVmlkZW9UcmFuc2Zvcm1NYXQyID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZU9wZW5pbmcgPSAoZGV0ZWN0U3RhdGUpID0+IHtcbiAgICAgICAgICAgIGlmIChkZXRlY3RTdGF0ZS5yeSA8IC0xICogdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQgfHwgZGV0ZWN0U3RhdGUucnkgPiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIC8vIEhlYWQgc2hvdWxkIGJlIGluIHRoZSBjZW50ZXIgcG9zaXRpb25cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbW91dGhPcGVuaW5nID0gKGRldGVjdFN0YXRlLmV4cHJlc3Npb25zWzBdIC0gMC4yKSAqIDUuMDtcbiAgICAgICAgICAgIG1vdXRoT3BlbmluZyA9IE1hdGgubWluKE1hdGgubWF4KG1vdXRoT3BlbmluZywgMCksIDEpO1xuICAgICAgICAgICAgaWYgKG1vdXRoT3BlbmluZyA+IHRoaXMuc2V0dGluZ3MubW91c2VPcGVuaW5nVHJlc2hvbGQgJiYgIXRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbW91c2Ugb3BlbmVkJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb3V0aE9wZW5pbmcgPCB0aGlzLnNldHRpbmdzLm1vdXNlQ2xvc2luZ1RyZXNob2xkICYmIHRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrcy5tb3VzZU9wZW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ21vdXNlIGNsb3NlZCcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZSA9IChtdikgPT4ge1xuICAgICAgICAgICAgaWYgKG12LnJ4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQoeyBheGlzOiAndmVydGljYWwnLCBheGlzUG9zaXRpb246IG12LnJ4LCBtYXhWYWx1ZTogJ2Rvd24nLCBtaW5WYWx1ZTogJ3VwJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtdi5yeSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQXhpc01vdmVtZW50KHsgYXhpczogJ2hvcml6b250YWwnLCBheGlzUG9zaXRpb246IG12LnJ5LCBtYXhWYWx1ZTogJ2xlZnQnLCBtaW5WYWx1ZTogJ3JpZ2h0JyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVBeGlzTW92ZW1lbnQgPSAoeyBheGlzLCBheGlzUG9zaXRpb24sIG1heFZhbHVlLCBtaW5WYWx1ZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA8IC0xICogdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdGFydGVkVHJlc2hvbGQgJiYgIXRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZW1lbnRMb2Nrc1theGlzXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChtaW5WYWx1ZSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChheGlzUG9zaXRpb24gPiB0aGlzLnNldHRpbmdzLmhlYWRNb3ZlbWVudFN0YXJ0ZWRUcmVzaG9sZCAmJiAhdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlbWVudExvY2tzW2F4aXNdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KG1heFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF4aXNQb3NpdGlvbiA+IC0xICogdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdG9wcGVkVHJlc2hvbGQgJiYgYXhpc1Bvc2l0aW9uIDwgdGhpcy5zZXR0aW5ncy5oZWFkTW92ZW1lbnRTdG9wcGVkVHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVtZW50TG9ja3NbYXhpc10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTZXR0aW5ncyksIHNldHRpbmdzKTtcbiAgICAgICAgd2luZG93LkpFRUZBQ0VGSUxURVJBUEkuaW5pdCh7XG4gICAgICAgICAgICBjYW52YXNJZDogY2FudmFzSWQsXG4gICAgICAgICAgICBOTkNQYXRoOiAnLi92ZW5kb3IvJyxcbiAgICAgICAgICAgIGFuaW1hdGVEZWxheTogMjAsXG4gICAgICAgICAgICBjYWxsYmFja1JlYWR5OiAoZXJyQ29kZSwgamVlRmFjZUZpbHRlck9iaikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZXJyQ29kZSA9ICdXRUJDQU1fVU5BVkFJTEFCTEUnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3Mub25DYW1lcmFQZXJzbWlzc2lvbkZhaWxlZCAmJiBzZXR0aW5ncy5vbkNhbWVyYVBlcnNtaXNzaW9uRmFpbGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQU4gRVJST1IgSEFQUEVOUy4gU09SUlkgQlJPIDooIC4gRVJSID0nLCBlcnJDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmdsID0gamVlRmFjZUZpbHRlck9ialsnR0wnXTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvVGV4dHVyZSA9IGplZUZhY2VGaWx0ZXJPYmpbJ3ZpZGVvVGV4dHVyZSddO1xuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9UcmFuc2Zvcm1NYXQyID0gamVlRmFjZUZpbHRlck9ialsndmlkZW9UcmFuc2Zvcm1NYXQyJ107XG4gICAgICAgICAgICAgICAgdGhpcy5jdiA9IGplZUZhY2VGaWx0ZXJPYmpbJ2NhbnZhc0VsZW1lbnQnXTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRIZWFkU2VhcmNoRHJhdygpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNldHRpbmdzLm9uUmVhZHkgJiYgc2V0dGluZ3Mub25SZWFkeSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGNhbGxlZCBhdCBlYWNoIHJlbmRlciBpdGVyYXRpb24gKGRyYXdpbmcgbG9vcCk6XG4gICAgICAgICAgICBjYWxsYmFja1RyYWNrOiAoZGV0ZWN0U3RhdGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3SGVhZFNlYXJjaChkZXRlY3RTdGF0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3ZlKGRldGVjdFN0YXRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZU1vdXNlT3BlbmluZyhkZXRlY3RTdGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdG9nZ2xlKGlzRW5hYmxlZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5pc0VuYWJsZWQgPT09IGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGF0ZS5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb21waWxlU2hhZGVyKHNvdXJjZSwgZ2xUeXBlLCB0eXBlU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGdsU2hhZGVyID0gdGhpcy5nbC5jcmVhdGVTaGFkZXIoZ2xUeXBlKTtcbiAgICAgICAgdGhpcy5nbC5zaGFkZXJTb3VyY2UoZ2xTaGFkZXIsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZ2wuY29tcGlsZVNoYWRlcihnbFNoYWRlcik7XG4gICAgICAgIGlmICghdGhpcy5nbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZ2xTaGFkZXIsIHRoaXMuZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICAgICAgICBhbGVydCgnRVJST1IgSU4gJyArIHR5cGVTdHJpbmcgKyAnIFNIQURFUjogJyArIHRoaXMuZ2wuZ2V0U2hhZGVySW5mb0xvZyhnbFNoYWRlcikpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdsU2hhZGVyO1xuICAgIH1cbiAgICBpbml0SGVhZFNlYXJjaERyYXcoKSB7XG4gICAgICAgIC8vIGJ1aWxkIHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW06XG4gICAgICAgIGNvbnN0IHNoYWRlclZlcnRleFNvdXJjZSA9ICdcXG5cXFxuICAgICAgYXR0cmlidXRlIHZlYzIgYWF0X3Bvc2l0aW9uO1xcblxcXG4gICAgICB2YXJ5aW5nIHZlYzIgdlVWO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdm9pZCBtYWluKHZvaWQpIHtcXG5cXFxuICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYWF0X3Bvc2l0aW9uLCAwLiwgMS4pO1xcblxcXG4gICAgICAgIHZVViA9IDAuNSArIDAuNSAqIGFhdF9wb3NpdGlvbjtcXG5cXFxuICAgICAgICB2VVYueCA9IDEuLXZVVi54OyAvLyBtaXJyb3IgZGlwbGF5XFxuXFxcbiAgICAgIH0nO1xuICAgICAgICBjb25zdCBzaGFkZXJGcmFnbWVudFNvdXJjZSA9ICdcXG5cXFxuICAgICAgcHJlY2lzaW9uIGxvd3AgZmxvYXQ7XFxuXFxcbiAgICAgIHZhcnlpbmcgdmVjMiB2VVY7XFxuXFxcbiAgICAgIFxcblxcXG4gICAgICB1bmlmb3JtIHNhbXBsZXIyRCBzYW1wbGVyVmlkZW87XFxuXFxcbiAgICAgIHVuaWZvcm0gbWF0MiB2aWRlb1RyYW5zZm9ybU1hdDI7XFxuXFxcbiAgICAgIHVuaWZvcm0gdmVjMyB1eHlzO1xcblxcXG4gICAgICBcXG5cXFxuICAgICAgdm9pZCBtYWluKHZvaWQpIHtcXG5cXFxuICAgICAgICB2ZWMyIHV2VmlkZW9DZW50ZXJlZCA9IDIuMCAqIHZpZGVvVHJhbnNmb3JtTWF0MiAqICh2VVYgLSAwLjUpO1xcblxcXG4gICAgICAgIHZlYzIgdXZWaWRlbyA9IHV2VmlkZW9DZW50ZXJlZCArIDAuNTtcXG5cXFxuICAgICAgICB2ZWMzIGNvbG9yVmlkZW8gPSB0ZXh0dXJlMkQoc2FtcGxlclZpZGVvLCB1dlZpZGVvKS5yZ2I7XFxuXFxcbiAgICAgICAgdmVjMiBwb3MgPSB2VVYqMi4tdmVjMigxLiwxLik7XFxuXFxcbiAgICAgICAgdmVjMiBpc0luc2lkZSA9IHN0ZXAodXh5cy54eS11eHlzLnoqdmVjMigxLiwxLiksIHBvcyk7XFxuXFxcbiAgICAgICAgaXNJbnNpZGUgKj0gc3RlcChwb3MsIHV4eXMueHkrdXh5cy56KnZlYzIoMS4sMS4pKTtcXG5cXFxuICAgICAgICB2ZWMyIGJsZW5kQ2VudGVyRmFjdG9yID0gYWJzKHBvcy11eHlzLnh5KSAvIHV4eXMuejtcXG5cXFxuICAgICAgICBmbG9hdCBhbHBoYSA9IGlzSW5zaWRlLnggKiBpc0luc2lkZS55ICogcG93KG1heChibGVuZENlbnRlckZhY3Rvci54LCBibGVuZENlbnRlckZhY3Rvci55KSwgMy4pO1xcblxcXG4gICAgICAgIHZlYzMgY29sb3IgPSBtaXgoY29sb3JWaWRlbywgdmVjMygwLiwwLjYsMS4pLCBhbHBoYSk7XFxuXFxcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwxLik7XFxuXFxcbiAgICAgIH0nO1xuICAgICAgICBjb25zdCBnbFNoYWRlclZlcnRleCA9IHRoaXMuY29tcGlsZVNoYWRlcihzaGFkZXJWZXJ0ZXhTb3VyY2UsIHRoaXMuZ2wuVkVSVEVYX1NIQURFUiwgJ1ZFUlRFWCcpO1xuICAgICAgICBjb25zdCBnbFNoYWRlckZyYWdtZW50ID0gdGhpcy5jb21waWxlU2hhZGVyKHNoYWRlckZyYWdtZW50U291cmNlLCB0aGlzLmdsLkZSQUdNRU5UX1NIQURFUiwgJ0ZSQUdNRU5UJyk7XG4gICAgICAgIHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0gPSB0aGlzLmdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgdGhpcy5nbC5hdHRhY2hTaGFkZXIodGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgZ2xTaGFkZXJWZXJ0ZXgpO1xuICAgICAgICB0aGlzLmdsLmF0dGFjaFNoYWRlcih0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtLCBnbFNoYWRlckZyYWdtZW50KTtcbiAgICAgICAgdGhpcy5nbC5saW5rUHJvZ3JhbSh0aGlzLmdsSGVhZFNlYXJjaERyYXdTaGFkZXJQcm9ncmFtKTtcbiAgICAgICAgY29uc3Qgc2FtcGxlclZpZGVvID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgJ3NhbXBsZXJWaWRlbycpO1xuICAgICAgICB0aGlzLmhlYWRTZWFyY2hVbmlmb3JtWHlzID0gdGhpcy5nbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5nbEhlYWRTZWFyY2hEcmF3U2hhZGVyUHJvZ3JhbSwgJ3V4eXMnKTtcbiAgICAgICAgdGhpcy5oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiA9IHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0sICd2aWRlb1RyYW5zZm9ybU1hdDInKTtcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm0xaShzYW1wbGVyVmlkZW8sIDApO1xuICAgIH1cbiAgICBkcmF3SGVhZFNlYXJjaChkZXRlY3RTdGF0ZSkge1xuICAgICAgICAvLyB1bmJpbmQgdGhlIGN1cnJlbnQgRkJPIGFuZCBzZXQgdGhlIHZpZXdwb3J0IGFzIHRoZSB3aG9sZSBjYW52YXM6XG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgdGhpcy5jdi53aWR0aCwgdGhpcy5jdi5oZWlnaHQpO1xuICAgICAgICAvLyB1c2UgdGhlIGhlYWQgZHJhdyBzaGFkZXIgcHJvZ3JhbSBhbmQgc3luYyB1bmlmb3JtczpcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuZ2xIZWFkU2VhcmNoRHJhd1NoYWRlclByb2dyYW0pO1xuICAgICAgICB0aGlzLmdsLmFjdGl2ZVRleHR1cmUodGhpcy5nbC5URVhUVVJFMCk7XG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLnZpZGVvVGV4dHVyZSk7XG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybTNmKHRoaXMuaGVhZFNlYXJjaFVuaWZvcm1YeXMsIGRldGVjdFN0YXRlLngsIGRldGVjdFN0YXRlLnksIGRldGVjdFN0YXRlLnMpO1xuICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXgyZnYodGhpcy5oZWFkU2VhcmNoVW5pZm9ybVZpZGVvVHJhbnNmb3JtTWF0MiwgZmFsc2UsIHRoaXMudmlkZW9UcmFuc2Zvcm1NYXQyKTtcbiAgICAgICAgLy8gZHJhdyB0aGUgc3F1YXJlIGxvb2tpbmcgZm9yIHRoZSBoZWFkXG4gICAgICAgIC8vIHRoZSBWQk8gZmlsbGluZyB0aGUgd2hvbGUgc2NyZWVuIGlzIHN0aWxsIGJvdW5kIHRvIHRoZSBjb250ZXh0XG4gICAgICAgIC8vIGZpbGwgdGhlIHZpZXdQb3J0OlxuICAgICAgICB0aGlzLmdsLmRyYXdFbGVtZW50cyh0aGlzLmdsLlRSSUFOR0xFUywgMywgdGhpcy5nbC5VTlNJR05FRF9TSE9SVCwgMCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gSGVhZENvbnRyb2xTZXJ2aWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXRIZWFkQ29udHJvbCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbmNvbnN0IEhlYWRDb250cm9sU2VydmljZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0hlYWRDb250cm9sU2VydmljZVwiKSk7XG52YXIgSGVhZENvbnRyb2xTZXJ2aWNlXzIgPSByZXF1aXJlKFwiLi9IZWFkQ29udHJvbFNlcnZpY2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2ltcG9ydERlZmF1bHQoSGVhZENvbnRyb2xTZXJ2aWNlXzIpLmRlZmF1bHQ7IH0gfSk7XG5jb25zdCBpbml0SGVhZENvbnRyb2wgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZENvbnRyb2xTZXJ2aWNlID0gbmV3IEhlYWRDb250cm9sU2VydmljZV8xLmRlZmF1bHQoJ2hlYWQtcHJldmlldycsIHtcbiAgICAgICAgICAgIG9uUmVhZHk6ICgpID0+IHJlc29sdmUoKSxcbiAgICAgICAgICAgIG9uQ2FtZXJhUGVyc21pc3Npb25GYWlsZWQ6ICgpID0+IGFsZXJ0KCdUaGlzIGdhbWUgaXMgaGVhZC1jb250cm9sbGVkLiBZb3UgbmVlZCB0byBlbmFibGUgY2FtZXJhIHRvIHBsYXkgdGhlIGdhbWUuJyksXG4gICAgICAgIH0pO1xuICAgICAgICBoZWFkQ29udHJvbFNlcnZpY2UudG9nZ2xlKHRydWUpO1xuICAgICAgICBoZWFkQ29udHJvbFNlcnZpY2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Ugb3BlbmVkJywgKCkgPT4gY29uc29sZS5sb2coJ21vdXNlIG9wZW5lZCcpKTtcbiAgICAgICAgaGVhZENvbnRyb2xTZXJ2aWNlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlIGNsb3NlZCcsICgpID0+IGNvbnNvbGUubG9nKCdtb3VzZSBjbG9zZWQnKSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdsZWZ0JywgKCkgPT4gY29uc29sZS5sb2coJ2xlZnQnKSk7XG4gICAgICAgIGhlYWRDb250cm9sU2VydmljZS5hZGRFdmVudExpc3RlbmVyKCdyaWdodCcsICgpID0+IGNvbnNvbGUubG9nKCdyaWdodCcpKTtcbiAgICB9KTtcbn07XG5leHBvcnRzLmluaXRIZWFkQ29udHJvbCA9IGluaXRIZWFkQ29udHJvbDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmluaXRJbWFnZUNhcHR1cmUgPSBleHBvcnRzLnRha2VQaG90byA9IHZvaWQgMDtcbnJlcXVpcmUoXCJpbWFnZS1jYXB0dXJlXCIpO1xubGV0IGltYWdlQ2FwdHVyZTtcbmxldCBpc0luaXQgPSBmYWxzZTtcbmNvbnN0IHRha2VQaG90byA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGlmICghaW1hZ2VDYXB0dXJlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgeWllbGQgaW1hZ2VDYXB0dXJlXG4gICAgICAgIC50YWtlUGhvdG8oKVxuICAgICAgICAudGhlbigoYmxvYikgPT4gY3JlYXRlSW1hZ2VCaXRtYXAoYmxvYikpXG4gICAgICAgIC50aGVuKChpbWFnZUJpdG1hcCkgPT4ge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFrZVBob3RvQ2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZHJhd0NhbnZhcyhjYW52YXMsIGltYWdlQml0bWFwKTtcbiAgICAgICAgLy9jYW52YXMudG9CbG9iKGFzeW5jIChibG9iKSA9PiB7XG4gICAgICAgIC8vICB0cnkge1xuICAgICAgICAvLyAgICBhd2FpdCBjcmVhdGVGaWxlKGJsb2IpO1xuICAgICAgICAvLyAgICBhd2FpdCByZWFkRmlsZSgpO1xuICAgICAgICAvLyAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyAgICB0aHJvdyBlO1xuICAgICAgICAvLyAgfVxuICAgICAgICAvL30pO1xuICAgIH0pO1xufSk7XG5leHBvcnRzLnRha2VQaG90byA9IHRha2VQaG90bztcbmZ1bmN0aW9uIGRyYXdDYW52YXMoY2FudmFzLCBpbWcpIHtcbiAgICBjYW52YXMud2lkdGggPSBnZXRDb21wdXRlZFN0eWxlKGNhbnZhcykud2lkdGguc3BsaXQoJ3B4JylbMF07XG4gICAgY2FudmFzLmhlaWdodCA9IGdldENvbXB1dGVkU3R5bGUoY2FudmFzKS5oZWlnaHQuc3BsaXQoJ3B4JylbMF07XG4gICAgbGV0IHJhdGlvID0gTWF0aC5taW4oY2FudmFzLndpZHRoIC8gaW1nLndpZHRoLCBjYW52YXMuaGVpZ2h0IC8gaW1nLmhlaWdodCk7XG4gICAgbGV0IHggPSAoY2FudmFzLndpZHRoIC0gaW1nLndpZHRoICogcmF0aW8pIC8gMjtcbiAgICBsZXQgeSA9IChjYW52YXMuaGVpZ2h0IC0gaW1nLmhlaWdodCAqIHJhdGlvKSAvIDI7XG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykuZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0LCB4LCB5LCBpbWcud2lkdGggKiByYXRpbywgaW1nLmhlaWdodCAqIHJhdGlvKTtcbn1cbmNvbnN0IGluaXRJbWFnZUNhcHR1cmUgPSAoKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBpZiAoaXNJbml0KSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgaXNJbml0ID0gdHJ1ZTtcbiAgICByZXR1cm4gbmF2aWdhdG9yLm1lZGlhRGV2aWNlc1xuICAgICAgICAuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAgICAgLnRoZW4oKG1lZGlhU3RyZWFtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRyYWNrID0gbWVkaWFTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcbiAgICAgICAgaW1hZ2VDYXB0dXJlID0gbmV3IEltYWdlQ2FwdHVyZSh0cmFjayk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgYWxlcnQoJ0ltYWdlIGNhcHR1cmUgaXMgbm90IHN1cHBvcnRlZCBvbiB5b3VyIGRldmljZSA6KCcpO1xuICAgIH0pO1xufSk7XG5leHBvcnRzLmluaXRJbWFnZUNhcHR1cmUgPSBpbml0SW1hZ2VDYXB0dXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc2F5U29tZXRoaW5nID0gZXhwb3J0cy5zZXRVcFVzZXIgPSBleHBvcnRzLlBIUkFTRVMgPSBleHBvcnRzLmluaXRWb2ljZVNlcnZpY2UgPSB2b2lkIDA7XG5sZXQgVk9JQ0U7XG5jb25zdCBpbml0Vm9pY2VTZXJ2aWNlID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgVk9JQ0UgPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmdldFZvaWNlcygpLmZpbmQoKHsgbGFuZyB9KSA9PiBsYW5nID09PSAnZW4tR0InKTtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfSk7XG59KTtcbmV4cG9ydHMuaW5pdFZvaWNlU2VydmljZSA9IGluaXRWb2ljZVNlcnZpY2U7XG5leHBvcnRzLlBIUkFTRVMgPSB7XG4gICAgSEVMTE86ICdgSGksICV1c2VybmFtZSUuIEhhdmUgYSBnb29kIGdhbWUnLFxuICAgIFJJR0hUOiAnR29vZCByaWdodCB0dXJuLCAldXNlcm5hbWUlJyxcbn07XG5sZXQgdXNlck5hbWUgPSAnJztcbmNvbnN0IHNldFVwVXNlciA9IChuYW1lKSA9PiB7XG4gICAgdXNlck5hbWUgPSBuYW1lO1xufTtcbmV4cG9ydHMuc2V0VXBVc2VyID0gc2V0VXBVc2VyO1xuY29uc3Qgc2F5U29tZXRoaW5nID0gKHRleHQpID0+IHtcbiAgICBpZiAoIVZPSUNFKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSh0ZXh0LnJlcGxhY2UoJyV1c2VybmFtZSUnLCB1c2VyTmFtZSkpO1xuICAgIHV0dGVyYW5jZS52b2ljZSA9IFZPSUNFO1xuICAgIHV0dGVyYW5jZS52b2x1bWUgPSAxO1xuICAgIHV0dGVyYW5jZS5waXRjaCA9IDE7XG4gICAgdXR0ZXJhbmNlLnJhdGUgPSAxO1xuICAgIHNwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtcbiAgICBzcGVlY2hTeW50aGVzaXMuc3BlYWsodXR0ZXJhbmNlKTtcbn07XG5leHBvcnRzLnNheVNvbWV0aGluZyA9IHNheVNvbWV0aGluZztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9