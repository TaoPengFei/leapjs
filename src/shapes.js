var ctx = require('./canvas.js').ctx;
var inheritPrototype = require('./util.js').inheritPrototype;

function Point(x, y){
    this.x = x;
    this.y = y;
}

function Shape(){
    this.strokeStyle = "green";
    this.fillStyle = "orange";
}

Shape.prototype._draw = null;

Shape.prototype.stroke = function(){
    ctx.save();
    ctx.strokeStyle = this.strokeStyle;
    this._draw();
    ctx.stroke();
    ctx.restore();
};

Shape.prototype.fill = function(){
    ctx.save();
    ctx.fillStyle = this.fillStyle;
    this._draw();
    ctx.fill();
    ctx.restore();
};

Shape.prototype.draw = Shape.prototype.stroke;

function Line(x1, y1, x2, y2){
    Shape.call(this, 0, 0);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

inheritPrototype(Line, Shape);

Line.prototype._draw = function(){
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
};

Line.prototype.stroke = Line.prototype.draw;

function Polygon(){
    if(arguments.length < 6){
        throw "not enough arguments";
    }

    this.points = [];
    for(var i=0; i<arguments.length-1; i+=2){
        var p = new Point(arguments[i], arguments[i+1]);
        this.points.push(p);
    }
 
    Shape.call(this);
}

inheritPrototype(Polygon, Shape);

Polygon.prototype._draw = function(){
    ctx.beginPath();
    for(var i=0, p; i<this.points.length; i++){
        p = this.points[i];
        ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
};

function Rectangle(x, y, w, h){
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype._draw = function(){
    ctx.rect(this.x, this.y, this.w, this.h);
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
    Polygon: Polygon,
    Sprite: Sprite
};
