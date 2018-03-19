/***************************************************************

定义和用法
createLinearGradient() 方法创建线性的渐变对象。

渐变可用于填充矩形、圆形、线条、文本等等。

提示：请使用该对象作为 strokeStyle 或 fillStyle 属性的值。

提示：请使用 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色。

JavaScript 语法：
ctx.createLinearGradient(x0,y0,x1,y1);

参数值
参数  描述
x0  渐变开始点的 x 坐标
y0  渐变开始点的 y 坐标
x1  渐变结束点的 x 坐标
y1  渐变结束点的 y 坐标

***************************************************************/

var grd=ctx.createLinearGradient(100,0,270,0);

grd.addColorStop(0,"green");
grd.addColorStop(1,"red");

rectangle(100, 100, 170, 100, grd);