/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./private/javascripts/index.js":
/*!**************************************!*\
  !*** ./private/javascripts/index.js ***!
  \**************************************/
/***/ (() => {

eval("const ws = new WebSocket('ws://localhost:3000');\r\n\r\nconsole.log('ha');\r\n\r\nws.onopen = function (event) {\r\n    console.log('he');\r\n    ws.send('Hello');\r\n};\n\n//# sourceURL=webpack://softengg/./private/javascripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./private/javascripts/index.js"]();
/******/ 	
/******/ })()
;