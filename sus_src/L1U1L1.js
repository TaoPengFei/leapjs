var axisFlag = 1;
var mX = 0;
var mY = 0;
var bgX = 0;
var bgY = 0;
var bg8 = 'http://ozjxf6i5r.bkt.clouddn.com/u01p08.png';
//设置标志位
var pageNum = 1;
var cstatus = 1;
var bstatus = 1;
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    mX = e.clientX - canvas.offsetLeft;
    mY = e.clientY - canvas.offsetTop;

}

function showAxis() {
    if (mX > 0 && mX < canvas.width && mY > 0 && mY < canvas.height && axisFlag) {
        axisLine(mX, 0, mX, mY, 1);
        axisLine(0, mY, mX, mY, 1);
        axisText(mX, mX - 12, 20);
        axisText(mY, 0, mY + 8);
    }
}

function axisLine(x, y, x1, y1, width) {
    ctx.beginPath();
    ctx.strokeStyle = "rgba(100, 40, 40, 0.6)";
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}

function axisText(str, x, y) {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(str, x, y);
}