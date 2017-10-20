var  canvas = require('./canvas.js').canvas;
var  ctx = require('./canvas.js').ctx;

var shapes = require('./shapes.js');

function drawLine(x1, y1, x2, y2, c){
  var line = new Line(x1, y1, x2, y2);
  line.strokeType = c;
  line.draw();
  return line;
}

window.canvas = canvas;
window.ctx = ctx;
window.Line = shapes.Line;
window.Rectangle = shapes.Rectangle;
window.Polygon = shapes.Polygon;
window.Sprite = shapes.Sprite;

window.drawLine = drawLine;
