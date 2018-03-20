/***************************************************************

class Polygon(x1, y1, x2, y2, x3, y3, ...)

多边形类
x1, y1:     多边形第一个点的位置
x2, y2:     多边形第二个点的位置
x3, y3:     多边形第三个点的位置
...

注意：polygon的点记录在在triangle.points中

polygon.points: {x1, y1, ... }

***************************************************************/

var poly = new Polygon(100, 50, 50, 150, 160, 80, 40, 80, 150, 150);
poly.lineWidth = 3;
poly.strokeStyle = "red";
poly.fillStyle = "orange";

poly.stroke();

poly.y += 150;
poly.fill();

poly.x += 150;
poly.radius = 40; // both radius or r works
poly.shadowColor = 'pink';
poly.shadowBlur = 4;
poly.shadowOffsetX = 5;
poly.shadowOffsetY = 5;
poly.fill();