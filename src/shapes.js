const ctx = require('./canvas.js').ctx;

const defaultStyle = "#000000";

const shapeType = {
  Line: 0,
  Rectangle: 1,
  Circle: 2,
  Triangle: 3
}

function Line(x1, y1, x2, y2, color){
  this.shapeType = shapeType.Line;
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.strokeStyle = color || defaultStyle;
}

Line.prototype.draw = function(){
  ctx.strokeStyle = this.strokeStyle;
  ctx.moveTo(this.x1, this.y1);
  ctx.lineTo(this.x2, this.y2);
  ctx.stroke();
}

function Rectangle(x, y, w, h, color){
  this.shapeType = shapeType.Rectangle;
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.strokeStyle = color || defaultStyle;
  this.fillStyle = color || defaultStyle;
}

Rectangle.prototype.draw = function(){
  ctx.strokeStyle = this.strokeStyle;
  ctx.strokeRect(this.x, this.y, this.width, this.height);
}

Rectangle.prototype.fill = function(){
  ctx.fillStyle = this.fillStyle;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

module.exports = {
  Line: Line,
  Rectangle: Rectangle
}
