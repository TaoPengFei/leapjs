import { canvas, p } from './canvas'
import { Key } from './keys'
import { clickShapes } from './util'

let Mouse = {
  x: 0,
  y: 0
}

let TouchStart = {}
TouchStart.init = function () {
  TouchStart.x = Mouse.x
  TouchStart.y = Mouse.y
}

function windowToCanvas (canvas, x, y) {
  let box = canvas.getBoundingClientRect()

  x -= box.left * (canvas.width / box.width)
  y -= box.top * (canvas.height / box.height)

  x /= canvas.scaleX
  y /= canvas.scaleY

  return { x: x, y: y }
}

function updateEvent (e) {
  // e.preventDefault();
  // update e if it is on phone
  if (e.touches) e = e.touches.item(0)

  let point = windowToCanvas(canvas, e.clientX, e.clientY)
  Mouse.x = Math.floor(point.x)
  Mouse.y = Math.floor(point.y)

  p.innerHTML = `x: ${Mouse.x}, y: ${Mouse.y}`
}

canvas.onmousedown = function (e) {
  updateEvent(e)
  if (Mouse.down) Mouse.down()

  // handle events of all shapes, LIFO
  // IMPORTANT
  const array = Array.from(clickShapes)
  let i = array.length
  while (i--) {
    let shape = array[i]
    if (shape.touched() && shape.click) {
      shape.click()
      break
    }
  }
}

let _preventDefault = false
canvas.preventDefaultEvent = function () {
  _preventDefault = true
}

canvas.ontouchstart = function (e) {
  if (_preventDefault) { e.preventDefault() }
  canvas.onmousedown(e)
  TouchStart.init()
}

canvas.onmousemove = function (e) {
  updateEvent(e)
  if (Mouse.move) Mouse.move()
}

canvas.ontouchmove = function (e) {
  if (_preventDefault) { e.preventDefault() }
  canvas.onmousemove(e)
  if (Mouse.x - TouchStart.x > 50 && Key.ArrowRight.down) {
    Key.ArrowRight.down()
    TouchStart.init()
  } else if (TouchStart.x - Mouse.x > 50 && Key.ArrowLeft.down) {
    Key.ArrowLeft.down()
    TouchStart.init()
  }

  if (TouchStart.y - Mouse.y > 50 && Key.ArrowUp.down) {
    Key.ArrowUp.down()
    TouchStart.init()
  } else if (Mouse.y - TouchStart.y > 50 && Key.ArrowDown.down) {
    Key.ArrowDown.down()
    TouchStart.init()
  }
}

canvas.ontouchend = canvas.onmouseup = function (e) {
  if (_preventDefault) { e.preventDefault() }
  updateEvent(e)
  if (Mouse.up) Mouse.up()
}

canvas.onclick = function (e) {
  updateEvent(e)
  if (Mouse.click) Mouse.click()
}

export { Mouse }
