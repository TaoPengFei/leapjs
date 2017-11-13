var sky = new Rectangle(0, 0, 350, 400);

var sea = new Rectangle(0, 400, 350, 150);
sea.fillStyle = "blue";

var sun = new Circle(200, 440, 40);
sun.fillStyle = "red";

var draw = function(){
    sky.draw();
    sun.y -= 1;
    
  	sun.draw();
  	sea.draw();
};

setInterval(draw, 100);
