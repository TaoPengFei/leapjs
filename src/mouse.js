var canvas = require('./canvas.js').canvas;
var p = require('./canvas.js').p;

var Mouse = {
    x: 0,
    y: 0
};

function windowToCanvas(canvas, x, y){
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left* (canvas.width/box.width),
        y: y - box.top * (canvas.height/box.height)
    };
}

function updateMouse(e){
    var point = windowToCanvas(canvas, e.clientX, e.clientY);
    Mouse.x = Math.floor(point.x);
    Mouse.y = Math.floor(point.y);
    p.innerHTML = "" + Mouse.x + ", " + Mouse.y; 
}

canvas.onmousemove = function(e){
    e.preventDefault();
    updateMouse(e);
    if(Mouse.move) Mouse.move();
};

canvas.ontouchmove = function(e){
    e.preventDefault();
    updateMouse(e.touches.item(0));
    if(Mouse.move) Mouse.move();
};

function up(e){ 
    e.preventDefault();
    if(Mouse.up) Mouse.up(); 
}
canvas.ontouchend = canvas.onmouseup = up;

canvas.onmousedown = function(e){ 
    e.preventDefault();
    updateMouse(e);
    if(Mouse.down) Mouse.down(); 
};

canvas.ontouchstart = function(e){ 
    e.preventDefault();
    updateMouse(e.touches.item(0));
    if(Mouse.down) Mouse.down(); 
};

canvas.onclick = function(e){ 
    e.preventDefault();
    if(Mouse.click) Mouse.click(); 
};

module.exports = {
    Mouse: Mouse
};
