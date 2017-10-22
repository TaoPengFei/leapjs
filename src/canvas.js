var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

canvas.clear = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var tempCanvas = document.createElement('canvas');
tempCanvas.width = canvas.width;
tempCanvas.height = canvas.height;
var tempCtx = tempCanvas.getContext("2d");

module.exports = {
    canvas: canvas,
    ctx: ctx,
    tempCanvas: tempCanvas,
    tempCtx: tempCtx
};
