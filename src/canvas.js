/* global stroke, fill, text, line */
let canvas = document.createElement('canvas')
let p = document.createElement('p')
const clickShapes = require('./util.js').clickShapes

canvas.style.cssText = 'border: 1px solid #d3d3d3;'
p.style.cssText = 'color: orange; position: absolute; bottom: 23px;'

document.body.appendChild(canvas)
document.body.appendChild(p)

let ctx = canvas.getContext('2d')

canvas.resize = function (width, height) {
  canvas.width = width || window.innerWidth - 2 // borders size
  canvas.height = height || window.innerHeight - 60 // p, height
  ctx.fillStyle = ctx.strokeStyle = 'orange'
  ctx.textBaseline = 'top'
}

canvas.resize()

canvas.scaleX = 1
canvas.scaleY = 1
canvas.scale = function (x, y) {
  ctx.scale(1 / canvas.scaleX, 1 / canvas.scaleY)
  canvas.scaleX = x
  canvas.scaleY = y
  ctx.scale(x, y)
}

canvas.rotate = function (degree) {
  ctx.rotate(degree * Math.PI / 180)
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
  stroke('black')
  fill('orange')

  let gap = 10
  let lw = 0
  if (canvas.scaleX >= 10 && canvas.scaleY >= 10) gap = 1

  for (let i = 0; i < canvas.width / 10 * gap; i += gap) {
    if (i % (10 * gap) === 0) {
      text(i.toString(), i, 0, gap * 1.5)
      lw = 0.04 * gap
    } else lw = 0.01 * gap
    line(i, 0, i, canvas.width, lw)
  }

  for (let i = 0; i < canvas.height / 10 * gap; i += gap) {
    if (i % (10 * gap) === 0) {
      text(i.toString(), 0, i, gap * 1.5)
      lw = 0.03 * gap
    } else lw = 0.01 * gap
    line(0, i, canvas.height, i, lw)
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
  let degree = transform.degree * Math.PI / 180

  ctx.translate(transform.anchorX, transform.anchorY)

  ctx.rotate(degree)
  ctx.transform(
    transform.scaleX, transform.skewX,
    transform.skewY, transform.scaleY,
    transform.translateX, transform.translateY
  )

  ctx.translate(-transform.anchorX, -transform.anchorY)
}

export { canvas, ctx, p }
