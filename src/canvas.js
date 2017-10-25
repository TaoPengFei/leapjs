var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

module.exports = {
    canvas: canvas,
    ctx: ctx
};
