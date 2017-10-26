var shapes = require('./shapes.js');
var canvas = require('./canvas.js').canvas;
var ctx = require('./canvas.js').ctx;
var Mouse = require('./mouse.js').Mouse;

var Shape = shapes.Shape;

var canvas1 = document.createElement('canvas');
var canvas2 = document.createElement('canvas');

canvas1.width = 1000;
canvas1.height = 1000;

canvas2.width = 1000;
canvas2.height = 1000;

var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");

function collide(shape1, shape2){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);
    ctx2.clearRect(0, 0, canvas.width, canvas.height);

    ctx1.save();

    shape1.draw(ctx1);
    shape2.draw(ctx2);

    ctx1.globalCompositeOperation = "source-in";
    ctx1.drawImage(ctx2.canvas, 0, 0);
    ctx1.restore();

    var canvasData = ctx1.getImageData(0, 0, canvas.width, canvas.height);

    for(var i=0; i<canvasData.data.length/4-1; i++){
        if(canvasData.data[4*i+3] != 0){
            return new shapes.Point(i%canvas.width, i/canvas.width);
        }
    }

    return false;
}

function pointOnShape(shape, p){
    ctx1.clearRect(0, 0, canvas.width, canvas.height);

    ctx1.save();
    shape.draw(ctx1);
    ctx1.restore();

    var x = p.x;
    var y = p.y;
    var canvasData = ctx1.getImageData(x, y, 1, 1);

    if(canvasData.data[3] != 0)
        return true;

    return false;
}

Object.prototype.collide = function(other){
    if(!this.draw || !other.draw) throw "LLEG: Object must have draw method";
    return collide(this, other);
};

Object.prototype.touched = function(){
    if(!this.draw) throw "LLEG: Object must have draw method";

    return pointOnShape(this, Mouse);
};

module.exports = {};
