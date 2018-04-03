canvas.width = 300;
canvas.height = 500;

var iphone = new Sprite('http://ou1htxdl4.bkt.clouddn.com/iphone.jpg',0,0,300,500);
var head = new Rectangle(130, 140, 40, 10);
var body = new Rectangle(100, 150, 100, 200);
var power = new Rectangle(110, 160, 80, 180);

body.lineWidth = 5;
body.fillStyle = "white";

function Loop() {
    power.use();
    iphone.draw();
    head.draw();
    body.draw();
    power.fill();
    nextFrame(Loop);
}

function charge() {
    if (power.height < 170) {
        power.height += 10;
        power.y -= 10;
    }
}

function use() {
    if (this.height > 0) {
        this.height -= 0.1;
        this.y += 0.1;
        this.fillStyle = RGB(Math.floor((180-this.height)*2.55),Math.floor(this.height*2.55),0);
    }
}

power.use = use;
Mouse.click = charge;
Loop();