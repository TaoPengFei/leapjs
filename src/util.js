// void run multi frame
var frameId
var nextFrame = function (func) {
  if (frameId) window.cancelAnimationFrame(frameId)
  frameId = window.requestAnimationFrame(func)
}

// 所有在屏幕上的图形都由shapes来管理，为了避免占用内存，使用Set来管理所有shapes
var shapes = new Set();
shapes.push = function(shape){
    this.delete(shape);
    this.add(shape);
}

const _rfs = {};
const run = function (func, interval=20) {
  _rfs[func.name] = setInterval(func, interval);
}

const stop = function (func) {
  let id = _rfs[func.name];
  if(id) clearInterval(id)
}

export { nextFrame, shapes, run, stop }
