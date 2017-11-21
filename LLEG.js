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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var div = document.createElement('div');
var canvas = document.createElement('canvas');
var clickShapes = __webpack_require__(1).clickShapes;

div.style = 'display:flex;' + 'display:-webkit-flex;' + 'justify-content:center;' + 'align-items:center;' + 'align-items:center;' + 'height:100%';
canvas.style = 'border: 1px solid #d3d3d3;';

div.appendChild(canvas);
document.body.appendChild(div);

var ctx = canvas.getContext('2d');

canvas.resize = function (width, height) {
  canvas.width = width || window.innerWidth - 5;
  canvas.height = height || window.innerHeight - 5;
  ctx.strokeStyle = '#00FFFF';
  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
};

canvas.resize();

canvas.clear = function () {
  clickShapes.clear();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

canvas.showAxis = function () {
  ctx.save();
  ctx.strokeStyle = 'black';
  for (var i = 0; i < canvas.width; i += 10) {
    if (i % 100 === 0) {
      i.toString().draw(i + 1, 15, undefined, '15px Arial');
      ctx.lineWidth = 0.4;
    } else ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.closePath();
    ctx.stroke();
  }

  for (var _i = 0; _i < canvas.height; _i += 10) {
    if (_i % 100 === 0) {
      _i.toString().draw(1, _i - 1, undefined, '15px Arial');
      ctx.lineWidth = 0.3;
    } else ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.moveTo(0, _i);
    ctx.lineTo(canvas.width, _i);
    ctx.closePath();
    ctx.stroke();
  }
  ctx.restore();
};

ctx.drawPathByPoints = function (ps) {
  ctx.beginPath();
  ctx.moveTo(ps[0].x, ps[0].y);

  for (var i = 1; i < ps.length; i++) {
    ctx.lineTo(ps[i].x, ps[i].y);
  }

  ctx.closePath();
};

exports.canvas = canvas;
exports.ctx = ctx;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// requestAnimationFrame
(function () {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (func, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        func(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
})();

// void run multi frame
var frameId;
var nextFrame = function nextFrame(func) {
  if (frameId) window.cancelAnimationFrame(frameId);
  frameId = window.requestAnimationFrame(func);
};

String.prototype.draw = function (x, y, fillStyle, font) {
  new window.Text(this, x, y, fillStyle, font).draw();
};

// handle shape click event;
var clickShapes = function () {
  var shapes = [];

  return {
    clear: function clear() {
      shapes = [];
    },
    add: function add(shape) {
      shapes.push(shape);
    },
    getLength: function getLength() {
      return shapes.length;
    },
    get: function get(i) {
      return shapes[i];
    }
  };
}();

exports.nextFrame = nextFrame;
exports.clickShapes = clickShapes;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Key = {};

var keyboard = 'abcdefghijklmnopqrstuvwxyz1234567890';
var keyboard2 = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape'];

var arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Escape'];

for (var i = 0; i < keyboard.length; i++) {
  Key[keyboard[i]] = {};
}

for (var _i = 0; _i < keyboard2.length; _i++) {
  Key[keyboard2[_i]] = {};
}

document.onkeyup = function (e) {
  var key = Key[e.key];
  if (key && key.up) {
    key.up();
  }
};

document.onkeydown = function (e) {
  var key = Key[e.key];
  if (key && key.down) {
    key.down();
  }
  if (arrows.hasOwnProperty(e.key) && key.press) {
    key.press();
  }
};

// keyboard2 will not file key press event
document.onkeypress = function (e) {
  var key = Key[e.key];
  if (key && key.press) {
    key.press();
  }
};

exports.Key = Key;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mouse = undefined;

var _canvas = __webpack_require__(0);

var _keys = __webpack_require__(2);

var _util = __webpack_require__(1);

var Mouse = {
  x: 0,
  y: 0
};

var TouchStart = {};
TouchStart.init = function () {
  TouchStart.x = Mouse.x;
  TouchStart.y = Mouse.y;
};

function windowToCanvas(canvas, x, y) {
  var box = canvas.getBoundingClientRect();
  return {
    x: x - box.left * (canvas.width / box.width),
    y: y - box.top * (canvas.height / box.height)
  };
}

function updateEvent(e) {
  // e.preventDefault();
  // update e if it is on phone
  if (e.touches) e = e.touches.item(0);

  var point = windowToCanvas(_canvas.canvas, e.clientX, e.clientY);
  Mouse.x = Math.floor(point.x);
  Mouse.y = Math.floor(point.y);
}

_canvas.canvas.onmousedown = function (e) {
  updateEvent(e);
  if (Mouse.down) Mouse.down();

  // handle events of all shapes, LIFO
  // IMPORTANT
  var i = _util.clickShapes.getLength();
  var shape = void 0;
  while (i--) {
    shape = _util.clickShapes.get(i);
    if (shape.touched() && shape.click) {
      shape.click();
      break;
    }
  }
};

var _preventDefault = false;
_canvas.canvas.preventDefaultEvent = function () {
  _preventDefault = true;
};

_canvas.canvas.ontouchstart = function (e) {
  if (_preventDefault) {
    e.preventDefault();
  }
  _canvas.canvas.onmousedown(e);
  TouchStart.init();
};

_canvas.canvas.onmousemove = function (e) {
  updateEvent(e);
  if (Mouse.move) Mouse.move();
};

_canvas.canvas.ontouchmove = function (e) {
  if (_preventDefault) {
    e.preventDefault();
  }
  _canvas.canvas.onmousemove(e);
  if (Mouse.x - TouchStart.x > 50 && _keys.Key.ArrowRight.down) {
    _keys.Key.ArrowRight.down();
    TouchStart.init();
  } else if (TouchStart.x - Mouse.x > 50 && _keys.Key.ArrowLeft.down) {
    _keys.Key.ArrowLeft.down();
    TouchStart.init();
  }

  if (TouchStart.y - Mouse.y > 50 && _keys.Key.ArrowUp.down) {
    _keys.Key.ArrowUp.down();
    TouchStart.init();
  } else if (Mouse.y - TouchStart.y > 50 && _keys.Key.ArrowDown.down) {
    _keys.Key.ArrowDown.down();
    TouchStart.init();
  }
};

_canvas.canvas.ontouchend = _canvas.canvas.onmouseup = function (e) {
  if (_preventDefault) {
    e.preventDefault();
  }
  updateEvent(e);
  if (Mouse.up) Mouse.up();
};

_canvas.canvas.onclick = function (e) {
  updateEvent(e);
  if (Mouse.click) Mouse.click();
};

exports.Mouse = Mouse;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animation = exports.Sprite = exports.Text = exports.Point = exports.Circle = exports.Triangle = exports.Polygon = exports.Rectangle = exports.Line = exports.Shape = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(0);

var _util = __webpack_require__(1);

var _mouse = __webpack_require__(3);

var _transform = __webpack_require__(7);

var _resource = __webpack_require__(5);

var _collision = __webpack_require__(8);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _clone = __webpack_require__(9);

var Shape = function () {
  function Shape() {
    _classCallCheck(this, Shape);

    this.transform = new _transform.Transform();
    this._points = [];
    this.globalAlpha = 1;
  }

  _createClass(Shape, [{
    key: 'updateCtx',
    value: function updateCtx(ctx) {
      if (this.globalAlpha) ctx.globalAlpha = this.globalAlpha;
      if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
      if (this.fillStyle) ctx.fillStyle = this.fillStyle;
      if (this.lineWidth) ctx.lineWidth = this.lineWidth;
      if (this.globalCompositeOperation) ctx.globalCompositeOperation = this.globalCompositeOperation;
      this.transform.updateCtx(ctx);
    }
  }, {
    key: 'stroke',
    value: function stroke() {
      if (this.click) _util.clickShapes.add(this); // use for handle click event

      _canvas.ctx.save();
      this.updateCtx(_canvas.ctx);

      _canvas.ctx.beginPath();
      this._draw();
      _canvas.ctx.closePath();
      _canvas.ctx.stroke();

      _canvas.ctx.restore();
    }
  }, {
    key: 'fill',
    value: function fill() {
      if (this.click) _util.clickShapes.add(this); // use for handle click event

      _canvas.ctx.save();
      this.updateCtx(_canvas.ctx);

      _canvas.ctx.beginPath();
      this._draw();
      _canvas.ctx.fill();
      _canvas.ctx.closePath();

      _canvas.ctx.restore();
    }
  }, {
    key: '_draw',
    value: function _draw() {}
  }, {
    key: 'draw',
    value: function draw() {
      if (this.click) _util.clickShapes.add(this); // use for handle click event

      _canvas.ctx.save();
      this.updateCtx(_canvas.ctx);

      _canvas.ctx.beginPath();
      this._draw();
      _canvas.ctx.closePath();

      _canvas.ctx.fill();
      _canvas.ctx.stroke();

      _canvas.ctx.restore();
    }
  }, {
    key: 'translate',
    value: function translate(x, y) {
      this.transform.translate(x, y);
    }
  }, {
    key: 'scale',
    value: function scale(x, y) {
      this.transform.scale(x, y);
    }
  }, {
    key: 'skew',
    value: function skew(x, y) {
      this.transform.skew(x, y);
    }
  }, {
    key: 'setAnchor',
    value: function setAnchor(x, y) {
      this.transform.setAnchor(x, y);
    }
  }, {
    key: 'rotate',
    value: function rotate(degree) {
      this.transform.rotate(degree);
    }
  }, {
    key: 'click',
    value: function click() {}
  }, {
    key: 'touched',
    value: function touched() {
      return (0, _collision.pointInShape)(_mouse.Mouse, this);
    }
  }, {
    key: 'collide',
    value: function collide(other) {
      if (other instanceof Shape) {
        return (0, _collision.collide)(this, other);
      } else {
        return false;
      }
    }
  }, {
    key: 'clone',
    value: function clone() {
      return _clone(this, false);
    }
  }, {
    key: '_updatePoints',
    value: function _updatePoints() {}
  }, {
    key: 'points',
    get: function get() {
      var _this = this;

      this._updatePoints();
      return this._points.map(function (p) {
        return _this.transform.getRealPoint(p);
      });
    }
  }]);

  return Shape;
}();

var Circle = function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

    _classCallCheck(this, Circle);

    var _this2 = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _this2.x = x;
    _this2.y = y;
    _this2.r = r;
    return _this2;
  }

  return Circle;
}(Shape);

Circle.prototype._draw = function () {
  _canvas.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
};

Circle.prototype._updatePoints = function () {
  this._points = [];
  var n = 8;
  var degree = Math.PI * 2 / n;
  for (var i = 0; i < n; i++) {
    this._points.push({
      x: this.x + this.r * Math.sin(degree * i),
      y: this.y + this.r * Math.cos(degree * i)
    });
  }
};

var Line = function (_Shape2) {
  _inherits(Line, _Shape2);

  function Line(x1, y1, x2, y2) {
    _classCallCheck(this, Line);

    var _this3 = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

    _this3.x1 = x1;
    _this3.y1 = y1;
    _this3.x2 = x2;
    _this3.y2 = y2;
    return _this3;
  }

  return Line;
}(Shape);

Line.prototype._draw = function () {
  _canvas.ctx.moveTo(this.x1, this.y1);
  _canvas.ctx.lineTo(this.x2, this.y2);
};

Line.prototype._updatePoints = function () {
  this._points = [];
  this._points.push({ x: this.x1, y: this.y1 });
  this._points.push({ x: this.x2, y: this.y2 });
};

var Polygon = function (_Shape3) {
  _inherits(Polygon, _Shape3);

  function Polygon() {
    _classCallCheck(this, Polygon);

    var _this4 = _possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this));

    if (arguments.length < 6) {
      throw String('Polygon should have at lease 3 points');
    }

    _this4._points = [];
    for (var i = 0; i < arguments.length - 1; i += 2) {
      var p = { x: arguments[i], y: arguments[i + 1] };
      _this4._points.push(p);
    }
    return _this4;
  }

  return Polygon;
}(Shape);

