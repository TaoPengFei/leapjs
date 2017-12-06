---
Learning Coding with LeapLearner
---

# 乐学编程

本书是立乐在线课堂系列第二部分课程内容，建议在完成立乐在线课堂系列第一部分内容的学习之后再开始学习。



[TOC]

## 丰富的颜色

### 通过颜色名称表示颜色

我们可以通过输入颜色的名称来获得已经预置在浏览器内的颜色。

可在[颜色名列表](http://www.w3school.com.cn/html/html_colornames.asp)中查阅到大部分浏览器中预置好的颜色。

#### 练习：画出彩虹

使用颜色名称表示颜色，画出七色的彩虹。

> 彩虹的7种颜色：红`"red"`，橙`"orange"`，黄`"yellow"`，绿`"green"`，青`"cyan"`，蓝`"blue"`，紫`"purple"`

代码如下：

```javascript
canvas.width = 400;
canvas.height = 300;

var circle = new Circle(200,400,350);

//红色 "red"
circle.fillStyle = "red";
circle.fill();

//橙色 "orange"
circle.r -= 15;
circle.fillStyle = "orange";
circle.fill();

//黄色 "yellow"
circle.r -= 15;
circle.fillStyle = "yellow";
circle.fill();

//绿色 "green"
circle.r -= 15;
circle.fillStyle = "green";
circle.fill();

//青色 "cyan"
circle.r -= 15;
circle.fillStyle = "cyan";
circle.fill();

//蓝色 "blue"
circle.r -= 15;
circle.fillStyle = "blue";
circle.fill();

//紫色 "purple"
circle.r -= 15;
circle.fillStyle = "purple";
circle.fill();

//白色 "white"
circle.r -= 15;
circle.fillStyle = "white";
circle.fill();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3694)

### 用RGB值表示颜色

RGB色彩模式是工业界的一种颜色标准，是通过对红(R)、绿(G)、蓝(B)三个颜色通道的变化以及它们相互之间的叠加来得到各式各样的颜色的，RGB即是代表红、绿、蓝三个通道的颜色，这个标准几乎包括了人类视力所能感知的所有颜色，是目前运用最广的颜色系统之一。

![RGB原理示意](http://ou1htxdl4.bkt.clouddn.com/rgb%E5%8E%9F%E7%90%86.png)

目前的显示器大都是采用了RGB颜色标准，在显示器上，是通过电子枪打在屏幕的红、绿、蓝三色发光极上来产生色彩的，因此电脑屏幕上的所有颜色，都由这红色绿色蓝色三种色光按照不同的比例混合而成的。一组红色绿色蓝色就是一个最小的显示单位。屏幕上的任何一个颜色都可以由一组RGB值来记录和表达。

通常情况下，RGB各有256级亮度，用数字表示为从0、1、2...直到255。在0时“灯”最弱——是关掉的，而在255时“灯”最亮。当三色灰度数值相同时，产生不同灰度值的灰色调，即三色灰度都为0时，是最暗的黑色调；三色灰度都为255时，是最亮的白色调。

#### 练习：用RGB值画出彩虹

> 彩虹的7种颜色RGB值：
>
> ```
> 赤色 【RGB】255, 0, 0 
> 橙色 【RGB】 255, 165, 0 
> 黄色 【RGB】255, 255, 0 
> 绿色 【RGB】0, 255, 0 
> 青色 【RGB】0, 127, 255 
> 蓝色 【RGB】0, 0, 255 
> 紫色 【RGB】139, 0, 255 
> ```

代码如下：

```javascript
canvas.width = 400;
canvas.height = 300;

var circle = new Circle(200,400,350);

//红色 【RGB】255, 0, 0 
circle.fillStyle = RGB(255,0,0);
circle.fill();

//橙色 【RGB】 255, 165, 0 
circle.r -= 15;
circle.fillStyle = RGB(255,165,0);
circle.fill();

//黄色 【RGB】255, 255, 0 
circle.r -= 15;
circle.fillStyle = RGB(255,255,0);
circle.fill();

//绿色 【RGB】0, 255, 0 
circle.r -= 15;
circle.fillStyle = RGB(0,255,0);
circle.fill();

//青色 【RGB】0, 127, 255 
circle.r -= 15;
circle.fillStyle = RGB(0,127,255);
circle.fill();

//蓝色 【RGB】0, 0, 255 
circle.r -= 15;
circle.fillStyle = RGB(0,0,255);
circle.fill();

//紫色 【RGB】139, 0, 255
circle.r -= 15;
circle.fillStyle = RGB(139,0,255);
circle.fill();

//白色 【RGB】255, 255, 255
circle.r -= 15;
circle.fillStyle = RGB(255,255,255);
circle.fill();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3649)

