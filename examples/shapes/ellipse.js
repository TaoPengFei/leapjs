/***************************************************************

class Ellipse(x, y, radiusX, radiusY)

椭圆类
x, y:       椭圆的圆心位置
radiusX:    椭圆的水平半径
radiusY:    椭圆的垂直半径


***************************************************************/

var ellipse = new Ellipse(200, 200, 100, 50); // x, y, rX, rY
ellipse.strokeStyle = "#760012";
ellipse.fillStyle = "#128712";

ellipse.draw();

ellipse.y = 400;
ellipse.rX = 150;

ellipse.fill();

ellipse.x = 600;
ellipse.radiusY = 100; // both radiusY or rY works

ellipse.stroke();