Polygon.prototype._draw = function () {
  var p = this._points[0];
  _canvas.ctx.moveTo(p.x, p.y);
  for (var i = 1; i < this._points.length; i++) {
    p = this._points[i];
    _canvas.ctx.lineTo(p.x, p.y);
  }
};

var Rectangle = function (_Shape4) {
  _inherits(Rectangle, _Shape4);

  function Rectangle(x, y, w, h) {
    _classCallCheck(this, Rectangle);

    var _this5 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

    _this5.x = x;
    _this5.y = y;
    _this5.width = w;
    _this5.height = h;
    _this5.collideW = 1;
    _this5.collideH = 1;
    return _this5;
  }

  return Rectangle;
}(Shape);

Rectangle.prototype._draw = function () {
  _canvas.ctx.rect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.setCollisionScale = function (w, h) {
  this.collideW = w;
  this.collideH = h;
};

Rectangle.prototype._updatePoints = function () {
  this._points = [];

  var minX = this.x + this.width / 2 * (1 - this.collideW);
  var maxX = this.x + this.width / 2 * (1 + this.collideW);
  var minY = this.y + this.height / 2 * (1 - this.collideH);
  var maxY = this.y + this.height / 2 * (1 + this.collideH);

  this._points.push({ x: minX, y: minY });
  this._points.push({ x: minX, y: maxY });
  this._points.push({ x: maxX, y: maxY });
  this._points.push({ x: maxX, y: minY });
};

var Text = function (_Shape5) {
  _inherits(Text, _Shape5);

  function Text() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
    var fillStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'orange';
    var font = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '20px Arial';

    _classCallCheck(this, Text);

    var _this6 = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this));

    _this6.src = src;
    _this6.x = x;
    _this6.y = y;
    _this6.font = font;
    _this6.fillStyle = fillStyle;
    return _this6;
  }

  return Text;
}(Shape);

