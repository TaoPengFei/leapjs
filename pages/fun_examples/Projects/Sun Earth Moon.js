canvas.width = 500;
canvas.height = 500;

var earth = new Circle(400,250,20);
var moon = new Circle(450,250,5);
var sun = new Circle(250,250,40);
var path = new Circle(250,250,150);
var universe = new Sprite('http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg',0,0,500,500);
var moon_angle = 0;
var earth_angle = 0;

earth.fillStyle = "lightblue";
moon.fillStyle = "grey";
sun.fillStyle = "red";

function Loop() {
    
    //地球绕着太阳转
    earth_angle += 0.2;
    earth.setAnchor(sun.x,sun.y);
    earth.rotate(earth_angle);
    
    //月亮绕着地球转
    moon_angle += 1;
    moon.x = earth.center().x + 50;
    moon.y = earth.center().y;
    moon.setAnchor(earth.center().x,earth.center().y);
    moon.rotate(moon_angle);
    
    //画出元素
    universe.draw();
    path.stroke();
    sun.draw();
    earth.draw();
    moon.draw();
    
    nextFrame(Loop);
}

function center() {
    var x,y;
    x = (this.points[0].x + this.points[4].x)/2;
    y = (this.points[0].y + this.points[4].y)/2;
    return {
        x: x,
        y: y
    };
}
earth.center = center;

Loop();
