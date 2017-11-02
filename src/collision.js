var shapes = require('./shapes.js');
var ctx = require('./canvas.js').ctx;
var Mouse = require('./mouse.js').Mouse;

var Shape = shapes.Shape;
var Rectangle = shapes.Rectangle;

function pointsInPoints(ps1, ps2){
    if(ps1.length < 1) return false;
    if(ps2.length < 3) return false;
    // quick check start
    var r1 = {}, r2 = {};
    r1.minX = r1.maxX = ps1[0].x;
    r1.minY = r1.maxY = ps1[0].y;
    r2.minX = r2.maxX = ps2[0].x;
    r2.minY = r2.maxY = ps2[0].y;

    ps1.map(function(p){
        r1.minX = r1.minX < p.x ? r1.minX : p.x;
        r1.maxX = r1.maxX > p.x ? r1.maxX : p.x;
        r1.minY = r1.minY < p.y ? r1.minY : p.y;
        r1.maxY = r1.maxY > p.y ? r1.maxY : p.y;
    });

    ps2.map(function(p){
        r2.minX = r2.minX < p.x ? r2.minX : p.x;
        r2.maxX = r2.maxX > p.x ? r2.maxX : p.x;
        r2.minY = r2.minY < p.y ? r2.minY : p.y;
        r2.maxY = r2.maxY > p.y ? r2.maxY : p.y;
    })
 
    if(r1.minX > r2.maxX || r1.minY > r2.maxY || r2.minX > r1.maxX || r2.minY > r1.maxY){
        return false;
    }
    // quick check end

    ctx.beginPath();
    ctx.moveTo(ps2[0].x, ps2[0].y);

    for(var i=1; i<ps2.length; i++)
        ctx.lineTo(ps2[i].x, ps2[i].y);

    ctx.closePath();

    for(var i=0,p; i<ps1.length; i++){
        p = ps1[i];
        if(p.x > r2.minX && p.x < r2.maxX && 
            p.y > r2.minY && p.y < r2.maxY && 
                ctx.isPointInPath(p.x, p.y))
            return p;
    }

    return false;
}

Shape.prototype.collide = function(shape){
    return pointsInPoints(this.getPoints(), shape.getPoints());
};

Shape.prototype.touched = function(){
    return pointsInPoints([Mouse], this.getPoints());
};
