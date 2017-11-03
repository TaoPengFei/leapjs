// detect collision using shadows
// p: Point, {x, y}
// ps: Points, Array
// rect: {minX, maxX, minY, maxY}
var shapes = require('./shapes.js');
var ctx = require('./canvas.js').ctx;
var Mouse = require('./mouse.js').Mouse;

var Shape = shapes.Shape;

function collide(shape1, shape2){
    var ps1 = shape1.getPoints();
    var ps2 = shape2.getPoints();

    if(ps1.length < 2) return false;
    if(ps2.length < 2) return false;

    // quick check start
    var r1 = {}, r2 = {}, i, j;
    r1 = getRectShape(ps1);
    r2 = getRectShape(ps2);
 
    if(r1.minX > r2.maxX || r1.minY > r2.maxY || 
        r2.minX > r1.maxX || r2.minY > r1.maxY)
        return false;
    // quick check end
    
    // if point inside shapes, return point
    ctx.drawPathByPoints(ps2);
    for(i=0; i<ps1.length; i++){
        p = ps1[i];
        if(pointInRect(p, r2) && ctx.isPointInPath(p.x, p.y)) return p;
    }

    ctx.drawPathByPoints(ps1);
    for(i=0; i<ps2.length; i++){
        p = ps2[i];
        if(pointInRect(p, r1) && ctx.isPointInPath(p.x, p.y)) return p;
    }
    // point check end

    // vector shadow
    var u;
    for(i=0; i<ps1.length; i++){
        p1 = ps1[i];
        if(i+1 == ps1.length) 
            p2 = ps1[0];
        else 
            p2 = ps1[i+1];

        u = getVerticalVector(p2, p1);
        if(!shadowCollide(ps1, ps2, u)) return false;
    }

    for(i=0; i<ps2.length; i++){
        p1 = ps2[i];
        if(i==ps2.length-1) 
            p2 = ps2[0];
        else 
            p2 = ps2[i+1];

        u = getVerticalVector(p1, p2);
        if(!shadowCollide(ps1, ps2, u)) return false;
    }
    // vector end
    return true;
}

function shadowCollide(ps1, ps2, u){
    var s1 = ps1.map(function(p){ return p.x*u.x + p.y*u.y; });
    var s2 = ps2.map(function(p){ return p.x*u.x + p.y*u.y; });

    if(s1.min() > s2.max() || s1.max() < s2.min()) return false;

    return true;
}

function getVerticalVector(p1, p2){
    return {
        x: p1.y-p2.y, 
        y: p2.x-p1.x
    };
}

function getRectShape(ps){

    var xs = ps.map(function(p){ return p.x });
    var ys = ps.map(function(p){ return p.y });

    return {
        minX: xs.min(), maxX: xs.max(),
        minY: ys.min(), maxY: ys.max()
    };
}

function pointInRect(p, r){
    return r.minX < p.x && p.x < r.maxX 
        && r.minY < p.y && p.y < r.maxY;
}

function pointInShape(p, shape){
    var ps = shape.getPoints();
    if(ps.length < 3) return false;

    var rect = getRectShape(ps);
    if(!pointInRect(p, rect))
        return false;

    ctx.drawPathByPoints(ps);
    if(ctx.isPointInPath(p.x, p.y))
        return p;

    return false;
}

Shape.prototype.collide = function(shape){
    return collide(this, shape);
};

Shape.prototype.touched = function(){
    return pointInShape(Mouse, this);
};
