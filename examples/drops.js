canvas.width = 350;
canvas.height = 500;
var url = "http://llcs-1252287760.cossh.myqcloud.com/";
var sky = new Sprite(url+"bgs/bg.png", 0, 0, 800, 550);
var crab = new Animation(url+"animations/crab.png", 120, 430, 90, 60);
crab.setFrame(0, 0, 117, 90, 6, 1);
crab.setCollisionScale(0.9, 0.5);

var spike = new Sprite(url + 'images/spike1.png', 150, 0, 50, 50);
var retry = new Sprite(url + 'images/hiscore.png', 125, 200, 50, 50);

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
    score.toString().draw();
    
    if(crab.collide(spike)){
        over();
    } else
        nextFrame(loop);
}

function over(){
    "Game Over".draw(125, 300);
    retry.click = start;
    retry.draw();
    score.toString().draw(180, 240, "white", "40px Arial");
}

loadRssAndRun(start);
