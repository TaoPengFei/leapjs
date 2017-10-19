var  canvas = require('./canvas.js').canvas;
var  ctx = require('./canvas.js').ctx;
var  Line = require('./shapes.js').Line;
var  Rectangle = require('./shapes.js').Rectangle;

function drawLine(x1, y1, x2, y2, c){
  var line = new Line(x1, y1, x2, y2);
  line.strokeType = c;
  line.draw();
  return line;
}

window.canvas = canvas;
window.ctx = ctx;
window.Line = Line;
window.Rectangle = Rectangle;

window.drawLine = drawLine;
