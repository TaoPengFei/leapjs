var canvas = document.createElement('canvas');
var p = document.createElement('p');

document.body.appendChild(canvas);
document.body.appendChild(p);

canvas.width = 350;
canvas.height = 550;
canvas.style = "border: 1px solid #d3d3d3;";

var ctx = canvas.getContext("2d");
ctx.strokeStyle = "#00FFFF";
ctx.fillStyle = "rgba(0, 255, 255, 0.5)";

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

ctx.drawPathByPoints = function(ps){
    ctx.beginPath();
    ctx.moveTo(ps[0].x, ps[0].y);

    for(var i=1; i<ps.length; i++)
        ctx.lineTo(ps[i].x, ps[i].y);

    ctx.closePath();
};

module.exports = {
    canvas: canvas,
    ctx: ctx,
    p: p
};
