/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.config.js":
/*!***************************!*\
  !*** ./app/app.config.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page1_page1_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page1/page1.html */ \"./app/page1/page1.html\");\n/* harmony import */ var _page1_page1_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page1_page1_html__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_node_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node/node.html */ \"./app/node/node.html\");\n/* harmony import */ var _node_node_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_node_html__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nangular.module('mainApp')\r\n    .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {\r\n        $routeProvider\r\n            .when('/Angular', {\r\n                templateUrl: './app/page1/page1.html',\r\n                controller: 'page1Controller'\r\n            })\r\n            .when('/Node', {\r\n                templateUrl: './app/node/node.html',\r\n                // controller: 'appController'\r\n                controller: 'nodeController'\r\n            });\r\n        $locationProvider.html5Mode(true);\r\n    }]);\r\n\n\n//# sourceURL=webpack://angular-webpack/./app/app.config.js?");

/***/ }),

/***/ "./app/node/node.html":
/*!****************************!*\
  !*** ./app/node/node.html ***!
  \****************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<h2>Node</h2>\\r\\n<ul ng-repeat=\\\"ptutor in tutorial\\\">\\r\\n    <li>Course : {{ptutor.Name}} - {{ptutor.Description}}</li>\\r\\n</ul>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://angular-webpack/./app/node/node.html?");

/***/ }),

/***/ "./app/page1/page1.html":
/*!******************************!*\
  !*** ./app/page1/page1.html ***!
  \******************************/
/***/ ((module) => {

eval("// Module\nvar code = \"<div>\\r\\n\\r\\n    <p>Please Input you value here!</p>\\r\\n    <input type=\\\"text\\\" ng-model=\\\"title\\\">\\r\\n    <h1>{{title}}</h1>\\r\\n    <!-- Test -->\\r\\n    <div>oldVal: {{oldVal}}</div>\\r\\n    <div>newVal: {{newVal}}</div>\\r\\n\\r\\n</div>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack://angular-webpack/./app/page1/page1.html?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__("./app/app.config.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;