### RGB颜色的合成

RGB颜色组合时使用的是叠加型原理，通过不同光的叠加显示颜色，这种组合方式适合于使用在基础颜色是黑色的情景，如计算机显示设备、电视机、手机屏幕等。叠加型原理反映在RGB值中，就是当两个RGB颜色组合时，它们合成颜色的R、G、B值分别等于原有两个颜色的R、G、B值之和。

#### 练习：RGB颜色的合成

输入如下代码：

```javascript
canvas.width = 400;
canvas.height = 400;

var color1 = new Circle(120, 120, 60);
var color2 = new Circle(280, 120, 60);
var color3 = new Circle(200, 260, 60);
var r1, g1, b1, r2, g2, b2, r3, g3, b3;

r1 = 255;
g1 = 0;
b1 = 0;

r2 = 0;
g2 = 255;
b2 = 0;

r3 = r1 + r2;
g3 = g1 + g2;
b3 = b1 + b2;

color1.fillStyle = RGB(r1, g1, b1);
color2.fillStyle = RGB(r2, g2, b2);
color3.fillStyle = RGB(r3, g3, b3);

color1.fill();
color2.fill();
color3.fill();
```

改变color1和color2的rgb值，可以看到它们组合出的新颜色。

#### 练习：实现渐变效果

```javascript
canvas.width = 500;
canvas.height = 300;

var line = new Line(0,0,0,300);
var r = 0;
var g = 0;
var b = 255;

function Loop() {
    if (line.x1 < 500) {
        line.x1 += 1;
        line.x2 += 1;
        r += 0.5;
        g += 0.3;
        b -= 0.4;
        line.strokeStyle = RGB(r,g,b);
    }
    line.draw();
    nextFrame(Loop);
}

Loop();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3646)

## 图形基础II

### 线段的属性

线段具有许多不同的属性，可以通过以下属性名来调用并修改：

* 第一个点的x坐标和y坐标：`x1`，`y1`
* 第二个点的x坐标和y坐标：`x2`，`y2`
* 线段宽度：`lineWidth`
* 线段颜色：`strokeStyle`
* 线段端点样式：`lineCap`

#### 练习：画出adidas的标志

> adidas是世界著名的运动品牌，它的标志由三条斜杠组成，代表山区，指出实现挑战、成就未来和不断达成目标的愿望。
>
> ![adidaslogo](http://ou1htxdl4.bkt.clouddn.com/adidas.jpg)
>
> 你能仿照上图，画出adidas的三条纹标志吗？

代码如下：

```javascript
canvas.width = 400;
canvas.height = 400;

var line = new Line(100, 170, 136, 230);

line.lineWidth = 40;
line.strokeStyle = "black";
line.draw();

line.x1 = 140;
line.y1 = 130;
line.x2 = 200;
line.y2 = 230;
line.draw();

line.x1 = 180;
line.y1 = 90;
line.x2 = 264;
line.y2 = 230;
line.draw();

line.x1 = 80;
line.y1 = 220;
line.x2 = 290;
line.y2 = 220;
line.lineWidth = 60;
line.strokeStyle = "white";
line.draw();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3711)

### 圆的属性

圆形对象具有许多不同的属性，可以通过以下属性名来调用并修改：

- 圆心坐标：`x`，`y`
- 圆的半径：`r`
- 圆形的填充颜色：`fillStyle`
- 圆形的边框颜色：`strokeStyle`
- 圆形的边框宽度：`lineWidth`

