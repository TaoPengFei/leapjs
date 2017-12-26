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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ctx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return p; });
let canvas = document.createElement('canvas')
let p = document.createElement('p')
const clickShapes = __webpack_require__(1).clickShapes

canvas.style = 'border: 1px solid #d3d3d3;'
p.style = 'color: orange; position: absolute; bottom: 23px;'

document.body.appendChild(canvas)
document.body.appendChild(p)

let ctx = canvas.getContext('2d')

canvas.resize = function (width, height) {
  canvas.width = width || window.innerWidth - 2 // borders size
  canvas.height = height || window.innerHeight - 60 // p, height
  ctx.strokeStyle = '#00FFFF'
  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)'
}

canvas.resize()

canvas.clear = function () {
  clickShapes.clear()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.showAxis = function () {
  ctx.save()
  ctx.strokeStyle = 'black'
  let txt = new Text('', 1, 1, 15)
  txt.fillStyle = 'orange'

  for (let i = 0; i < canvas.width; i += 10) {
    if (i % 100 === 0) {
      txt.src = i.toString()
      txt.x = i + 1
      txt.draw()
      ctx.lineWidth = 0.4
    } else ctx.lineWidth = 0.1
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvas.height)
    ctx.closePath()
    ctx.stroke()
  }

  txt.x = 1
  for (let i = 0; i < canvas.height; i += 10) {
    if (i % 100 === 0) {
      txt.src = i.toString()
      txt.y = i + 1
      if (i > 0) txt.draw()
      ctx.lineWidth = 0.3
    } else ctx.lineWidth = 0.1
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(canvas.width, i)
    ctx.closePath()
    ctx.stroke()
  }
  ctx.restore()
}

ctx.drawPathByPoints = function (ps) {
  ctx.beginPath()
  ctx.moveTo(ps[0].x, ps[0].y)

  for (let i = 1; i < ps.length; i++) { ctx.lineTo(ps[i].x, ps[i].y) }

  ctx.closePath()
}

ctx.update = function (shape) {
  if (shape.fillStyle) ctx.fillStyle = shape.fillStyle
  if (shape.strokeStyle) ctx.strokeStyle = shape.strokeStyle

  if (shape.shadowColor) ctx.shadowColor = shape.shadowColor
  if (shape.shadowBlur) ctx.shadowBlur = shape.shadowBlur
  if (shape.shadowOffsetX) ctx.shadowOffsetX = shape.shadowOffsetX
  if (shape.shadowOffsetY) ctx.shadowOffsetY = shape.shadowOffsetY

  if (shape.lineCap) ctx.lineCap = shape.lineCap
  if (shape.lineJoin) ctx.lineJoin = shape.lineJoin
  if (shape.lineWidth) ctx.lineWidth = shape.lineWidth
  if (shape.miterLimit) ctx.miterLimit = shape.miterLimit

  if (shape.globalAlpha) ctx.globalAlpha = shape.globalAlpha
  if (shape.globalCompositeOperation) ctx.globalCompositeOperation = shape.globalCompositeOperation

  if (shape.lineDash) ctx.setLineDash(shape.lineDash)

  if (shape.transform.transformed()) ctx.updateTransform(shape.transform)
}

