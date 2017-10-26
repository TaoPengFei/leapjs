var canvas = document.createElement('canvas');
var ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;
canvas.style = "border: 1px solid #d3d3d3;";

var p = document.createElement('p');
document.body.appendChild(canvas);
document.body.appendChild(p);

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

module.exports = {
    canvas: canvas,
    ctx: ctx,
    p: p
};