#### 练习：画出五环标志

> 奥运五环，是我们非常熟悉的一个标志。它由蓝、黄、绿、红、黑五个颜色的圆环组成，象征世界上承认奥林匹克运动，并准备参加奥林匹克竞赛的五大洲。请参考五环标志图，用javascript画出五环标志。
>
> ![奥运五环](http://ou1htxdl4.bkt.clouddn.com/%E4%BA%94%E7%8E%AF.jpg)

代码如下：

```javascript
canvas.width = 300;
canvas.height = 200;

var circle = new Circle(50, 70, 40);
circle.lineWidth = 8;

circle.strokeStyle = "blue";
circle.stroke();

circle.x = 150;
circle.strokeStyle = "black";
circle.stroke();

circle.x = 250;
circle.strokeStyle = "red";
circle.stroke();

circle.x = 100;
circle.y = 110;
circle.strokeStyle = "yellow";
circle.stroke();

circle.x = 200;
circle.strokeStyle = "green";
circle.stroke();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3705)

### 矩形的属性

矩形对象具有许多不同的属性，可以通过以下属性名来调用并修改：

- 矩形左上角坐标：`x`，`y`
- 矩形的宽和高：`width`，`height`
- 矩形的填充颜色：`fillStyle`
- 矩形的边框颜色：`strokeStyle`
- 矩形的边框宽度：`lineWidth`

#### 练习：画出中国银行的标志

> 中国银行是我国的货币发行银行，是中国金融商界的代表，具有非常重要的地位，它的标志也非常有特色。
>
> ![中国银行Logo](http://ou1htxdl4.bkt.clouddn.com/chinabank.jpg)
>
> 这个标志是由古钱造型和“中”字结合而来的，简洁明了，寓意深刻。你能结合学过的知识，用javascript语言将它画出来吗？

代码如下：

```javascript
canvas.width = 400;
canvas.height = 400;

var circle = new Circle(200, 200, 100);
var line = new Line(200, 100, 200, 160);
var rect = new Rectangle(160, 165, 80, 70);

circle.lineWidth = 20;
circle.strokeStyle = "red";
circle.stroke();

line.lineWidth = 20;
line.strokeStyle = "red";
line.draw();

rect.lineWidth = 20;
rect.strokeStyle = "red";
rect.radius = 5;
rect.stroke();

line.y1 = 240;
line.y2 = 300;
line.lineWidth = 20;
line.strokeStyle = "red";
line.draw();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3706)

### 坐标系

我们已经学习过javascript中的坐标系，现在来复习一下关于坐标系的一些要点，看看你是否都还记得。

> * 坐标系原点在左上角，它的坐标值是(0, 0)
> * 坐标系的x轴是水平的，从左往右逐渐增大
> * 坐标系的y轴是垂直的，从上往下逐渐增大
> * 书写坐标值时，x轴坐标值在前，y轴坐标值在后，用逗号隔开，并用括号把它们括在一起：`(x坐标, y坐标)`

#### 练习：送小红回家



坐标系的变换：translate，setAnchor，rotate

#### 案例：地月系

```javascript
canvas.width = 500;
canvas.height = 500;

var earth = new Circle(250,250,40);
var moon = new Circle(400,250,10);
var universe = new Sprite('http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg',0,0,500,500);
var moon_angle = 0;

earth.fillStyle = "lightblue";
moon.fillStyle = "grey";

function Loop() {
    moon_angle += 1;
    moon.setAnchor(250,250);
    moon.rotate(moon_angle);
    universe.draw();
    earth.draw();
    moon.draw();
    nextFrame(Loop);
}

Loop();
```

#### 案例：地-月-日

