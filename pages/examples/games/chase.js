var bg = new Sprite("https://rss.leaplearner.com/Image/Bgs/circuitrybg1.png", 0, 0, canvas.width, canvas.height);
var monster = new Sprite("https://rss.leaplearner.com/Image/Role/CircleFace.png", 0, 0, 20, 20);
var player = new Sprite("https://rss.leaplearner.com/Image/Role/Alien2.png", 200, 200, 50, 50);
player.setCollisionScale(0.5, 0.5);

monster.update = function(){
    let tx = player.x + player.w/2;
    let ty = player.y + player.h/2;
    
    let cx = this.x + this.w/2;
    let cy = this.y + this.h/2;
    
    let dx = tx - cx;
    let dy = ty - cy;
    
    let r = Math.sqrt(dx*dx + dy*dy);
    if(r<1) r=1;
    this.x += dx/r * this.speed;
    this.y += dy/r * this.speed;
};

var run = false;
Mouse.down = function(){ run = true; };
Mouse.up = function(){ run = false; };

player.update = function(){
    let tx = Mouse.x;
    let ty = Mouse.y;
    
    let cx = player.x + player.w/2;
    let cy = player.y + player.h/2;
    
    let dx = tx - cx;
    let dy = ty - cy;
    
    let r = Math.sqrt(dx*dx + dy*dy);
    if(r<10) r=10;
    player.x += dx/r * 5;
    player.y += dy/r * 5;
};

var monsters = [];
monsters.act = function(){
    monsters.forEach(function(monster) {
        monster.update();
        monster.draw();
        if(monster.collide(player)){
            nextFrame(GameOver);
        }
    });
};

function main(){
    nextFrame(main);
    canvas.clear();
    bg.draw();
    monsters.act();
    
    if(run) player.update();
    player.draw();
    text(monsters.length, 10, 40, 30, 'red');
}

function GameStart(){
    while(monsters.length) monsters.pop();
    nextFrame(main);
}

var retry = new Text("Retry", 120, 300, 50);
retry.click = GameStart;
function GameOver(){
    retry.draw();
}

function addMonster(){
    var newMonster = monster.clone();
    let r = Math.random();
    if(r<0.25){
        newMonster.x = 0;
        newMonster.y = canvas.height * Math.random();
    } else if(r<0.5){
        newMonster.x = canvas.width;
        newMonster.y = canvas.height * Math.random();
    } else if(r<0.75){
        newMonster.x = canvas.width * Math.random();
        newMonster.y = 0;
    } else{
        newMonster.x = canvas.width * Math.random();
        newMonster.y = canvas.height;
    }
    newMonster.speed = 0.5 + Math.random();
    monsters.push(newMonster);
}

loadRssAndRun(main);
setInterval(addMonster, 1000); // 1000ms出来一个怪
