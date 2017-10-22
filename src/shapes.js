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
    ctx.beginPath();
    this._draw();
    ctx.fill();
    ctx.restore();
};

Shape.prototype.draw = function(){
    this.fill();
    this.stroke();
}

function Circle(x, y, r){
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.r = r;
}

inheritPrototype(Circle, Shape);

Circle.prototype._draw = function(){
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
}

function Line(x1, y1, x2, y2){
    Shape.call(this);
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

function Polygon(){
    if(arguments.length < 6){
        throw "Polygon should have at lease 3 points";
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
    var p = this.points[0];
    ctx.moveTo(p.x, p.y);
    for(var i=1; i<this.points.length; i++){
        p = this.points[i];
        ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
};

function Triangle(x1, y1, x2, y2, x3, y3){
    Polygon.call(this, x1, y1, x2, y2, x3, y3);
}

inheritPrototype(Triangle, Polygon);

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

function Text(text, x, y, font){
    Shape.call(this);
    this.text = text;
    this.x = x || 0;
    this.y = y || 20;
    this.font = font || "20px Arial";
}

inheritPrototype(Text, Shape);

Text.prototype.stroke = function(){
    ctx.font = this.font;
    ctx.strokeText(this.text, this.x, this.y);
}

Text.prototype.fill = function(){
    ctx.font = this.font;
    ctx.fillText(this.text, this.x, this.y);
}

function Sprite(src, x, y, w, h){
    Shape.call(this);
    this.img = new Image();
    this.img.src = src;
    this.x = x || 0;
    this.y = y || 0;
    this.w = w;
    this.h = h;
}

inheritPrototype(Sprite, Shape);

Sprite.prototype.cut = function(sx, sy, sw, sh){
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
    this.w = this.w || this.sw;
    this.h = this.h || this.sh;
}

Sprite.prototype.draw = function(){
    if(this.sx && this.sy && this.sw & this.sh){
        ctx.drawImage(this.img, this.sx, this.sy, this.sw, this.sh,
            this.x, this.y, this.w, this.h);
    }
    else if(this.w && this.h)
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    else
        ctx.drawImage(this.img, this.x, this.y);
};

function Animation(src, x, y, w, h){
    Sprite.call(this, src, x, y, w, h);
}

inheritPrototype(Animation, Sprite);

Animation.prototype.setFrame = function(sw, sh, nf, speed){
    if(nf %1 != 0)
        throw "LLEG: setFrame(w, h, f, s), f must be an integer";
    this.nf = nf;// frame count
    this.cf = 0; // current frame
    this.speed = speed > 1 ? speed : 1;
    this.cut(1, 1, sw, sh);
}

Animation.prototype.draw = function(){
    var sx = this.sx + this.sw * Math.floor(this.cf/this.speed % this.nf);
    ctx.drawImage(this.img, sx, this.sy, this.sw, this.sh,
        this.x, this.y, this.w, this.h);
    this.cf++;
}

module.exports = {
    Line: Line,
    Rectangle: Rectangle,
    Polygon: Polygon,
    Triangle: Triangle,
    Circle: Circle,
    Text: Text,
    Sprite: Sprite,
    Animation: Animation
};
