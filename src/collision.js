var shapes = require('./shapes.js');
var canvas = require('./canvas.js').canvas;
var ctx = require('./canvas.js').ctx;
var Mouse = require('./mouse.js').Mouse;

var Shape = shapes.Shape;
var Rectangle = shapes.Rectangle;

function pointsInPoints(ps1, ps2){
    if(!ps1 || !ps2)
        return false;
    // quick check start
    var min1 = ps1[0];
    var max1 = ps1[0];
    var min2 = ps2[0];
    var max2 = ps2[0];

    ps1.map(function(p){
        if(p.x < min1.x) min1.x = p.x;
        if(p.y < min1.y) min1.y = p.y;
        if(p.x > max1.x) max1.x = p.x;
        if(p.y > max1.y) max1.y = p.y;
    })
    ps2.map(function(p){
        if(p.x < min2.x) min2.x = p.x;
        if(p.y < min2.y) min2.y = p.y;
        if(p.x > max2.x) max2.x = p.x;
        if(p.y > max2.y) max2.y = p.y;
    })

    if(min1.x > max2.x || min1.y > max2.y || min2.x > max1.x || min2.y > max2.y)
        return false;
    // quick check end

    if(!quickCheck(ps1, ps2))
        return false;

    ctx.beginPath();
    ctx.moveTo(ps2[0].x, ps2[0].y);

    for(var i=1; i<ps2.length; i++)
        ctx.lineTo(ps2[i].x, ps2[i].y);
    ctx.closePath();

    ps1.map(function(p){
        if(ctx.isPointInPath(p.x, p.y))
            return p;
    })

    return false;
}

Shape.prototype.collide = function(shape){
    return pointsInPoints(this.getPoints(), shape.getPoints());
};

Shape.prototype.touched = function(){
    return pointsInPoints([Mouse], this.getPoints());
};
