//设置画布大小
canvas.width = 400;
canvas.height = 500;

//创建对象，定义变量
var player = new Sprite('http://otde8iv1i.bkt.clouddn.com/i_plane4.png',100,430,60,60);
var bg = new Sprite('http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg',0,0,400,500);
var coin = new Sprite('http://otde8iv1i.bkt.clouddn.com/i_bullet4.png',150,150,54,53);
var scoreTxt = new Text();
var score = 0;

function Loop() {
    
    //控制角色移动和宝物下落
    player.x = Mouse.x - 30;
    coin.y += 5;
    
    //宝物出屏幕后重新出现
    if (coin.y > 550) {
        coin.y = -53;
        coin.x = Math.random() * 350;
    }
    
    //角色碰撞宝物加分
    if(player.collide(coin)) {
       coin.y = -53;
       coin.x = Math.random() * 350;
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

Loop();