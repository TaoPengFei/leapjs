canvas.resize(350, 500);

var player, bg, enemy, scoreTxt, playerCry, life, alien, bgm, success, fail, _hp, score;

var playerImage = "https://llcs-1252287760.cossh.myqcloud.com/animations/crab.png";
var background = 'https://llcs-1252287760.cossh.myqcloud.com/bgs/pirator.png';
var enemyImage = 'http://rss.leaplearner.com/Image/Role/Alien2.png';
var playerCryImage = 'http://rss.leaplearner.com/Image/Role/Alien3.png';


// Musics
var bgm = new Audio();
bgm.src = 'http://rss.leaplearner.com/BGM/Marexp/bgm.mp3';
bgm.onload = function(){ bgm.play(); };

var success = new Audio();
success.src = 'http://rss.leaplearner.com/Audio/BallGame/ansRight.mp3';
var fail = new Audio();
fail.src = 'http://rss.leaplearner.com/Audio/BallGame/ansWrong.mp3';

var hp = 3;
var speed = 3;

//////////////////////////////////////////////////////////////////////

function start(){
    // Objects
    player = new Animation(playerImage, 100, canvas.height-120, 90, 60);
    player.setFrame(0, 0, 117, 90, 6, 1);
    player.setCollisionScale(0.9, 0.5);

    bg = new Sprite(background, 0, 0, canvas.width, canvas.height);
    enemy = new Sprite(enemyImage, 150, 150, 54, 53);
    
    scoreTxt = new Text("", 35, 8);
    playerCry = new Sprite(playerCryImage, 90, 100, 200, 200);

    life = player.clone();
    life.y = 30;
    life.w = 20;
    life.h = 15;

    alien = new Sprite(enemyImage, 10, 10, 20, 20);
    
    loadRssAndRun(gameStart);
}

function init() {
    enemy.y = 0;
    enemy.x = Math.random() * 300; 
}

function draw() {
    bg.draw();
    player.draw();
    enemy.draw();
    alien.draw();
    scoreTxt.draw();
    for(var i=0; i<_hp; i++){
        life.x = 320 - i * 25;
        life.draw();
    }
}

function gameStart() {
    score = 0;
    _hp = hp;
    enemy.speed = speed;
    loop();
    bgm.play();
}


function gameOver() {
    bg.draw();
    var t = new Text("你成功的阻挡了" + score + "波外星人的进攻", 20, 50, 20).draw();
    playerCry.click = gameStart;
    playerCry.draw();
}

function loop() {
    
    checkEnemy();

    //角色碰撞宝物加分
    if (player.collide(enemy)) {
       score += 1;
       success.currentTime = 0;
       success.play();
       enemy.speed += 1;
       init();
    }
    
    // speed
    updatePosition();
    
    // 更新分数
    scoreTxt.src = score;
    
    draw();
    
    if(player.x < 0) player.x = 0;
    if(player.x + player.w > canvas.width) player.x = canvas.width - player.w;
    
    if(_hp <= 0) gameOver();
    else nextFrame(loop);
}

function failToCatch(){
    _hp -= 1;
    fail.play();
    enemy.speed *= 0.4;
}

/////////////////////////////////////////////////////////////////////////////

// canvas size, recommand: 350, 500
canvas.resize(350, 500);


// bg choices
// http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg
// https://llcs-1252287760.cossh.myqcloud.com/bgs/pirator.png
// https://llcs-1252287760.cossh.myqcloud.com/bgs/circuitry1.png
// https://llcs-1252287760.cossh.myqcloud.com/bgs/circuitrybg1.png
background = 'https://llcs-1252287760.cossh.myqcloud.com/bgs/pirator.png';

// enemy choices
// http://rss.leaplearner.com/Image/Role/Fighter7.png
// http://rss.leaplearner.com/Image/Role/Partner2.png
// http://rss.leaplearner.com/Image/Role/Alien2.png
enemyImage = 'http://rss.leaplearner.com/Image/Role/Alien2.png';


// Key.a.press, Key.b.press, etc.
Key.ArrowLeft.press = function(){
    player.x = player.x - 20;
};

Key.ArrowRight.press = function(){
    player.x = player.x + 20;
};

// crab life count
hp = 3;

// choices:
// enemy.y += 3; or 4、5、6
// enemy.y += enemy.speed; 
function updatePosition() {
   enemy.y += 3;
}

// enemy return to top after reach bottom
function checkEnemy() {
    //宝物出屏幕后重新出现
    if (enemy.y > 450) {
        failToCatch(); // handle hp, music etc
        
        enemy.y = 0;
        
        // random x position
        enemy.x = Math.random() * 300;        
    }
}

// start the game
start();