ctx.updateTransform = function (transform) {
  let degree = transform.degree * Math.PI / 180

  ctx.translate(transform.anchorX, transform.anchorY)

  ctx.rotate(degree)
  ctx.transform(
    transform.scaleX, transform.skewX,
    transform.skewY, transform.scaleY,
    transform.translateX, transform.translateY
  )

  ctx.translate(-transform.anchorX, -transform.anchorY)
}




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextFrame", function() { return nextFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickShapes", function() { return clickShapes; });
// requestAnimationFrame
(function () {
  var lastTime = 0
  var vendors = ['webkit', 'moz']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (func, element) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      var id = window.setTimeout(function () {
        func(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
}())

// void run multi frame
var frameId
var nextFrame = function (func) {
  if (frameId) window.cancelAnimationFrame(frameId)
  frameId = window.requestAnimationFrame(func)
}

// handle shape click event;
var clickShapes = new Set()
window.clickShapes = clickShapes




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Key; });
let Key = {}

const keyboard = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=,./<>?|\\;:\'"'
const keyboard2 = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape', ' ', 'Tab', 'Shift', 'Control', 'Alt', 'Backspace']
const noPressKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape', 'Tab', 'Shift', 'Control', 'Alt']

for (let i = 0; i < keyboard.length; i++) {
  Key[keyboard[i]] = {}
}

for (let i = 0; i < keyboard2.length; i++) {
  Key[keyboard2[i]] = {}
}

document.onkeyup = function (e) {
  let key = Key[e.key]
  if (key && key.up) {
    key.up()
  }
}

document.onkeydown = function (e) {
  let key = Key[e.key]
  if (key && key.down) { key.down() }
  if (noPressKeys.includes(e.key) && key.press) {
    key.press()
  }
}

// keyboard2 will not file key press event
document.onkeypress = function (e) {
  let key = Key[e.key]
  if (key && key.press) { key.press() }
}




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mouse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(1);




let Mouse = {
  x: 0,
  y: 0
}

let TouchStart = {}
TouchStart.init = function () {
  TouchStart.x = Mouse.x
  TouchStart.y = Mouse.y
}

function windowToCanvas (canvas, x, y) {
  let box = canvas.getBoundingClientRect()
  return {
    x: x - box.left * (canvas.width / box.width),
    y: y - box.top * (canvas.height / box.height)
  }
}

function updateEvent (e) {
  // e.preventDefault();
  // update e if it is on phone
  if (e.touches) e = e.touches.item(0)

  let point = windowToCanvas(__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */], e.clientX, e.clientY)
  Mouse.x = Math.floor(point.x)
  Mouse.y = Math.floor(point.y)

  __WEBPACK_IMPORTED_MODULE_0__canvas__["c" /* p */].innerHTML = `x: ${Mouse.x}, y: ${Mouse.y}`
}

__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].onmousedown = function (e) {
  updateEvent(e)
  if (Mouse.down) Mouse.down()

  // handle events of all shapes, LIFO
  // IMPORTANT
  const array = Array.from(__WEBPACK_IMPORTED_MODULE_2__util__["clickShapes"])
  let i = array.length
  while (i--) {
    let shape = array[i]
    if (shape.touched() && shape.click) {
      shape.click()
      break
    }
  }
}

let _preventDefault = false
__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].preventDefaultEvent = function () {
  _preventDefault = true
}

__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].ontouchstart = function (e) {
  if (_preventDefault) { e.preventDefault() }
  __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].onmousedown(e)
  TouchStart.init()
}

__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].onmousemove = function (e) {
  updateEvent(e)
  if (Mouse.move) Mouse.move()
}

__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].ontouchmove = function (e) {
  if (_preventDefault) { e.preventDefault() }
  __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].onmousemove(e)
  if (Mouse.x - TouchStart.x > 50 && __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowRight.down) {
    __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowRight.down()
    TouchStart.init()
  } else if (TouchStart.x - Mouse.x > 50 && __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowLeft.down) {
    __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowLeft.down()
    TouchStart.init()
  }

  if (TouchStart.y - Mouse.y > 50 && __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowUp.down) {
    __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowUp.down()
    TouchStart.init()
  } else if (Mouse.y - TouchStart.y > 50 && __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowDown.down) {
    __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */].ArrowDown.down()
    TouchStart.init()
  }
}

__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].ontouchend = __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].onmouseup = function (e) {
  if (_preventDefault) { e.preventDefault() }
  updateEvent(e)
  if (Mouse.up) Mouse.up()
}

__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].onclick = function (e) {
  updateEvent(e)
  if (Mouse.click) Mouse.click()
}




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Shape */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Ellipse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mouse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transform__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resource__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__collision__ = __webpack_require__(9);






const clone = __webpack_require__(10)

class Shape {
  constructor () {
    this.transform = new __WEBPACK_IMPORTED_MODULE_3__transform__["a" /* Transform */]()
    this._points = []
  }

  _path () {}
  _stroke () {
    this._path()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  }
  _fill () {
    this._path()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill()
  }

