/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

canvas.clear = function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

module.exports = {
  canvas: canvas,
  ctx: ctx
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const ctx = __webpack_require__(0).ctx;

const defaultStyle = "#000000";

const shapeType = {
  Line: 0,
  Rectangle: 1,
  Circle: 2,
  Triangle: 3
}

function Line(x1, y1, x2, y2, color){
  this.shapeType = shapeType.Line;
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.strokeStyle = color || defaultStyle;
}

Line.prototype.draw = function(){
  ctx.strokeStyle = this.strokeStyle;
  ctx.moveTo(this.x1, this.y1);
  ctx.lineTo(this.x2, this.y2);
  ctx.stroke();
}

function Rectangle(x, y, w, h, color){
  this.shapeType = shapeType.Rectangle;
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.strokeStyle = color || defaultStyle;
  this.fillStyle = color || defaultStyle;
}

Rectangle.prototype.draw = function(){
  ctx.strokeStyle = this.strokeStyle;
  ctx.strokeRect(this.x, this.y, this.width, this.height);
}

Rectangle.prototype.fill = function(){
  ctx.fillStyle = this.fillStyle;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

module.exports = {
  Line: Line,
  Rectangle: Rectangle
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const canvas = __webpack_require__(0).canvas;
const Line = __webpack_require__(1).Line;
const Rectangle = __webpack_require__(1).Rectangle;


canvas.width = 600;
canvas.height = 300;

line = new Line(10, 20, 30, 40, "red");
rect = new Rectangle(100, 100, 200, 200, "green");

function animation(){
  canvas.clear();
  line.draw();
  rect.draw();
  requestAnimationFrame(animation);
}

animation();



/***/ })
/******/ ]);