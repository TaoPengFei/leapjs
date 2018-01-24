// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky1 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);
var sky2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',355,0,355,500);

var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land1 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,400,50);
var land2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',400,450,400,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var txt = new Text();
var score = 0;
var scoreTxt = new Text();
var gameState = 1; //0：游戏还没开始 1：游戏正在进行 2：游戏已经结束
var moveY = 0;

function Main() {
    if (gameState === 0) {
        Init();
    }
    else if (gameState === 1) {
        Loop();
    }
    else if (gameState === 2) {
        GameOver();
    }
}

function Init() {
    canvas.clear();
    scoreTxt.x = 0;
    scoreTxt.y = 0;
    fish.x = 150;
    fish.y = 200;
    moveY = 0;
    box.x = 355;
    box.y = 220 + Math.random() * 150;
    gameState = 1;
}

function GameOver() {
    canvas.clear();
    scoreTxt.x = 120;
    scoreTxt.y = 190;
    scoreTxt.src = "你的得分是" + score + "分";
    scoreTxt.draw();
    txt.src = "点击屏幕重新开始";
    txt.x = 100;
    txt.y = 220;
    txt.draw();
}

function Loop() {
    canvas.clear();
    
    if ((sky1.x + 355) < 0 ) {
        sky1.x = 0;
    }
    sky1.x = sky1.x - 2;
    sky1.draw();
    sky2.x = sky1.x + 355;
    sky2.draw();
    
    moveY = moveY + 0.1;
    fish.y = fish.y + moveY;
    fish.draw();
    
    if ((box.x + 60) < 0) {
        box.x = 355;
        box.y = 220 + Math.random() * 150;
        score = score + 1;
    }
    box.x = box.x - 2;
    box.draw();
    box2.x = box.x;
    box2.y = box.y - 280; 
    box2.draw();
    
    if ((land1.x + 400) < 0) {
        land1.x = 0;
    }
    land1.x = land1.x - 2;
    land1.draw();
    land2.x = land1.x + 400;
    land2.draw();

    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    if (fish.collide(box) || fish.collide(box2) || fish.collide(land1) || fish.collide(land2) || fish.y <= 0) {
        gameState = 2;
    }
}

Mouse.click = function() {
    if (gameState === 1) {
        moveY = -4;
    }
    else if (gameState === 2) {
        gameState = 0;
    }
};

setInterval(Main,10);


