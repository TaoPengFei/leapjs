var ctx = require('./canvas.js').ctx;
var inheritPrototype = require('./util.js').inheritPrototype;

var defaultStyle = "#000000";

var shapeType = Object.freeze({
    Line: 0,
    Rectangle: 1,
    Circle: 2,
    Triangle: 3,
    Image: 4
});

function Shape(x, y){
    this.shapeType = null;
    this.x = x;
    this.y = y;
    this.strokeStyle = defaultStyle;
    this.fillStyle = defaultStyle;
    this.clicked = false;
}

function Line(x1, y1, x2, y2){
    var x = (x1+x2)/2;
    var y = (y1+y2)/2;
    Shape.call(this, x, y);
    this.shapeType = shapeType.Line;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.strokeStyle = color || defaultStyle;
}

inheritPrototype(Line, Shape);

Line.prototype.draw = function(){
    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    ctx.closePath();
};

function Rectangle(x, y, w, h, color){
    Shape.call(this, x, y);
    this.shapeType = shapeType.Rectangle;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.strokeStyle = color || defaultStyle;
    this.fillStyle = color || defaultStyle;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype.draw = function(){
    ctx.strokeStyle = this.strokeStyle;
    ctx.strokeRect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.fill = function(){
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = {
    Line: Line,
    Rectangle: Rectangle
};
