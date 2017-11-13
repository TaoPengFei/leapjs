![logo](.\logo.png)



## 目录

[TOC]

## 基本图形

### 矩形

```javascript
var rect = new Rectangle(x, y, width, height);
```

#### 属性值

| 属性值           | 说明            |
| ------------- | ------------- |
| `x`           | 获取或设置左上角顶点的x值 |
| `y`           | 获取或设置左上角顶点的y值 |
| `width`       | 获取或者设置矩形的宽度   |
| `height`      | 获取或者设置矩形的高度   |
| `strokeStyle` | 获取或者设置矩形边的样式  |
| `fillStyle`   | 获取或者设置矩形填充的样式 |
| `lineWidth`   | 获取或者设置线条的宽度   |

#### 方法

| 属性值        | 用法                               |
| ---------- | -------------------------------- |
| `draw()`   | 将矩形画在画布上                         |
| `fill()`   | 填充矩形，默认样式为rgba(255, 255, 0, 0.5) |
| `stroke()` | 绘制矩形的四条边，默认样式为`#FFFF00`          |

### 圆

```javascript
var circle = new Circle(x, y, r);
```

#### 属性值

| 属性值           | 说明           |
| ------------- | ------------ |
| `x`           | 获取或设置圆心的x值   |
| `y`           | 获取或设置圆心的y值   |
| `r`           | 获取或者设置圆的半径   |
| `strokeStyle` | 获取或者设置圆周的样式  |
| `fillStyle`   | 获取或者设置圆填充的样式 |
| `lineWidth`   | 获取或者设置线条的宽度  |

#### 方法

| 属性值      | 用法                                       |
| -------- | ---------------------------------------- |
| draw()   | 将圆画在画布上，包含圆周和内部                          |
| fill()   | 仅填充圆，不绘制圆周，默认样式为"rgba(255, 255, 0, 0.5)" |
| stroke() | 绘制圆周，不填充圆，默认样式为"#FFFF00"                 |

### 点

```javascript
var point = new Point(x, y);
```

#### 属性值

| 属性值         | 说明           |
| ----------- | ------------ |
| x           | 获取或设置点的x值    |
| y           | 获取或设置点的y值    |
| r           | 获取或者设置点的大小   |
| `fillStyle` | 获取或者设置点填充的样式 |

#### 方法

| 属性值    | 用法              |
| ------ | --------------- |
| draw() | 将点画在画布上，默认样式为红色 |
| fill() | 同draw           |

### 线条

```javascript
var line = new Line(x1, y1, x2, y2);
```

#### 属性值

| 属性值           | 说明           |
| ------------- | ------------ |
| `x1`          | 获取或设置第一个点的x值 |
| `y1`          | 获取或设置第一个点的y值 |
| `x2`          | 获取或设置第二个点的x值 |
| `y2`          | 获取或设置第二个点的y值 |
| `strokeStyle` | 获取或者设置线条的样式  |
| `lineWidth`   | 获取或者设置线条的宽度  |

#### 方法

| 属性值        | 用法       |
| ---------- | -------- |
| `draw()`   | 将线条画在画布上 |
| `stroke()` | 同`draw`  |

### 多边形

```javascript
var polygon = new Polygon(x1, y1, x2, y2, x3, y3, ...);
```

#### 属性值

| 属性值           | 说明                                   |
| ------------- | ------------------------------------ |
| `fillStyle`   | 获取或者设置点填充的样式                         |
| `strokeStyle` | 获取或者设置线条的样式                          |
| `lineWidth`   | 获取或者设置线条的宽度                          |
| `points`      | 获取所有点，返回一个数组，含有所有点的坐标[p1, p2, p3...] |

#### 方法

| 属性值        | 用法                |
| ---------- | ----------------- |
| `draw()`   | 将多边形画在画布上，默认样式为红色 |
| `fill()`   | 将多边形画在画布上，仅填充内容   |
| `stroke()` | 将圆画在画布上，包含圆周和内部   |

### 三角形

```javascript
var triangle = new Triangle(x1, y1, x2, y2, x3, y3);
```

三角形是多边形的一种特殊情况，即只有3条边的多边形。因此除了定义上，三角形和多边形具有一样的属性和方法。

## 图形样式

### 线条

`shape`代表该属性或者方法所有的图形都可以使用

```javascript
shape.strokeStyle = "red";
```

### 填充

```javascript
shape.fillStyle = "green";
```

### 颜色常量

aqua、black、blue、fuchsia、gray、green、lime、maroon、navy、olive、purple、red、silver、teal、white、yellow。

### RGB值

`fillStyle`与`stokeStyle`可以设置为RGB值，拥有多达65525种组合。

