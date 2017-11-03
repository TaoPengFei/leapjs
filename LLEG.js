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
var inheritPrototype = __webpack_require__(6).inheritPrototype;
var Transform = __webpack_require__(7).Transform;

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
}

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
    var x = this.x;
    var y = this.y;
    var r = this.r;
    this.points = [];
    this.points.push({x: x,         y: y+r      });
    this.points.push({x: x+0.5*r,   y: y+0.866*r});
    this.points.push({x: x+0.866*r, y: y+0.5*r  });
    this.points.push({x: x+r,       y: y        });
    this.points.push({x: x+0.866*r, y: y-0.5*r  });
    this.points.push({x: x+0.5*r,   y: y-0.866*r});
    this.points.push({x: x,         y: y-r      });
    this.points.push({x: x-0.5*r,   y: y-0.866*r});
    this.points.push({x: x-0.866*r, y: y-0.5*r  });
    this.points.push({x: x-r,       y: y        });
    this.points.push({x: x-0.866*r, y: y+0.5*r  });
    this.points.push({x: x-0.5*r,   y: y+0.866*r});
    return this.points;
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
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype._draw = function(){
    ctx.rect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.getPoints = function(){
    this.points = [];

    this.points.push({x: this.x, y: this.y});
    this.points.push({x: this.x+this.width, y: this.y});
    this.points.push({x: this.x+this.width, y: this.y+this.height});
    this.points.push({x: this.x, y: this.y+this.height});

    return this.points;
}

function Text(src, x, y, font){
    Shape.call(this);
    this.src = src;
    this.x = x || 0;
    this.y = y || 20;
    this.font = font || "20px Arial";
    this.fillStyle = "orange";
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

function Sprite(src, x, y, w, h){
    Rectangle.call(this, x, y, w, h);
    this.img = new Image();
    if(src) this.img.src = src;
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
var ctx = __webpack_require__(0).ctx;
var Mouse = __webpack_require__(2).Mouse;

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
 
    if(r1.minX > r2.maxX || r1.minY > r2.maxY || r2.minX > r1.maxX || r2.minY > r1.maxY){
        return false;
    }
    // quick check end
    
    // if point inside shapes, return point
    ctx.drawPathByPoints(ps2);

    for(i=0; i<ps1.length; i++){
        p = ps1[i];
        if(pointInRect(p, r2) && ctx.isPointInPath(p.x, p.y)) return p;
    }

    ctx.drawPathByPoints(ps1);
    for(i=0; i<ps2.length; i++){
        p = ps2[i];
        if(pointInRect(p, r1) && ctx.isPointInPath(p.x, p.y)) return p;
    }

    // point check end

    // vector
    var u;
    for(i=0; i<ps1.length; i++){
        p1 = ps1[i];
        if(i+1 == ps1.length) 
            p2 = ps1[0];
        else 
            p2 = ps1[i+1];

        u = getVerticalVector(p2, p1);
        console.log(u);
        if(!shadowCollide(ps1, ps2, u)) return false;
    }

    for(i=0; i<ps2.length; i++){
        p1 = ps2[i];
        if(i==ps2.length-1) 
            p2 = ps2[0];
        else 
            p2 = ps2[i+1];

        u = getVerticalVector(p1, p2);
        if(!shadowCollide(ps1, ps2, u)) return false;
    }
    // vector end
    return true;
}

function shadowCollide(ps1, ps2, u){
    var ps1min, ps1max, ps2min, ps2max;

    for(i=0; i<ps1.length; i++){
        p = ps1[i];
        l = p.x*u.x + p.y*u.y;
        if(ps1min === null) ps1min = l;
        if(ps1max === null) ps1max = l;
        ps1min = ps1min < l ? ps1min : l;
        ps1max = ps1max > l ? ps1max : l;
    }
    for(i=0; i<ps2.length; i++){
        p = ps2[i];
        l = p.x*u.x + p.y*u.y;
        if(ps2min === null) ps2min = l;
        if(ps2max === null) ps2max = l;
        ps2min = ps2min < l ? ps2min : l;
        ps2max = ps2max > l ? ps2max : l;
    }

    if(ps1min > ps2max || ps1max < ps2min) return false;

    return true;
}

function getVerticalVector(p1, p2){

    var u = {};
    u.x = p1.y - p2.y;
    u.y = p2.x - p1.x;

    return u;
}

function getRectShape(ps){
    var rect = {};
    rect.minX = rect.maxX = ps[0].x;
    rect.minY = rect.maxY = ps[0].y;

    ps.map(function(p){
        rect.minX = rect.minX < p.x ? rect.minX : p.x;
        rect.maxX = rect.maxX > p.x ? rect.maxX : p.x;
        rect.minY = rect.minY < p.y ? rect.minY : p.y;
        rect.maxY = rect.maxY > p.y ? rect.maxY : p.y;
    });

    return rect;
}

function pointInRect(p, rect){
    return p.x > rect.minX && p.x < rect.maxX && p.y > rect.minY && p.y < rect.maxY;
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

Shape.prototype.collide = function(shape){
    return collide(this, shape);
};

Shape.prototype.touched = function(){
    return pointInShape(Mouse, this);
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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
}

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