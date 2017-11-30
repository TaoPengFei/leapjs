let div = document.createElement('div')
let canvas = document.createElement('canvas')
const clickShapes = require('./util.js').clickShapes

div.style = 'display:flex;' +
    'display:-webkit-flex;' +
    'justify-content:center;' +
    'align-items:center;' +
    'align-items:center;' +
    'height:100%'
canvas.style = 'border: 1px solid #d3d3d3;'

div.appendChild(canvas)
document.body.appendChild(div)

let ctx = canvas.getContext('2d')

canvas.resize = function (width, height) {
  canvas.width = width || window.innerWidth - 5
  canvas.height = height || window.innerHeight - 5
  ctx.strokeStyle = '#00FFFF'
  ctx.fillStyle = 'rgba(0, 255, 255, 0.5)'
}

canvas.resize()

canvas.clear = function () {
  clickShapes.clear()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

canvas.showAxis = function () {
  ctx.save()
  ctx.strokeStyle = 'black'
  let txt = new Text("", 1, 1, 15)
  txt.fillStyle = "orange"

  for (let i = 0; i < canvas.width; i += 10) {
    if (i % 100 === 0) {
      txt.src = i.toString()
      txt.x = i+1
      txt.draw()
      ctx.lineWidth = 0.4
    } else ctx.lineWidth = 0.1
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvas.height)
    ctx.closePath()
    ctx.stroke()
  }

  txt.x = 1;
  for (let i = 0; i < canvas.height; i += 10) {
    if (i % 100 === 0) {
      txt.src = i.toString()
      txt.y = i+1
      if(i > 0) txt.draw()
      ctx.lineWidth = 0.3
    } else ctx.lineWidth = 0.1
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(canvas.width, i)
    ctx.closePath()
    ctx.stroke()
  }
  ctx.restore()
}

ctx.drawPathByPoints = function (ps) {
  ctx.beginPath()
  ctx.moveTo(ps[0].x, ps[0].y)

  for (let i = 1; i < ps.length; i++) { ctx.lineTo(ps[i].x, ps[i].y) }

  ctx.closePath()
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

export { canvas, ctx }
