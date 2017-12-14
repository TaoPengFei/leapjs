import { ctx, canvas } from './canvas'
import { RGB, RGBA } from './colors'

function background (r, g, b) {
  ctx.save()
  fill(r, g, b)
  rectangle(0, 0, canvas.width, canvas.height)
  ctx.restore()
}

function noFill () { ctx.fillStyle = RGBA(0, 0, 0, 0) }
function noStroke () { ctx.strokeStyle = RGBA(0, 0, 0, 0) }

function fill (r, g, b) {
  if (arguments.length === 1) { ctx.fillStyle = r } else { ctx.fillStyle = RGB(r, g, b) }
}

function stroke (r, g, b) {
  if (arguments.length === 1) { ctx.strokeStyle = r } else { ctx.fillStyle = RGB(r, g, b) }
}

function lineWidth (thickness) { ctx.lineWidth = thickness }

function rectangle (x, y, w, h) {
  ctx.beginPath()
  ctx.rect(x, y, w, h)
  ctx.fill()
  ctx.stroke()
}

function circle (x, y, r) {
  ctx.beginPath()
  ctx.arc(x, y, r, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
}

function line (x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.stroke()
}

function point (x, y) { circle(x, y, 2) }

function polygon () {
  ctx.beginPath()
  ctx.moveTo(arguments[0], arguments[1])
  for (let i = 2; i < arguments.length - 1; i += 2) { ctx.lineTo(arguments[i], arguments[i + 1]) }
  ctx.closePath()
  ctx.fill()
  ctx.stroke()
}

var triangle = polygon

function ellipse (x, y, rX, rY) {
  ctx.beginPath()
  ctx.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.stroke()
}

function image (src, x, y, w, h) {
  let img = new Image()
  img.src = src
  if (w && h) {
    ctx.drawImage(img, x, y, w, h)
  } else {
    ctx.drawImage(img, x, y)
  }
}

function text (src, x, y) { ctx.fillText(src, x, y) }

function font (size, font) {
  font = font || 'Arial'
  ctx.font = size + 'px ' + font
}

function playSound (sound) {
  var m = new Audio()
  m.src = sound
  m.play()
}

export { background, noFill, noStroke, fill, stroke, lineWidth, rectangle, circle, line, point, polygon, triangle, ellipse, image, text, font, playSound }