  stroke () {
    if (this.click) __WEBPACK_IMPORTED_MODULE_1__util__["clickShapes"].add(this) // use for handle click event

    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].update(this)
    this._stroke()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
  }

  fill () {
    if (this.click) __WEBPACK_IMPORTED_MODULE_1__util__["clickShapes"].add(this) // use for handle click event

    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].update(this)
    this._fill()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
  }

  _draw () {
    this._path()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  }

  draw () {
    if (this.click) __WEBPACK_IMPORTED_MODULE_1__util__["clickShapes"].add(this) // use for handle click event

    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].update(this)
    this._draw()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
  }

  translate (x, y) { this.transform.translate(x, y) }
  scale (x, y) { this.transform.scale(x, y) }
  skew (x, y) { this.transform.skew(x, y) }
  setAnchor (x, y) { this.transform.setAnchor(x, y) }
  rotate (degree) { this.transform.rotate(degree) }

  getRealPoint (p) { return this.transform.getRealPoint(p) }

  click () {}
  touched () { return Object(__WEBPACK_IMPORTED_MODULE_5__collision__["b" /* pointInShape */])(__WEBPACK_IMPORTED_MODULE_2__mouse__["a" /* Mouse */], this) }

  collide (other) {
    if (other instanceof Shape) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__collision__["a" /* collide */])(this, other)
    } else {
      return false
    }
  }

  clone () { return clone(this, false) }

  _updatePoints () {}

  get points () {
    this._updatePoints()
    return this._points.map(p => this.transform.getRealPoint(p))
  }

  setLineDash (arr) {
    this.lineDash = arr
  }
}

class Circle extends Shape {
  constructor (x = 50, y = 50, r = 20) {
    super()
    this.x = x
    this.y = y
    this.r = r
  }

  get radius () { return this.r }
  set radius (r) { this.r = r }

  _path () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].arc(this.x, this.y, this.r, 0, 2 * Math.PI)
  }

  _updatePoints () {
    this._points = []
    let n = 8
    let degree = Math.PI * 2 / n
    for (let i = 0; i < n; i++) {
      this._points.push({
        x: this.x + this.r * Math.sin(degree * i),
        y: this.y + this.r * Math.cos(degree * i)
      })
    }
  }
}

class Line extends Shape {
  constructor (x1 = 100, y1 = 100, x2 = 200, y2 = 100) {
    super()
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }

  _path () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].moveTo(this.x1, this.y1)
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].lineTo(this.x2, this.y2)
  }

  _updatePoints () {
    this._points = []
    this._points.push({x: this.x1, y: this.y1})
    this._points.push({x: this.x2, y: this.y2})
  }

  get x () { return (this.x1 + this.x2) / 2 }
  set x (x) {
    let deltaX = x - this.x
    this.x1 += deltaX
    this.x2 += deltaX
  }

  get y () { return (this.y1 + this.y2) / 2 }
  set y (y) {
    let deltaY = y - this.y
    this.y1 += deltaY
    this.y2 += deltaY
  }
}

class Polygon extends Shape {
  constructor () {
    super()
    if (arguments.length < 6) {
      throw String('Polygon should have at lease 3 points')
    }

    this._points = []
    for (let i = 0; i < arguments.length - 1; i += 2) {
      let p = { x: arguments[i], y: arguments[i + 1] }
      this._points.push(p)
    }
  }

  _path () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
    let p = this._points[0]
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].moveTo(p.x, p.y)
    for (let i = 1; i < this._points.length; i++) {
      p = this._points[i]
      __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].lineTo(p.x, p.y)
    }
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].closePath()
  }

  get x () {
    let x = 0
    for (let i = 0; i < this._points.length; i++) { x += this._points[i].x }
    return x / this._points.length
  }
  set x (x) {
    let deltaX = x - this.x
    for (let i = 0; i < this._points.length; i++) { this._points[i].x += deltaX }
  }

  get y () {
    let y = 0
    for (let i = 0; i < this._points.length; i++) { y += this._points[i].y }
    return y / this._points.length
  }
  set y (y) {
    let deltaY = y - this.y
    for (let i = 0; i < this._points.length; i++) { this._points[i].y += deltaY }
  }
}