```javascript
canvas.width = 500;
canvas.height = 500;

var earth = new Circle(400,250,20);
var moon = new Circle(450,250,5);
var sun = new Circle(250,250,40);
var circle = new Circle(250,250,150);
var universe = new Sprite('http://otde8iv1i.bkt.clouddn.com/bg_space1.jpg',0,0,500,500);
var moon_angle = 0;
var earth_angle = 0;

earth.fillStyle = "lightblue";
moon.fillStyle = "grey";
sun.fillStyle = "red";

function Loop() {
    
    //地球绕着太阳转
    earth_angle += 0.2;
    earth.setAnchor(sun.x,sun.y);
    earth.rotate(earth_angle);
    
    //月亮绕着地球转
    moon_angle += 1;
    moon.x = earth.center().x + 50;
    moon.y = earth.center().y;
    moon.setAnchor(earth.center().x,earth.center().y);
    moon.rotate(moon_angle);
    
    //画出元素
    universe.draw();
    circle.stroke();
    sun.draw();
    earth.draw();
    moon.draw();
    
    nextFrame(Loop);
}

function center() {
    var xa,ya;
    xa = (this.points[0].x + this.points[4].x)/2;
    ya = (this.points[0].y + this.points[4].y)/2;
    return {
        x: xa,
        y: ya
    };
}
earth.center = center;

Loop();
```



圆和矩形不同的地方

## 事件与交互

### 鼠标点击事件

#### 案例：压力游戏（变化的矩形）

```javascript
canvas.width = 500;
canvas.height = 500;
var rect = new Rectangle(150,150,200,200);
function Loop() {
    canvas.clear();
    rect.fillStyle = RGB(rect.width-200,rect.height,0);
    if (rect.width > 200) {
        rect.width -= 1;
        rect.x += 0.5;
    }
    if (rect.height < 200) {
        rect.height += 1;
        rect.y -= 1;
    }
    rect.draw();
    nextFrame(Loop);
}
function clickAction() {
    if (rect.height > 20) {
        rect.height -= 20;
        rect.y += 20;
        rect.width += 20;
        rect.x -= 10;
    }
}
Mouse.click = clickAction;
Loop();
```

