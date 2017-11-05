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
/***/ (function(module, exports) {

var canvas = document.createElement('canvas');
var p = document.createElement('p');

document.body.appendChild(canvas);
document.body.appendChild(p);

canvas.width = 350;
canvas.height = 550;
canvas.style = "border: 1px solid #d3d3d3;";

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#00FFFF";
ctx.fillStyle = "rgba(0, 255, 255, 0.5)";

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

ctx.drawPathByPoints = function(ps){
    ctx.beginPath();
    ctx.moveTo(ps[0].x, ps[0].y);

    for(var i=1; i<ps.length; i++)
        ctx.lineTo(ps[i].x, ps[i].y);

    ctx.closePath();
};

module.exports = {
    canvas: canvas,
    ctx: ctx,
    p: p
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(0).ctx;
var inheritPrototype = __webpack_require__(2).inheritPrototype;
var Transform = __webpack_require__(9).Transform;
var Rss = __webpack_require__(3);

var shapeList = [];

function Shape(){
    this.transform = new Transform();
    this.points = [];
    this.globalAlpha = 1;
    shapeList.push(this);
}

Shape.prototype._draw = null;
Shape.prototype.click = null;

Shape.prototype.updateCtx = function(ctx){
    if(this.globalAlpha) ctx.globalAlpha = this.globalAlpha;
    if(this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
    if(this.fillStyle) ctx.fillStyle = this.fillStyle;
    if(this.lineWidth) ctx.lineWidth = this.lineWidth;
    this.transform.updateCtx(ctx);
};

Shape.prototype.getPoints = function(){
    return this.points;
};

Shape.prototype.stroke = function(){
    ctx.save();
    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw();
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
};

Shape.prototype.fill = function(){
    ctx.save();
    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw();
    ctx.fill();
    ctx.closePath();

    ctx.restore();
};

Shape.prototype.draw = function(){
    ctx.save();
    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw();
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
    this.x = x || 20;
    this.y = y || 20;
    this.r = r || 20;
}

inheritPrototype(Circle, Shape);

Circle.prototype._draw = function(){
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
};

Circle.prototype.getPoints = function(){
    var x = this.x, y = this.y, r = this.r, points = [];
    points.push({x: x,         y: y+r      });
    points.push({x: x+0.5*r,   y: y+0.866*r});
    points.push({x: x+0.866*r, y: y+0.5*r  });
    points.push({x: x+r,       y: y        });
    points.push({x: x+0.866*r, y: y-0.5*r  });
    points.push({x: x+0.5*r,   y: y-0.866*r});
    points.push({x: x,         y: y-r      });
    points.push({x: x-0.5*r,   y: y-0.866*r});
    points.push({x: x-0.866*r, y: y-0.5*r  });
    points.push({x: x-r,       y: y        });
    points.push({x: x-0.866*r, y: y+0.5*r  });
    points.push({x: x-0.5*r,   y: y+0.866*r});
    return points;
}

function Line(x1, y1, x2, y2){
    Shape.call(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

inheritPrototype(Line, Shape);

Line.prototype._draw = function(){
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
};

Line.prototype.getPoints = function(){
    this.points = [];
    this.points.push({x: this.x1, y: this.y1});
    this.points.push({x: this.x2, y: this.y2});
    return this.points;
}

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

Polygon.prototype._draw = function(){
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
    this.collideW = 1;
    this.collideH = 1;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype._draw = function(){
    ctx.rect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.setCollisionScale = function(w, h){
    this.collideW = w;
    this.collideH = h;
}

Rectangle.prototype.getPoints = function(){
    this.points = [];

    var minX = this.x + this.width/2*(1-this.collideW);
    var maxX = this.x + this.width/2*(1+this.collideW);
    var minY = this.y + this.height/2*(1-this.collideH);
    var maxY = this.y + this.height/2*(1+this.collideH);

    this.points.push({x: minX, y: minY});
    this.points.push({x: minX, y: maxY});
    this.points.push({x: maxX, y: maxY});
    this.points.push({x: maxX, y: minY});

    return this.points;
}

function Text(src, x, y, fillStyle, font){
    Shape.call(this);
    this.src = src;
    this.x = x || 0;
    this.y = y || 20;
    this.font = font || "20px Arial";
    this.fillStyle = fillStyle || "orange";
}

inheritPrototype(Text, Shape);

Text.prototype.stroke = function(){
    ctx.save();
    this.updateCtx(ctx);
    ctx.font = this.font;

    ctx.strokeText(this.src, this.x, this.y);

    ctx.restore();
};

Text.prototype.fill = function(){
    ctx.save();
    this.updateCtx(ctx);
    ctx.font = this.font;

    ctx.fillText(this.src, this.x, this.y);

    ctx.restore();
};

Text.prototype.draw = Text.prototype.fill;

String.prototype.draw = function(x, y, fillStyle, font){
    new Text(this, x, y, fillStyle, font).draw();
};

function Sprite(src, x, y, w, h){
    Rectangle.call(this, x, y, w, h);
    this.img = new Image();
    this.img.src = src;
    Rss.add();
    this.img.onload = function(){
        Rss.load();
    }
}

inheritPrototype(Sprite, Rectangle);

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

Sprite.prototype._draw = function(){
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

Animation.prototype._draw = function(){
    var sx = this.sx + this.swidth * (Math.floor(this.cf/this.speed) % this.c);
    var sy = this.sy + this.sheight * (Math.floor(this.cf/this.c/this.speed) % this.r);
    ctx.drawImage(this.img, sx, sy, this.swidth, this.sheight,
        this.x, this.y, this.width, this.height);

    this.cf++; // update frame count
};

function Point(x, y){
    Circle.call(this, x, y, 2);
    this.fillStyle = "red";
}

inheritPrototype(Point, Circle);
Point.prototype.draw = Point.prototype.fill;

Object.prototype.draw = function(){
    for(key in this){
        shape = this[key];
        if(shape instanceof Shape) shape.draw();
    }
}

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

var clone = __webpack_require__(8);

// requestAnimationFrame
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());

// void run multi frame
var frame_id;
var nextFrame = function(func){
    if(frame_id) window.cancelAnimationFrame(frame_id);
    frame_id = window.requestAnimationFrame(func);
};

var inheritPrototype = function(subClass, superClass){
    var prototype = Object.create(superClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
};

Array.prototype.contain = function(obj){
    var i = this.length;
    while(i--){
        if(this[i] === obj)
            return true;
    }
    return false;
};

Array.prototype.max = function(){
    return Math.max.apply(null, this);
};

Array.prototype.min = function(){
    return Math.min.apply(null, this);
};

Object.prototype.clone = function(){
    return clone(this, false);
}

module.exports = {
    inheritPrototype: inheritPrototype,
    nextFrame: nextFrame
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var count = 0;
var loaded = 0;
var main;

function loadRssAndRun(func){
    main = func;
    check();
}

function add(){
    count++;
}

function load(){
    loaded++;
}

function isLoaded(){
    return loaded >= count;
}

var n=0;

function check(){
    if(isLoaded())
        main();
    else {
        canvas.clear();
        "LeapLearner".draw(canvas.width/2-110, 200, null, "40px Arial");
        var msg = "loading";
        for(var i=0; i<n%6; i++)
            msg += '.';
        var r1 = new Rectangle(50, canvas.height-200, canvas.width-100, 10);
        var r2 = new Rectangle(50, canvas.height-200, (canvas.width-100)*loaded/count, 10);
        r2.fillStyle = "orange";
        r1.fill();
        r2.fill();
        msg.draw(canvas.width/2-40,  canvas.height-220);
        n++;
        setTimeout(check, 500);
    }
}

module.exports = {
    add: add,
    load: load,
    loadRssAndRun: loadRssAndRun
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var canvas = __webpack_require__(0).canvas;
var keys = __webpack_require__(5).Key;
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
/* 5 */
/***/ (function(module, exports) {

var Key = {};

var keyboard = "abcdefghijklmnopqrstuvwxyz1234567890";
var keyboard2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", "Escape"];

var arrows = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Escape"];

for(var i=0; i<keyboard.length; i++){
    Key[keyboard[i]] = {};
}

for(i=0; i<keyboard2.length; i++){
    Key[keyboard2[i]] = {};
}

document.onkeyup = function(e){
    var key = Key[e.key];
    if(key && key.up){
        key.up();
    }
};

document.onkeydown = function(e){
    var key = Key[e.key];
    if(key && key.down)
        key.down();
    if(arrows.contain(e.key) && key.press){
        key.press();
    }
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var canvas = __webpack_require__(0).canvas;
var ctx = __webpack_require__(0).ctx;
var collide = __webpack_require__(7);
var Key = __webpack_require__(5).Key;
var Mouse = __webpack_require__(4).Mouse; // must after collide

var shapes = __webpack_require__(1);
var Rss = __webpack_require__(3);

var Color = __webpack_require__(10);
var Util = __webpack_require__(2);

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

window.nextFrame = Util.nextFrame;
window.loadRssAndRun = Rss.loadRssAndRun;

window.RGB = Color.RGB;
window.RGBA = Color.RGBA;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// detect collision using shadows
// p: Point, {x, y}
// ps: Points, Array
// rect: {minX, maxX, minY, maxY}
var shapes = __webpack_require__(1);
var ctx = __webpack_require__(0).ctx;
var Mouse = __webpack_require__(4).Mouse;

var Shape = shapes.Shape;

function collide(shape1, shape2){
    var ps1 = shape1.getPoints();
    var ps2 = shape2.getPoints();

    if(ps1.length < 2) return false;
    if(ps2.length < 2) return false;

    // quick check start
    var r1 = {}, r2 = {}, i, j;
    r1 = getRectShape(ps1);
    r2 = getRectShape(ps2);

    if(r1.minX > r2.maxX || r1.minY > r2.maxY || 
        r2.minX > r1.maxX || r2.minY > r1.maxY)
        return false;
    // quick check end

    // possible rect
    var collideRect = getCollideRect(r1, r2);

    // if point inside shapes, return point
    ctx.drawPathByPoints(ps2);
    for(i=0; i<ps1.length; i++){
        p = ps1[i];
        if(pointInRect(p, collideRect) && ctx.isPointInPath(p.x, p.y)) 
            return p;
    }

    ctx.drawPathByPoints(ps1);
    for(i=0; i<ps2.length; i++){
        p = ps2[i];
        if(pointInRect(p, collideRect) && ctx.isPointInPath(p.x, p.y)) 
            return p;
    }
    // points check end

    // lines check
    for(i=0; i<ps1.length-1; i++){ // bcz we had checked the points, ignore the last line
        var p1 = ps1[i], p2 = ps1[i+1];
        for(var j=0; j<ps2.length-1; j++){
            var p3 = ps2[j], p4 = ps2[j+1];

            var p = lineCollideLine(p1, p2, p3, p4);
            if(p) return p;
        }
    }

    return false;
}

function getCollideRect(r1, r2){
    return {
        minX : r2.minX > r2.minX ? r1.minX : r2.minX,
        minY : r1.minY > r2.minY ? r1.minY : r2.minY,
        maxX : r1.maxX < r2.maxX ? r1.maxX : r2.maxX,
        maxY : r1.maxY < r2.maxY ? r1.maxY : r2.maxY
    };
}

function lineCollideLine(p1, p2, p3, p4){
    var x1=p1.x, x2=p2.x, x3=p3.x, x4=p4.x,
        y1=p1.y, y2=p2.y, y3=p3.y, y4=p4.y;

    // quick check
    if(    Math.min(x1, x2) > Math.max(x3, x4) 
        || Math.min(y1, y2) > Math.max(y3, y4)
            || Math.max(x1, x2) < Math.min(x3, x4)
            || Math.max(y1, y2) < Math.min(y3, y4))
        return false;

    // same slope rate
    if((y1 - y2)*(x3 - x4) == (x1 - x2)*(y3 - y4)) 
        return false;

    // cross lines?
    var line1 = x1*(y3-y2) + x2*(y1-y3) + x3*(y2-y1),
        line2 = x1*(y4-y2) + x2*(y1-y4) + x4*(y2-y1);

    if((line1*line2 >=0) && !(line1 == 0 && line2 == 0))
        return false;

    // get collide point
    var b1 = (y2-y1)*x1 + (x1-x2)*y1,
        b2 = (y4-y4)*x3 + (x3-x4)*y3,
        D = (x2-x1)*(y4-y3) - (x4-x3)*(y2-y1),
        D1 = b2*(x2-x1) - b1*(x4-x3),
        D2 = b2*(y2-y1) - b1*(y4-y3);

    return {
        x: D1/D,
        y: D2/D
    }
}

function getRectShape(ps){
    var xs = ps.map(function(p){ return p.x });
    var ys = ps.map(function(p){ return p.y });

    return {
        minX: xs.min(), maxX: xs.max(),
        minY: ys.min(), maxY: ys.max()
    };
}

function pointInRect(p, r){
    return r.minX <= p.x && p.x <= r.maxX 
        && r.minY <= p.y && p.y <= r.maxY;
}

function pointInShape(p, shape){
    var ps = shape.getPoints();
    if(ps.length < 3) return false;

    var rect = getRectShape(ps);
    if(!pointInRect(p, rect))
        return false;

    ctx.drawPathByPoints(ps);
    if(ctx.isPointInPath(p.x, p.y))
        return p;

    return false;
}

Shape.prototype.collide = function(other){
    if(other instanceof Shape)
        return collide(this, other);

    // Object
    for(var key in other){
        shape = other[key];
        if(shape instanceof Shape){
            var p = this.collide(shape);
            if(p) return p;
        }
    }

    return false;
};

Shape.prototype.touched = function(){
    return pointInShape(Mouse, this);
};

Object.prototype.collide = function(other){
    for(var key in this){
        var shape = this[key];
        if(shape instanceof Shape){
            var p = shape.collide(other);
            if(p) return p;
        }
    }
    return false;
};


/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

function RGB(r, g, b){
    return "rgb(" + Math.floor(r) + ","  + Math.floor(g) + "," + Math.floor(b) + ")" 
}

function RGBA(r, g, b, a){
    return "rgba(" + Math.floor(r) + ","  + Math.floor(g) + "," + Math.floor(b) + "," + a + ")";
}

module.exports = {
    RGB: RGB,
    RGBA: RGBA
}


/***/ })
/******/ ]);