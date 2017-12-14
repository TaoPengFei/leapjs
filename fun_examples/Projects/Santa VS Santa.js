canvas.width = 600;
canvas.height = 400;

var bg = new Sprite('http://ou1htxdl4.bkt.clouddn.com/crs.jpg',0,-130,600,530);
var p1 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/santa1.png',200,200,70,80);
var p2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/santa2.png',500,200,70,80);
var ball = new Sprite("http://ou1htxdl4.bkt.clouddn.com/c_ball.png",100, 260, 40,40);
var tree = new Sprite("http://ou1htxdl4.bkt.clouddn.com/c_tree.png",250, 200, 100, 200);
var score1 = 0;
var score2 = 0;
var txt = new Text();
p1.moveY = 0;
p2.moveY = 0;
p1.moveX = 0;
p2.moveX = 0;
tree.moveY = 0;
ball.moveX = 0;
ball.moveY = 0;

function Loop() {
    canvas.clear();
    bg.draw();
    p1.drop();
    p2.drop();
    ball.drop();
    if (ball.collide(tree)) {
        ball.hit(tree);
    }
    if (p1.collide(ball)) {
        ball.hit(p1);
        score2 += 1;
    }
     if (p2.collide(ball)) {
        ball.hit(p2);
        score1 += 1;
    }
    if (ball.x < 0 || ball.x > (canvas.width - ball.width))
    ball.moveX = -ball.moveX;
    p1.draw();
    p2.draw();
    tree.draw();
    ball.draw();
    txt.src = "P1:" + score1 + "         P2:" + score2;
    txt.x = 240;
    txt.draw();
    nextFrame(Loop);
}

//设置按键
Key['a'].down = function() {
    p1.moveX = -3;
}

Key['d'].down = function() {
    p1.moveX = 3;
}

Key['a'].up = function() {
    p1.moveX = 0;
}

Key['d'].up = function() {
    p1.moveX = 0;
}

Key['w'].press = function() {
    p1.jump();
}

Key['ArrowLeft'].down = function() {
    p2.moveX = -3;
}

Key['ArrowRight'].down = function() {
    p2.moveX = 3;
}

Key['ArrowLeft'].up = function() {
    p2.moveX = 0;
}

Key['ArrowRight'].up = function() {
    p2.moveX = 0;
}

Key['ArrowUp'].press = function() {
    p2.jump();
}


//----------以下部分不讲---------------------
function Drop() {
    this.x += this.moveX;
    this.y += this.moveY;
    if (this.y < (canvas.height - this.height)) this.moveY += 0.2;
    else this.moveY = 0;
}

function Jump() {
    if (this.y >= (canvas.height - this.height)) {
        this.moveY = -5;
    }
}

function Hit(player) {
    if ((this.x+this.width/2) >= (player.x + player.width/2)) this.moveX = 4;
    else this.moveX = -4;
    this.moveY = -9;
}

//----------以上部分不讲----------------


ball.hit = Hit;
ball.drop = p1.drop = p2.drop = Drop;
p1.jump = p2.jump = Jump;
Loop();