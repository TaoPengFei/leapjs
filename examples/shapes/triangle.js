/***************************************************************

class Triangle(x1, y1, x2, y2, x3, y3)

三角形类
x1, y1:     三角形第一个点的位置
x2, y2:     三角形第二个点的位置
x3, y3:     三角形第三个点的位置

注意：triangle的点记录在在triangle.points中

triangle.points: {x1, y1, ... }

***************************************************************/

var tria = new Triangle(100, 100, 50, 50, 100, 50);
tria.lineWidth = 3;
tria.strokeStyle = "red";
tria.fillStyle = "orange";

tria.draw();

tria.y += 100;
tria.fill();

tria.x += 100;
tria.radius = 40; // both radius or r works
tria.shadowColor = 'pink';
tria.shadowBlur = 4;
tria.shadowOffsetX = 5;
tria.shadowOffsetY = 5;
tria.fill();