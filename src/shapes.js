var ctx = require('./canvas.js').ctx;
var inheritPrototype = require('./util.js').inheritPrototype;
var Transform = require('./transform.js').Transform;

var shapeList = [];

function Shape(){
    this.transform = new Transform();
    this.points = [];
    this.globalAlpha = 1;
    shapeList.push(this);
}

Shape.prototype._draw = null;
Shape.prototype.click = null;

Shape.prototype.updateCtx = function(ctx){
    if(this.globalAlpha) ctx.globalAlpha = this.globalAlpha;
    if(this.strokeStyle) ctx.strokeStyle = this.strokeStyle;
    if(this.fillStyle) ctx.fillStyle = this.fillStyle;
    if(this.lineWidth) ctx.lineWidth = this.lineWidth;
    this.transform.updateCtx(ctx);
};

Shape.prototype.getPoints = function(){
    return this.points;
}

Shape.prototype.stroke = function(){
    ctx.save();
    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw();
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
};

Shape.prototype.fill = function(){
    ctx.save();
    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw();
    ctx.fill();
    ctx.closePath();

    ctx.restore();
};

Shape.prototype.draw = function(){
    ctx.save();
    this.updateCtx(ctx);

    ctx.beginPath();
    this._draw();
    ctx.closePath();

    ctx.stroke();
    ctx.fill();

    ctx.restore();
};

Shape.prototype.translate = function(x, y){
    this.transform.translate(x, y);
};

Shape.prototype.scale = function(x, y){
    this.transform.scale(x, y);
};

Shape.prototype.skew = function(x, y){
    this.transform.skew(x, y);
};

Shape.prototype.setAnchor = function(x, y){
    this.transform.setAnchor(x, y);
};

Shape.prototype.rotate = function(degree){
    this.transform.rotate(degree);
};

function Circle(x, y, r){
    Shape.call(this);
    this.x = x || 20;
    this.y = y || 20;
    this.r = r || 20;
}

inheritPrototype(Circle, Shape);

Circle.prototype._draw = function(){
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
};