Text.prototype.stroke = function () {
  _canvas.ctx.save();
  this.updateCtx(_canvas.ctx);
  _canvas.ctx.font = this.font;

  _canvas.ctx.strokeText(this.src, this.x, this.y);

  _canvas.ctx.restore();
};

Text.prototype.fill = function () {
  _canvas.ctx.save();
  this.updateCtx(_canvas.ctx);
  _canvas.ctx.font = this.font;

  _canvas.ctx.fillText(this.src, this.x, this.y);

  _canvas.ctx.restore();
};

Text.prototype.draw = Text.prototype.fill;

var Sprite = function (_Rectangle) {
  _inherits(Sprite, _Rectangle);

  function Sprite(src, x, y, w, h) {
    _classCallCheck(this, Sprite);

    var _this7 = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this, x, y, w, h));

    _this7.collideW = 0.8;
    _this7.collideH = 0.8;

    _this7.img = new window.Image();
    _this7.img.crossOrigin = 'anonymous';
    _this7.img.src = src;
    _this7.img.onload = function () {
      _resource.Rss.load();
    };

    _resource.Rss.add();
    return _this7;
  }

  _createClass(Sprite, [{
    key: 'src',
    get: function get() {
      return this.img.src;
    },
    set: function set(src) {
      this.img.src = src;
    }
  }, {
    key: 'onload',
    set: function set(callback) {
      this.img.onload = function () {
        _resource.Rss.load();
        callback();
      };
    }
  }]);

  return Sprite;
}(Rectangle);

