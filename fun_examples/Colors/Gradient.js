canvas.width = 500;
canvas.height = 300;

var line = new Line(0,0,0,300);
var r = 0;
var g = 0;
var b = 255;

function Loop() {
    if (line.x1 < 500) {
        line.x1 += 1;
        line.x2 += 1;
        r += 0.5;
        g += 0.3;
        b -= 0.4;
        line.strokeStyle = RGB(Math.floor(r),Math.floor(g),Math.floor(b));
    }
    line.draw();
    nextFrame(Loop);
}

Loop();