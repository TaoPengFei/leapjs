## 渐变色

在上面的例子中，我们图形的颜色是单一的。而在实际生活中，颜色往往都不是均匀的。我们可以创建一个变化的颜色来实现这个效果。

### 线性渐变 LinearGardient()

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

```javascript
var grd=ctx.createLinearGradient(100,0,270,0);

grd.addColorStop(0,"green");
grd.addColorStop(1,"red");

rectangle(100, 100, 170, 100, grd);

```

![linearGradient](../images/styles/linearGradient.png)

### 放射渐变 RadialGradient

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

```javascript
var grd = ctx.createRadialGradient(100,50,0,100,100,100);

grd.addColorStop(0,"red");
grd.addColorStop(1,"yellow");

circle(100, 100, 100, grd);
```

![RadialGradient](../images/styles/RadialGradient.png)




**实例：渐变色**

```javascript
var grd = ctx.createLinearGradient(0,0,175,50);
grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#00FF00");

var rect = new Rectangle(10, 10, 175, 50);
rect.fillStyle = grd;
rect.draw();
```

渐变色效果

![rgba](../images/gradient.png)

addColorStop是在图像的特定位置创建出制定的颜色，中间的变化则由计算机自动完成。

通过添加更多的颜色，我们可以创建出更多特殊的渐变色。

彩虹是难得一见的奇观，一般只有雨过天晴的时候才会出现，现在，我们就来用渐变色创建一个彩虹出来。