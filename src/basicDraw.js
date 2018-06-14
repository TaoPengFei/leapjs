import { ctx, canvas } from './canvas'

function background (style) { new Rectangle(0, 0, canvas.width, canvas.height, style).draw(); }

let isFill = true

function fill (bool = true) { isFill = bool }

function rectangle  (...args) { isFill ? new Rectangle(...args).draw()  : new Rectangle(...args).stroke() }
function circle     (...args) { isFill ? new Circle(...args).draw()     : new Circle(...args).stroke() }
function line       (...args) { isFill ? new Line(...args).draw()       : new Line(...args).stroke() }
function point      (...args) { isFill ? new Point(...args).draw()      : new Point(...args).stroke() }
function polygon    (...args) { isFill ? new Polygon(...args).draw()    : new Polygon(...args).stroke() }
function ellipse    (...args) { isFill ? new Ellipse(...args).draw()    : new Ellipse(...args).stroke() }

const triangle = polygon

function image (...args) { new Sprite(...args).draw() }
function text (...args) { new Text(...args).draw() }

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

export { background, fill, rectangle, circle, line, point, polygon, triangle, ellipse, image, text, play, pause }