class Rectangle extends Shape {
  constructor (x = 100, y = 100, w = 100, h = 50) {
    super()
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.collideW = 1
    this.collideH = 1
  }

  get width () { return this.w }
  set width (w) { this.w = w }

  get height () { return this.h }
  set height (h) { this.h = h }

  _path () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].rect(this.x, this.y, this.w, this.h)
  }

  setCollisionScale (w, h) {
    this.collideW = w
    this.collideH = h
  }

  _updatePoints () {
    this._points = []

    let minX = this.x + this.w / 2 * (1 - this.collideW)
    let maxX = this.x + this.w / 2 * (1 + this.collideW)
    let minY = this.y + this.h / 2 * (1 - this.collideH)
    let maxY = this.y + this.h / 2 * (1 + this.collideH)

    this._points.push({x: minX, y: minY})
    this._points.push({x: minX, y: maxY})
    this._points.push({x: maxX, y: maxY})
    this._points.push({x: maxX, y: minY})
  }
}

class Text extends Rectangle {
  constructor (src = 'LeapLearner', x = 0, y = 0, size = 20, font = 'Arial') {
    super(x, y, 100, size)
    this._src = src
    this._font = font
    this.fillStyle = 'orange'
    this._updateWidth()
  }

  _updateWidth () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].update(this)
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].font = this.h + 'px ' + this._font
    this.w = __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].measureText(this._src).width
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
  }

  get src () { return this._src }
  set src (src) {
    this._src = src
    this._updateWidth()
  }

  get size () { return this.h }
  set size (size) {
    this.h = size
    this._updateWidth()
  }

  get font () { return this._font }
  set font (font) {
    this._font = font
    this._updateWidth()
  }

  _stroke () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].font = this.size + 'px ' + this.font
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].strokeText(this.src, this.x, this.y + this.h)
  }

  _fill () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].font = this.size + 'px ' + this.font
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillText(this.src, this.x, this.y + this.h)
  }

  draw () { this.fill() }
}

class Sprite extends Rectangle {
  constructor (src, x = 0, y = 0, w = null, h = null) {
    super(x, y, w, h)
    this.collideW = 0.8
    this.collideH = 0.8

    this.img = new window.Image()
    this.img.crossOrigin = 'anonymous'
    this.img.src = src
    this.img.onload = function () {
      __WEBPACK_IMPORTED_MODULE_4__resource__["a" /* Rss */].load()
    }

    __WEBPACK_IMPORTED_MODULE_4__resource__["a" /* Rss */].add()
  }

  get src () { return this.img.src }
  set src (src) { this.img.src = src }

  set onload (callback) {
    this.img.onload = function () {
      __WEBPACK_IMPORTED_MODULE_4__resource__["a" /* Rss */].load()
      callback()
    }
  }

  clip (sx, sy, sw, sh) {
    this.sx = sx > 0 ? sx : 1
    this.sy = sy > 0 ? sx : 1
    this.sw = sw
    this.sh = sh
    this.w = this.w || sw
    this.h = this.h || sh
  }

  _draw () {
    if (this.sx && this.sy && this.sw & this.sh) {
      __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawImage(this.img, this.sx, this.sy, this.sw, this.sh,
        this.x, this.y, this.w, this.h)
    } else if (this.w && this.h) {
      __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawImage(this.img, this.x, this.y, this.w, this.h)
    } else {
      __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawImage(this.img, this.x, this.y)
    }
  }

  fill () {}
  stroke () {}
}

class Animation extends Sprite {
  constructor (src, x, y, w, h) {
    super(src, x, y, w, h)
    this.speed = 10
  }

  setFrame (sx, sy, sw, sh, c, r) {
    this.c = c
    this.r = r || 1
    this.cf = 0 // current frame count
    this.clip(sx, sy, sw, sh)
  }

  setSpeed (speed) {
    this.speed = speed
    if (this.speed < 1) this.speed = 1
    if (this.speed > 60) this.speed = 60
  }

  _draw () {
    let sx = this.sx + this.sw * (Math.floor(this.cf * this.speed / 60) % this.c)
    let sy = this.sy + this.sh * (Math.floor(this.cf * this.speed / 60 / this.c) % this.r)
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawImage(this.img, sx, sy, this.sw, this.sh,
      this.x, this.y, this.w, this.h)

    this.cf++ // update frame count
  }
}

