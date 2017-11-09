var circle = new Circle(0, 0, 20);
var ripple = circle.clone();

var bgm = new Audio();
bgm.src = "http://oq2qlcey8.bkt.clouddn.com/bgm.mp3";
bgm.loop = true;
bgm.play();

var sound = new Audio();
sound.src = "http://oq2qlcey8.bkt.clouddn.com/jump.mp3";

var score = 0;
var hiscore = 0;

function randomInt(n){ return Math.floor(Math.random() * n); }
function randomColor(){
  return "rgba(" + randomInt(250) + "," + randomInt(250) + "," + randomInt(250) + "," + (0.3 +Math.random()*0.5) + ")";
}

circle.init = function(){
  this.x = 15 + Math.random() * (canvas.width-30);
  this.y = 0;
  this.r = 30 + Math.random() * 20;
  this.fillStyle = randomColor();
};

circle.update = function(){ 
    this.yspeed = 1 + score*0.5;
    this.y += this.yspeed;
};

var blowUp = function(){    
    this.globalAlpha *= 0.95; 
    this.r += 3;
};
ripple.update = blowUp;

circle.click = function(){
    score += 1;
    if(score > hiscore) hiscore = score;
    sound.currentTime = 0;
    sound.play();
    
    ripple = circle.clone();
    ripple.update = blowUp;
    ripple.click = null;

    circle.init();
};

function GameStart(){
    circle.init();
    score = 0;
    bgm.play();
    nextFrame(GameLoop);
}

function GameLoop(){
  canvas.clear();
  
  ripple.update();
  ripple.fill();
  
  circle.update();
  circle.fill();
    
  ("Score: " + score).draw();
  ("HI: " + hiscore).draw(canvas.width-100);

  if(iSGameOver())
      nextFrame(GameOver);
  else
      nextFrame(GameLoop);
}

function iSGameOver(){
    return circle.y > canvas.height;
}

function GameOver(){
    var retry_btn = new Rectangle(122, 350, 100, 50);
    retry_btn.click = GameStart;
    retry_btn.fill();
      
    "Game Over".draw(100, 160, null, "30px Arial");
    "Retry".draw(150, 380, "white"); 
}

GameStart();
