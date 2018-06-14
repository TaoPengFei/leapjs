import { ctx, canvas } from './canvas'

function background (style) { new Rectangle(0, 0, canvas.width, canvas.height, style).draw(); }

let isFill = true

function fill (bool = true) { isFill = bool }

function rectangle  (...args) { isFill ? new Rectangle(...args).draw()  : new Rectangle(...args).stroke() }
function circle     (...args) { isFill ? new Circle(...args).draw()     : new Circle(...args).stroke() }
function line       (...args) { isFill ? new Line(...args).draw()       : new Line(...args).stroke() }
function point      (...args) { isFill ? new Point(...args).draw()      : new Point(...args).stroke() }
function polygon    (...args) { isFill ? new Polygon(...args).draw()    : new Polygon(...args).stroke() }
function ellipse    (...args) { isFill ? new Ellipse(...arg).draw()     : new Ellipse(...arg).stroke() }

const triangle = polygon

const globalImages = {}

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

function text (src, x = 0, y = 0, size = 20, c) {
  let t = new Text(src, x, y, size, c);
  t.font = textFont;
  t.draw();
}

let textFont = 'Arial'
function font (font) { textFont = font }

const globalAudio = {}
function play (src, loop=false) {
  let m
  if (globalAudio.hasOwnProperty(src)) {
    m = globalAudio[src]
    m.loop = loop
    m.play()
  } else {
    m = new Audio()
    m.src = src
    m.loop = loop
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

export { background, fill, rectangle, circle, line, point, polygon, triangle, ellipse, image, text, font, play, pause }
