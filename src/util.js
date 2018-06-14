// void run multi frame
var frameId
var nextFrame = function (func) {
  if (frameId) window.cancelAnimationFrame(frameId)
  frameId = window.requestAnimationFrame(func)
}

// handle shape click event;
var shapes = new Set()
shapes.push = function(shape){
    this.delete(shape);
    this.add(shape);
}

//
const runningFuncs = {};
const run = function (func, interval=20) {
  stop(func);
  runningFuncs[func.name] = setInterval(func, interval);
}

const stop = function (func) {
  let id = runningFuncs[func.name];
  if(id) clearInterval(id)
}

export { nextFrame, shapes, run, stop }