class Point extends Circle {
  constructor (x, y) {
    super(x, y, 2)
    this.fillStyle = 'red'
  }
}

class Ellipse extends Shape {
  constructor (x, y, rX, rY) {
    super()
    this.x = x
    this.y = y
    this.rX = rX
    this.rY = rY
  }

  _path () {
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
    __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].ellipse(this.x, this.y, this.rX, this.rY, 0, 0, Math.PI * 2)
  }

  _updatePoints () {
    this._points = []
    let n = 8
    let degree = Math.PI * 2 / n
    for (let i = 0; i < n; i++) {
      this._points.push({
        x: this.x + this.rX * Math.sin(degree * i), // ? to be confirmed
        y: this.y + this.rY * Math.cos(degree * i) // ? to be confirmed
      })
    }
  }

  get radiusX () { return this.rX }
  set radiusX (rX) { this.rX = rX }

  get radiusY () { return this.rY }
  set radiusY (rY) { this.rY = rY }
}

Point.prototype.draw = Point.prototype.fill
const Triangle = Polygon




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadRssAndRun; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shapes__ = __webpack_require__(4);



let count = 0
let loaded = 0
let main

function loadRssAndRun (func) {
  main = func
  check()
}

let Rss = {}
Rss.add = function () { count++ }
Rss.load = function () { loaded++ }
Rss.isLoaded = function () { return loaded >= count }

let n = 0

function check () {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].clear()
  if (Rss.isLoaded()) { main() } else {   

    new __WEBPACK_IMPORTED_MODULE_1__shapes__["i" /* Text */]('LeapLearner', __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width / 2 - 110, 200, 40).draw()

    let msg = 'loading'
    for (let i = 0; i < n % 6; i++) { msg += '.' }
    new __WEBPACK_IMPORTED_MODULE_1__shapes__["i" /* Text */](msg, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width / 2 - 40, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].height - 240).draw()

    new __WEBPACK_IMPORTED_MODULE_1__shapes__["g" /* Rectangle */](50, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].height - 200, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width - 100, 10).fill()

    let r2 = new __WEBPACK_IMPORTED_MODULE_1__shapes__["g" /* Rectangle */](50, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].height - 200, (__WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width - 100) * loaded / count, 10)
    r2.fillStyle = 'orange'
    r2.fill()

    n++
    setTimeout(check, 100)
  }
}




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HSLA; });
function RGB (r, g, b) {
  r = Math.floor(r)
  g = Math.floor(g)
  b = Math.floor(b)
  return 'rgb(' + r + ', ' + g + ', ' + b + ')' 
}

function RGBA (r, g, b, a) {
  r = Math.floor(r)
  g = Math.floor(g)
  b = Math.floor(b)
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')' 
}

function HSL (h, s, l) {
  h = Math.floor(h)
  return `hsl(${h}, ${s * 100}%, ${l * 100}%)`
}

function HSLA (h, s, l, a) {
  h = Math.floor(h)
  return `hsla(${h}, ${s * 100}%, ${l * 100}%, ${a})`
}




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keys__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mouse__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shapes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resource__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__colors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__changingNumber__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basicDraw__ = __webpack_require__(12);











// canvas
window.canvas = __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */]
window.ctx = __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */]

// shapes
window.Line = __WEBPACK_IMPORTED_MODULE_3__shapes__["d" /* Line */]
window.Rectangle = __WEBPACK_IMPORTED_MODULE_3__shapes__["g" /* Rectangle */]
window.Polygon = __WEBPACK_IMPORTED_MODULE_3__shapes__["f" /* Polygon */]
window.Triangle = __WEBPACK_IMPORTED_MODULE_3__shapes__["j" /* Triangle */]
window.Circle = __WEBPACK_IMPORTED_MODULE_3__shapes__["b" /* Circle */]
window.Text = __WEBPACK_IMPORTED_MODULE_3__shapes__["i" /* Text */]
window.Sprite = __WEBPACK_IMPORTED_MODULE_3__shapes__["h" /* Sprite */]
window.Animation = __WEBPACK_IMPORTED_MODULE_3__shapes__["a" /* Animation */]
window.Point = __WEBPACK_IMPORTED_MODULE_3__shapes__["e" /* Point */]
window.Ellipse = __WEBPACK_IMPORTED_MODULE_3__shapes__["c" /* Ellipse */]

