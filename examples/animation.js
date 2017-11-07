var url = "http://llcs-1252287760.cossh.myqcloud.com/";

var width = 60;
var height = 60;
var frameCount = 5;
var row = 1;
var speed = 2;
var image = new Sprite(url+"animations/fire.png", 0, 50, width*5, height);

var fire = new Animation(url+"animations/fire.png", 0, 150, width, height);

fire.setFrame(0, 0, 77, 84, frameCount, row); 
// shiftX, shiftY, frameX, frameY, columns, rows	
fire.setSpeed(speed);		// Animation frame speed

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
    nextFrame(main);
}

loadRssAndRun(main);
