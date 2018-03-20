/***************************************************************

shape.x, shape.y

获取或者设置图形的位置，对于不同图形，代表不同的含义

Rectangle:                  长方形左上角顶点的位置
Ellipse, Circle:            椭圆或者圆的圆心的位置

Line, Triangle, Polygon:    中心点的位置

***************************************************************/

let rect    = new Rectangle (10, 10, 100, 50);
let circ    = new Circle    (60, 120, 20);
let line    = new Line      (10, 200, 110, 220);

rect.draw();
circ.draw();
line.draw();

rect.x += 150;      // 往右移动150的距离
circ.x += 150;      // 往右移动150的距离
line.x += 150;      // 往右移动150的距离

rect.stroke();
circ.stroke();
line.stroke();