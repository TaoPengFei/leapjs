var url = "https://llcs-1252287760.cossh.myqcloud.com/";

var image = new Sprite(url+"animations/fire.png", 0, 50, 60*5, 60);
var fire = new Animation(url+"animations/fire.png", 0, 150, width=60, height=60);

// 序列帧动画需要设置以下属性，才可生效
fire.setFrame(5, 1);

// 设置帧动画播放速度，动画间隔 = 1000ms/speed
fire.setSpeed(speed=1);     

// 用于展示当前帧
var rect = new Rectangle(0, 50, width, height);
var n=0;

rect.update = function(){
    rect.x = width * (Math.floor(n++*speed/60) % 5);
};

function main(){
    canvas.clear();
    rect.update();
    
    image.draw();
    rect.stroke();
    fire.draw();
}

run(main);
