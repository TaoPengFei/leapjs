var url = "https://rss.leaplearner.com/Image/Role/Alien4.png";

var hero = new Sprite(url, 100, 100, 100, 100);
var icon = new Sprite(url, 10, 10, 20, 20);

var life = 4;

function draw(){
    canvas.clear();
    
    // 画出life个图标
    for(var i=0; i<life; i++){
        icon.x = 10 + i*20;
        icon.draw();
    }
    
    hero.draw();
}

run(draw);


// 点击扣除生命值
Mouse.click = function(){
    life--;
    if(life < 0){
        life = 4;
    }
};

