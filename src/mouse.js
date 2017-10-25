var canvas = require('./canvas.js').canvas;

var Mouse = {
    x: 0,
    y: 0,
    click: null
};

function windowToCanvas(canvas, x, y){
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left* (canvas.width/box.width),
        y: y - box.top * (canvas.height/box.height)
    };
}

canvas.onmousemove = function(e){
    var p = windowToCanvas(canvas, e.clientX, e.clientY);
    Mouse.x = Math.floor(p.x);
    Mouse.y = Math.floor(p.y);
};

canvas.onclick = function(e){
    if(Mouse.click)
        Mouse.click();
};

module.exports = {
    Mouse: Mouse
};