[点击查看效果](https://code.leaplearner.com/show.html?v=3659)

#### 案例：涟漪效果

#### 练习：充电游戏

```javascript
canvas.width = 300;
canvas.height = 500;

var iphone = new Sprite('http://ou1htxdl4.bkt.clouddn.com/iphone.jpg',0,0,300,500);
var r1 = new Rectangle(130, 140, 40, 10);
var rect = new Rectangle(100, 150, 100, 200);
var power = new Rectangle(110, 160, 80, 180);

rect.lineWidth = 5;
rect.fillStyle = "white";

function Loop() {
    power.use();
    iphone.draw();
    r1.draw();
    rect.draw();
    power.fill();
    nextFrame(Loop);
}

function charge() {
    if (power.height < 170) {
        power.height += 10;
        power.y -= 10;
    }
}

function use() {
    if (this.height > 0) {
        this.height -= 0.1;
        this.y += 0.1;
        this.fillStyle = RGB((180-this.height)*2.55,this.height*2.55,0);
    }
}

power.use = use;
Mouse.click = charge;
Loop();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3753)



点击事件

#### 案例：七色灯



#### 案例：井字游戏

使用事件来交互

## 代码规范

### 2种注释方式

```javascript
// this is a comment
```

```javascript
/* these are 
lines
of
comments
*/
```



### 在代码中使用注释

### 缩进

使用缩进来让代码看起来更美观

## 变量基础

### 如何定义变量

### 变量的名称

变量的命名规则

变量的命名规范

### 变量赋值和传递

```javascript
let a = 1;
let b = a;
```

## 错误提示

### 如何发现错误

### 如何修正错误

#### 案例：根据提示修改错误

### 简单的错误一览

## 初识对象

### 什么是对象

对象

### 对象的属性

### 对象的方法

## 动画基础

位置和大小的关系

### 移动和方向

移动方向和数值变化的关系

### 使用update函数

### 反弹

当遇到边界时，如何反弹

#### 案例：弹球游戏

考虑边框

## 图片的类型

### 文件后缀名

url

### png和jpg的区别

## 音效

### 使用立乐音效库

### 在事件中添加音效

## 网络安全

如何安全的使用网络

### http与https



## 附录

### 键盘使用

tab键的用法

全选，剪切的快捷操作

快速删除

### 鼠标

快速选中



#### 大项目：制作自己的画板

电脑版：

```javascript
canvas.width = 600;
canvas.height = 400;

var panel = new Rectangle(10, 320, 580, 70);
var s_brush = new Circle(50, 355, 2);
var m_brush = new Circle(70, 355, 4);
var l_brush = new Circle(95, 355, 6);
var c_blue = new Rectangle(160, 335, 40, 40);
var c_red = new Rectangle(220, 335, 40, 40);
var c_green = new Rectangle(280, 335, 40, 40);
var c_yellow = new Rectangle(340, 335, 40, 40);
var c_black = new Rectangle(400, 335, 40, 40);
var c_white = new Rectangle(460, 335, 40, 40);
var selection = new Rectangle(40, 345, 20, 20);
var clearBtn = new Rectangle(515, 340, 60, 30);
var clearTxt = new Text("清理画布");

var my_brush = new Circle();
var isDrawing = false;
var x1,y1,x2,y2 = 0;
panel.fillStyle = "lightgrey";
panel.strokeStyle = "grey";
my_brush.r = 2;
my_brush.fillStyle = "black";
c_blue.fillStyle = "blue";
c_red.fillStyle = "red";
c_green.fillStyle = "green";
c_yellow.fillStyle = "yellow";
c_black.fillStyle = "black";
c_white.fillStyle = "white";
clearTxt.font = "12px Arial";
clearTxt.x = 522;
clearTxt.y = 359;
clearTxt.fillStyle = "black";
clearBtn.fillStyle = "white";
selection.strokeStyle = "black";

function Loop() {
    drawPanel();
    nextFrame(Loop);
}

function clear() {
    canvas.clear();
}
function drawline() {
    x1 = x2;
    y1 = y2;
    x2 = this.x;
    y2 = this.y;
    var draw_line = new Line(x1,y1,x2,y2);
    draw_line.lineWidth = this.r * 2;
    draw_line.strokeStyle = this.fillStyle;
    draw_line.stroke();
}
function drawPanel() {
    panel.draw();
    s_brush.fill();
    m_brush.fill();
    l_brush.fill();
    c_blue.draw();
    c_red.draw();
    c_green.draw();
    c_yellow.draw();
    c_black.draw();
    c_white.draw();
    clearBtn.draw();
    clearTxt.draw();
    selection.stroke();
}
function brush_click() {
    my_brush.r = this.r;
    selection.x = this.x - 10;
    selection.y = this.y - 10;
}
function color_click() {
    my_brush.fillStyle = this.fillStyle;
    s_brush.fillStyle = this.fillStyle;
    m_brush.fillStyle = this.fillStyle;
    l_brush.fillStyle = this.fillStyle;
}

Mouse.down = function() {
    x1 = Mouse.x;
    y1 = Mouse.y;
    x2 = Mouse.x;
    y2 = Mouse.y;
    isDrawing = true;
}
Mouse.up = function() {
    isDrawing = false;
}
Mouse.move = function() {
    my_brush.x = Mouse.x;
    my_brush.y = Mouse.y;
    if (isDrawing) my_brush.draw();
}

my_brush.draw = drawline;
c_blue.click = c_red.click = c_green.click = c_yellow.click = c_black.click = c_white.click = color_click;
s_brush.click = m_brush.click = l_brush.click = brush_click;
clearBtn.click = clear;
Loop();
```

手机版：

```javascript
canvas.width = 350;
canvas.height = 500;

var panel = new Rectangle(10, 400, 330, 70);
var s_brush = new Circle(30, 435, 3);
var m_brush = new Circle(50, 435, 4);
var l_brush = new Circle(75, 435, 6);
var c_blue = new Rectangle(100, 420, 30, 30);
var c_red = new Rectangle(140, 420, 30, 30);
var c_green = new Rectangle(180, 420, 30, 30);
var c_yellow = new Rectangle(220, 420, 30, 30);
var c_black = new Rectangle(260, 420, 30, 30);
var c_white = new Rectangle(300, 420, 30, 30);
var selection = new Rectangle(20, 425, 20, 20);
var clearBtn = new Rectangle(280, 10, 60, 20);
var clearTxt = new Text("清理画布");

var my_brush = new Circle();
var isDrawing = false;
var x1,y1,x2,y2 = 0;
panel.fillStyle = "lightgrey";
panel.strokeStyle = "grey";
my_brush.r = 3;
my_brush.fillStyle = "black";
c_blue.fillStyle = "blue";
c_red.fillStyle = "red";
c_green.fillStyle = "green";
c_yellow.fillStyle = "yellow";
c_black.fillStyle = "black";
c_white.fillStyle = "white";
clearTxt.font = "12px Arial";
clearTxt.x = 286;
clearTxt.y = 24;
clearTxt.fillStyle = "black";
clearBtn.fillStyle = "lightgrey";
selection.strokeStyle = "black";

function Loop() {
    drawPanel();
    nextFrame(Loop);
}

function clear() {
    canvas.clear();
}
function drawline() {
    x1 = x2;
    y1 = y2;
    x2 = this.x;
    y2 = this.y;
    var draw_line = new Line(x1,y1,x2,y2);
    draw_line.lineWidth = this.r * 2;
    draw_line.strokeStyle = this.fillStyle;
    draw_line.stroke();
}
function drawPanel() {
    panel.draw();
    s_brush.fill();
    m_brush.fill();
    l_brush.fill();
    c_blue.draw();
    c_red.draw();
    c_green.draw();
    c_yellow.draw();
    c_black.draw();
    c_white.draw();
    clearBtn.draw();
    clearTxt.draw();
    selection.stroke();
}
function brush_click() {
    my_brush.r = this.r;
    selection.x = this.x - 10;
    selection.y = this.y - 10;
}
function color_click() {
    my_brush.fillStyle = this.fillStyle;
    s_brush.fillStyle = this.fillStyle;
    m_brush.fillStyle = this.fillStyle;
    l_brush.fillStyle = this.fillStyle;
}

Mouse.down = function() {
    x1 = Mouse.x;
    y1 = Mouse.y;
    x2 = Mouse.x;
    y2 = Mouse.y;
    isDrawing = true;
}
Mouse.up = function() {
    isDrawing = false;
}
Mouse.move = function() {
    my_brush.x = Mouse.x;
    my_brush.y = Mouse.y;
    if (isDrawing) my_brush.draw();
}

my_brush.draw = drawline;
c_blue.click = c_red.click = c_green.click = c_yellow.click = c_black.click = c_white.click = color_click;
s_brush.click = m_brush.click = l_brush.click = brush_click;
clearBtn.click = clear;
Loop();
```

#### 练习：画出指针

图中所示为钟表中的三根针：时针`h_line`、分针`m_line`、秒针`s_line`，它们重合在一起无法区分。请根据现实依据修改它们的，使他们能被区分出来。

![指针图片](http://ou1htxdl4.bkt.clouddn.com/clock1.jpg)

>  基础代码：
>
>  ```javascript
>  canvas.width = 350;
>  canvas.height = 500;
>
>  var s_line = new Line(175, 200, 175, 100);
>  var m_line = new Line(175, 200, 175, 120);
>  var h_line = new Line(175, 200, 175, 150);
>
>  //修改三根针的属性
>
>  s_line.draw();
>  m_line.draw();
>  h_line.draw();
>  ```

完整代码如下：

```javascript
canvas.width = 350;
canvas.height = 500;

var s_line = new Line(175, 200, 175, 100);
var m_line = new Line(175, 200, 175, 120);
var h_line = new Line(175, 200, 175, 150);

//修改三根针的属性
s_line.lineWidth = 2;
s_line.strokeStyle = "green";

m_line.lineWidth = 4;
m_line.strokeStyle = "blue";

h_line.lineWidth = 6;
h_line.strokeStyle = "red";
s_line.draw();
m_line.draw();
h_line.draw();
```

[点击查看代码效果](https://code.leaplearner.com/show.html?v=3697)

if语句：算盘"三下五除二"

