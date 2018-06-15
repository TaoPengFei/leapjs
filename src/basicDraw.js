import { ctx, canvas } from './canvas'
import {Rectangle, Circle, Line, Point, Polygon, Ellipse, Sprite, Text } from './shapes'
import { shapes } from './util'

function background (style) { rectangle(0, 0, canvas.width, canvas.height, style) }

let isFill = true

function fill (bool = true) { isFill = bool }

function basicDraw(className, args){
  let t = new className(...args);
  isFill ? t.draw()  : t.stroke();
  shapes.delete(t); // remove from shapes
}

const rectangle = function(...args) { basicDraw(Rectangle, args) };
const circle    = function(...args) { basicDraw(Circle, args) };
const line      = function(...args) { basicDraw(Line, args) };
const point     = function(...args) { basicDraw(Point, args) };
const polygon   = function(...args) { basicDraw(Polygon, args) };
const ellipse   = function(...args) { basicDraw(Ellipse, args) };
const triangle  = polygon;

const image     = function(...args) { basicDraw(Sprite, args) }
const text      = function(...args) { basicDraw(Text, args) }

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
