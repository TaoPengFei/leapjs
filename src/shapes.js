const ctx = require('./canvas.js').ctx
const clickShapes = require('./util.js').clickShapes
const Mouse = require('./mouse.js').Mouse
const Transform = require('./transform.js').Transform
const Rss = require('./resource.js')
const collide = require('./collision.js').collide
const pointInShape = require('./collision.js').pointInShape

class Shape {
  constructor () {
    this.transform = new Transform()
    this._points = []
    this.globalAlpha = 1
  }

  updateCtx (ctx) {
    if (this.globalAlpha) ctx.globalAlpha = this.globalAlpha
    if (this.strokeStyle) ctx.strokeStyle = this.strokeStyle
    if (this.fillStyle) ctx.fillStyle = this.fillStyle
    if (this.lineWidth) ctx.lineWidth = this.lineWidth
    if (this.globalCompositeOperation) ctx.globalCompositeOperation = this.globalCompositeOperation
    this.transform.updateCtx(ctx)
  }

  stroke () {
    if (this.click) clickShapes.add(this) // use for handle click event

    ctx.save()
    this.updateCtx(ctx)

    ctx.beginPath()
    this._draw()
    ctx.closePath()
    ctx.stroke()

    ctx.restore()
  }

  fill () {
    if (this.click) clickShapes.add(this) // use for handle click event

    ctx.save()
    this.updateCtx(ctx)

    ctx.beginPath()
    this._draw()
    ctx.fill()
    ctx.closePath()

    ctx.restore()
  }

  _draw () {}
  draw () {
    if (this.click) clickShapes.add(this) // use for handle click event

    ctx.save()
    this.updateCtx(ctx)

    ctx.beginPath()
    this._draw()
    ctx.closePath()

    ctx.fill()
    ctx.stroke()

    ctx.restore()
  }

  translate (x, y) { this.transform.translate(x, y) }
  scale (x, y) { this.transform.scale(x, y) }
  skew (x, y) { this.transform.skew(x, y) }
  setAnchor (x, y) { this.transform.setAnchor(x, y) }
  rotate (degree) { this.transform.rotate(degree) }

  click () {}
  touched () { return pointInShape(Mouse, this) }

  collide (other) {
    if (other instanceof Shape) {
      return collide(this, other)
    } else {
      return false
    }
  }

  _updatePoints () {}

  get points () {
    this._updatePoints()
    return this._points.map(p => this.transform.getRealPoint(p))
  }
}

class Circle extends Shape {
  constructor (x = 50, y = 50, r = 20) {
    super()
    this.x = x
    this.y = y
    this.r = r
  }
}

Circle.prototype._draw = function () {
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
}

