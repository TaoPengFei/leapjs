/***************************************************************

class Ellipse(x, y, radiusX, radiusY)

椭圆类
x, y:       椭圆的圆心位置
radiusX:    椭圆的水平半径
radiusY:    椭圆的垂直半径


***************************************************************/

var e = new Ellipse(100, 100, 50, 20); // x, y, rX, rY
e.strokeStyle = "red";
e.fillStyle = "orange";

e.draw();

e.y += 100;
e.rX = 30;
e.fill();

e.x += 100;
e.radiusY = 40; // both radiusY or rY works

e.shadowColor = 'pink';
e.shadowBlur = 4;
e.shadowOffsetX = 5;
e.shadowOffsetY = 5;
e.fill();