Sprite.prototype.clip = function (sx, sy, sw, sh) {
  this.sx = sx > 0 ? sx : 1;
  this.sy = sy > 0 ? sx : 1;
  this.swidth = sw;
  this.sheight = sh;
  this.width = this.width || sw;
  this.height = this.height || sh;
};

Sprite.prototype._draw = function () {
  if (this.sx && this.sy && this.swidth & this.sheight) {
    _canvas.ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);
  } else if (this.width && this.height) {
    _canvas.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  } else {
    _canvas.ctx.drawImage(this.img, this.x, this.y);
  }
};

Sprite.prototype.fill = null;
Sprite.prototype.stroke = null;

var Animation = function (_Sprite) {
  _inherits(Animation, _Sprite);

  function Animation(src, x, y, w, h) {
    _classCallCheck(this, Animation);

    var _this8 = _possibleConstructorReturn(this, (Animation.__proto__ || Object.getPrototypeOf(Animation)).call(this, src, x, y, w, h));

    _this8.speed = 10;
    return _this8;
  }

  return Animation;
}(Sprite);

Animation.prototype.setFrame = function (sx, sy, sw, sh, c, r) {
  this.c = c;
  this.r = r || 1;
  this.cf = 0; // current frame count
  this.clip(sx, sy, sw, sh);
};

