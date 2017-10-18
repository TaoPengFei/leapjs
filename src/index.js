const canvas = require('./canvas.js').canvas;
const ctx = require('./canvas.js').ctx;
const Line = require('./shapes.js').Line;
const Rectangle = require('./shapes.js').Rectangle;

function drawLine(x1, y1, x2, y2, c){
  var line = new Line(x1, y1, x2, y2, c);
  line.draw();
  return line;
}

window.canvas = canvas;
window.ctx = ctx;
window.Line = Line;
window.Rectangle = Rectangle;

window.drawLine = drawLine;