// events
window.Key = __WEBPACK_IMPORTED_MODULE_1__keys__["a" /* Key */]
window.Mouse = __WEBPACK_IMPORTED_MODULE_2__mouse__["a" /* Mouse */]

// rss
window.nextFrame = __WEBPACK_IMPORTED_MODULE_4__util__["nextFrame"]
window.loadRssAndRun = __WEBPACK_IMPORTED_MODULE_5__resource__["b" /* loadRssAndRun */]

// colors
window.RGB = __WEBPACK_IMPORTED_MODULE_6__colors__["c" /* RGB */]
window.RGBA = __WEBPACK_IMPORTED_MODULE_6__colors__["d" /* RGBA */]
window.HSL = __WEBPACK_IMPORTED_MODULE_6__colors__["a" /* HSL */]
window.HSLA = __WEBPACK_IMPORTED_MODULE_6__colors__["b" /* HSLA */]

// VARS
window.Swing = __WEBPACK_IMPORTED_MODULE_7__changingNumber__["c" /* Swing */]
window.Increase = __WEBPACK_IMPORTED_MODULE_7__changingNumber__["a" /* Increase */]
window.Sine = __WEBPACK_IMPORTED_MODULE_7__changingNumber__["b" /* Sine */]

window.background = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["a" /* background */]
window.noFill =  __WEBPACK_IMPORTED_MODULE_8__basicDraw__["i" /* noFill */]
window.noStroke = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["j" /* noStroke */]
window.fill = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["d" /* fill */]
window.stroke = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["o" /* stroke */]
window.lineWidth = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["h" /* lineWidth */]
window.rectangle = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["n" /* rectangle */]
window.circle = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["b" /* circle */]
window.line = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["g" /* line */]
window.point = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["l" /* point */]
window.polygon = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["m" /* polygon */]
window.triangle = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["q" /* triangle */]
window.ellipse = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["c" /* ellipse */]
window.image = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["f" /* image */]
window.text = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["p" /* text */]
window.font = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["e" /* font */]
window.playSound = __WEBPACK_IMPORTED_MODULE_8__basicDraw__["k" /* playSound */]


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transform; });
class Transform {
  constructor () {
    this.anchorX = 0
    this.anchorY = 0
    this.scaleX = 1
    this.scaleY = 1
    this.skewX = 0
    this.skewY = 0
    this.translateX = 0
    this.translateY = 0
    this.degree = 0
  }

  transformed () {
    return this.scaleX !== 1 || this.scaleY !== 1 ||
      this.skewX || this.skewY ||
      this.translateX || this.translateY || this.degree
  }

  scale (x, y) {
    this.scaleX = x
    this.scaleY = y
  }

  translate (x, y) {
    this.translateX = x
    this.translateY = y
  }

  skew (x, y) {
    this.skewX = x
    this.skewY = y
  }

  setAnchor (x, y) {
    this.anchorX = x
    this.anchorY = y
  }

  rotate (degree) {
    this.degree = degree
  }

  getRealPoint (p) {
    if (!this.transformed()) { return p }

    let x = p.x
    let y = p.y

    x -= this.anchorX
    y -= this.anchorY

    let degree = this.degree * Math.PI / 180
    let sin = Math.sin(degree)
    let cos = Math.cos(degree)

    let newX = x * cos - y * sin
    let newY = y * cos + x * sin
    x = newX
    y = newY

    newX = this.scaleX * x + this.skewX * y + this.translateX
    newY = this.skewY * x + this.scaleY * y + this.translateY
    x = newX
    y = newY

    x += this.anchorX
    y += this.anchorY

    return {x, y}
  }
}




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pointInShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
// detect collision using shadows
// p: Point, {x, y}
// ps: Points, Array
// rect: {minX, maxX, minY, maxY}


