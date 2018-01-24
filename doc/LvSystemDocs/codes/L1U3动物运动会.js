canvas.width = 600;
canvas.height = 400;

var bg = new Sprite('http://ou1htxdl4.bkt.clouddn.com/crs.jpg',0,-130,600,530);
var p1 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/santa1.png',200,200,70,80);
var p2 = new Sprite('https://rss.leaplearner.com/Image/Animals/Cat.png',500,200,70,80);
var ball = new Sprite("http://ou1htxdl4.bkt.clouddn.com/c_ball.png",100, 260, 40,40);
var tree = new Sprite("http://ou1htxdl4.bkt.clouddn.com/c_tree.png",250, 200, 100, 200);

var scoreTxt = new Text();
var score1 = 0;
var score2 = 0;

var moveX1 = 0;
var moveY1 = 0;

var moveX2 = 0;
var moveY2 = 0;

var moveXBall = 0;
var moveYBall = 0;



function Loop() {

    canvas.clear();


    p1.x = p1.x + moveX1;
    p1.y = p1.y + moveY1;
    
    if (p1.y > 320) {
        moveY1 = 0;
    }
    else {
        moveY1 = moveY1 + 0.1;
    }
    
    p2.x = p2.x + moveX2;
    p2.y = p2.y + moveY2;
    
    if (p2.y > 320) {
        moveY2 = 0;
    }
    else {
        moveY2 = moveY2 + 0.1;
    }
    
    ball.x = ball.x + moveXBall;
    ball.y = ball.y + moveYBall;

    if (ball.y > 360) {
        moveYBall = 0;
    }
    else {
        moveYBall = moveYBall + 0.1;
    }
    
    if (p1.collide(ball)) {
        //碰撞到后的反应
        score1 = score1 + 10000;
        moveYBall = -5;
        //封装成“左”和“右”
        if ((p1.x + 35) < ball.x) {
            moveXBall = 3;
        }
        else {
            moveXBall = -3;
        }
    }
    
    if (p2.collide(ball)) {
        //碰撞到后的反应
        score2 = score2 + 10000;
        moveYBall = -5;
        //封装成“左”和“右”
        if ((p2.x + 35) < ball.x) {
            moveXBall = 3;
        }
        else {
            moveXBall = -3;
        }
    }
    
    if (tree.collide(ball)) {
        //碰撞到后的反应
        moveYBall = -5;
        //封装成“左”和“右”
        if ((tree.x + 35) < ball.x) {
            moveXBall = 3;
        }
        else {
            moveXBall = -3;
        }
    }
    
    if (ball.x < 0) {
        moveXBall = 3;
    }
    if (ball.x > 560) {
        moveXBall = -3;
    }
    scoreTxt.x = 200;
    scoreTxt.src = "P1:" + score1 + "     P2:" + score2;
    bg.draw();
    p1.draw();
    p2.draw();
    tree.draw();
    ball.draw();
    scoreTxt.draw();
}

setInterval(Loop,10);





Key['a'].down = function() {
    moveX1 = -3;
};

Key['a'].up = function() {
    moveX1 = 0;
};

Key['d'].down = function() {
    moveX1 = 3;
};

Key['d'].up = function() {
    moveX1 = 0;
};

Key['ArrowLeft'].down = function() {
    moveX2 = -3;
};

Key['ArrowRight'].down = function() {
    moveX2 = 3;
};

Key['ArrowLeft'].up = function() {
    moveX2 = 0;
};

Key['ArrowRight'].up = function() {
    moveX2 = 0;
};

Key['w'].down = function() {
    if (p1.y >= 320) {
        moveY1 = -5;
    }
};

Key['ArrowUp'].down = function() {
    if (p2.y >= 320) {
        moveY2 = -5;
    }
};