Circle.prototype.getPoints = function(){
    var x = this.x;
    var y = this.y;
    var r = this.r;
    this.points = [];
    this.points.push({x: x,         y: y+r      });
    this.points.push({x: x+0.5*r,   y: y+0.866*r});
    this.points.push({x: x+0.866*r, y: y+0.5*r  });
    this.points.push({x: x+r,       y: y        });
    this.points.push({x: x+0.866*r, y: y-0.5*r  });
    this.points.push({x: x+0.5*r,   y: y-0.866*r});
    this.points.push({x: x,         y: y-r      });
    this.points.push({x: x-0.5*r,   y: y-0.866*r});
    this.points.push({x: x-0.866*r, y: y-0.5*r  });
    this.points.push({x: x-r,       y: y        });
    this.points.push({x: x-0.866*r, y: y+0.5*r  });
    this.points.push({x: x-0.5*r,   y: y+0.866*r});
    return this.points;
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

Line.prototype.getPoints = function(){
    this.points = [];
    this.points.push({x: this.x1, y: this.y1});
    this.points.push({x: this.x2, y: this.y2});
    return this.points;
}

function Polygon(){
    Shape.call(this);
    if(arguments.length < 6){
        throw "Polygon should have at lease 3 points";
    }

    this.points = [];
    for(var i=0; i<arguments.length-1; i+=2){
        var p = { x: arguments[i], y: arguments[i+1] };
        this.points.push(p);
    }
}

inheritPrototype(Polygon, Shape);

Polygon.prototype._draw = function(){
    var p = this.points[0];
    ctx.moveTo(p.x, p.y);
    for(var i=1; i<this.points.length; i++){
        p = this.points[i];
        ctx.lineTo(p.x, p.y);
    }
};

function Triangle(x1, y1, x2, y2, x3, y3){
    Polygon.call(this, x1, y1, x2, y2, x3, y3);
}

inheritPrototype(Triangle, Polygon);

function Rectangle(x, y, w, h){
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype._draw = function(){
    ctx.rect(this.x, this.y, this.width, this.height);
};

Rectangle.prototype.getPoints = function(){
    this.points = [];

    this.points.push({x: this.x, y: this.y});
    this.points.push({x: this.x+this.width, y: this.y});
    this.points.push({x: this.x+this.width, y: this.y+this.height});
    this.points.push({x: this.x, y: this.y+this.height});

    return this.points;
}

function Text(src, x, y, fillStyle, font){
    Shape.call(this);
    this.src = src;
    this.x = x || 0;
    this.y = y || 20;
    this.font = font || "20px Arial";
    this.fillStyle = fillStyle || "orange";
}

inheritPrototype(Text, Shape);

Text.prototype.stroke = function(){
    ctx.save();
    this.updateCtx(ctx);
    ctx.font = this.font;

    ctx.strokeText(this.src, this.x, this.y);

    ctx.restore();
};

Text.prototype.fill = function(){
    ctx.save();
    this.updateCtx(ctx);
    ctx.font = this.font;

    ctx.fillText(this.src, this.x, this.y);

    ctx.restore();
};

Text.prototype.draw = Text.prototype.fill;

String.prototype.draw = function(x, y, fillStyle, font){
    new Text(this, x, y, fillStyle, font).draw();
};

function Sprite(src, x, y, w, h){
    Rectangle.call(this, x, y, w, h);
    this.img = new Image();
    if(src) this.img.src = src;
}

inheritPrototype(Sprite, Rectangle);

Sprite.prototype.url = function(src){
    this.img.src = src;
};

Sprite.prototype.clip = function(sx, sy, sw, sh){
    this.sx = sx > 0 ? sx : 1;
    this.sy = sy > 0 ? sx : 1;
    this.swidth = sw;
    this.sheight = sh;
    this.width = this.width || sw;
    this.height = this.height || sh;
};

Sprite.prototype._draw = function(){
    if(this.sx && this.sy && this.swidth & this.sheight){
        ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight,
            this.x, this.y, this.width, this.height);
    }
    else if(this.width && this.height)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    else
        ctx.drawImage(this.img, this.x, this.y);
};

Sprite.prototype.fill = null;
Sprite.prototype.stroke = null;

function Animation(src, x, y, w, h){
    Sprite.call(this, src, x, y, w, h);
    this.speed = 1;
}

inheritPrototype(Animation, Sprite);

Animation.prototype.setFrame = function(sx, sy, sw, sh, c, r){
    this.c = c;
    this.r = r || 1;
    this.cf = 0;  // current frame count
    this.clip(sx, sy, sw, sh);
};

Animation.prototype.setSpeed = function(speed){
    this.speed = speed > 1 ? speed : 1;
};

Animation.prototype._draw = function(){
    var sx = this.sx + this.swidth * (Math.floor(this.cf/this.speed) % this.c);
    var sy = this.sy + this.sheight * (Math.floor(this.cf/this.c/this.speed) % this.r);
    ctx.drawImage(this.img, sx, sy, this.swidth, this.sheight,
        this.x, this.y, this.width, this.height);

    this.cf++; // update frame count
};

function Point(x, y){
    Circle.call(this, x, y, 2);
    this.fillStyle = "red";
}

inheritPrototype(Point, Circle);
Point.prototype.draw = Point.prototype.fill;

Object.prototype.draw = function(){
    for(key in this){
        shape = this[key];
        if(shape instanceof Shape) shape.draw();
    }
}

module.exports = {
    shapeList: shapeList,

    Shape: Shape,
    Line: Line,
    Rectangle: Rectangle,
    Polygon: Polygon,
    Triangle: Triangle,
    Circle: Circle,
    Point: Point,
    Text: Text,

    Sprite: Sprite,
    Animation: Animation
};
