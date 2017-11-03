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
 
    if(r1.minX > r2.maxX || r1.minY > r2.maxY || r2.minX > r1.maxX || r2.minY > r1.maxY){
        return false;
    }
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

    // vector
    var u;
    for(i=0; i<ps1.length; i++){
        p1 = ps1[i];
        if(i+1 == ps1.length) 
            p2 = ps1[0];
        else 
            p2 = ps1[i+1];

        u = getVerticalVector(p2, p1);
        console.log(u);
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
    var ps1min, ps1max, ps2min, ps2max;

    for(i=0; i<ps1.length; i++){
        p = ps1[i];
        l = p.x*u.x + p.y*u.y;
        if(ps1min === null) ps1min = l;
        if(ps1max === null) ps1max = l;
        ps1min = ps1min < l ? ps1min : l;
        ps1max = ps1max > l ? ps1max : l;
    }
    for(i=0; i<ps2.length; i++){
        p = ps2[i];
        l = p.x*u.x + p.y*u.y;
        if(ps2min === null) ps2min = l;
        if(ps2max === null) ps2max = l;
        ps2min = ps2min < l ? ps2min : l;
        ps2max = ps2max > l ? ps2max : l;
    }

    if(ps1min > ps2max || ps1max < ps2min) return false;

    return true;
}

function getVerticalVector(p1, p2){

    var u = {};
    u.x = p1.y - p2.y;
    u.y = p2.x - p1.x;

    return u;
}

function getRectShape(ps){
    var rect = {};
    rect.minX = rect.maxX = ps[0].x;
    rect.minY = rect.maxY = ps[0].y;

    ps.map(function(p){
        rect.minX = rect.minX < p.x ? rect.minX : p.x;
        rect.maxX = rect.maxX > p.x ? rect.maxX : p.x;
        rect.minY = rect.minY < p.y ? rect.minY : p.y;
        rect.maxY = rect.maxY > p.y ? rect.maxY : p.y;
    });

    return rect;
}

function pointInRect(p, rect){
    return p.x > rect.minX && p.x < rect.maxX && p.y > rect.minY && p.y < rect.maxY;
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
