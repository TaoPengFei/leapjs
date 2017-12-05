var url = "https://llcs-1252287760.cossh.myqcloud.com/";
var bird = new Animation(url+"animations/bird.png", 80, 120, 56, 42);
bird.setFrame(0, 0, 112, 84, 8, 1); // shiftX, shiftY, frameX, frameY, columns, rows

var bird2 = bird.clone();
bird2.y += 100;
bird2.setSpeed(20);

function main(){
    canvas.clear();
    bird.draw();
    bird2.draw();
    nextFrame(main);
}

loadRssAndRun(main);
