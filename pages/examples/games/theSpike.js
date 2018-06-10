canvas.resize(350, 500);
var url = "https://llcs-1252287760.cossh.myqcloud.com/";
var sky = new Sprite(url+"bgs/bg.png", 0, 0, 800, 550);
var crab = new Animation(url+"animations/crab.png", 120, 430, 90, 60);
crab.setFrame(0, 0, 117, 90, 6, 1);
crab.setCollisionScale(0.9, 0.5);

var spike = new Sprite(url + 'images/spike1.png', 150, 0, 50, 50);

var retry = new Text("RETRY", 125, 300, 30);
retry.click = start;

var speed = 5;
var score = 0;

Key.ArrowLeft.down = function(){
    if(crab.x >= 120) crab.x -= 100;
};
Key.ArrowRight.down = function(){
    if(crab.x <= 120) crab.x += 100;
};

spike.init = function(){
    this.x = Math.random() * 300;
    this.y = 0;    
};

function start(){
    spike.init();
    speed = 5;
    score = 0;
    loop();
}

function loop(){
    sky.draw();
    spike.y += speed;
    
    if(spike.y > 550){
        spike.init();
        speed++;
        score++;
    }

    crab.draw();
    spike.draw();
    new Text(score).draw();
    
    if(crab.collide(spike)){
        retry.draw();
    } else
        nextFrame(loop);
}

loadRssAndRun(start);