var context = require('./canvas.js').ctx;
var inheritPrototype = require('./util.js').inheritPrototype;
var Transform = require('./transform.js').Transform;

function Point(x, y){
    this.x = x;
    this.y = y;
}

function Shape(){
    this.strokeStyle = "#00FFFF";
    this.fillStyle = "rgba(0, 255, 255, 0.5)";
    this.transform = new Transform();
}

Shape.prototype._draw = null;

Shape.prototype.stroke = function(ctx){
    ctx = ctx || context;
    ctx.save();
    this.transform.transfor(ctx);
    ctx.strokeStyle = this.strokeStyle;
    this._draw(ctx);
    ctx.stroke();
    ctx.restore();
};

Shape.prototype.fill = function(ctx){
    ctx = ctx || context;
    ctx.save();
    this.transform.transfor(ctx);
    ctx.fillStyle = this.fillStyle;
    ctx.beginPath();
    this._draw(ctx);
    ctx.fill();
    ctx.restore();
};

Shape.prototype.draw = function(ctx){
    this.fill(ctx);
    this.stroke(ctx);
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

Shape.prototype.rotate = function(degree){
    this.transform.rotate(degree);
};

function Circle(x, y, r){
    Shape.call(this);
    this.x = x;
    this.y = y;
    this.r = r;
}

inheritPrototype(Circle, Shape);

Circle.prototype._draw = function(ctx){
    ctx = ctx || context;
    ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
};

function Line(x1, y1, x2, y2){
    Shape.call(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

inheritPrototype(Line, Shape);

Line.prototype._draw = function(ctx){
    ctx = ctx || context;
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

Polygon.prototype._draw = function(ctx){
    ctx = ctx || context;
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
    this.width = w;
    this.height = h;
}

inheritPrototype(Rectangle, Shape);

Rectangle.prototype._draw = function(ctx){
    ctx = ctx || context;
    ctx.rect(this.x, this.y, this.width, this.height);
};

function Text(text, x, y, font){
    Shape.call(this);
    this.text = text;
    this.x = x || 0;
    this.y = y || 20;
    this.font = font || "20px Arial";
}

inheritPrototype(Text, Shape);

Text.prototype.stroke = function(ctx){
    ctx = ctx || context;
    ctx.font = this.font;
    ctx.save();
    this.transform.transfor(ctx);
    ctx.strokeText(this.text, this.x, this.y);
    ctx.restore();
};

Text.prototype.fill = function(ctx){
    ctx = ctx || context;
    ctx.font = this.font;
    ctx.save();
    this.transform.transfor(ctx);
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
};

function Sprite(src, x, y, w, h){
    Shape.call(this);
    this.img = new Image();
    this.img.src = src;
    this.x = x || 0;
    this.y = y || 0;
    this.width = w;
    this.height = h;
}

inheritPrototype(Sprite, Shape);

Sprite.prototype.cut = function(sx, sy, sw, sh){
    this.sx = sx > 0 ? sx : 1;
    this.sy = sy > 0 ? sx : 1;
    this.swidth = sw;
    this.sheight = sh;
    this.width = this.width || this.swidth;
    this.height = this.height || this.sheight;
};

Sprite.prototype._draw = function(ctx){
    ctx = ctx || context;
    if(this.sx && this.sy && this.swidth & this.sheight){
        ctx.drawImage(this.img, this.sx, this.sy, this.swidth, this.sheight,
            this.x, this.y, this.width, this.height);
    }
    else if(this.width && this.height)
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    else
        ctx.drawImage(this.img, this.x, this.y);
};

Sprite.prototype.draw = function(ctx){
    ctx = ctx || context;
    ctx.save();
    this.transform.transfor(ctx);
    this._draw(ctx);
    ctx.restore();
};

function Animation(src, x, y, w, h){
    Sprite.call(this, src, x, y, w, h);
    this.speed = 1;
}

inheritPrototype(Animation, Sprite);

Animation.prototype.setFrame = function(sx, sy, sw, sh, c, r){
    this.c = c;
    this.r = r || 1;
    this.cc = 0;  // current colume
    this.cr = 0;  // current row
    this.cut(sx, sy, sw, sh);
};

Animation.prototype.setSpeed = function(speed){
    this.speed = speed > 1 ? speed : 1;
};

Animation.prototype.updateFrame = function(){
    this.cc++;
    this.cr++;
};

Animation.prototype._draw = function(ctx){
    ctx = ctx || context;
    var sx = this.sx + this.swidth * (Math.floor(this.cc/this.speed) % this.c);
    var sy = this.sy + this.sheight * (Math.floor(this.cr/this.c/this.speed) % this.r);
    ctx.drawImage(this.img, sx, sy, this.swidth, this.sheight,
        this.x, this.y, this.width, this.height);
};

Animation.prototype.draw = function(ctx){
    ctx = ctx || context;
    ctx.save();
    this.transform.transfor(ctx);
    this._draw(ctx);
    this.updateFrame();
    ctx.restore();
};

module.exports = {
    Shape: Shape,
    Line: Line,
    Rectangle: Rectangle,
    Polygon: Polygon,
    Triangle: Triangle,
    Circle: Circle,
    Text: Text,
    Sprite: Sprite,
    Animation: Animation
};