Animation.prototype.setSpeed = function (speed) {
  this.speed = speed;
  if (this.speed < 1) this.speed = 1;
  if (this.speed > 60) this.speed = 60;
};

Animation.prototype._draw = function () {
  var sx = this.sx + this.swidth * (Math.floor(this.cf * this.speed / 60) % this.c);
  var sy = this.sy + this.sheight * (Math.floor(this.cf * this.speed / 60 / this.c) % this.r);
  _canvas.ctx.drawImage(this.img, sx, sy, this.swidth, this.sheight, this.x, this.y, this.width, this.height);

  this.cf++; // update frame count
};

var Point = function (_Circle) {
  _inherits(Point, _Circle);

  function Point(x, y) {
    _classCallCheck(this, Point);

    var _this9 = _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this, x, y, 2));

    _this9.fillStyle = 'red';
    return _this9;
  }

  return Point;
}(Circle);

Point.prototype.draw = Point.prototype.fill;
var Triangle = Polygon;

exports.Shape = Shape;
exports.Line = Line;
exports.Rectangle = Rectangle;
exports.Polygon = Polygon;
exports.Triangle = Triangle;
exports.Circle = Circle;
exports.Point = Point;
exports.Text = Text;
exports.Sprite = Sprite;
exports.Animation = Animation;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRssAndRun = exports.Rss = undefined;

var _canvas = __webpack_require__(0);

var _shapes = __webpack_require__(4);

var count = 0;
var loaded = 0;
var main = void 0;

function loadRssAndRun(func) {
  main = func;
  check();
}

var Rss = {};
Rss.add = function () {
  count++;
};
Rss.load = function () {
  loaded++;
};
Rss.isLoaded = function () {
  return loaded >= count;
};

var n = 0;

function check() {
  if (Rss.isLoaded()) {
    main();
  } else {
    _canvas.canvas.clear();

    var LL = new _shapes.Text('LeapLearner', _canvas.canvas.width / 2 - 110, 200, undefined, '40px Arial');
    LL.draw();

    var msg = 'loading';
    for (var i = 0; i < n % 6; i++) {
      msg += '.';
    }
    msg.draw(_canvas.canvas.width / 2 - 40, _canvas.canvas.height - 220);

    new _shapes.Rectangle(50, _canvas.canvas.height - 200, _canvas.canvas.width - 100, 10).fill();

    var r2 = new _shapes.Rectangle(50, _canvas.canvas.height - 200, (_canvas.canvas.width - 100) * loaded / count, 10);
    r2.fillStyle = 'orange';
    r2.fill();

    n++;
    setTimeout(check, 100);
  }
}

exports.Rss = Rss;
exports.loadRssAndRun = loadRssAndRun;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas = __webpack_require__(0);

var _keys = __webpack_require__(2);

var _mouse = __webpack_require__(3);

var _shapes = __webpack_require__(4);

var _util = __webpack_require__(1);

var _resource = __webpack_require__(5);

var _colors = __webpack_require__(10);

window.canvas = _canvas.canvas;
window.ctx = _canvas.ctx;

