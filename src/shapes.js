import { ctx } from './canvas'
import { shapes } from './util'
import { Mouse } from './mouse'
import Transform from './transform'
import { Rss } from './resource'
import { collide, pointInShape } from './collision'
import clone from './clone'

class Shape {
  constructor () {
    this.transform = new Transform();
    this._points = [];
  }

  set color (color) { 
    this.fillStyle = this.strokeStyle = color;
  }

  _path () {}
  _stroke () {
    this._path()
    ctx.stroke()
  }
  _fill () {
    this._path()
    ctx.fill()
  }

  stroke () {
    shapes.push(this) // use for handle click event

    ctx.save()
    ctx.update(this)
    this._stroke()
    ctx.restore()
  }

  fill () {
    shapes.push(this) // use for handle click event

    ctx.save()
    ctx.update(this)
    this._fill()
    ctx.restore()
  }

  _draw () {
    this._path()
    ctx.fill()
  }

  draw () {
    shapes.push(this) // use for handle click event

    ctx.save()
    ctx.update(this)
    this._draw()
    ctx.restore()
  }

  translate (x, y) { 
    this.transform.translate(x, y);
    this.updateAnchor();
  }
  scale (x, y) { 
    this.transform.scale(x, y);
    this.updateAnchor();
  }
  skew (x, y) { 
    this.transform.skew(x, y);
    this.updateAnchor();
  }

  setAnchor (x, y) { this.transform.setAnchor(x, y) }
  setAnchorRate (x, y) { 
    this.transform.setAnchorRate(x, y);
    this.updateAnchor();
  }
  
  rotate (degree) {
    this.transform.rotate(degree);
    this.updateAnchor();
  }

  getRealPoint (p) { return this.transform.getRealPoint(p) }

  // click () {}
  touched () { return pointInShape(Mouse, this) }

  collide (other) {
    if (other instanceof Shape) {
      return collide(this, other)
    }

    return false;
  }

  clone () { return clone(this, false); }

  _updatePoints () {}

  get points () {
    this._updatePoints()
    return this._points.map(p => this.transform.getRealPoint(p))
  }

  get minX () { return Math.min(...this._points.map(p => p.x)); };
  get minY () { return Math.min(...this._points.map(p => p.y)); };
  get maxX () { return Math.max(...this._points.map(p => p.x)); };
  get maxY () { return Math.max(...this._points.map(p => p.y)); };

  updateAnchor() {
    this._updatePoints();
    let t = this.transform;
    if(t.anchor){
      t.anchorX = this.minX + (this.maxX - this.minX) * t.anchor.x;
      t.anchorY = this.minY + (this.maxY - this.minY) * t.anchor.y;  
    }
  }
}

class Circle extends Shape {
  constructor (x=50, y=50, r=20, color="orange") {
    super()
    this.x = x
    this.y = y
    this.r = r
    this.fillStyle = this.strokeStyle = color
  }

  get radius () { return this.r }
  set radius (r) { this.r = r }

