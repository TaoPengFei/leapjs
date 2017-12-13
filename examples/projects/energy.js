canvas.resize(350, 500);
canvas.preventDefaultEvent();

// Objects
var player = new Sprite('http://rss.leaplearner.com/Image/Role/Alien2.png', 100, 380, 60, 60);
var bg = new Sprite('http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg', 0, 0, 350, 500);
var coin = new Sprite('http://otde8iv1i.bkt.clouddn.com/i_bullet4.png',150,150,54,53);
var scoreTxt = new Text("", 10, 10);
var playerCry = new Sprite('http://rss.leaplearner.com/Image/Role/Alien3.png', 90, 100, 200, 200);

var life = new Sprite(player.src, 300, 20, 20, 20);

// Musics
var bgm = new Audio();
bgm.src = 'http://rss.leaplearner.com/BGM/Marexp/bgm.mp3';
bgm.onload = function(){
    bgm.play();
}

var success = new Audio();
success.src = 'http://rss.leaplearner.com/Audio/BallGame/ansRight.mp3';
var fail = new Audio();
fail.src = 'http://rss.leaplearner.com/Audio/BallGame/ansWrong.mp3';

var hp, scroe;

function init() {
    coin.y = 0;
    coin.x = Math.random() * 300; 
}

function draw() {
    bg.draw();
    player.draw();
    coin.draw();
    scoreTxt.draw();
    for(var i=0; i<hp; i++){
        life.x = 320 - i * 25;
        life.draw();
    }
}

function start() {
    score = 0;
    hp = 3;
    coin.speed = 3;
    loop();
    bgm.play();
}

Mouse.move = function() {
    player.x = Mouse.x-30;
};

function gameOver() {
    bg.draw();
    new Text("Enegy: " + score, 120, 300, 30).draw();
    playerCry.click = start;
    playerCry.draw();
}

function loop() {

    //宝物出屏幕后重新出现
    if (coin.y > 450) {
        hp -= 1;
        fail.play();
        coin.speed *= 0.4;
        init();
    }

    //角色碰撞宝物加分
    if (player.collide(coin)) {
       score += 1;
       success.currentTime = 0;
       success.play();
       coin.speed += 1;
       init();
    }
    
    // speed
    coin.y += coin.speed;
    
    // 更新分数
    scoreTxt.src = "Enegy: " + score;
    
    draw();
    
    if(hp <= 0) gameOver();
    else nextFrame(loop);
}

start();