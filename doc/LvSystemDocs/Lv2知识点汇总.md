# Level 2 编程进阶

## Unit 1 雷霆战机

### 第一课

#### 知识小结

> ##### 编程
>
> - 学习使用rectangle函数绘制矩形
>
>   ```javascript
>   rectangle(x,y,width,height,"color");
>   ```
>
> - 学习使用circle函数绘制圆形
>
>   ```javascript
>   circle(x,y,"color");
>   ```
>
> - 学习使用line函数绘制直线段
>
>   ```javascript
>   line(x1,y1,x2,y2,width,"color");
>   ```
>
> - 学习使用triangle函数绘制三角形
>
>   ```javascript
>   triangle(x1,y1,x2,y2,x3,y3,"color");
>   ```

> ##### 数学
>
> - 使用坐标系定位物品

> ##### 英语
>
> | rectangle | circle | width  |
> | --------- | :----- | ------ |
> | triangle  | line   | canvas |
> | red       | black  |        |

### 第二课

#### 知识小结

> ##### 编程
>
> * 学习定义变量的规则
>
> * 学习插入图片的函数
>
>   ```javascript
>   image(url,x,y,width,height);
>   ```
>
> * 学习变量的增减：`+=`，`-=`。

> ##### 数学
>
> * 学习数字的累加
> * 学习数字的累减
> * 学习宽度与高度

> ##### 英语
>
> | hero     | enemy    | rectangle |
> | -------- | -------- | --------- |
> | set      | interval | image     |
> | variable |          |           |

### 第三课

#### 知识小结

> ##### 编程
>
> - if语句的使用
>
>   ```javascript
>   if (条件为真) {
>     执行语句;
>   }
>   ```
>
> - 随机数函数的使用
>
>   ```javascript
>   random(min,max);
>   ```
>
>   1. 其中：min为最小值，max为最大值。
>   2. 它可能取到min，不可能取到max。

> ##### 数学
>
> - 了解基础的逻辑判断
> - 学习数字的累减
> - 学习宽度与高度

> ##### 英语
>
> | random | true | false |
> | ------ | ---- | ----- |
> | if     | else |       |

### 第四课

#### 知识小结

> ##### 编程
>
> - 使用鼠标位置`mouseX`和`mouseY`控制图片位置。
>
> - 学习检测碰撞的函数
>
>   ```javascript
>   detectCollision(x1,y1,w1,h1,x2,y2,w2,h2);
>   ```
>
>   1. 当碰撞到时，它的值是`true`。
>   2. 当没有碰撞到时，它的值是`false`。

> ##### 数学
>
> - 复习坐标的使用，灵活使用坐标值。
> - 学习基本的图形几何关系，将现实问题转化为集合问题。
> - 学习数字的累减
> - 学习宽度与高度

> ##### 英语
>
> | mouse | detect | collision |
> | ----- | ------ | --------- |
> | true  | false  | loop      |
> | play  | music  |           |

### 第五课

#### 知识小结

> ##### 编程
>
> - 学习将游戏功能抽象为代码逻辑
>
> - 学习从头到尾设计一个游戏元素并使用代码实现
>
> - 学习播放音乐
>
>   ```javascript
>   playMusic(url,loop);
>   ```

> ##### 数学
>
> - 了解算法的概念
> - 学习基本的几何算法

> ##### 英语
>
> | stone | diamond | bullet |
> | ----- | ------- | ------ |
> | play  | music   |        |

### 第六课

#### 知识小结

> ##### 编程
>
> - 学习最基本的游戏框架设计
> - 使用鼠标点击事件变量`clickX`和`clickY`。

> ##### 数学
>
> - 学会使用逻辑变量
> - 学会建立标识符表示状态

> ##### 英语
>
> | start | over | flag |
> | ----- | ---- | ---- |
> | loop  | main | true |
> | false |      |      |

***

## Unit 2 疯狂飞鱼

#### 课程内容

- 认识对象和类
- 认识对象的属性和方法
- 导入游戏元素：图片对象的使用
- 使用nextFrame函数实现元素动画
- 让游戏元素移动：图片对象属性的使用
- 循环拼接背景，产生无限路径
- 利用相对关系确定游戏元素位置
- 自定义对象的移动方法并使用
- 障碍物移动逻辑
- 主角掉落移动逻辑
- 使用鼠标点击事件控制主角
- 处理碰撞检测及碰撞后的逻辑
- 使用文本对象显示得分
- 设计游戏开始和结束界面
- 设计游戏最小循环框架
- 游戏改善设计及优化

#### 编程知识

- 创建Sprite类：`var sprite = new Sprite(url,x,y,width,height);`
- 认识Sprite类对象的属性：`sprite.x`, `sprite.y`, `sprite.width`, `sprite.height`, `sprite.src`
- 绘制Sprite类对象：`sprite.draw();`
- 自定义对象方法：
  1. 自定义函数，描述方法内容
  2. 将函数绑定为对象的方法
  3. 使用对象的方法
- 清理画布：`canvas.clear();`
- 下一帧画布调用函数：`nextFrame();`
- 鼠标点击事件：`Mouse.click`
- 鼠标位置属性：`Mouse.x`, `Mouse.y`
- 创建文本对象：`var txt = new Text();`
- 认识文本对象的属性：`txt.x`, `txt.y`, `txt.src`, `txt.fillStyle`
- 绘制文字对象：`txt.draw();`
- 碰撞检测函数：`obj1.collide(obj2)`

#### 数学知识

- 练习坐标系的使用
- 学习和使用对象的宽度和高度
- 坐标点位置的计算
- 使用任意区间的随机数
- 图像的平移和拼接
- 理解位置、速度与加速度的关系
- 使用基本逻辑判断
- 归纳模式并使用
- 理解和认识流程图
- 以流程化方式思考问题

#### 英语知识

sprite	width	height	next	frame

source	mouse	click	object	method

collide	fill	style	draw	clear

loop	start	over	attribute

***

