/***************************************************************

定义和用法
createLinearGradient() 方法创建放射状/圆形渐变对象。

渐变可用于填充矩形、圆形、线条、文本等等。

提示：请使用该对象作为 strokeStyle 或 fillStyle 属性的值。

提示：请使用 addColorStop() 方法规定不同的颜色，以及在 gradient 对象中的何处定位颜色。

JavaScript 语法：
ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);

参数值
参数  描述
x0  渐变的开始圆的 x 坐标
y0  渐变的开始圆的 y 坐标
r0  开始圆的半径
x1  渐变的结束圆的 x 坐标
y1  渐变的结束圆的 y 坐标
r1  结束圆的半径

***************************************************************/

var grd = ctx.createRadialGradient(100,50,0,100,100,100);
grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");


circle(100, 100, 100, grd);