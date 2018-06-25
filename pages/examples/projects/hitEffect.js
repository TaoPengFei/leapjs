// Let us code the future
var boom = new Sprite("https://llcs-1252287760.cossh.myqcloud.com/images/Boom2.png", 0, 0, 80, 100);

var bullet = new Sprite("https://rss.leaplearner.com/Image/Role/CircleFace.png", 0, 200, 20, 20);

var target = new Sprite("https://rss.leaplearner.com/Image/Role/CAT2.png", 200, 200, 100, 100);

// bullet的x在0到400之间变化
bullet.x = new Swing(0, 400, 4);

function draw(){
    canvas.clear();

    target.draw();
    bullet.draw();
    
    // 如果击中，p为一个｛x, y｝对象，代表碰撞点的坐标
    p = bullet.collide(target);
    if(p){
        boom.x = p.x - 50;
        boom.y = p.y - 60;
        boom.draw();
    }
}

run(draw);