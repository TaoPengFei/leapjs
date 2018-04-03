canvas.resize(600, 800);
canvas.scale(10, 10);

var url = "https://llcs-1252287760.cossh.myqcloud.com/images/";
var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/bg_shouye.jpg", 0, 0, 60, 80);

var master = new Sprite(url + "FrenchFries.png", 2, 32, 12, 12);
var snake = new Sprite(url + "Popcorn.png", 45, 32, 10, 15);
var stick = new Sprite(url + "FrenchFry.png", 4, 13, 12, 3);
var sword = new Sprite(url + "PopcornBullet.png", 51, 12, 6, 6);
var boom = new Sprite(url + "Boom.png", 0, 0, 15, 15);

var bgm = new Audio();
bgm.src = "https://rss.leaplearner.com/BGM/QuestFlash/gameBG.mp3";
bgm.loop = true;
bgm.canplaythough = function(){
    bgm.play();
};

var boomM = new Audio();
boomM.src = "https://rss.leaplearner.com/Audio/Freefighter/shipDestroyEffect.mp3";

boom.render = function (p) {
    this.x = p.x - 8;
    this.y = p.y - 8;
    this.draw();
    boomM.play();
};

master.y = new Sine(40, 15, 4);
snake.y = new Sine(40, 15, 3);

snake.hp = 100;
master.hp = 100;

function game() {
    canvas.clear();
    
    bg.draw();
    // canvas.showAxis();
    
    master.draw();
    snake.draw();
    
    stick.draw();
    sword.draw();
    
    let p = stick.collide(snake);
    
    if(p){
        snake.hp -= 1;
        boom.render(p);
    }
    
    p = sword.collide(master);
    if(p){
        master.hp -= 1;
        boom.render(p);
    }
    
    if(master.hp <= 0){
        text("LOSE", 15, 48, 10);
        stop(game);
    }
    if(snake.hp <= 0){
        text("WIN", 20, 50, 10);
        stop(game);
    }

    text(master.hp, 3, 3, 10, HSL(master.hp, 1, 0.5));
    text(snake.hp, 40, 3, 10, HSL(snake.hp, 1, 0.5));
}

function masterAttack(){
    stick.x = new Increase(5, 80, 1, false);
    stick.y = master.y + 5;
}

function snakeAttack() {
    sword.x = new Increase(45, -25, 1, false);
    sword.y = snake.y + 5;        
}

Mouse.click = function(){
    if(Mouse.x < 30) masterAttack();
    else snakeAttack();
};

Key.a.press = masterAttack;
Key.l.press = snakeAttack;

run(game);