## 多边形 polygon

### 简单绘制

```javascript
polygon(x1, y1, x2, y2, x3, y3, ..., *color)
/**************************
  x1, y1 - 第一个点的坐标
  x2, y2 - 第二个点的坐标
  ...
  至少需要3个点，按照点的顺序连接起来
**************************/
```

### 多边形对象 `Polygon`

```javascript
class Polygon(x1, y1, x2, y2, x3, y3, ...){}
              
/***************************************************************

多边形类
x1, y1:     多边形第一个点的位置
x2, y2:     多边形第二个点的位置
x3, y3:     多边形第三个点的位置
...

注意：polygon的点记录在在triangle.points中

polygon.points: {x1, y1, ... }

***************************************************************/
```

坐标 `x, y`

获取或者设置多边形的中心点

**实例：五角星**

```javascript
var poly = new Polygon(100, 50, 50, 150, 160, 80, 40, 80, 150, 150);
poly.lineWidth = 3;
poly.strokeStyle = "red";
poly.fillStyle = "orange";

poly.stroke();

poly.y += 150;
poly.fill();

poly.x += 150;
poly.radius = 40; // both radius or r works
poly.shadowColor = 'pink';
poly.shadowBlur = 4;
poly.shadowOffsetX = 5;
poly.shadowOffsetY = 5;
poly.fill();
```

运行效果

![polygon2](../images/basic/polygon2.png)