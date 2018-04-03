/***************************************************************

rectangle(x, y, width, height, *color)

在画布上画出一个长方形：

* 左上角顶点位置为（x,y）
* 长方形的宽度为width
* 长方形的高度为height
* 颜色为为color，可选参数，默认为 "orange"


***************************************************************/
canvas.showAxis();

rectangle(50, 50, 100, 50);

rectangle(50, 150, 100, 50, 'red');

rectangle(50, 250, 100, 50, '#ffff00');

fill(false); // 无填充

rectangle(200, 50, 100, 50);

rectangle(200, 150, 100, 50, 'red');

rectangle(200, 250, 100, 50, '#ffff00');