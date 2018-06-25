// 游戏开始时间，单位ms
var start = Date.now() / 1000;

function draw(){
    canvas.clear();
    
    // 当前时间，单位ms
    var cur_time = Date.now()/ 1000;
    
    // 过去的时间
    var t = Math.floor(cur_time - start);
    
    // 计时
    text("计时：" + t);
    
    // 倒计时
    text("倒计时：" + (100-t), 0, 100);
}

run(draw);