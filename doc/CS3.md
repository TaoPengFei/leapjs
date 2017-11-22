---
Learning Coding with LeapLearner
---

# 乐学编程

本书是立乐在线课堂系列第二部分课程内容，建议在完成立乐在线课堂系列第一部分内容的学习之后再开始学习。



[TOC]



## 图形

### 点

```javascript
var p = new Point(100, 100);
p.draw();
```

#### 实例：点点点

当鼠标在屏幕上移动时，点的位置都会被设置为鼠标所在的位置，并且将点绘制出来。

```javascript
var p = new Point();

Mouse.move = function(){
    p.x = Mouse.x;
    p.y = Mouse.y;
    p.draw();
};
```



### 线段

两点确定一条线段，通过设置线条两点的位置，我们可以确定线条的起始位置和终止位置。在画布中，我们用下面的方式来定义一个线段。

```javascript
var line = new Line(x1, y1, x2, y2)
```

定义后，我们就获得了line这个对象，通过修改line的属性，我们就可以改变线条的位置、样式以及它的宽度。

线条有比较多的属性值，修改线条的位置是一件非常容易出错的事情，要特别的小心。

#### 实例：线条

首先，定义一个线条，从点`(100, 100)`连接到点`(250, 100)`，并在画布中绘制出来。

```javascript
var line = new Line(100, 100, 250, 100);
line.draw();
```

第二步，将线条往下平移到200，即将线条两个点的坐标设置为200，再将线条的颜色改成红色，粗细设置为5个像素，再次在画布上绘制。

```javascript
line.y1 = 200;
line.y2 = 200;
line.strokeStyle = "red";
line.lineWidth = 3;
line.draw();
```

最终效果图如下，仔细观察`output`中线条的粗细程度。

![line](./images/line.png)



注意的是，和其他图形不一样的是，线条是没有面积的，因此是没有`fill`方法的。

### 多边形

```javascript
var polygon = new Polygon(100, 200, 100, 300, 200, 200, 200, 400);
polygon.draw();
```

多边形的绘制是依据点的顺序来的，不同的顺序绘制的多边形是不一样的。同时，绘制出来的多边形可能不是简单的凸多边形，有兴趣的同学可以去了解下多边形的分类，以及多边形的外部和内部的区分。

### 三角形

```javascript
var triangle = new Triangle(x1, y1, x2, y2, x3, y3);
```

三角形是多边形的一种特殊情况，即只有3条边的多边形。因此除了定义上，三角形和多边形具有一样的属性和方法。



## 代码结构

### 代码执行顺序



## 变量

### 数值

### 字符串

将字符串显示在画布上

### 布尔值

### 变量的命名规则



#### 驼峰法

当变量或者函数的名称是由多个单词连接在一起的时候，第一个单词以小写字母开始，后面每个单词的首字母大写。

因为大小写的区分使得复合词呈现出块状，看上去就想骆驼的驼峰。

```javascript
var myName = 'Vic';
var myAge = 18;
var myFavouriteBook = 'Javascript';
```

#### 全局变量

一般的，全局变量所有字母都写成大写

```javascript
PI, COUNT
```

#### 变量的名称

我们在给变量取名的时候，一定要取一个有意义的变量名字，这样我们在看到这个变量名字的时候，能够很快的了解这个变量是做什么的，下面两段代码用的不用的变量名称，阅读下面的代码，预测下运行的结果。在编辑器中运行，看看结果和你设想的是否一致。

在这个例子中，由于变量没有一个很好的名字，我们阅读起来就非常费劲。

## 二维码

在生活中，我们经常看到很多的二维码。

### 制作二维码

### 二维码分享

通过二维码分享自己的项目

## 文本

显示文本

## 图形的属性

图形一般包含边和填充，图形的样式也是由这两块共同组成。

### 填充样式

```javascript
rect.fillStyle = "red";
rect.draw();
```

填充样式

### 线条样式



### 

## 代码规范

### 缩进

每新增一个模块内容，整个代码区域往右缩进4个空格

使用4个空格符号缩进

### 空格

运算符前后需要添加空格

函数名称后无空格

函数参数与括号间无空格

对象的冒号后加空格，冒号前不加

条件语句关键字后加空格

### 分号

一条语句通常以分号作为结束符。

```javascript
var a = 1;
var funk = {
    name: 'funk',
  	age: 18
};
```

### 换行

每行代码的字符数要少于80个。如果一个JavaScrip的语句超过了80个字符，建议在运算符或者逗号后换行。

## 事件

计算机在运行的时候，能够同时。当鼠标被点击的时候，当键盘上的按键被按下的时候，会产生一个事件，通知计算机

### 事件原理

### 鼠标事件

### 键盘事件

当键盘上的一个按键被按下的时候，就会触发一个按键事件。如果我们为按键事件绑定了函数，那么这个函数就会被执行。

先让我们试一个简单的例子，用WASD来移动方块。

#### 实例：移动方块

首先，我们在画布上画出一个方块。为了能够实时显示方块的位置，我们使用了动画，但是方块并没有在运动，所以我们无法看到任何动作。

```javascript
var rect = new Rectangle(100, 100, 100, 100);

function main(){
  	canvas.clear();
    rect.draw();
}

setInterval(main, 100);
```

接下来，我们在按键D上面绑定一个事件，只要按下D，就会触发这个函数。

```javascript
Key.d.press = function(){ rect.x += 10;}
```

再次运行，点击D，方块就随之往右移动了！

我们再把ASW的按键事件加上去，这样我们就可以用WASD来控制方块的位置了。

```javascript
Key.a.press = function(){ rect.x -= 10; }
Key.w.press = function(){ rect.y -= 10; }
Key.s.press = function(){ rect.y += 10; }
```

有了键盘事件，我们就可以用键盘来操作画布里的角色了。

#### 实例：把键盘变为钢琴

我们还可以利用事件来控制声音的播放，当一个键被按下来的时候播放一个音符，如果每个按键绑定一个音符，那么键盘是不是就可以变成一台钢琴的琴键了？让我们来试一试吧。

我们决定，用1到7来分别代表钢琴的哆雷咪发梭拉西七个音阶。先从1开始：

```javascript
var do1 = new Audio();
do1.src = 
// re,mi,fa,sol,la,si
Key[1].press = function(){ duo.play(); }
```

完成的代码

```javascript
var url = "http://llcs-1252287760.cossh.myqcloud.com/Piano/";

var do1 = new Audio();
var re = new Audio();
var mi = new Audio();
var fa = new Audio();
var sol = new Audio();
var la = new Audio();
var xi = new Audio();

do1.src = url + "40-C.mp3";
re.src = url + "42-D.mp3";
mi.src = url + "44-E.mp3";
fa.src = url + "45-F.mp3";
sol.src = url + "47-G.mp3";
la.src = url + "49-A.mp3";
xi.src = url + "51-B.mp3";

Key[1].press = function(){ do1.play(); }
Key[2].press = function(){ re.play(); }
Key[3].press = function(){ mi.play(); }
Key[4].press = function(){ fa.play(); }
Key[5].press = function(){ sol.play(); }
Key[6].press = function(){ la.play(); }
Key[7].press = function(){ xi.play(); }

```

来一首《小星星》吧

1155665，4433221，5544332，5544332，1155665，4433221



再试试这个

333，333，35123，444，433，322125，333，333，35123，444，433，55421

看能不能听出来是什么音乐呢。

## 音效

### 循环播放

### 音效的加载