```javascript
shape.strokeStyle = RGB(150, 100, 0);
```

### 透明度

通过设置图形的`globalAlpha`值可以改变图形的透明度

```javascript
shape.globalAlpha = 0.1;
```

### RGBA值

```javascript
shape.fillStyle = "rgba(255, 255, 0, 0,5)";
```

### 渐变色

```javascript
var grd = ctx.createLinearGradient(0,0,175,50);
grd.addColorStop(0,"#FF0000");
grd.addColorStop(1,"#00FF00");

shape.fillStyle = grd;
```

## 文本

```javascript
"abc".draw();
"abc".draw(x, y);
"abc".draw(x, y, fillStyle);
"abc".draw(x, y, fillStyle, font);
```

### 字号

```javascript
font = "20px Arial"
```

## 动画基础

### 画布的清理

```javascript
canvas.clear();
```

### 间隔执行

```javascript
setInterval(loop, 1000);
```

### 帧执行

```javascript
requestAnimationFrame(callback);
```

```javascript
nextFrame(callback);
```

## 贴图与动画

### 贴图

```javascript
var sprite = new Sprite(src, x, y, width, height)
```

### 序列帧动画

```javascript
var animation = new Animation(src, x, y, width, height);
animation.setFrame(sx, sy, swidth, sheight, n);
animation.setSpeed(speed);
```

## 音乐与音效

```javascript
var music = new Audio();
music.src = "ddd.mp3"
music.play();
```

## 事件

### 鼠标事件

`Mouse`的属性

| 属性   | 描述                 |
| ---- | ------------------ |
| x    | 鼠标当前的x值，可以在画布左下角看到 |
| y    | 鼠标当前的y值，可以在画布左下角看到 |

事件类型

#### 移动事件

`Mouse`的属性

### 键盘事件

```javascript
Key.a.press = function(console.log('a'));
```

```javascript
Key['a']press = function(console.log('a'));
```

| 按键    | 名称         | 备注   |
| ----- | ---------- | ---- |
| `↑`   | ArrowUp    |      |
| `↓`   | ArrowDown  |      |
| `←`   | ArrowLeft  |      |
| `→`   | ArrowRight |      |
| `Esc` | Escape     |      |
| `空格`  | Space      |      |
| `回车键` | Enter      |      |

### 手势事件

```javascript
Key.ArrowLeft.down = function(){  rect.x -= 10;};
Key.ArrowRight.down = function(){  rect.x += 10;};
Key.ArrowUp.down = function(){  rect.y -= 10;};
Key.ArrowDown.down = function(){  rect.y += 10;};
```

## 图形变换

### 平移

```javascript
var circle = new Circle(0, 0, 100);
circle.translate(100, 100);
```

### 中心点与旋转

```javascript
shape.rotate(degree);
```

### 放大与缩小

```javascript
shape.scale(scaleX, scaleY)
```

### 斜切

```javascript
shape.skew(skewX, skewY)
```

### 碰撞

```javascript
shape.collide(otherShape)
// return true/false
```

## 库函数

### Math

#### 方法

| 方法         | 描述                                       |
| ---------- | ---------------------------------------- |
| abs(x)     | 返回数的绝对值。                                 |
| acos(x)    | 返回数的反余弦值。                                |
| asin(x)    | 返回数的反正弦值。                                |
| atan(x)    | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| atan2(y,x) | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| ceil(x)    | 对数进行上舍入。                                 |
| cos(x)     | 返回数的余弦。                                  |
| exp(x)     | 返回 e 的指数。                                |
| floor(x)   | 对数进行下舍入。                                 |
| log(x)     | 返回数的自然对数（底为e）。                           |
| max(x,y)   | 返回 x 和 y 中的最高值。                          |
| min(x,y)   | 返回 x 和 y 中的最低值。                          |
| pow(x,y)   | 返回 x 的 y 次幂。                             |
| random()   | 返回 0 ~ 1 之间的随机数。                         |
| round(x)   | 把数四舍五入为最接近的整数。                           |
| sin(x)     | 返回数的正弦。                                  |
| sqrt(x)    | 返回数的平方根。                                 |
| tan(x)     | 返回角的正切。                                  |
| toSource() | 返回该对象的源代码。                               |
| valueOf()  | 返回 Math 对象的原始值。                          |

### Date

```javascript
var date =new Date() 
```

#### 方法

| 方法             | 说明                      |
| -------------- | ----------------------- |
| `getHours()`   | 返回 Date 对象的小时 (0 ~ 23)。 |
| `getMinutes()` | 返回 Date 对象的分钟 (0 ~ 59)。 |
| `getSeconds()` | 返回 Date 对象的秒数 (0 ~ 59)。 |

