/******* 改变画布大小 *******/
canvas.width = 355;
canvas.height = 500;

/******* 定义图片对象 *******/
var score;
var hi_score = 0;
var sky = new Sprite("http://ou1htxdl4.bkt.clouddn.com/qiuchang.jpg", 0, 0, 355, 500);
var turkey1 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 80, 20, 80, 80);
var turkey2 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 160, 20, 80, 80);
var turkey3 = new Sprite("http://ou1htxdl4.bkt.clouddn.com/football.png", 240, 20, 80, 80);
var scoreMsg = new Text("Score:",10,30);
var hiMsg = new Text("Hi:",300,30);
var overMsg = new Text("Click Restart!",120,300);


/******* 主函数 *******/
var acc;
var speed;
var isOver;
var ta1 = 0;

function GameStart() {
  score = 0;
  acc = 0.05;
  turkey1.x = 50;
  turkey2.x = 145;
  turkey3.x = 240; 
  turkey1.y = turkey2.y = turkey3.y = 20;
  turkey1.yspeed = turkey2.yspeed = turkey3.yspeed = 0;
  turkey1.angle = turkey2.angle = turkey3.angle = 0;
  turkey1.xacc = turkey2.xacc = turkey3.xacc = 0;
  speed = -5;
  isOver = false;
  GameLoop();
}

function GameLoop() {
  if (isOver === false){
    sky.draw();
    scoreMsg.src = "Score:"+score;
    scoreMsg.draw();
    hiMsg.src = "Hi:"+hi_score;
    hiMsg.draw();
    turkey1.drop();
    turkey2.drop();
    turkey3.drop();
    turkey1.roll();
    turkey2.roll();
    turkey3.roll();
  }
  else {
    overMsg.draw();
  }
  nextFrame(GameLoop);
}
turkey1.drop = turkey2.drop = turkey3.drop = drop;
turkey1.roll = turkey2.roll = turkey3.roll = rotateTurkey;

function rotateTurkey(){
  this.angle += this.xacc;     this.setAnchor(this.x+this.width/2,this.y+this.height/2);
    this.rotate(this.angle); 
}

function drop(){
  if (this.x < 0 || this.x > (canvas.width - this.width)){
    this.xacc = -this.xacc;
  }
  this.x += this.xacc;
  this.yspeed += acc;
  this.y += this.yspeed;
  this.draw();
  if (this.y > (canvas.height - this.height)){
    isOver = true;
  }
}

turkey1.click = function(){
  var clickSound = new Audio();
clickSound.src = "http://ou1htxdl4.bkt.clouddn.com/cheers.mp3";
  clickSound.loop = false;
  clickSound.play();
  this.xacc = (-0.5 + Math.random())*10;
  speed -= 0.3;
  this.yspeed = speed;
  acc += 0.01;
  score += 1;
  hi_score = score > hi_score ? score : hi_score;
};


sky.click = function() {
  if (isOver){
    GameStart();
  }
};

turkey2.click = turkey1.click;
turkey3.click = turkey1.click;

GameStart();