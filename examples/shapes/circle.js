/***************************************************************

class Circle(x, y, radius)

圆类
x, y:       圆的圆心位置
radius:     圆的半径


***************************************************************/

var c = new Circle(100, 100, 50); // x, y, rX, rY
c.lineWidth = 3;
c.strokeStyle = "red";
c.fillStyle = "orange";

c.draw();

c.y += 100;
c.r = 30;
c.fill();

c.x += 100;
c.radius = 40; // both radius or r works
c.shadowColor = 'pink';
c.shadowBlur = 4;
c.shadowOffsetX = 5;
c.shadowOffsetY = 5;
c.fill();