function collide (shape1, shape2) {
  const ps1 = shape1.points
  const ps2 = shape2.points

  if (ps1.length < 2) return false
  if (ps2.length < 2) return false

  // quick check start
  let r1 = {}
  let r2 = {}
  r1 = getRectShape(ps1)
  r2 = getRectShape(ps2)

  if (r1.minX > r2.maxX || r1.minY > r2.maxY || r2.minX > r1.maxX || r2.minY > r1.maxY) {
    return false
  }
  // quick check end

  // possible rect
  let collideRect = getCollideRect(r1, r2)

  // if point inside shapes, return point
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawPathByPoints(ps2)
  for (let i = 0; i < ps1.length; i++) {
    let p = ps1[i]
    if (pointInRect(p, collideRect) && __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].isPointInPath(p.x, p.y)) { return p }
  }

  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawPathByPoints(ps1)
  for (let i = 0; i < ps2.length; i++) {
    let p = ps2[i]
    if (pointInRect(p, collideRect) && __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].isPointInPath(p.x, p.y)) { return p }
  }
  // points check end

  // lines check
  for (let i = 0; i < ps1.length - 1; i++) { // bcz we had checked the points, ignore the last line
    let p1 = ps1[i]
    let p2 = ps1[i + 1]
    for (let j = 0; j < ps2.length - 1; j++) {
      let p3 = ps2[j]
      let p4 = ps2[j + 1]

      let p = lineCollideLine(p1, p2, p3, p4)
      if (p) return p
    }
  }

  return false
}

function getCollideRect (r1, r2) {
  return {
    minX: r1.minX > r2.minX ? r1.minX : r2.minX,
    minY: r1.minY > r2.minY ? r1.minY : r2.minY,
    maxX: r1.maxX < r2.maxX ? r1.maxX : r2.maxX,
    maxY: r1.maxY < r2.maxY ? r1.maxY : r2.maxY
  }
}

function lineCollideLine (p1, p2, p3, p4) {
  let x1 = p1.x
  let x2 = p2.x
  let x3 = p3.x
  let x4 = p4.x

  let y1 = p1.y
  let y2 = p2.y
  let y3 = p3.y
  let y4 = p4.y

  // quick check
  if (Math.min(x1, x2) > Math.max(x3, x4) ||
      Math.min(y1, y2) > Math.max(y3, y4) ||
      Math.max(x1, x2) < Math.min(x3, x4) ||
      Math.max(y1, y2) < Math.min(y3, y4)) { return false }

  // same slope rate
  if ((y1 - y2) * (x3 - x4) === (x1 - x2) * (y3 - y4)) { return false }

  if (cross(p3, p2, p3, p4) * cross(p3, p4, p3, p1) < 0 ||
    cross(p1, p4, p1, p2) * cross(p1, p2, p1, p3) < 0) { return false }

  // get collide point
  let b1 = (y2 - y1) * x1 + (x1 - x2) * y1
  let b2 = (y4 - y3) * x3 + (x3 - x4) * y3
  let D = (x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1)
  let D1 = b2 * (x2 - x1) - b1 * (x4 - x3)
  let D2 = b2 * (y2 - y1) - b1 * (y4 - y3)

  return {
    x: D1 / D,
    y: D2 / D
  }
}

function cross (p1, p2, p3, p4) {
  return (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x)
}

function max (a, b) { return Math.max(a, b) }
function min (a, b) { return Math.min(a, b) }

function getRectShape (ps) {
  let xs = ps.map(p => p.x)
  let ys = ps.map(p => p.y)

  return {
    minX: xs.reduce(min),
    maxX: xs.reduce(max),
    minY: ys.reduce(min),
    maxY: ys.reduce(max)
  }
}

function pointInRect (p, r) {
  return r.minX <= p.x && p.x <= r.maxX &&
    r.minY <= p.y && p.y <= r.maxY
}

function pointInShape (p, shape) {
  let ps = shape.points
  if (ps.length < 3) return false

  let rect = getRectShape(ps)
  if (!pointInRect(p, rect)) { return false }

  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawPathByPoints(ps)
  if (__WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].isPointInPath(p.x, p.y)) { return p }

  return false
}




