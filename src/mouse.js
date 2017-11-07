var canvas = require('./canvas.js').canvas;
var keys = require('./keys.js').Key;
var p = require('./canvas.js').p;
var shapeList = require('./util.js').shapeList;

var Mouse = {
    x: 0,
    y: 0
};

var TouchStart = {};
TouchStart.init = function(){
    TouchStart.x = Mouse.x;
    TouchStart.y = Mouse.y;
};

function windowToCanvas(canvas, x, y){
    var box = canvas.getBoundingClientRect();
    return {
        x: x - box.left* (canvas.width/box.width),
        y: y - box.top * (canvas.height/box.height)
    };
}

function updateEvent(e){
    // e.preventDefault();
    // update e if it is on phone
    if(e.touches) e = e.touches.item(0);

    var point = windowToCanvas(canvas, e.clientX, e.clientY);
    Mouse.x = Math.floor(point.x);
    Mouse.y = Math.floor(point.y);
    p.innerHTML = "" + Mouse.x + ", " + Mouse.y; 
}

canvas.onmousedown =  function(e){ 
    updateEvent(e);
    if(Mouse.down) Mouse.down(); 

    // handle events of all shapes, LIFO
    // IMPORTANT
    var i = shapeList.length;
    while(i--){
        var shape = shapeList[i];
        if(shape.click && shape.touched()){
            shape.click();
            break;
        }
    }
};

canvas.ontouchstart = function(e){
    e.preventDefault();
    canvas.onmousedown(e);
    TouchStart.init();
};

canvas.onmousemove = function(e){
    updateEvent(e);
    if(Mouse.move) Mouse.move();
};

canvas.ontouchmove = function(e){
    e.preventDefault();
    canvas.onmousemove(e);
    if(Mouse.x - TouchStart.x > 50 && Key.ArrowRight.down){
        Key.ArrowRight.down();
        TouchStart.init();
    }
    else if(TouchStart.x - Mouse.x > 50 && Key.ArrowLeft.down){
        Key.ArrowLeft.down();
        TouchStart.init();
    }

    if(TouchStart.y - Mouse.y > 50 && Key.ArrowUp.down){
        Key.ArrowUp.down();
        TouchStart.init();
    }
    else if(Mouse.y - TouchStart.y > 50 && Key.ArrowDown.down){
        Key.ArrowDown.down();
        TouchStart.init();
    }
};

canvas.ontouchend = canvas.onmouseup = function(e){
    e.preventDefault();
    updateEvent(e);
    if(Mouse.up) Mouse.up();
};

canvas.onclick = function(e){ 
     updateEvent(e);
    if(Mouse.click) Mouse.click(); 
};

module.exports = {
    Mouse: Mouse,
    Touch: Mouse
};
