// 计算a、b的距离
function distance(a, b){
    return Math.sqrt((a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y));
}

var bear = new Sprite("https://rss.leaplearner.com/Image/Animals/Bear.png", 100, 100, 100, 100);



// 追踪函数
function chase(target){
    
    // 距离：
    r = distance(this, target);
    
    
    this.x += this.speed * (target.x - this.x) / r;
    this.y += this.speed * (target.y - this.y) / r;
}

// 设置bear的速度
bear.speed = 1;
// 将bear的chase方法设置为追踪函数
bear.chase = chase;

function draw(){
    canvas.clear();
    bear.chase(Mouse);
    bear.draw();
}

run(draw);