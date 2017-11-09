function Transform(){
    this.anchorX = 0;
    this.anchorY = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.skewX = 0;
    this.skewY = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.degree = 0;
}

Transform.prototype.transformed = function(){
    return this.scaleX != 1 || this.scaleY != 1 
        || this.skewX || this.skewY 
        || this.translateX || this.translateY || this.degree;
};

Transform.prototype.scale = function(x, y){
    this.scaleX = x;
    this.scaleY = y;
};

Transform.prototype.translate = function(x, y){
    this.translateX = x;
    this.translateY = y;
};

Transform.prototype.skew = function(x, y){
    this.skewX = x;
    this.skewY = y;
};

Transform.prototype.setAnchor = function(x, y){
    this.anchorX = x;
    this.anchorY = y;
};

Transform.prototype.rotate = function(degree){
    this.degree = degree;
};

Transform.prototype.updateCtx = function(ctx){
    var degree = this.degree * Math.PI / 180;

    ctx.translate(this.anchorX, this.anchorY);

    ctx.rotate(degree);
    ctx.transform(this.scaleX, this.skewX, this.skewY, this.scaleY,
            this.translateX, this.translateY);

    ctx.translate(-this.anchorX, -this.anchorY);
};

Transform.prototype.getRealPoint = function(p){
    var x = p.x, y = p.y;

    x -= this.anchorX;
    y -= this.anchorY;

    var degree = this.degree * Math.PI / 180;
    var sin = Math.sin(degree);
    var cos = Math.cos(degree);

    var newX = x*cos - y*sin;
    var newY = y*cos + x*sin;
    x = newX;
    y = newY;

    newX = this.scaleX * x + this.skewX * y + this.translateX;
    newY = this.skewY * x + this.scaleY * y + this.translateY;
    x = newX;
    y = newY;

    x += this.anchorX;
    y += this.anchorY;

    return {x: x, y: y};
};

module.exports = {
    Transform: Transform
};
