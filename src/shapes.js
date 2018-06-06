import { ctx } from './canvas'
import { clickShapes } from './util'
import { Mouse } from './mouse'
import Transform from './transform'
import { Rss } from './resource'
import { collide, pointInShape } from './collision'
import clone from './clone'

class Shape {
  constructor () {
    this.transform = new Transform()
    this._points = []
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
    if (this.click) clickShapes.add(this) // use for handle click event

    ctx.save()
    ctx.update(this)
    this._stroke()
    ctx.restore()
  }

  fill () {
    if (this.click) clickShapes.add(this) // use for handle click event

    ctx.save()
    ctx.update(this)
    this._fill()
    ctx.restore()
  }

  _draw () {
    this._path()
    // ctx.stroke()
    ctx.fill()
  }

  draw () {
    if (this.click) clickShapes.add(this) // use for handle click event

    ctx.save()
    ctx.update(this)
    this._draw()
    ctx.restore()
  }

  translate (x, y) { this.transform.translate(x, y) }
  scale (x, y) { this.transform.scale(x, y) }
  skew (x, y) { this.transform.skew(x, y) }
  setAnchor (x, y) { this.transform.setAnchor(x, y) }
  rotate (degree) { this.transform.rotate(degree) }

  getRealPoint (p) { return this.transform.getRealPoint(p) }

  click () {}
  touched () { return pointInShape(Mouse, this) }

  collide (other) {
    if (other instanceof Shape) {
      return collide(this, other)
    } else {
      return false
    }
  }

  clone () { return clone(this, false); }

  _updatePoints () {}

  get points () {
    this._updatePoints()
    return this._points.map(p => this.transform.getRealPoint(p))
  }

  setLineDash (arr) {
    this.lineDash = arr
  }

  get minX () { return Math.min(...this._points.map(p => p.x)); };
  get minY () { return Math.min(...this._points.map(p => p.y)); };
  get maxX () { return Math.max(...this._points.map(p => p.x)); };
  get maxY () { return Math.max(...this._points.map(p => p.y)); };

  updateAnchor() {
    this._updatePoints();
    this.transform.anchorX = this.minX + (this.maxX - this.minX) * this.transform.anchor.x;
    this.transform.anchorY = this.minY + (this.maxY - this.minY) * this.transform.anchor.y;
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
  constructor (x1 = 100, y1 = 100, x2 = 200, y2 = 100) {
    super()
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
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

  get x () { return (this.minX + this.maxX) / 2 }
  set x (x) {
    let deltaX = x - this.x
    this.x1 += deltaX
    this.x2 += deltaX
  }

  get y () { return (this.minY + this.maxY) / 2 }
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
  constructor (src = 'LeapLearner', x = 0, y = 0, size = 20, font = 'Arial') {
    super(x, y, 100, size)
    this._src = src
    this._font = font
    this.fillStyle = 'orange'
    this._updateWidth()
  }

  _updateWidth () {
    ctx.save()
    ctx.update(this)
    ctx.font = this.h + 'px ' + this._font
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

  get font () { return this._font }
  set font (font) {
    this._font = font
    this._updateWidth()
  }

  _stroke () {
    ctx.font = this.size + 'px ' + this.font
    ctx.strokeText(this.src, this.x, this.y)
  }

  _fill () {
    ctx.font = this.size + 'px ' + this.font
    ctx.fillText(this.src, this.x, this.y)
  }

  draw () { this.fill() }
}

class Sprite extends Rectangle {
  constructor (src, x = 0, y = 0, w = null, h = null) {
    super(x, y, w, h)
    this.collideW = 0.8
    this.collideH = 0.8

    this.img = new window.Image();
    this.img.crossOrigin = 'anonymous';
    this.img.src = src;
    this.img.onload = function() {
      Rss.load();
    };

    Rss.add()
  }

  get src () { return this.img.src }
  set src (src) { this.img.src = src }

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
  constructor (src, x, y, w, h) {
    super(src, x, y, w, h)
    this.speed = 10;
    this._cf = 0; // current frame count
  }

  setFrame (c, r = 1) {
    this._c = c
    this._r = r;
  }

  setSpeed (speed) {
    this.speed = speed
    if (this.speed < 1) this.speed = 1;
    if (this.speed > 100) this.speed = 100;
  }

  _draw () {
  	this.sw = this.img.naturalWidth / this._c;
    this.sh = this.img.naturalHeight / this._r;

    this.w = this.w || this.sw;
  	this.h = this.h || this.sh;

    let sx = this.sw * (Math.floor(this._cf * this.speed / 60) % this._c)
    let sy = this.sh * (Math.floor(this._cf * this.speed / 60 / this._c) % this._r)
    ctx.drawImage(this.img, sx, sy, this.sw, this.sh,
      this.x, this.y, this.w, this.h)

    this._cf++ // update frame count
  }
}

class Point extends Circle {
  constructor (x, y) {
    super(x, y, 0.5)
    this.fillStyle = 'red'
    this.strokeStyle = 'rgba(0, 0, 0, 0)'
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

Point.prototype.draw = Point.prototype.fill
const Triangle = Polygon

export { Shape, Line, Rectangle, Polygon, Triangle, Circle, Point, Text, Sprite, Animation, Ellipse }
