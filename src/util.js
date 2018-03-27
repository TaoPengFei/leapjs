// void run multi frame
var frameId
var nextFrame = function (func) {
  if (frameId) window.cancelAnimationFrame(frameId)
  frameId = window.requestAnimationFrame(func)
}

// handle shape click event;
var clickShapes = new Set()

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

export { nextFrame, clickShapes, run, stop }
