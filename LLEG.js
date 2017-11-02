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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var canvas = document.createElement('canvas');
var p = document.createElement('p');

document.body.appendChild(canvas);
document.body.appendChild(p);


canvas.width = 400;
canvas.height = 600;
canvas.style = "border: 1px solid #d3d3d3;";

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#00FFFF";
ctx.fillStyle = "rgba(0, 255, 255, 0.4)";

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

module.exports = {
    canvas: canvas,
    ctx: ctx,
    p: p
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var context = __webpack_require__(0).ctx;
var inheritPrototype = __webpack_require__(6).inheritPrototype;
var Transform = __webpack_require__(7).Transform;

var shapeList = [];

function Shape(){
    this.transform = new Transform();
    shapeList.push(this);
}

Shape.prototype._draw = null;
Shape.prototype.click = null;

Shape.prototype.updateCtx = function(ctx){
    if('globalAlpha' in this) ctx.globalAlpha = this.globalAlpha;
    if('strokeStyle' in this) ctx.strokeStyle = this.strokeStyle;
    if('fillStyle' in this) ctx.fillStyle = this.fillStyle;
    if('lineWidth' in this) ctx.lineWidth = this.lineWidth;
    this.transform.updateCtx(ctx);
};

Shape.prototype.stroke = function(ctx){
    ctx = ctx || context;
    ctx.save();

    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw(ctx);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
};

Shape.prototype.fill = function(ctx){
    ctx = ctx || context;
    ctx.save();

    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw(ctx);
    ctx.fill();
    ctx.closePath();

    ctx.restore();
};

Shape.prototype.draw = function(ctx){
    ctx = ctx || context;
    ctx.save();

    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw(ctx);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    ctx.restore();
};

Shape.prototype.translate = function(x, y){
    this.transform.translate(x, y);
};

Shape.prototype.scale = function(x, y){
    this.transform.scale(x, y);
};

Shape.prototype.skew = function(x, y){
    this.transform.skew(x, y);
};

Shape.prototype.setAnchor = function(x, y){
    this.transform.setAnchor(x, y);
};

Shape.prototype.rotate = function(degree){
    this.transform.rotate(degree);
};

function Circle(x, y, r){
    Shape.call(this);
    this.x = x || 0;
    this.y = y || 0;
    this.r = r || 10;
}

inheritPrototype(Circle, Shape);

Circle.prototype._draw = function(ctx){
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
};

function Line(x1, y1, x2, y2){
    Shape.call(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

inheritPrototype(Line, Shape);

Line.prototype._draw = function(ctx){
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
};

function Polygon(){
    Shape.call(this);
    if(arguments.length < 6){
        throw "Polygon should have at lease 3 points";
    }

    this.points = [];
    for(var i=0; i<arguments.length-1; i+=2){
        var p = { x: arguments[i], y: arguments[i+1] };
        this.points.push(p);
    }
}

inheritPrototype(Polygon, Shape);

Polygon.prototype._draw = function(ctx){
    var p = this.points[0];
    ctx.moveTo(p.x, p.y);
    for(var i=1; i<this.points.length; i++){
        p = this.points[i];
        ctx.lineTo(p.x, p.y);
    }
};

function Triangle(x1, y1, x2, y2, x3, y3){
    Polygon.call(this, x1, y1, x2, y2, x3, y3);
}

inheritPrototype(Triangle, Polygon);

function Rectangle(x, y, w, h){
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype._draw = function(ctx){
    ctx.rect(this.x, this.y, this.width, this.height);
};

function Text(src, x, y, font){
    Shape.call(this);
    this.src = src;
    this.x = x || 0;
    this.y = y || 20;
    this.font = font || "20px Arial";
    this.fillStyle = "orange";
}

inheritPrototype(Text, Shape);

Text.prototype.stroke = function(ctx){
    ctx = ctx || context;
    ctx.save();

    this.updateCtx(ctx);
    ctx.font = this.font;

    ctx.strokeText(this.src, this.x, this.y);

    ctx.restore();
};

Text.prototype.fill = function(ctx){
    ctx = ctx || context;
    ctx.save();

    this.updateCtx(ctx);
    ctx.font = this.font;

    ctx.fillText(this.src, this.x, this.y);

    ctx.restore();
};

Text.prototype.draw = Text.prototype.fill;

function Sprite(src, x, y, w, h){
    Shape.call(this);
    this.img = new Image();
    if(src) this.img.src = src;
    this.x = x || 0;
    this.y = y || 0;
    this.width = w;
    this.height = h;
}

inheritPrototype(Sprite, Shape);

Sprite.prototype.url = function(src){
    this.img.src = src;
};

Sprite.prototype.clip = function(sx, sy, sw, sh){
    this.sx = sx > 0 ? sx : 1;
    this.sy = sy > 0 ? sx : 1;
    this.swidth = sw;
    this.sheight = sh;
    this.width = this.width || sw;
    this.height = this.height || sh;
};

Sprite.prototype._draw = function(ctx){
    if(this.sx && this.sy && this.swidth & this.sheight){
        ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight,
            this.x, this.y, this.width, this.height);
    }
    else if(this.width && this.height)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    else
        ctx.drawImage(this.img, this.x, this.y);
};

Sprite.prototype.fill = null;
Sprite.prototype.stroke = null;

function Animation(src, x, y, w, h){
    Sprite.call(this, src, x, y, w, h);
    this.speed = 1;
}

inheritPrototype(Animation, Sprite);

Animation.prototype.setFrame = function(sx, sy, sw, sh, c, r){
    this.c = c;
    this.r = r || 1;
    this.cf = 0;  // current frame count
    this.clip(sx, sy, sw, sh);
};

Animation.prototype.setSpeed = function(speed){
    this.speed = speed > 1 ? speed : 1;
};

Animation.prototype._draw = function(ctx){
    var sx = this.sx + this.swidth * (Math.floor(this.cf/this.speed) % this.c);
    var sy = this.sy + this.sheight * (Math.floor(this.cf/this.c/this.speed) % this.r);
    ctx.drawImage(this.img, sx, sy, this.swidth, this.sheight,
        this.x, this.y, this.width, this.height);

    if(ctx === context) this.cf++; // update frame count
};

function Point(x, y){
    Circle.call(this, x, y, 2);
    this.fillStyle = "red";
}

inheritPrototype(Point, Circle);
Point.prototype.draw = Point.prototype.fill;

module.exports = {
    shapeList: shapeList,

    Shape: Shape,
    Line: Line,
    Rectangle: Rectangle,
    Polygon: Polygon,
    Triangle: Triangle,
    Circle: Circle,
    Point: Point,
    Text: Text,

    Sprite: Sprite,
    Animation: Animation
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var canvas = __webpack_require__(0).canvas;
var keys = __webpack_require__(3).Key;
var p = __webpack_require__(0).p;
var shapeList = __webpack_require__(1).shapeList;

var Mouse = {
    x: 0,
    y: 0
};

var TouchStart = {};
TouchStart.init = function(){
    TouchStart.x = Mouse.x;
    TouchStart.y = Mouse.y;
};

function windowToCanvas(canvas, x, y){
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left* (canvas.width/box.width),
        y: y - box.top * (canvas.height/box.height)
    };
}

function updateEvent(e){
    // e.preventDefault();
    // update e if it is on phone
    if(e.touches) e = e.touches.item(0);

    var point = windowToCanvas(canvas, e.clientX, e.clientY);
    Mouse.x = Math.floor(point.x);
    Mouse.y = Math.floor(point.y);
    p.innerHTML = "" + Mouse.x + ", " + Mouse.y; 
}

canvas.onmousedown =  function(e){ 
    updateEvent(e);
    if(Mouse.down) Mouse.down(); 

    // handle events of all shapes
    // IMPORTANT
    shapeList.map(function(shape){
        if(shape.click && shape.touched())
            shape.click();
    });
};

canvas.ontouchstart = function(e){
    e.preventDefault();
    canvas.onmousedown(e);
    TouchStart.init();
};

canvas.onmousemove = function(e){
    updateEvent(e);
    if(Mouse.move) Mouse.move();
};

canvas.ontouchmove = function(e){
    e.preventDefault();
    canvas.onmousemove(e);
    if(Mouse.x - TouchStart.x > 50 && Key.ArrowRight.down){
        Key.ArrowRight.down();
        TouchStart.init();
    }
    else if(TouchStart.x - Mouse.x > 50 && Key.ArrowLeft.down){
        Key.ArrowLeft.down();
        TouchStart.init();
    }

    if(TouchStart.y - Mouse.y > 50 && Key.ArrowUp.down){
        Key.ArrowUp.down();
        TouchStart.init();
    }
    else if(Mouse.y - TouchStart.y > 50 && Key.ArrowDown.down){
        Key.ArrowDown.down();
        TouchStart.init();
    }
};

canvas.ontouchend = canvas.onmouseup = function(e){
    e.preventDefault();
    updateEvent(e);
    if(Mouse.up) Mouse.up();
};

canvas.onclick = function(e){ 
     updateEvent(e);
    if(Mouse.click) Mouse.click(); 
};

module.exports = {
    Mouse: Mouse,
    Touch: Mouse
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Key = {};

var keyboard = "abcdefghijklmnopqrstuvwxyz1234567890";
var keyboard2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
"Enter", "Escape"];

for(var i=0; i<keyboard.length; i++){
    Key[keyboard[i]] = {};
}

for(i=0; i<keyboard2.length; i++){
    Key[keyboard2[i]] = {};
}

document.onkeyup = function(e){
    var key = Key[e.key];
    if(key && key.up)
        key.up();
};

document.onkeydown = function(e){
    var key = Key[e.key];
    if(key && key.down)
        key.down();
};

// keyboard2 will not file key press event
document.onkeypress = function(e){
    var key = Key[e.key];
    if(key && key.press)
        key.press();
};

module.exports = {
    Key: Key
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var canvas = __webpack_require__(0).canvas;
var ctx = __webpack_require__(0).ctx;
var collide = __webpack_require__(5);
var Key = __webpack_require__(3).Key;
var Mouse = __webpack_require__(2).Mouse; // must after collide
var Music = __webpack_require__(8).Music;

var shapes = __webpack_require__(1);

window.canvas = canvas;
window.ctx = ctx;

window.Line = shapes.Line;
window.Rectangle = shapes.Rectangle;
window.Polygon = shapes.Polygon;
window.Triangle = shapes.Triangle;
window.Circle = shapes.Circle;
window.Text = shapes.Text;
window.Sprite = shapes.Sprite;
window.Animation = shapes.Animation;
window.Point = shapes.Point;

window.Key = Key;
window.Mouse = Mouse;

window.Music = Music;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var shapes = __webpack_require__(1);
var canvas = __webpack_require__(0).canvas;
var ctx = __webpack_require__(0).ctx;
var Mouse = __webpack_require__(2).Mouse;

var Shape = shapes.Shape;
var Rectangle = shapes.Rectangle;

var canvas1 = document.createElement('canvas');
var canvas2 = document.createElement('canvas');

canvas1.width = 1000;
canvas1.height = 1000;

canvas2.width = 1000;
canvas2.height = 1000;

var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");

function drawIA(shape, ctx){
    if(shape instanceof shapes.Sprite || shape instanceof shapes.Animation){
        var rect = new Rectangle(shape.x, shape.y, shape.width, shape.height);
        rect.transform = shape.transform;
        rect.draw(ctx);
    } else {
        shape.draw(ctx);
    }
}

function collide(shape1, shape2){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    drawIA(shape1, ctx1);
    drawIA(shape2, ctx2);

    ctx1.save();
    ctx1.globalCompositeOperation = "source-in";
    ctx1.drawImage(ctx2.canvas, 0, 0);
    ctx1.restore();

    var canvasData = ctx1.getImageData(0, 0, canvas.width, canvas.height);

    for(var i=0; i<canvasData.data.length/4-1; i++){
        if(canvasData.data[4*i+3] != 0){
            return new shapes.Point(i%canvas.width, i/canvas.width);
        }
    }

    return false;
}

function pointOnShape(p, shape){
    var x = p.x;
    var y = p.y;

    ctx1.clearRect(x, y, 1, 1);

    drawIA(shape, ctx1);

    var canvasData = ctx1.getImageData(x, y, 1, 1);

    if(canvasData.data[3] != 0)
        return true;

    return false;
}

Object.prototype.collide = function(other){
    if(!this.draw || !other.draw) throw "LLEG: Object must have draw method";
    return collide(this, other);
};

Object.prototype.touched = function(){
    if(!this.draw) throw "LLEG: Object must have draw method";

    return pointOnShape(Mouse, this);
};

module.exports = {};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var inheritPrototype = function(subClass, superClass){
    var prototype = Object.create(superClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
};


module.exports = {
    inheritPrototype: inheritPrototype
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

function Transform(){
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

Transform.prototype.scale = function(x, y){
    this.scaleX = x;
    this.scaleY = y;
};

Transform.prototype.translate = function(x, y){
    this.translateX = x;
    this.translateY = y;
};

Transform.prototype.skew = function(x, y){
    this.skewX = x;
    this.skewY = y;
};

Transform.prototype.setAnchor = function(x, y){
    this.anchorX = x;
    this.anchorY = y;
};

Transform.prototype.rotate = function(degree){
    this.degree = degree;
};

Transform.prototype.updateCtx = function(ctx){
    var degree = this.degree * Math.PI / 180;

    ctx.translate(this.anchorX, this.anchorY);

    ctx.rotate(degree);
    ctx.transform(this.scaleX, this.skewX, this.skewY, this.scaleY,
            this.translateX, this.translateY);

    ctx.translate(-this.anchorX, -this.anchorY);
};

module.exports = {
    Transform: Transform
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function Music(src){
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.preload = "auto";
}

Music.prototype.autoPlay = function(b){
    this.audio.autoPlay = b;
};

Music.prototype.play = function(){
    this.audio.currentTime = 0;
    this.audio.play();
};

Music.prototype.stop = function(){
    this.audio.pause();
};

Music.prototype.loop = function(b){
    this.audio.loop = b; // true or false
};

module.exports = {
    Music: Music
};


/***/ })
/******/ ]);