/***************************************************************

shape.scale(scaleX, scaleY)

拉伸图形

默认拉伸中心点为图形中心点，可以通过shape.setAnchor来修改拉伸中心点

参数：
scaleX：     水平缩放倍数，默认为1
scaleX：     垂直缩放倍数，默认为1

***************************************************************/

var rect = new Rectangle(100, 100, 100, 100);

rect.draw();

rect.scale(1, 2);
rect.globalAlpha = 0.3;
rect.fillStyle = 'red';
rect.draw();

rect.scale(2, 1);
rect.fillStyle = 'green';
rect.draw();
