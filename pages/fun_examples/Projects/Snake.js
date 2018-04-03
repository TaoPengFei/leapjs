canvas.width = 360;
canvas.height = 480;

var cover = new Sprite('https://rss.leaplearner.com/Image/Bgs/bg_shouye1.jpg',0,0,canvas.width,canvas.height);
var startBtn = new Rectangle(105,300,140,50);
var btnTxt = new Text();
var title = new Text();
var bg = new Sprite('https://rss.leaplearner.com/Image/Bgs/piano_bg2.png',0,0,canvas.width,canvas.height);
var overBG = new Sprite('https://rss.leaplearner.com/Image/Bgs/background.png',0,0,canvas.width,canvas.height);
var food1 = new Rectangle(0,0,30,30);
var snake = [];
var gameState = 0;
var i = 0;
var moveX = 0;
var moveY = 0;
var score = 0;
var scoreTxt = new Text();
function Main() {
    switch (gameState) {
        case 0:
            Start();
            break;
        case 1:
            Loop();
            break;
        case 2:
            Over();
            break;
        default:
            break;
    }
}

function Start() {
    canvas.clear();
    cover.draw();
    title.src = '疯狂贪吃蛇';
    title.x = 75;
    title.y = 90;
    title.size = 40;
    title.draw();
    startBtn.fillStyle = 'orange';
    startBtn.fill();
    btnTxt.x = 125;
    btnTxt.y = 310;
    btnTxt.src = '开始游戏';
    btnTxt.size = 25;
    btnTxt.fillStyle = 'white';
    btnTxt.draw();
}

function Loop() {
    canvas.clear();
    bg.draw();
    if (food1.y > 480) {
        food1.fillStyle = RGB(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        food1.x = Math.random() * 330;
        food1.y = -30; 
    }
    food1.y = food1.y + 5 + score / 1.5;
    food1.draw();
    for (i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i-1].x;
        snake[i].y = snake[i-1].y;
    }
    snake[0].x = snake[0].x + moveX;
    snake[0].y = snake[0].y + moveY;
    for (i in snake) {
        snake[i].draw();
        if ((i > 1 && snake[0].collide(snake[i])) || snake[0].x < 0 || snake[0].x > canvas.width || snake[0].y < 0 || snake[0].y > canvas.height) {
            gameState = 2;
        }
    }
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    if (snake[0].collide(food1)) {
        snake.push(new Circle());
        snake[snake.length-1].fillStyle = food1.fillStyle;
        snake[snake.length-1].r = 14;
        food1.fillStyle = RGB(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        food1.x = Math.random() * 330;
        food1.y = -30;
        score = score + 1;
    }
    setTimeout(Main,(1000-score * 30));
}

function Over() {
    canvas.clear();
    overBG.draw();
    title.src = '游戏结束';
    title.x = 100;
    title.y = 90;
    title.size = 40;
    title.draw();
    scoreTxt.x = 110;
    scoreTxt.y = 210;
    scoreTxt.src = "你的成绩是" + score + "分";
    scoreTxt.draw();
    startBtn.fillStyle = 'orange';
    startBtn.fill();
    btnTxt.x = 125;
    btnTxt.y = 310;
    btnTxt.src = '重新开始';
    btnTxt.size = 25;
    btnTxt.fillStyle = 'white';
    btnTxt.draw();
}

function Init() {
    snake = [new Circle(15,75,14),new Circle(15,45,14),new Circle(15,15,14)];
    for (i in snake) {
        snake[i].fillStyle = RGB(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));

    }
    moveY = 30;
    moveX = 0;
    food1.fillStyle = RGB(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
    food1.x = Math.random() * 330;
    food1.y = -30;
    score = 0;
    scoreTxt.x = 0;
    scoreTxt.y = 0;
}


btnTxt.click = function() {
    Init();
    gameState = 1;
    Main();
}; 

Key["ArrowLeft"].press = function() {
    if (moveX === 0) {
        moveX = -30;
        moveY = 0;
    }
};

Key['ArrowRight'].press = function() {
    if (moveX === 0) {
        moveX = 30;
        moveY = 0;
    }
};

Key['ArrowUp'].press = function() {
    if (moveY === 0) {
        moveY = -30;
        moveX = 0;
    }
};

Key['ArrowDown'].press = function() {
    if (moveY === 0) {
        moveY = 30;
        moveX = 0;
    }
};

Main();

