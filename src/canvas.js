var canvas = document.createElement('canvas');
var p = document.createElement('p');

document.body.appendChild(canvas);
document.body.appendChild(p);


canvas.width = 400;
canvas.height = 600;
canvas.style = "border: 1px solid #d3d3d3;";

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#00FFFF";
ctx.fillStyle = "rgba(0, 255, 255, 0.4)";

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

module.exports = {
    canvas: canvas,
    ctx: ctx,
    p: p
};
