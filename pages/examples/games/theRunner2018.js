canvas.resize(600, 500);
canvas.scale(10, 10);

var speed = 0.5;

var url = "https://llcs-1252287760.cossh.myqcloud.com/";

var sky = new Sprite(url+"bgs/bg.png", 0, 0, 80, 40);
var ground = new Sprite(url+"bgs/ground.png", 0, canvas.height/10-10, 80, 15);

var hero = new Animation(url+"animations/guagua.png", 5, 12, 5, 7);
hero.setFrame(0, 0, 61, 98, 8, 1); // shiftX, shiftY, frameX, frameY, columns, rows
hero.setCollisionScale(0.5, 0.5);

var obstacles = [];

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

obstacles.update = function(){
    obstacles.forEach(function(o){
        o.x -= speed;
        if(o.x + o.w < 0) obstacles.remove(o);
    });
};

obstacles.draw = function() {
    obstacles.forEach(function(o){
        if(o.x < canvas.width/10) o.draw();
    });
};

hero.jumpCount = 0;
hero.jump = function(){
    if(hero.jumpCount < 2 && hero.yspeed > -1){
        hero.yspeed = -1.2; 
        hero.jumpCount++;
    }
};

var score = 0;
var hiscore = 0;

hero.update = function(){
  this.yspeed += 0.05;         // Gravity
  this.y += this.yspeed;
  if(this.y + this.h > ground.y){
      this.y = ground.y - this.h + 0.5;
      hero.jumpCount = 0;
  }
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


function GameLoop(){  
    canvas.clear();
    
    obstacles.update();
    hero.update();
    
    score += speed;
    hiscore = hiscore < score ? score : hiscore;

    sky.moveAndDraw(0.2); 
    
    obstacles.draw();
    hero.draw();
    
    ground.moveAndDraw(speed);    // On top of spikes, keep same speed with spikes
    text("Distance:" + Math.floor(score), 1, 1, 2, 'white');
    text("HI:" + Math.floor(hiscore), 50, 1, 2, 'white');
    
    if(isGameFailed()){
        nextFrame(GameFail);
    } else if(isGameWin()){
        nextFrame(GameWin);
    } else if(isPrepare){
        GamePrepare();
    } else {
        nextFrame(GameLoop);        
    }
}

function isGameFailed(){
    for(let i=0; i<obstacles.length; i++){
        let o = obstacles[i];
        if(o.collide(hero)) return true;
    }
    return false;
}

function isGameWin(){
    return obstacles.length <= 0;
}

function GameStart(){
    obstacles.init();
    score = 0;
    hero.y = 30;
    hero.yspeed = 0;
    GameLoop();
}

function GameFail(){
    text('Failed!', 17, 10, 10, 'red');
    text('Click to try again!!!', 18, 23, 3, 'white');
}

function GameWin(){
    text('WIN!', 17, 10, 10);
}

Mouse.down = function(){
    if(isPrepare || isGameWin() || isGameFailed()){
        nextFrame(GameStart);
        isPrepare = false;
    } else {
        hero.jump();
    }
};

let fish = new Sprite("https://rss.leaplearner.com/Image/Role/Fish6.png", 100, ground.y-4, 6, 6);

obstacles.init = function(){
    
    obstacles.splice(0, obstacles.length);
    let obs = fish.clone();
    obstacles.push(obs);
    
    /* 
    obs = fish.clone();
    obs.x = 200;
    obs.y = new Swing(10, 40, 3);
    obstacles.push(obs);
    
    obs = fish.clone();
    obs.x = 300;
    obs.rotate(new Increase(0, 360, 3));
    obstacles.push(obs);
    
    obs = fish.clone();
    obs.x = 400;
    obs.translate(new Swing(-10, 10, 1), 0);
    obstacles.push(obs);
    
    obs = fish.clone();
    obs.x = 500;
    obs.scale(new Swing(1, 2, 1), new Swing(1, 2, 1));
    obstacles.push(obs);
    */
};

function addObstacle(){
    obs = fish.clone();
    
    obs.x += 20 * Math.random();
    obs.y = randint(10, ground.y-4);
    
    let r = Math.random();
    let d = 0.0001 * score
    if(r < 0.2 + d){ obs.transform.translateX = new Sine(0, 5, 2-d); }
    if(r > 0.8 - d){ obs.y = new Swing(ground.y-4, 10, 2-d); }
    
    if(Math.random() < 0.2 + d){ 
        let r = new Swing(1, 2+d, 2-d);
        obs.scale(r, r); 
    }
    
    if(Math.random() < 0.2 + d){ obs.globalAlpha = new Sine(0.5, 0.5, 1+d); }
    
    if(obstacles.length < 10) obstacles.push(obs);
    setTimeout(addObstacle, 2000-score/10);
}

isPrepare = true;
function GamePrepare(){
    text("The Runner 2018",10, 13, 5)
    text("Click to Start!", 17, 20, 3, 'white')
}

addObstacle();

loadRssAndRun(GameStart);
