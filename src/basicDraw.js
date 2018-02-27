import { ctx, canvas } from './canvas'
import { RGB, RGBA } from './colors'

function background (r, g, b) {
  ctx.save()
  if (arguments.length === 1) { ctx.fillStyle = r } else { ctx.fillStyle = RGB(r, g, b) }
  rectangle(0, 0, canvas.width, canvas.height)
  ctx.restore()
}

function noFill () { ctx.fillStyle = RGBA(0, 0, 0, 0) }
function noStroke () { ctx.strokeStyle = RGBA(0, 0, 0, 0) }

function fill (r, g, b) {
  if (arguments.length === 1) { ctx.fillStyle = r } else { ctx.fillStyle = RGB(r, g, b) }
}

function stroke (r, g, b) {
  if (arguments.length === 1) { ctx.strokeStyle = r } else { ctx.strokeStyle = RGB(r, g, b) }
}

function lineWidth (thickness) { ctx.lineWidth = thickness }

function rectangle (x, y, w, h, c) {
  ctx.save()
  if (c) fill(c)
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}

function circle (x, y, r, c) {
  ctx.save()
  if (c) fill(c)
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}

// with selectable parameter : lineWidth and color
// line(x1, y1, x2, y2, *lineWidth, *color);
// line(x1, y1, x2, y2, *color)
function line (x1, y1, x2, y2, lW, c) {
  ctx.save()
  if (typeof (lW) === 'number') {
    ctx.lineWidth = lW
    if (c) stroke(c)
  } else {
    if (lW) stroke(lW)
  }
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}

function point (x, y, c) {
  ctx.save()
  if (c) fill(c)
  noStroke()
  circle(x, y, 3)
  ctx.restore()
}

function polygon () {
  let last = arguments.length;
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(arguments[0], arguments[1])
  for (let i = 2; i < last - 1; i += 2) { ctx.lineTo(arguments[i], arguments[i + 1]) }
  ctx.closePath()
  if(last % 2 === 1 && typeof(arguments[last]) === "string"){
    fill(arguments[last])
  }
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}

function triangle (x1, y1, x2, y2, x3, y3, c) {
  ctx.save()
  if (c) fill(c)
  polygon(x1, y1, x2, y2, x3, y3)
  ctx.restore()
}

function ellipse (x, y, rX, rY, c) {
  ctx.save()
  if (c) fill(c)
  ctx.beginPath()
  ctx.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()
  ctx.restore()
}

var globalImages = {}

function image (src, x, y, w, h) {
  x = x || 0
  y = y || 0
  let img
  if (globalImages.hasOwnProperty(src)) {
    img = globalImages[src]
  } else {
    img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    globalImages[src] = img
  }

  img._x = x
  img._y = y
  img.w = w
  img.h = h

  if (img.complete) {
    if (w && h) {
      ctx.drawImage(img, x, y, w, h)
    } else {
      ctx.drawImage(img, x, y)
    }
  } else {
    img.onload = function () {
      if (this.w && this.h) {
        ctx.drawImage(this, this._x, this._y, this.w, this.h)
      } else {
        ctx.drawImage(this, this._x, this._y)
      }
    }
  }
}

function text (src, x, y, size, color) {
  ctx.save()
  if (typeof (size) === 'number') {
    ctx.font = size + 'px Arial'
  } else if (typeof (size) === 'string') {
    fill(size)
  }
  if (color) fill(color)
  x = x || 0
  y = y || 0
  ctx.fillText(src, x, y)
  ctx.restore()
}

function font (size, font) {
  font = font || 'Arial'
  ctx.font = size + 'px ' + font
}

var globalAudio = {}
function play (src) {
  let m
  if (globalAudio.hasOwnProperty(src)) {
    m = globalAudio[src]
    m.play()
  } else {
    m = new Audio()
    m.src = src
    globalAudio[src] = m
    m.oncanplaythrough = function () {
      this.play()
    }
  }
}

var playSound = play

export { background, noFill, noStroke, fill, stroke, lineWidth, rectangle, circle, line, point, polygon, triangle, ellipse, image, text, font, playSound, play }
