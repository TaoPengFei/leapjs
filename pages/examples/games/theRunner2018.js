canvas.resize(350, 500);
var url = "https://llcs-1252287760.cossh.myqcloud.com/";
var sky = new Sprite(url+"bgs/bg.png", 0, 0, 800, 450);
var ground = new Sprite(url+"bgs/ground.png", 0, 430, 600, 150);

var bird = new Animation(url+"animations/bird.png", 80, 20, 56, 42);
bird.setFrame(8, 1); // shiftX, shiftY, frameX, frameY, columns, rows

bird.scale(-1, 1);    // These two lines are used to flip bird
bird.setCollisionScale(0.4, 0.4); // the actual collision scale

var spike1 = new Sprite(url+"images/spike3.png", 500, 300, 80, 170);
var spike2 = new Sprite(url+"images/spike3.png", 500, 0, 80, 170);

var bgm = new Audio();
bgm.src = url+"audio/bgm.mp3";
bgm.loop = true;
bgm.play();

var sound = new Audio(); 
sound.src = url+"audio/jump.mp3";

var collideSound = new Audio();
collideSound.src = url+"audio/collision.mp3";

var score = 0;
var hiscore = 0;

spike1.update = function(){
  this.x += -6;             // Moving speed
  if(this.x + this.width < 0){      // If spike move out canvas
    this.x = canvas.width;
    this.y = 200 + 200 * Math.random(); // Spike in the buttom
    score++; 
  }
};

spike2.update = function(){
  this.x = spike1.x;
  this.y = spike1.y - 360 + score*5; // Gap between spikes
};

bird.update = function(){
  this.yspeed += 0.5;         // Gravity
  this.y += this.yspeed;
};

function moveAndDraw(speed){  // scene comes with same scene
  this.translate(0, 0);
  this.x -= speed;
  if(this.x<-this.width) this.x = 0; // move out from canvas
  this.draw();
  this.translate(this.width, 0);
  this.draw();
}

sky.moveAndDraw = moveAndDraw;
ground.moveAndDraw = moveAndDraw;
  
Mouse.down = function(){
  if(isGameOver()){
    GameStart();
  }
  else {
    bird.yspeed = -10;      // Bird jump speed
    sound.currentTime = 0;
    sound.play();
  }
};

function GameStart(){
  score = 0;
  bird.y = 100;
  bird.yspeed = -5;
  spike1.x = 600;
  spike2.x = 600;
  bgm.play();
  GameLoop();
}

var scoreMsg = new Text();
scoreMsg.fillStyle = "white";
var hiScoreMsg = new Text("", 300, 0);
hiScoreMsg.fillStyle = "white";

function GameLoop(){  
  if(isGameOver()){
    new Text("Game Over TT", 110, 200).draw();
    new Text("Try Again", 130, 240).draw();
    collideSound.play();
  } else {
    canvas.clear();

    sky.moveAndDraw(2);  

    spike1.update();
    spike2.update();
    bird.update();
      
    spike1.draw();
    spike2.draw();

    ground.moveAndDraw(6);    // On top of spikes, keep same speed with spikes
    bird.draw();
      
    scoreMsg.src = "score:" + score;
    scoreMsg.draw();
    
    hiScoreMsg.src = "HI:" + hiscore;
    hiScoreMsg.draw();

    nextFrame(GameLoop);
  }
}

function isGameOver(){
  if(bird.y + bird.height > ground.y) return true;
  if(bird.y + bird.height < 0) return true;  
  if(bird.collide(spike1) || bird.collide(spike2))
    return true;
  return false;
}

loadRssAndRun(GameStart);