/***/ }),
/* 10 */
/***/ (function(module, exports) {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, Image)) {
      child = new Image();
      child.crossOrigin = 'anonymous'
      child.src = parent.src;
      return child;
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Swing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Increase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Sine; });
class Swing {
  constructor (min, max, speed) {
    this.min = min
    this.max = max
    this.cycle = (max - min) / speed * 2000
    this.t = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    var deltaT = (new Date().getTime() - this.t) % this.cycle
    var x = (this.max - this.min) * 2 * deltaT / this.cycle + this.min
    if (deltaT > this.cycle / 2) return 2 * this.max - x
    else return x
  }
}

class Increase {
  constructor (min, max, speed) {
    this.min = min
    this.max = max
    this.cycle = (max - min) / speed * 1000
    this.t = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    var deltaT = (new Date().getTime() - this.t) % this.cycle
    return (this.max - this.min) * deltaT / this.cycle + this.min
  }
}

class Sine {
  constructor (min, max, speed) {
    this.min = min
    this.max = max
    this.cycle = (max - min) / speed * 2000
    this.t = new Date().getTime()
  }

  [Symbol.toPrimitive] (hint) {
    var deltaT = (new Date().getTime() - this.t) % this.cycle
    return (this.max + this.min) / 2 +
      (this.max - this.min) / 2 * Math.sin(deltaT / this.cycle * Math.PI * 2)
  }
}




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return noFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return noStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return stroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return lineWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return font; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return playSound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__colors__ = __webpack_require__(6);



function background (r, g, b) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (arguments.length === 1) { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillStyle = r } else { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colors__["c" /* RGB */])(r, g, b) }
  rectangle(0, 0, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].width, __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* canvas */].height)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function noFill () { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colors__["d" /* RGBA */])(0, 0, 0, 0) }
function noStroke () { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].strokeStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colors__["d" /* RGBA */])(0, 0, 0, 0) }

function fill (r, g, b) {
  if (arguments.length === 1) { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillStyle = r } else { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colors__["c" /* RGB */])(r, g, b) }
}

function stroke (r, g, b) {
  if (arguments.length === 1) { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].strokeStyle = r } else { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].strokeStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colors__["c" /* RGB */])(r, g, b) }
}

function lineWidth (thickness) { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].lineWidth = thickness }

function rectangle (x, y, w, h, c) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (c) fill(c)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].rect(x, y, w, h)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function circle (x, y, r, c) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (c) fill(c)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].arc(x, y, r, 0, 2 * Math.PI)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function line (x1, y1, x2, y2, c) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (c) stroke(c)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].moveTo(x1, y1)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].lineTo(x2, y2)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function point (x, y) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].strokeStyle = Object(__WEBPACK_IMPORTED_MODULE_1__colors__["d" /* RGBA */])(0, 0, 0, 0)
  circle(x, y, 3)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function polygon () {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].moveTo(arguments[0], arguments[1])
  for (let i = 2; i < arguments.length - 1; i += 2) { __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].lineTo(arguments[i], arguments[i + 1]) }
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].closePath()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function triangle (x1, y1, x2, y2, x3, y3, c) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (c) fill(c)
  polygon(x1, y1, x2, y2, x3, y3)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function ellipse (x, y, rX, rY, c) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (c) fill(c)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].beginPath()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].ellipse(x, y, rX, rY, 0, 0, Math.PI * 2)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fill()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].stroke()
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function image (src, x, y, w, h) {
  x = x || 0
  y = y || 0
  let img = new Image()
  img.crossOrigin = 'anonymous'
  img.src = src
  img._x = x
  img._y = y
  img.w = w
  img.h = h
  img.onload = function () {
    if (this.w && this.h) {
      __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawImage(this, this._x, this._y, this.w, this.h)
    } else {
      __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].drawImage(this, this._x, this._y)
    }
  }
}

function text (src, x, y, c) {
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].save()
  if (c) fill(c)
  x = x || 0
  y = y || 0
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].fillText(src, x, y)
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].restore()
}

function font (size, font) {
  font = font || 'Arial'
  __WEBPACK_IMPORTED_MODULE_0__canvas__["b" /* ctx */].font = size + 'px ' + font
}

function playSound (sound) {
  var m = new Audio()
  m.src = sound
  m.play()
}




/***/ })
/******/ ]);