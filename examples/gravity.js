var ball = new Circle(200, 0, 20);
var g = 0.5;

ball.yspeed = 0;

ball.click = function(){
    this.yspeed = -10;
};

ball.update = function(){
  this.yspeed += g;
  this.y += this.yspeed;
  if(this.y > 500) this.y = 500; 
};

function loop(){
  canvas.clear();
  ball.update();
  ball.draw();
  requestAnimationFrame(loop);
}

loop();
