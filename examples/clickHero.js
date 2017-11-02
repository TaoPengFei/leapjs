canvas.width = 350;
canvas.height = 550;
Circle.prototype.copyTo = function(c){
  c.x = this.x;
  c.y = this.y;
  c.r = this.r;
  c.fillStyle = this.fillStyle;
  c.globalAlpha = this.globalAlpha;
};

var circle = new Circle(0, 0, 20);
var boom = new Circle(0, 0, 10);
var boom2 = new Circle(canvas.width, canvas.height, 10);

var gameOver_text = new Text("Game Over", 100, 160, "30px Arial");
var retry_text = new Text("Retry", 150, 380); 
retry_text.fillStyle = "white";
var retry_btn = new Rectangle(122, 350, 100, 50);
retry_btn.fillStyle = "orange";
retry_btn.globalAlpha = 0.5;

var score_text = new Text();
var hiscore_text = new Text("", canvas.width-100);

var bgm = new Audio();
bgm.src = "http://oq2qlcey8.bkt.clouddn.com/bgm.mp3";
bgm.autoPlay = true;
bgm.loop = true;
bgm.play();

var music = new Music("http://oq2qlcey8.bkt.clouddn.com/jump.mp3");

var score = 0;
var hiscore = 0;

function randomColor(){
  return "rgba(" + Math.floor(Math.random()*250) + ","  + Math.floor(Math.random()*250) + ","  + Math.floor(Math.random()*250) + "," + (0.4 + Math.random()*0.5) + ")";
}

circle.init = function(){
  this.x = 15 + Math.random() * (canvas.width-30);
  this.y = 0;
  this.r = 30 + Math.random() * 20;
  this.fillStyle = randomColor();
};

circle.update = function(){  this.y += 1 + score*0.5;};
boom.update = function(){    
    this.globalAlpha *= 0.95; 
    this.r += 3;
};
boom2.update = boom.update;

retry_btn.click = GameStart;
circle.click = function(){
    score += 1;
    music.currentTime = 0;
    music.play();
    boom.copyTo(boom2);
    circle.copyTo(boom);
    if(score > hiscore) hiscore = score;
    circle.init();
};

function GameStart(){
    circle.init();
    score = 0;
    gameOver = 0;
    bgm.play();
    GameLoop();
}

function GameLoop(){
  canvas.clear();
  
  boom2.update();
  boom2.fill();
  boom.update();
  boom.fill();
  
  circle.update();
  circle.fill();
    
  score_text.src = "Score: " + score;
  score_text.fill();
  
  hiscore_text.src = "HI: " + hiscore;
  hiscore_text.fill();
  if(!GameOver())requestAnimationFrame(GameLoop);
}

function GameOver(){
  if(circle.y > canvas.height){
    gameOver = true;
    gameOver_text.draw();
    retry_btn.fill();
    retry_text.draw();

    boom.copyTo(boom2);
    circle.copyTo(boom);
    return true;
  }
  return false;
}

GameStart();
