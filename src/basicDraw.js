import { ctx, canvas } from './canvas'

function background (style) { rectangle(0, 0, canvas.width, canvas.height, style) }

function noFill () { ctx.fillStyle = 'rgba(0,0,0,0)' }
function noStroke () { ctx.strokeStyle = 'rgba(0,0,0,0)' }

function fill (style) { if (style) ctx.fillStyle = style }
function stroke (style) { if (style) ctx.strokeStyle = style }

function lineWidth (thickness) { if (thickness) ctx.lineWidth = thickness }

function rectangle (x, y, w, h, c) {
  fill(c)
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.fill()
  ctx.stroke()
}

function circle (x, y, r, c) {
  fill(c)
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
}

// line(x1, y1, x2, y2, *lineWidth, *color);
function line (x1, y1, x2, y2, lW, c) {
  lineWidth(lW)
  stroke(c)

  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}

function point (x, y, c) {
  fill(c)
  noStroke()
  circle(x, y, 3)
}

function polygon () {
  let len = arguments.length
  ctx.beginPath()
  ctx.moveTo(arguments[0], arguments[1])
  for (let i = 2; i < len - 1; i += 2) { ctx.lineTo(arguments[i], arguments[i + 1]) }
  ctx.closePath()
  if (len % 2 === 1) { fill(arguments[len - 1]) }
  ctx.fill()
  ctx.stroke()
}

function triangle (x1, y1, x2, y2, x3, y3, c) {
  fill(c)
  polygon(x1, y1, x2, y2, x3, y3)
}

function ellipse (x, y, rX, rY, c) {
  fill(c)
  ctx.beginPath()
  ctx.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()
}

var globalImages = {}

function image (src, x = 0, y = 0, w, h) {
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

function text (src, x, y, size = 20, color) {
  ctx.save()
  ctx.font = size + 'px Arial'
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
function play (src, loop) {
  let m
  if (globalAudio.hasOwnProperty(src)) {
    m = globalAudio[src]
    m.loop = loop
    m.play()
  } else {
    m = new Audio()
    m.src = src
    if (loop) m.loop = loop
    globalAudio[src] = m
    m.oncanplaythrough = function () {
      this.play()
    }
  }
}

function pause (src) {
  if (globalAudio.hasOwnProperty(src)) {
    let m = globalAudio[src]
    m.pause()
  }
}

var playSound = play

export { background, noFill, noStroke, fill, stroke, lineWidth, rectangle, circle, line, point, polygon, triangle, ellipse, image, text, font, playSound, play, pause }
