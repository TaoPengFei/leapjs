canvas.width = 350;
canvas.height = 462;
canvas.preventDefaultEvent();

var camera = new Sprite('http://p0msr3pkn.bkt.clouddn.com/camera.png', 0, 0, 350, 462);
var leopard = new Sprite('http://p0msr3pkn.bkt.clouddn.com/run-01.png', 20, 110, 1088, 68);
var nextBtn = new Circle(200, 75, 25);
var line = new Line(194, 90, 85, 315);
var txt = new Text("点击查看下一张", 20, 320);
txt.fillStyle = "red";
var index = 0;

nextBtn.fillStyle = RGBA(255, 0, 0, 0.4);
line.strokeStyle = "red";
nextBtn.clicked = false;

function Loop() {
    canvas.clear();
    leopard.draw();
    camera.draw();
    nextBtn.fill();
    if (!nextBtn.clicked) {
        line.draw();
        txt.draw();
    }
    leopard.y = 110;
    leopard.x = 20 - 136 * index;
}

nextBtn.click = function() {
    index = (index < 7) ? (index + 1) : 0;
    nextBtn.clicked = true;
}

setInterval(Loop, 125);