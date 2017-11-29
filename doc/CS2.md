---
Learning Coding with LeapLearner
---

# 乐学编程

本书是立乐在线课堂系列第二部分课程内容，建议在完成立乐在线课堂系列第一部分内容的学习之后再开始学习。



[TOC]

## 丰富的颜色

### 颜色的组合

### RGB值

常用颜色RGB

#### 案例：彩虹

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



#### 案例：实现渐变效果

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



## 事件与交互

### 鼠标点击事件

#### 案例：涟漪效果



点击事件

#### 案例：换颜色





#### 案例：井字游戏

使用事件来交互

## 图形基础

### 坐标系

完成一个移动的任务，来复习坐标系。

#### 挑战：送小红回家

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



### 矩形

矩形的属性：x, y, width, height, fillStyle,strokeStyle

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



矩形的方法：draw, fill, stroke, translate

#### 案例：用线框作图

### 圆

圆的属性：x,y,r,fillStyle,strokeStyle

圆的方法:draw,fill,stroke

#### 案例：用线框作图

圆和矩形不同的地方

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





if语句：算盘"三下五除二"

