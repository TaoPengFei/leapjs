var ctx = require('./canvas.js').ctx;
var inheritPrototype = require('./util.js').inheritPrototype;

function Shape(x, y){
    this.x = x;
    this.y = y;
    this.strokeStyle = "green";
    this.fillStyle = "orange";
    this.clicked = false;
}

Shape.prototype.stroke = null;
Shape.prototype.fill = null;
Shape.prototype.draw = null;

function Line(x1, y1, x2, y2){
    Shape.call(this, 0, 0);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

inheritPrototype(Line, Shape);

Line.prototype.draw = function(){
    ctx.save();
    ctx.strokeStyle = this.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(this.x1+this.x, this.y1+this.y);
    ctx.lineTo(this.x2+this.x, this.y2+this.y);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
};

Line.prototype.stroke = Line.prototype.draw;

function Rectangle(x, y, w, h){
    Shape.call(this, x, y);
    this.w = w;
    this.h = h;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype.draw = function(){
    ctx.save();
    ctx.strokeStyle = this.strokeStyle;
    ctx.strokeRect(this.x, this.y, this.w, this.h);
    ctx.restore();
};

Rectangle.prototype.stroke = Rectangle.prototype.draw;

Rectangle.prototype.fill = function(){
    ctx.save();
    ctx.fillStyle = this.fillStyle;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.restore();
};

function Sprite(src, x, y, w, h){
    this.img = new Image();
    this.img.src = src;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img.onload = function(){
        console.log("resouce loaded.");
    };
}

Sprite.prototype.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
};

module.exports = {
    Line: Line,
    Rectangle: Rectangle,
    Sprite: Sprite
};
