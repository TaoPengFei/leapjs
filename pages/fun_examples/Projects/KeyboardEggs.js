//设置画布大小
canvas.width = 350;
canvas.height = 450;

//创建对象，定义变量
var player = new Sprite('http://otde8iv1i.bkt.clouddn.com/i_plane4.png',150,380,60,60);
var bg = new Sprite('http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg',0,0,400,500);
var coin = new Sprite('http://otde8iv1i.bkt.clouddn.com/i_bullet4.png',150,150,54,53);
var scoreTxt = new Text();
var score = 0;
var moveX = 0;

function Loop() {
    
    //控制宝物下落
    player.x += moveX;
    if (player.x < 0) player.x = 0;
    if (player.x > (canvas.width - player.width)) player.x = (canvas.width - player.width);
    coin.y += 5;
    
    //宝物出屏幕后重新出现
    if(coin.y > canvas.height) {
      coin.y = -coin.height;
      coin.x = Math.random() * (canvas.width - coin.width);
    }
    
    //角色碰撞宝物加分
    if(player.collide(coin)) {
       coin.y = -coin.height;
       coin.x = Math.random() * (canvas.width - coin.width);
       score += 1;
    }
    
    //显示得分
    scoreTxt.src = "得分："+score;

    //画出所有元素
    bg.draw();
    player.draw();
    coin.draw();
    scoreTxt.draw();
    
    //再次调用Loop
    nextFrame(Loop);
}

Key.ArrowLeft.down = function() {
    moveX = -3;
};

Key.ArrowRight.down = function() {
    moveX = 3;
};

Key.ArrowLeft.up = function() {
    moveX = 0;
};

Key.ArrowRight.up = function() {
    moveX = 0;
};
Loop();