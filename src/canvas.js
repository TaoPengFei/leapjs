/* global text, line */
let canvas = document.createElement('canvas')
let p = document.createElement('p')
const clickShapes = require('./util.js').clickShapes
const Transform = require('./transform.js').Transform

canvas.style.cssText = 'border: 1px solid #d3d3d3;'
p.style.cssText = 'color: orange;'

document.body.appendChild(canvas)
document.body.appendChild(p)

let ctx = canvas.getContext('2d')

ctx._setTransform = function (transform) {
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.transform(
    transform.scaleX, transform.skewX,
    transform.skewY, transform.scaleY,
    transform.translateX, transform.translateY
  )
  ctx.rotate(transform.degree)
}

canvas.resize = function (width, height) {
  canvas.width = width || window.innerWidth - 2 // borders size
  canvas.height = height || window.innerHeight - 60 // p, height
  ctx.fillStyle = ctx.strokeStyle = 'orange'
  ctx.textBaseline = 'top'
}

canvas.resize()
canvas.transform = new Transform()

canvas.scale = function (x, y) {
  canvas.transform.scale(x, y)
  ctx._setTransform(canvas.transform)
  // thick the line width
  ctx.lineWidth = 2 / (x + y)
}

canvas.rotate = function (degree) {
  canvas.transform.rotate(degree)
  ctx._setTransform(canvas.transform)
}

canvas._translate = function (x, y) {
  canvas.transform.translate(x, y)
  ctx._setTransform(canvas.transform)
}

canvas.clear = function () {
  clickShapes.clear()
  ctx.save()
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.restore()
}

canvas.showAxis = function () {
  ctx.save()
  ctx.strokeStyle = 'black'

  let gap = 10
  let lw = 0
  if (canvas.transform.scaleX >= 10 && canvas.transform.scaleY >= 10) gap = 1

  let w = canvas.width / Math.abs(canvas.transform.scaleX)
  let h = canvas.height / Math.abs(canvas.transform.scaleY)
  for (let i = 0; i < w; i += gap) {
    if (i % (10 * gap) === 0) {
      text(i.toString(), i, 0, gap * 1.5)
      text((-i).toString(), -i, 0, gap * 1.5)
      lw = 0.04 * gap
    } else lw = 0.01 * gap
    line(i, -h, i, h, lw)
    line(-i, -h, -i, h, lw)
  }

  for (let i = 0; i < h; i += gap) {
    if (i % (10 * gap) === 0) {
      text(i.toString(), 0, i, gap * 1.5)
      text((-i).toString(), 0, -i, gap * 1.5)
      lw = 0.03 * gap
    } else lw = 0.01 * gap
    line(-w, i, w, i, lw)
    line(-w, -i, w, -i, lw)
  }
  ctx.restore()
}

ctx.update = function (shape) {
  if (shape.fillStyle) ctx.fillStyle = shape.fillStyle
  if (shape.strokeStyle) ctx.strokeStyle = shape.strokeStyle

  if (shape.shadowColor) ctx.shadowColor = shape.shadowColor
  if (shape.shadowBlur) ctx.shadowBlur = shape.shadowBlur
  if (shape.shadowOffsetX) ctx.shadowOffsetX = shape.shadowOffsetX
  if (shape.shadowOffsetY) ctx.shadowOffsetY = shape.shadowOffsetY

  if (shape.lineCap) ctx.lineCap = shape.lineCap
  if (shape.lineJoin) ctx.lineJoin = shape.lineJoin
  if (shape.lineWidth) ctx.lineWidth = shape.lineWidth
  if (shape.miterLimit) ctx.miterLimit = shape.miterLimit

  if (shape.globalAlpha) ctx.globalAlpha = shape.globalAlpha
  if (shape.globalCompositeOperation) ctx.globalCompositeOperation = shape.globalCompositeOperation

  if (shape.lineDash) ctx.setLineDash(shape.lineDash)
  if (shape.textAlign) ctx.textAlign = shape.textAlign
  if (shape.textBaseline) ctx.textBaseline = shape.textBaseline

  if (shape.transform.transformed()) ctx.updateTransform(shape.transform)
}

ctx.updateTransform = function (transform) {
  ctx.translate(transform.anchorX, transform.anchorY)

  ctx.rotate(transform.degree)
  ctx.transform(
    transform.scaleX, transform.skewX,
    transform.skewY, transform.scaleY,
    transform.translateX, transform.translateY
  )

  ctx.translate(-transform.anchorX, -transform.anchorY)
}

canvas.getRealPoint = function (p) {
  if (!this.transform.transformed()) { return p }
  let t = this.transform

  let x = p.x
  let y = p.y
  let x0 = x
  let y0 = y

  x = (x0 - t.translateX) / t.scaleX
  y = (y0 - t.translateY) / t.scaleY

  let degree = t.degree
  let sin = Math.sin(-degree)
  let cos = Math.cos(-degree)

  x0 = x
  y0 = y
  x = x0 * cos - y0 * sin
  y = y0 * cos + x0 * sin

  return {x, y}
}

export { canvas, ctx, p }