window.Line = _shapes.Line;
window.Rectangle = _shapes.Rectangle;
window.Polygon = _shapes.Polygon;
window.Triangle = _shapes.Triangle;
window.Circle = _shapes.Circle;
window.Text = _shapes.Text;
window.Sprite = _shapes.Sprite;
window.Animation = _shapes.Animation;
window.Point = _shapes.Point;

window.Key = _keys.Key;
window.Mouse = _mouse.Mouse;

window.nextFrame = _util.nextFrame;
window.loadRssAndRun = _resource.loadRssAndRun;

window.RGB = _colors.RGB;
window.RGBA = _colors.RGBA;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transform = function () {
  function Transform() {
    _classCallCheck(this, Transform);

    this.anchorX = 0;
    this.anchorY = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.skewX = 0;
    this.skewY = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.degree = 0;
  }

  _createClass(Transform, [{
    key: "transformed",
    value: function transformed() {
      return this.scaleX !== 1 || this.scaleY !== 1 || this.skewX || this.skewY || this.translateX || this.translateY || this.degree;
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      this.scaleX = x;
      this.scaleY = y;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      this.translateX = x;
      this.translateY = y;
    }
  }, {
    key: "skew",
    value: function skew(x, y) {
      this.skewX = x;
      this.skewY = y;
    }
  }, {
    key: "setAnchor",
    value: function setAnchor(x, y) {
      this.anchorX = x;
      this.anchorY = y;
    }
  }, {
    key: "rotate",
    value: function rotate(degree) {
      this.degree = degree;
    }
  }, {
    key: "updateCtx",
    value: function updateCtx(ctx) {
      var degree = this.degree * Math.PI / 180;

      ctx.translate(this.anchorX, this.anchorY);

      ctx.rotate(degree);
      ctx.transform(this.scaleX, this.skewX, this.skewY, this.scaleY, this.translateX, this.translateY);

      ctx.translate(-this.anchorX, -this.anchorY);
    }
  }, {
    key: "getRealPoint",
    value: function getRealPoint(p) {
      if (!this.transformed()) {
        return p;
      }

      var x = p.x;
      var y = p.y;

      x -= this.anchorX;
      y -= this.anchorY;

      var degree = this.degree * Math.PI / 180;
      var sin = Math.sin(degree);
      var cos = Math.cos(degree);

      var newX = x * cos - y * sin;
      var newY = y * cos + x * sin;
      x = newX;
      y = newY;

      newX = this.scaleX * x + this.skewX * y + this.translateX;
      newY = this.skewY * x + this.scaleY * y + this.translateY;
      x = newX;
      y = newY;

      x += this.anchorX;
      y += this.anchorY;

      return { x: x, y: y };
    }
  }]);

  return Transform;
}();

exports.Transform = Transform;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pointInShape = exports.collide = undefined;

var _canvas = __webpack_require__(0);

function collide(shape1, shape2) {
  var ps1 = shape1.points;
  var ps2 = shape2.points;

  if (ps1.length < 2) return false;
  if (ps2.length < 2) return false;

  // quick check start
  var r1 = {};
  var r2 = {};
  r1 = getRectShape(ps1);
  r2 = getRectShape(ps2);

  if (r1.minX > r2.maxX || r1.minY > r2.maxY || r2.minX > r1.maxX || r2.minY > r1.maxY) {
    return false;
  }
  // quick check end

  // possible rect
  var collideRect = getCollideRect(r1, r2);

  // if point inside shapes, return point
  _canvas.ctx.drawPathByPoints(ps2);
  for (var i = 0; i < ps1.length; i++) {
    var p = ps1[i];
    if (pointInRect(p, collideRect) && _canvas.ctx.isPointInPath(p.x, p.y)) {
      return p;
    }
  }

  _canvas.ctx.drawPathByPoints(ps1);
  for (var _i = 0; _i < ps2.length; _i++) {
    var _p = ps2[_i];
    if (pointInRect(_p, collideRect) && _canvas.ctx.isPointInPath(_p.x, _p.y)) {
      return _p;
    }
  }
  // points check end

  // lines check
  for (var _i2 = 0; _i2 < ps1.length - 1; _i2++) {
    // bcz we had checked the points, ignore the last line
    var p1 = ps1[_i2];
    var p2 = ps1[_i2 + 1];
    for (var j = 0; j < ps2.length - 1; j++) {
      var p3 = ps2[j];
      var p4 = ps2[j + 1];

      var _p2 = lineCollideLine(p1, p2, p3, p4);
      if (_p2) return _p2;
    }
  }

  return false;
} // detect collision using shadows
// p: Point, {x, y}
// ps: Points, Array
// rect: {minX, maxX, minY, maxY}


