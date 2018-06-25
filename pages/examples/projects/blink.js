// 游戏开始时间，单位ms
var bear = new Sprite("https://rss.leaplearner.com/Image/Animals/Bear.png", 100, 100, 100, 100);

function draw(){
    canvas.clear();
    
    bear.draw();
}

run(draw);

// 点击让bear闪动

Mouse.click = function(){
    
    // globalAlpha: 让图像变透明
    // new Swing(start, middle, time, repeat)
    // 下属参数表示globalAlpha用2s时间从1到0又到1，不重复
    bear.globalAlpha = new Swing(1, 0, 2, false);
};