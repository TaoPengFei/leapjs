var clone = require('clone');

// requestAnimationFrame
(function () {
  var lastTime = 0
  var vendors = ['webkit', 'moz']
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
      window[vendors[x] + 'CancelRequestAnimationFrame']
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (func, element) {
      var currTime = new Date().getTime()
      var timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
      var id = window.setTimeout(function () {
        func(currTime + timeToCall)
      }, timeToCall)
      lastTime = currTime + timeToCall
      return id
    }
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
}())

// void run multi frame
var frameId
var nextFrame = function (func) {
  if (frameId) window.cancelAnimationFrame(frameId)
  frameId = window.requestAnimationFrame(func)
}

Array.prototype.contain = function (obj) {
  var i = this.length
  while (i--) {
    if (this[i] === obj) { return true }
  }
  return false
}

Array.prototype.max = function () {
  return Math.max.apply(null, this)
}

Array.prototype.min = function () {
  return Math.min.apply(null, this)
}

Object.prototype.clone = function () {
  return clone(this, false)
}

String.prototype.draw = function (x, y, fillStyle, font) {
  new Text(this, x, y, fillStyle, font).draw()
}

// handle shape click event;
var clickShapes = (function () {
  var shapes = []

  return {
    clear: function () { shapes = [] },
    add: function (shape) { shapes.push(shape) },
    getLength: function () { return shapes.length },
    get: function (i) { return shapes[i] }
  }
}())

module.exports = {
  nextFrame: nextFrame,
  clickShapes: clickShapes
}