function getCollideRect(r1, r2) {
  return {
    minX: r1.minX > r2.minX ? r1.minX : r2.minX,
    minY: r1.minY > r2.minY ? r1.minY : r2.minY,
    maxX: r1.maxX < r2.maxX ? r1.maxX : r2.maxX,
    maxY: r1.maxY < r2.maxY ? r1.maxY : r2.maxY
  };
}

function lineCollideLine(p1, p2, p3, p4) {
  var x1 = p1.x;
  var x2 = p2.x;
  var x3 = p3.x;
  var x4 = p4.x;

  var y1 = p1.y;
  var y2 = p2.y;
  var y3 = p3.y;
  var y4 = p4.y;

  // quick check
  if (Math.min(x1, x2) > Math.max(x3, x4) || Math.min(y1, y2) > Math.max(y3, y4) || Math.max(x1, x2) < Math.min(x3, x4) || Math.max(y1, y2) < Math.min(y3, y4)) {
    return false;
  }

  // same slope rate
  if ((y1 - y2) * (x3 - x4) === (x1 - x2) * (y3 - y4)) {
    return false;
  }

  if (cross(p3, p2, p3, p4) * cross(p3, p4, p3, p1) < 0 || cross(p1, p4, p1, p2) * cross(p1, p2, p1, p3) < 0) {
    return false;
  }

  // get collide point
  var b1 = (y2 - y1) * x1 + (x1 - x2) * y1;
  var b2 = (y4 - y3) * x3 + (x3 - x4) * y3;
  var D = (x2 - x1) * (y4 - y3) - (x4 - x3) * (y2 - y1);
  var D1 = b2 * (x2 - x1) - b1 * (x4 - x3);
  var D2 = b2 * (y2 - y1) - b1 * (y4 - y3);

  return {
    x: D1 / D,
    y: D2 / D
  };
}

function cross(p1, p2, p3, p4) {
  return (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x);
}

function max(a, b) {
  return Math.max(a, b);
}
function min(a, b) {
  return Math.min(a, b);
}

function getRectShape(ps) {
  var xs = ps.map(function (p) {
    return p.x;
  });
  var ys = ps.map(function (p) {
    return p.y;
  });

  return {
    minX: xs.reduce(min),
    maxX: xs.reduce(max),
    minY: ys.reduce(min),
    maxY: ys.reduce(max)
  };
}

function pointInRect(p, r) {
  return r.minX <= p.x && p.x <= r.maxX && r.minY <= p.y && p.y <= r.maxY;
}

function pointInShape(p, shape) {
  var ps = shape.points;
  if (ps.length < 3) return false;

  var rect = getRectShape(ps);
  if (!pointInRect(p, rect)) {
    return false;
  }

  _canvas.ctx.drawPathByPoints(ps);
  if (_canvas.ctx.isPointInPath(p.x, p.y)) {
    return p;
  }

  return false;
}

exports.collide = collide;
exports.pointInShape = pointInShape;

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function RGB(r, g, b) {
  return 'rgb(' + Math.floor(r) + ',' + Math.floor(g) + ',' + Math.floor(b) + ')';
}

function RGBA(r, g, b, a) {
  return 'rgba(' + Math.floor(r) + ',' + Math.floor(g) + ',' + Math.floor(b) + ',' + a + ')';
}

exports.RGB = RGB;
exports.RGBA = RGBA;

/***/ })
/******/ ]);