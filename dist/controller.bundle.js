/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
(() => {
/*!*************************************!*\
  !*** ./app/node/node.controller.js ***!
  \*************************************/
eval("angular.module('nodeController')\r\n    .controller('nodeController', function ($scope) {\r\n\r\n        $scope.tutorial = [\r\n            { Name: \"Promises\", Description: \"Power of Promises\" },\r\n            { Name: \"Event\", Description: \"Event of Node.js\" },\r\n            { Name: \"Modules\", Description: \"Modules in Node.js\" }\r\n        ]\r\n    });\n\n//# sourceURL=webpack://angular-webpack/./app/node/node.controller.js?");
})();

(() => {
/*!***************************************!*\
  !*** ./app/page1/page1.controller.js ***!
  \***************************************/
eval("angular.module('page1Controller')\r\n    .controller('page1Controller', ['$scope', function($scope){\r\n        $scope.title = '';\r\n        $scope.$watch('title', (newVal, oldVal) => {\r\n            $scope.newVal = newVal;\r\n            $scope.oldVal = oldVal;\r\n        });\r\n\r\n    }])\r\n\r\n\n\n//# sourceURL=webpack://angular-webpack/./app/page1/page1.controller.js?");
})();

/******/ })()
;