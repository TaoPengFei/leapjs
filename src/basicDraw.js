import { ctx, canvas } from './canvas'

function background (style) { rectangle(0, 0, canvas.width, canvas.height, style) }

let isFill = true

function fill (bool = true) { isFill = bool }

function startDraw () {
  ctx.save()
  ctx.beginPath()
}

function endDraw (c) {
  if (isFill) {
    if (c) ctx.fillStyle = c
    ctx.fill()
  }
  if (c) ctx.strokeStyle = c
  ctx.stroke()
  ctx.restore()
}

function rectangle (x, y, w, h, c) {
  startDraw()
  ctx.rect(x, y, w, h)
  endDraw(c)
}

function circle (x, y, r, c) {
  startDraw()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  endDraw(c)
}

// line(x1, y1, x2, y2, *lineWidth, *color);
function line (x1, y1, x2, y2, lW, c) {
  ctx.save()
  if (lW) ctx.lineWidth = lW
  if (c) ctx.strokeStyle = c
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
  ctx.restore()
}

function point (x, y, c) {
  startDraw()
  circle(x, y, 3)
  endDraw(c)
}

function polygon () {
  startDraw()
  let len = arguments.length
  ctx.moveTo(arguments[0], arguments[1])
  for (let i = 2; i < len - 1; i += 2) { ctx.lineTo(arguments[i], arguments[i + 1]) }
  ctx.closePath()
  let c = null
  if (len % 2 === 1) { c = arguments[len - 1] }
  endDraw(c)
}

function triangle (x1, y1, x2, y2, x3, y3, c) {
  startDraw()
  polygon(x1, y1, x2, y2, x3, y3)
  endDraw(c)
}

function ellipse (x, y, rX, rY, c) {
  startDraw()
  ctx.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2)
  endDraw(c)
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

function text (src, x = 0, y = 0, size = 20, color) {
  ctx.save()
  ctx.font = size + 'px ' + textFont
  fill(color)
  ctx.fillText(src, x, y)
  ctx.restore()
}

let textFont = 'Arial'
function font (font) { textFont = 'Arial' }

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

export { background, fill, rectangle, circle, line, point, polygon, triangle, ellipse, image, text, font, playSound, play, pause }