  _path () {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
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
  constructor (x1=100, y1=100, x2=200, y2=100, lineWidth=1, color="orange") {
    super()
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.lineWidth = lineWidth
    this.strokeStyle = color
  }

  _path () {
    ctx.beginPath()
    ctx.moveTo(this.x1, this.y1)
    ctx.lineTo(this.x2, this.y2)
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

Line.prototype.draw = Line.prototype.stroke;

class Polygon extends Shape {
  constructor (...args) {
    super()
    if (args.length < 6) {
      console.log('Polygon should have at lease 3 points');
    }

    this._points = []
    for (let i = 0; i < args.length - 1; i += 2) {
      let p = { x: args[i], y: args[i + 1] }
      this._points.push(p)
    }

    let color = args[args.length-1]
    if(typeof(color) == "string"){
      this.fillStyle = this.strokeStyle = color;
    }
  }

  _path () {
    ctx.beginPath()
    let p = this._points[0]
    ctx.moveTo(p.x, p.y)
    for (let i = 1; i < this._points.length; i++) {
      p = this._points[i]
      ctx.lineTo(p.x, p.y)
    }
    ctx.closePath()
  }

  get x () { return (this.minX + this.maxX)/2 };
  set x (x) {
    let deltaX = x - this.x
    for (let i = 0; i < this._points.length; i++) { this._points[i].x += deltaX }
  }

  get y () { return (this.minY + this.maxY)/2 };
  set y (y) {
    let deltaY = y - this.y
    for (let i = 0; i < this._points.length; i++) { this._points[i].y += deltaY }
  }
}

const Triangle = Polygon

class Rectangle extends Shape {
  constructor (x=100, y=100, w=100, h=50, color="orange") {
    super()
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.fillStyle = this.strokeStyle = color
    this.collideW = 1
    this.collideH = 1
  }

  get width () { return this.w }
  set width (w) { this.w = w }

  get height () { return this.h }
  set height (h) { this.h = h }

  _path () {
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.w, this.h)
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
  constructor (src='LeapLearner', x=0, y=0, size=20, color="orange", font) {
    super(x, y, 100, size)
    this._src = src
    this._font = font
    this.fillStyle = this.strokeStyle = color
    this._updateWidth()
  }

  _updateWidth () {
    ctx.save()
    ctx.update(this)
    ctx.font = this.font;
    this.w = ctx.measureText(this._src).width
    ctx.restore()
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

  get font () {
    return this.h + 'px ' + (this._font ? this._font : ctx.font.split()[1]);
  }

  set font (font) {
    this._font = font
    this._updateWidth()
  }

  _stroke () {
    ctx.font = this.font;
    ctx.strokeText(this.src, this.x, this.y)
  }

  _fill () {
    ctx.font = this.font;
    ctx.fillText(this.src, this.x, this.y)
  }

  draw () { this.fill() }
}

class Sprite extends Rectangle {
  constructor (src, x = 0, y = 0, w = null, h = null) {
    super(x, y, w, h);
    this.collideW = 0.8;
    this.collideH = 0.8;

    this.img = new window.Image();
    this.img.crossOrigin = 'anonymous';
    this.img.onload = function(){ Rss.load(); };
    this.img.onerror = function(){ console.log("图片加载失败：" + this.src); };
    this.img.src = src;

    Rss.add();
  }

  getW () { return this.w || this.img.naturalWidth; }
  getH () { return this.h || this.img.naturalHeight; }

  get src () { return this.img.src }
  set src (src) { this.img.src = src }

  get cx () { return this.x + this.getW()/2; }
  get cy () { return this.y + this.getH()/2; }
  set cx (cx) { this.x = cx - this.getW() / 2; }
  set cy (cy) { this.y = cy - this.getH() / 2; }

  set onload (callback) {
    this.img.onload = function () {
      callback()
    }
  }

  clip (sx, sy, sw, sh) {
    this.sx = sx > 0 ? sx : 1;
    this.sy = sy > 0 ? sy : 1;
    this.sw = sw;
    this.sh = sh;
  }

  _draw () {
    if (!this.img.complete) {
      setTimeout(function(shape){ shape.draw() }, 100, this);
      return;
    }
    if (this.sx && this.sy && this.sw & this.sh) {
      ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh,
        this.x, this.y, this.w, this.h)
    } else if (this.w && this.h) {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    } else {
      ctx.drawImage(this.img, this.x, this.y)
    }
  }

  fill () {}
  stroke () {}
}

class Animation extends Sprite {
  /*
  帧动画
  图片要求：必须是能够严格分为 n x m 个格子的图片，不支持偏移
  */
  constructor (src, x, y, w, h) {
    super(src, x, y, w, h)
    this.speed = 10;
    this._cf = 0; // current frame count
    this.setFrame();
  }

  setFrame (c = 4, r = 1) {
    // 设置帧动画的水平数量和垂直数量
    this._c = c
    this._r = r;
  }

  setSpeed (speed) {
    this.speed = speed
    if (this.speed < 1) this.speed = 1;
    if (this.speed > 100) this.speed = 100;
  }

  _draw () {
    /*
    每次绘制都会增加一个 _cf 值，
    帧更新速度为 _cf * speed / 60
    默认速度为10， 每10次draw都会更新一帧
    速度设置为60时，每次draw都会更新一帧

    TODO: 将更新按照时间来更新，而非draw次数
    */

    // 每个帧图画的宽度和高度，
    // naturalWidth属性只有在图片加载完成之后才会存在，所以不能放在constructor函数中

    // 加载图片完成后绘制
    if (!this.img.complete) {
      setTimeout(function(shape){ shape.draw() }, 100, this);
      return;
    }

    this.sw = this.img.naturalWidth / this._c;
    this.sh = this.img.naturalHeight / this._r;

    let sx = this.sw * (Math.floor(this._cf * this.speed / 60) % this._c)
    let sy = this.sh * (Math.floor(this._cf * this.speed / 60 / this._c) % this._r)

    ctx.drawImage(this.img, sx, sy, this.sw, this.sh,
      this.x, this.y, this.w, this.h)

    // update frame count
    this._cf++;
  }
}

class Point extends Circle {
  constructor (x, y, color="red") {
    super(x, y, 1, color);
    this.strokeStyle = 'rgba(0,0,0,0)';
  }
}

class Ellipse extends Shape {
  constructor (x=200, y=100, rX=100, rY=50, color="orange") {
    super()
    this.x = x
    this.y = y
    this.rX = rX
    this.rY = rY
    this.fillStyle = this.strokeStyle = color
  }

  _path () {
    ctx.beginPath()
    ctx.ellipse(this.x, this.y, this.rX, this.rY, 0, 0, Math.PI * 2)
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


export { Shape, Line, Rectangle, Polygon, Triangle, Circle, Point, Text, Sprite, Animation, Ellipse }
