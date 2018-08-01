## 椭圆 ellipse

### 绘制方法

椭圆看起来就像是一个被压扁的圆，因此它有2个半径，一个数水平方向的半径radiuX，一个是垂直方向的半径radiuY。

```javascript
ellipse(x, y, xRadius, yRadius, *color)
/***************************************************************
在画布上画出一个椭圆：

* 椭圆的圆心位置为（x,y）
* 椭圆水平方向的半径为xRadius
* 椭圆垂直方向的半径为yRadius
* 颜色为为color，可选参数，默认为 "orange"
***************************************************************/
```

同样的，我们可以用ellipse来在画布上画出椭圆

```javascript
canvas.showAxis();
ellipse(100, 100, 30, 20);
ellipse(200, 100, 20, 30, 'green');
ellipse(300, 100, 40, 30, 'red');

fill(false);
ellipse(100, 200, 30, 20);
ellipse(200, 200, 20, 30, 'green');
ellipse(300, 200, 40, 30, 'red');
```

你能不能在图中找对每行代码对应的椭圆呢？

![ellipse](../images/2018/ellipse.png)



### 椭圆对象 `Ellipse`

```javascript
class Ellipse(x, y, radiusX, radiusY) 
/***************************************************************
椭圆类
x, y:       椭圆的圆心位置
radiusX:    椭圆的水平半径
radiusY:    椭圆的垂直半径
***************************************************************/
```

#### 属性

圆心位置 `x, y`

水平轴半径 `rX`, `radiusX`

垂直轴半径` rY`, `raduisY`

#### 方法

draw



例子

```javascript
canvas.resize(450, 300);
canvas.showAxis();
var e = new Ellipse(100, 100, 50, 20); // x, y, rX, rY
e.strokeStyle = "red";
e.fillStyle = "orange";

e.draw();

e.y += 100;
e.rX = 30;
e.fill();

e.x += 100;
e.radiusY = 40; // both radiusY or rY works

e.shadowColor = 'pink';
e.shadowBlur = 4;
e.shadowOffsetX = 5;
e.shadowOffsetY = 5;
e.fill();
```

运行效果

![ellipse2](../images/basic/ellipse2.png)