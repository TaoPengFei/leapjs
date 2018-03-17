/***************************************************************

polygon(x1, y1, x2, y2, x3, y3, ...,  *color)

在画布上画出一个多边形：

* 多边形的第一个点是：(x1, y1)
* 多边形的第二个点是：(x2, y2)
* 多边形的第三个点是：(x3, y3)
* ...
* 颜色为为color，可选参数，默认为 "orange"


***************************************************************/

canvas.showAxis();

polygon(50, 50, 100, 50, 100, 100);

polygon(150, 100, 170, 50, 200, 100, 220, 50, 'red');

fill(false);

polygon(50, 150, 100, 150, 100, 200);

polygon(150, 200, 170, 150, 200, 200, 220, 150, 'red');