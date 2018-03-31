/***************************************************************

shape.translate(x, y)

平移图形

平移图形，不会改变图形的中心点

参数：
x：     水平平移距离，默认为0
y：     垂直平移距离，默认为0

***************************************************************/

var rect = new Rectangle(100, 100, 100, 100);

fill(false);
rectangle(100, 100, 100, 100);

rect.translate(20, 10);
rect.globalAlpha = 0.5;
rect.fillStyle = 'red';
rect.draw();
