/***************************************************************

ellipse(x, y, xRadius, yRadius, *color)

在画布上画出一个椭圆：

* 椭圆的圆心位置为（x,y）
* 椭圆水平方向的半径为xRadius
* 椭圆垂直方向的半径为yRadius
* 颜色为为color，可选参数，默认为 "orange"


***************************************************************/

canvas.showAxis();

ellipse(100, 100, 30, 20);

ellipse(200, 100, 20, 30, 'green');

ellipse(300, 100, 40, 30, 'red');

fill(false);

ellipse(100, 200, 30, 20);

ellipse(200, 200, 20, 30, 'green');

ellipse(300, 200, 40, 30, 'red');