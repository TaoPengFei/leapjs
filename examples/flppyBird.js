var sky = new Sprite("http://llcs-1252287760.cossh.myqcloud.com/bgs/bg.png", 0, 0, 800, 450);
var ground = new Sprite("http://llcs-1252287760.cossh.myqcloud.com/bgs/ground.png", 0, 430, 600, 150);

var bird = new Animation("http://llcs-1252287760.cossh.myqcloud.com/animations/bird.png", 80, 20, 56, 42);
bird.setFrame(0, 0, 112, 84, 8, 1);
bird.setAnchor(100, 0);// flip bird
bird.scale(-1, 1);
bird.setSpeed(4);

var spike1 = new Sprite("http://llcs-1252287760.cossh.myqcloud.com/images/spike3.png", 500, 0, 80, 170);
var spike2 = new Sprite("http://llcs-1252287760.cossh.myqcloud.com/images/spike3.png", 500, 0, 80, 170);

var score_text = new Text("score", 10, 30);
score_text.fillStyle = "white";
var hiscore_text = new Text("hiscore", 300, 30);
hiscore_text.fillStyle = "white";

var bgm = new Audio();
bgm.src = "http://oq2qlcey8.bkt.clouddn.com/bgm.mp3";
bgm.loop = true;
bgm.play();

var sound = new Audio(); 
sound.src = "http://oq2qlcey8.bkt.clouddn.com/jump.mp3";

var collideSound = new Audio();
collideSound.src = "http://oq2qlcey8.bkt.clouddn.com/collision.mp3";

var g = 0.5;
var score = 0;
var hiscore = 0;
var t;

var gameOver = true;

spike1.updateAndDraw = function(speed){
  spike1.x -= speed;
  if(spike1.x + spike1.width < 0){
    spike1.x = canvas.width;
    spike1.y = 240 + 160 * Math.random();
    score++;
  }
  spike2.x = spike1.x;
  spike2.y = spike1.y - 360 + score*5;
  spike1.draw();
  spike2.draw();
};

bird.updateAndDraw = function(){
  this.yspeed += g;
  this.y += this.yspeed;
  bird.draw();
};

function moveAndDraw(speed){
  this.translate(0, 0);
  this.x -= speed;
  if(this.x<-this.width)
    this.x = 0;
  this.draw();
  this.translate(this.width, 0);
  this.draw();
}

sky.moveAndDraw = moveAndDraw;
ground.moveAndDraw = moveAndDraw;

score_text.updateAndDraw = function(){
  this.src = "score:" + score;
  this.draw();
};

hiscore_text.updateAndDraw = function(){
  if(hiscore < score) hiscore = score;
  this.src = "HI:" + hiscore;
  this.draw();
};
  
Mouse.down = function(){
  if(gameOver){
    gameOver = false;
    GameStart();
  }
  else {
    bird.yspeed = -10;
    sound.currentTime = 0;
    sound.play();
  }
};

function GameStart(){
  score = 0;
  bird.y = 100;
  bird.yspeed = -5;
  spike1.x = 600;
  spike1.y = 300;
  spike2.x = 600;
  bgm.play();
  requestAnimationFrame(GameLoop);
}

function GameLoop(){  
  if(checkGameStatus()){
    gameOver = true;
    collideSound.play();
    return; 
  }
  canvas.clear();
  
  sky.moveAndDraw(2);  
  
  spike1.updateAndDraw(6);
  
  ground.moveAndDraw(6);
  bird.updateAndDraw();
  
  score_text.updateAndDraw();
  hiscore_text.updateAndDraw();
  
  requestAnimationFrame(GameLoop);
}

function checkGameStatus(){
  if(bird.y + bird.height > ground.y) return true;
  if(bird.y + bird.height < 0) return true;  
  if(bird.collide(spike1) || bird.collide(spike2))
    return true;
  return false;
}

GameStart();
