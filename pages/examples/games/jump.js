// LeapLearner Canvas Engine v0.2.2
const Gravity = 0.5;
let StageSpeed = 0;
let score = 0;

class Stage extends Rectangle {
    constructor(x=300, y=stage.y + randint(-50, 50), w=randint(50-score/2, 100-score), h=100) {
        super(x, y, w, h);
        this.y = this.y < 0 ? 0 : this.y;
        this.y = this.y > canvas.height ? canvas.height : this.y;
        this.fillStyle = RGB(randint(1, 255), randint(1, 255), randint(1, 255));
        this.shadowColor = 'black';
        this.shadowBlur = 10;
        this.shadowOffsetX = 5;
        this.shadowOffsetY = 5;
        this.s = new Sine(1.0, 0.1 + score/100, 3);
        this.scale(1, this.s);
    }
    
    update() {
        this.x += StageSpeed;
    }
}

class Hero extends Sprite {
    constructor(src, x, y, w, h){
        super(src, x, y, w, h);
        this.yspeed = 0;
        this.maxH = this.h;
        this.setCollisionScale(1, 1);
    }
    
    update () {
        this.yspeed += Gravity;
        this.y += this.yspeed;
        
        if(this.collide(stage) && this.yspeed > 0) {
            StageSpeed = 0;
            
            let y = stage.getRealPoint(stage).y;
            if(this.y < y){
                this.yspeed = 0;
                this.y = y - this.h;           
            }
        }
    }
    
    jump () {
        this.loose();
        this.yspeed = -40 * (1-this.h/this.maxH);
        StageSpeed = -5;
    }

    press () {
       if(this.yspeed === 0){
        this.h = new Increase(this.h, 0.6 * this.maxH, 1, false);
       }
    }
    
    loose () {
        this.h = new Increase(this.h, this.maxH, 0.2, false);
    }
}

var stage = new Stage(80, 400, 80, 100);
var nextStage = new Stage();

let heroImg1 = 'https://rss.leaplearner.com/Image/Role/Partner1.png';
let heroImg2 = 'https://rss.leaplearner.com/Image/Role/Partner2.png';

let hero = new Hero(heroImg1, 100, 200, 50, 60);
let bg = new Sprite('https://rss.leaplearner.com/Image/Bgs/mainbg2.png', -0, 0, canvas.width+400, canvas.height);

let s = new Sine(1.1, 0.1, 10);
bg.scale(s, s);
let xuli = new Audio();
xuli.src = "https://rss.leaplearner.com/Audio/Fishrun/hit_yun.mp3";
let suc = new Audio();
suc.src = "https://rss.leaplearner.com/Audio/Fishrun/linkCoin1.mp3";

function draw(){
    canvas.clear();
    bg.draw();
    hero.draw();
    
    stage.fill();
    nextStage.fill();
    
    text(score, 50, 50, 60);
}

function update(){
    hero.update();
    stage.update();
    nextStage.update();
    
    if(nextStage.x < hero.x) {
        stage = nextStage;
        nextStage = new Stage();
        score ++;
        suc.currentTime = 0;
        suc.play();
    }
    
    if(hero.y > canvas.height){
        StageSpeed = 0;
        hero.y = 0;
        hero.yspeed = 0;
        score = 0;
        stage.x = hero.x;
        hero.src = hero.src ===  heroImg1? heroImg2 : heroImg1;
    }
}

Mouse.down = function() {
    hero.press();
    xuli.currentTime = 0;
    xuli.play();
};

Mouse.up = function() {
    hero.jump();
    xuli.pause();
};


run(draw);
run(update);