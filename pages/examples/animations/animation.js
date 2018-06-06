var url = "https://llcs-1252287760.cossh.myqcloud.com/";
var w = 60;
var h = 70;
var image = new Sprite(url+"animations/fire.png", 10, 10, w*5, h);
var fire = new Animation(url+"animations/fire.png", 10, 150, w, h);

// 序列帧动画需要设置以下属性，才可生效
fire.setFrame(5, 1); // 水平方向有多少图，垂直方向有多少图

// 设置帧动画播放速度，动画间隔 = 1000ms/speed
fire.setSpeed(speed=1);     

// 用于展示当前帧
var rect = new Rectangle(image.x, image.y, w, h);
var n=0;

rect.update = function(){
    rect.x = 10 + w * (Math.floor(n++ * speed / 60) % 5);
};

function main(){
    canvas.clear();
    rect.update();
    
    image.draw();
    rect.stroke();
    fire.draw();
}

run(main);