Circle.prototype._updatePoints = function () {
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

class Line extends Shape {
  constructor (x1, y1, x2, y2) {
    super()
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
}

Line.prototype._draw = function () {
  ctx.moveTo(this.x1, this.y1)
  ctx.lineTo(this.x2, this.y2)
}

Line.prototype._updatePoints = function () {
  this._points = []
  this._points.push({x: this.x1, y: this.y1})
  this._points.push({x: this.x2, y: this.y2})
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
}

Polygon.prototype._draw = function () {
  let p = this._points[0]
  ctx.moveTo(p.x, p.y)
  for (let i = 1; i < this._points.length; i++) {
    p = this._points[i]
    ctx.lineTo(p.x, p.y)
  }
}

class Rectangle extends Shape {
  constructor (x, y, w, h) {
    super()
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.collideW = 1
    this.collideH = 1
  }
}

Rectangle.prototype._draw = function () {
  ctx.rect(this.x, this.y, this.width, this.height)
}

Rectangle.prototype.setCollisionScale = function (w, h) {
  this.collideW = w
  this.collideH = h
}

Rectangle.prototype._updatePoints = function () {
  this._points = []

  let minX = this.x + this.width / 2 * (1 - this.collideW)
  let maxX = this.x + this.width / 2 * (1 + this.collideW)
  let minY = this.y + this.height / 2 * (1 - this.collideH)
  let maxY = this.y + this.height / 2 * (1 + this.collideH)

  this._points.push({x: minX, y: minY})
  this._points.push({x: minX, y: maxY})
  this._points.push({x: maxX, y: maxY})
  this._points.push({x: maxX, y: minY})
}

class Text extends Shape {
  constructor (src = '', x = 0, y = 20, fillStyle = 'orange', font = '20px Arial') {
    super()
    this.src = src
    this.x = x
    this.y = y
    this.font = font
    this.fillStyle = fillStyle
  }
}

Text.prototype.stroke = function () {
  ctx.save()
  this.updateCtx(ctx)
  ctx.font = this.font

  ctx.strokeText(this.src, this.x, this.y)

  ctx.restore()
}

Text.prototype.fill = function () {
  ctx.save()
  this.updateCtx(ctx)
  ctx.font = this.font

  ctx.fillText(this.src, this.x, this.y)

  ctx.restore()
}

Text.prototype.draw = Text.prototype.fill

class Sprite extends Rectangle {
  constructor (src, x, y, w, h) {
    super(x, y, w, h)
    this.img = new window.Image()
    this.img.src = src
    Rss.add()
    this.img.onload = function () {
      Rss.load()
    }
  }
}

Object.defineProperty(Sprite.prototype, 'src', {
  get: function () { return this.img.src },
  set: function (src) { this.img.src = src }
})

Object.defineProperty(Sprite.prototype, 'onload', {
  get: function () { return this.img.onload },
  set: function (callback) {
    this.img.onload = function () {
      Rss.load()
      callback()
    }
  }
})

Sprite.prototype.clip = function (sx, sy, sw, sh) {
  this.sx = sx > 0 ? sx : 1
  this.sy = sy > 0 ? sx : 1
  this.swidth = sw
  this.sheight = sh
  this.width = this.width || sw
  this.height = this.height || sh
}

Sprite.prototype._draw = function () {
  if (this.sx && this.sy && this.swidth & this.sheight) {
    ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight,
      this.x, this.y, this.width, this.height)
  } else if (this.width && this.height) { ctx.drawImage(this.img, this.x, this.y, this.width, this.height) } else { ctx.drawImage(this.img, this.x, this.y) }
}

Sprite.prototype.fill = null
Sprite.prototype.stroke = null

class Animation extends Sprite {
  constructor (src, x, y, w, h) {
    super(src, x, y, w, h)
    this.speed = 10
  }
}

Animation.prototype.setFrame = function (sx, sy, sw, sh, c, r) {
  this.c = c
  this.r = r || 1
  this.cf = 0 // current frame count
  this.clip(sx, sy, sw, sh)
}

Animation.prototype.setSpeed = function (speed) {
  this.speed = speed
  if (this.speed < 1) this.speed = 1
  if (this.speed > 60) this.speed = 60
}

Animation.prototype._draw = function () {
  let sx = this.sx + this.swidth * (Math.floor(this.cf * this.speed / 60) % this.c)
  let sy = this.sy + this.sheight * (Math.floor(this.cf * this.speed / 60 / this.c) % this.r)
  ctx.drawImage(this.img, sx, sy, this.swidth, this.sheight,
    this.x, this.y, this.width, this.height)

  this.cf++ // update frame count
}

class Point extends Circle {
  constructor (x, y) {
    super(x, y, 2)
    this.fillStyle = 'red'
  }
}

Point.prototype.draw = Point.prototype.fill

module.exports = {
  Shape: Shape,
  Line: Line,
  Rectangle: Rectangle,
  Polygon: Polygon,
  Triangle: Polygon,
  Circle: Circle,
  Point: Point,
  Text: Text,

  Sprite: Sprite,
  Animation: Animation
}
