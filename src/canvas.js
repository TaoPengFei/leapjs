var div = document.createElement('div')
var canvas = document.createElement('canvas')
var clickShapes = require('./util.js').clickShapes

div.style = 'display:flex;' +
    'display:-webkit-flex;' +
    'justify-content:center;' +
    'align-items:center;' +
    'align-items:center;' +
    'height:100%'
canvas.style = 'border: 1px solid #d3d3d3;'

div.appendChild(canvas)
document.body.appendChild(div)
// document.body.appendChild(p);

var ctx = canvas.getContext('2d')

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
  for (let i = 0; i < canvas.width; i += 10) {
    if (i % 100 === 0) {
      i.toString().draw(i + 1, 15, undefined, '15px Arial')
      ctx.lineWidth = 0.4
    } else ctx.lineWidth = 0.1
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, canvas.height)
    ctx.closePath()
    ctx.stroke()
  }

  for (let i = 0; i < canvas.height; i += 10) {
    if (i % 100 === 0) {
      i.toString().draw(1, i - 1, undefined, '15px Arial')
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

  for (var i = 1; i < ps.length; i++) { ctx.lineTo(ps[i].x, ps[i].y) }

  ctx.closePath()
}

module.exports = {
  canvas: canvas,
  ctx: ctx
}
