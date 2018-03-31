/***************************************************************

shape.skew(skewX, skewY)

斜切图形

默认斜切中心点为图形中心点，可以通过shape.setAnchor来修改斜切中心点

参数：
skewX：     水平斜切倍数，默认为0
skewY：     垂直斜切倍数，默认为0

***************************************************************/

var rect = new Rectangle(100, 100, 100, 100);

fill(false);
rectangle(100, 100, 100, 100);
rect.skew(0, 0.3);
rect.globalAlpha = 0.3;
rect.fillStyle = 'red';
rect.draw();

rectangle(100, 250, 100, 100);
rect.y = 250;
rect.skew(0.3, 0);
rect.fillStyle = 'green';
rect.draw();
