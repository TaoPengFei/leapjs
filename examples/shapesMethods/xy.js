/***************************************************************

shape.x
shape.y

获取或者设置图形的x值

Rectangle：左上角顶点的位置
Ellipse, Circle：圆心的位置

Line, Triangle, Polygon：中心点的位置

***************************************************************/

let rect = new Rectangle(10, 10, 100, 50);
let circle = new Circle(100, 150, 20);
let line = new Line(10, 200, 110, 220);

rect.draw();
circle.draw();
line.draw();

rect.x += 150;
circle.x += 150;
line.x += 150;

rect.draw();
circle.draw();
line.draw();