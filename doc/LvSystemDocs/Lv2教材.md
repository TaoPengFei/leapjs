## L2U1 《雷霆战机》

### Lesson 1

#### 学习目标

> - ​

#### 学习难点

> - ​

#### 课前准备

> - ​

#### 讲解流程

##### 1 登录账号熟悉开发环境

- ​

##### 2 熟悉开发环境

- 登录后 开发环境如下图所示

  ![开发环境图示](http://ou1htxdl4.bkt.clouddn.com/123.jpg)

  图中各部分功能：

  1. 代码输入框
  2. 代码运行结果实时展示框
  3. 代码运行按钮，点击后代码运行
  4. 文件菜单，可以对文件进行`打开`，`新建`，`保存`，`克隆`，`重命名`操作
  5. 显示鼠标在画布中的坐标位置
  6. 函数列表，可以找到各类函数并点击使用
  7. 媒体资源库，包含`图片`，`音乐`，`音效`等资源
  8. 分享按钮，可以以二维码方式或链接方式分享项目
  9. 个人中心，可以退出登录

##### 3 设置画布大小

- 在代码框中输入以下代码，可以设置画布的大小

  ```javascript
  canvas.width = 355;
  canvas.height = 550;
  ```

- 设置完成后，点击`运行`，应该会看到一个线框，线框框出来的位置就是画布。

##### 4 创建第一个图片对象

- 点击左侧函数列表中的image函数，创建第一个图片函数。代码框中代码如下：

  ```javascript
  var sprite = new Sprite('http://static.leaplearner.com/image/image.png',150,200,40,40);
  ```

  其中：

  1. `sprite`是对象名称，

#### 课后习题

> - 第一题：
>
>   哪条命令能让英雄战机往右下角移动？
>
>   - A `heroX += 1; heroY += 1;`
>   - B `heroX += 1; heroY -= 1;`
>   - C `heroX -= 1; heroY += 1;`
>   - D `heroX -= 1; heroY -= 1;`

> - 第二题：
>
>   下面这段代码是什么意思？
>
>   ```javascript
>   if (heroX > 100) {
>     heroX = 0;
>   }
>   ```
>
>   - A `如果heroX不大于100，则将它变为0`
>   - B `如果heroX大于100，则将它变为0`
>   - C `如果heroX等于0，则将它变为100`
>   - D `如果heroX等于0，则将它变为比100大的数`

> - 第三题：
>
>   多选题：以下哪些数字是random(100,600)可能产生的数字？
>
>   - A `50`
>   - B `100`
>   - C `190.5555555`
>   - D `510.33234`
>   - E `600`
>   - F `633.21421`
>   - G `648`

### Lesson 2

#### 课后习题

> - 第一题：
>
>   下列哪个选项正确创建了一个新的对象？
>
>   - A  `var abc = new sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`
>   - B `abc = new Sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`
>   - C `var abc = Sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`
>   - D `var abc = new Sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`

> - 第二题：
>
>   请将对应选项填入对应的空格中：
>
>   ______________________________是类，______________________________是这个从这个类创建的对象，______________________________是对象的属性，______________________________是对象的方法。
>
>   - A `猪`
>   - B `狗`
>   - C `牛`
>   - D `某一头奶牛`
>   - E  `某一头黄牛`
>   - F  `某一个人`
>   - G `身体颜色`
>   - H `体重`
>   - I   `吃草`
>   - J   `汪汪叫`
>   - K  `睡觉`

> - 第三题：
>
>   执行如下代码后，`img.x`和`img.width`的值分别是多少？
>
>   ```javascript
>   var img = new Sprite(50,100,300,200);
>   img.translate(100,200);
>   ```
>
>   - A `150和300`
>   - B `50和400`
>   - C `50和300`
>   - D `150和400`

### Lesson 3

#### 课后习题

> - 第一题：
>
>   如果想让鼠标左移时青蛙右移，鼠标右移时青蛙左移，鼠标上移时青蛙上移，鼠标下移时青蛙下移，代码应该怎样写？
>
>   - A `frogX = mouseX; frogY = mouseY;`
>   - B `frogX = -mouseX; frogY = mouseY;`
>   - C `frogX = mouseX; frogY = -mouseY;`
>   - D `frogX = -mouseX; frogY = -mouseY;`

> - 第二题：
>
>   填空题，请参考下图的情形，在每行代码后填写碰撞函数的返回值（如果两个东西碰撞了，返回值就是true；如果两个东西没碰撞，返回值就是false）：
>
>   ![碰撞演示图](http://ou1htxdl4.bkt.clouddn.com/collision.png)
>
>   - `detectCollision(x1,y1,w1,h1,x2,y2,w2,h2);` 返回值（             ）
>   - `detectCollision(x1,y1,w1,h1,x3,y3,w3,h3);` 返回值（             ）
>   - `detectCollision(x2,y2,w2,h2,x3,y3,w3,h3);` 返回值（             ）

### Lesson 4

### Lesson 5

### Lesson 6

## L2U2 《疯狂飞鱼》

### Lesson 7

#### 学习目标

> - 熟悉新的开发环境
> - 了解类和对象的概念
> - 创建图片对象并画出图片

#### 学习难点

> - 理解类和对象的含义
> - 以面向对象的方式绘制图片
> - 根据相对关系确定游戏元素的位置

#### 课前准备

> - 从班主任处获得学生账号和密码
> - 登录学生账号，确认FlyFish_1代码文件已位于学生服务器文件夹内

#### 讲解流程

##### 1 登录账号

- 打开新的开发环境链接：[code.leaplearner.com](code.leaplearner.com)
- 将学生的账号和密码发给学生
- 帮助学生登录账号（账号密码暂时不能修改）

##### 2 熟悉开发环境

- 登录后 开发环境如下图所示

  ![开发环境图示](http://ou1htxdl4.bkt.clouddn.com/123.jpg)

  图中各部分功能：

  1. 代码输入框
  2. 代码运行结果实时展示框
  3. 代码运行按钮，点击后代码运行
  4. 文件菜单，可以对文件进行`打开`，`新建`，`保存`，`克隆`，`重命名`操作
  5. 显示鼠标在画布中的坐标位置
  6. 函数列表，可以找到各类函数并点击使用
  7. 媒体资源库，包含`图片`，`音乐`，`音效`等资源
  8. 分享按钮，可以以二维码方式或链接方式分享项目
  9. 个人中心，可以退出登录

##### 3 设置画布大小

- 在代码框中输入以下代码，可以设置画布的大小

  ```javascript
  canvas.width = 355;
  canvas.height = 550;
  ```

- 设置完成后，点击`运行`，应该会看到一个线框，线框框出来的位置就是画布。

##### 4 创建第一个图片对象

- 点击左侧函数列表中的image函数，创建第一个图片函数。代码框中代码如下：

  ```javascript
  var sprite = new Sprite('http://static.leaplearner.com/image/image.png',150,200,40,40);
  ```

  其中：

  1. `sprite`是对象名称，

### Lesson 8

#### 课后习题

> - 第一题：
>
>   下列哪个选项正确创建了一个新的对象？
>
>   - A  `var abc = new sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`
>   - B `abc = new Sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`
>   - C `var abc = Sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`
>   - D `var abc = new Sprite("http://ou1htxdl4.bkt.clouddn.com/yomo/background.png",100,100,30,50);`

> - 第二题：
>
>   请将对应选项填入对应的空格中：
>
>   ______________________________是类，______________________________是这个从这个类创建的对象，______________________________是对象的属性，______________________________是对象的方法。
>
>   - A `猪`
>   - B `狗`
>   - C `牛`
>   - D `某一头奶牛`
>   - E  `某一头黄牛`
>   - F  `某一个人`
>   - G `身体颜色`
>   - H `体重`
>   - I   `吃草`
>   - J   `汪汪叫`
>   - K  `睡觉`

> - 第三题：
>
>   执行如下代码后，`img.x`和`img.width`的值分别是多少？
>
>   ```javascript
>   var img = new Sprite(50,100,300,200);
>   img.translate(100,200);
>   ```
>
>   - A `150和300`
>   - B `50和400`
>   - C `50和300`
>   - D `150和400`



## L2U2 backups

### 1 导入游戏元素

- 创建图片对象

- 讲解下对象的属性和方法

- 绘制图片对象：`sky.draw()`

- 移动图片：`sky.x = sky.x - 1;`

- `nextFrame`函数

  ```javascript
  // Let us code the future
  canvas.width = 355;
  canvas.height = 500;

  //创建一个图片对象
  var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);
  var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
  var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
  var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
  var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
  var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);

  function Loop() {
      sky.x = sky.x - 2;
      sky.draw();
      fish.draw();
      box.draw();
      box2.draw();
      box3.draw();
      land.draw();
      nextFrame(Loop);
  }

  Loop();
  ```

### 2 让天空动起来

- 天空移动的原理：拼接
- 新的方法：translate(x,y);
- 天空的移动逻辑：x小于-width，重新放到0
- 让学生以同样方式完成地面的移动

```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);
var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);

function Loop() {
    
    sky.translate(0,0);
    sky.draw();
    sky.translate(sky.width,0);
    sky.draw();
    if (sky.x < - sky.width) {
        sky.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    sky.x = sky.x - 2;
    
    land.translate(0,0);
    land.draw();
    land.translate(land.width,0);
    land.draw();
    if (land.x < - land.width) {
        land.x = 0;
    }
    // land.x = (land.x < -land.width) ? 0 : land.x;
    land.x = land.x - 2;
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.draw();
    nextFrame(Loop);
}

Loop();
```

### 3 定义自己的方法

- 观察代码，发现累赘的地方

- 这节课把会重复用到的一些操作，变成一个方法，可以更方便的使用

- 自定义方法的三步：

  1. 写出描述这个方法的函数

  ```javascript
  function move() {
      this.translate(0,0);
      this.draw();
      this.translate(sky.width,0);
      this.draw();
      if (this.x < - this.width) {
          this.x = 0;
      }
      // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
      this.x = this.x - 2;
  }
  ```

  这是一本武功秘籍，谁都可以学会

  用到`this`关键字。

  2. 绑定方法到sky和land上

  ```javascript
  sky.move = move;
  ```

  3. 使用这个方法

  ```javascript
  sky.move();
  ```

  代码：

  ```javascript
  // Let us code the future
  canvas.width = 355;
  canvas.height = 500;

  //创建一个图片对象
  var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);
  var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
  var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
  var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
  var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
  var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);

  function Loop() {
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    nextFrame(Loop);
  }

  function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
  }

  sky.move = move;
  land.move = move;
  Loop();
   
  ```


 ### 4 让障碍物移动

* 先让一个障碍物移动：重复产生的移动逻辑
* 另一个障碍物的位置：
  1. x与第一个障碍物相等
  2. y与第一个障碍物保持相同间距

```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);

var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);


function Loop() {
    
    if (box2.x < -box2.width) {
        box2.x = canvas.width;
        box2.y = -20 + Math.random() * 200;
    }
    box2.x = box2.x - 2;
    box.x = box2.x;
    box.y = box2.y + box2.height + 120;
    
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    nextFrame(Loop);
}

function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
}

sky.move = move;
land.move = move;
Loop();
```

### 5 让鸟动起来

- 鸟会自己下落
  1. 会越来越快
  2. 可以参考重力加速度知识
- 点击鼠标鸟会往上飞
  1. 学习鼠标点击事件
  2. 阻塞式 - 轮值式 - 事件驱动式（选讲）
  3. 试着写几种jump的方式，选出最合适的一种

```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);
var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);
var moveY = 0;

function Loop() {
    
    fish.y = fish.y + moveY;
    moveY = moveY + 0.2;
    if (box2.x < -box2.width) {
        box2.x = canvas.width;
        box2.y = -20 + Math.random() * 200;
    }
    box2.x = box2.x - 2;
    box.x = box2.x;
    box.y = box2.y + box2.height + 120;
    
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    nextFrame(Loop);
}

function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
}

function jump() {
    moveY = -5;
}

Mouse.click = jump;
sky.move = move;
land.move = move;

Loop();
```

### 6 显示得分

- 创建文字对象
- 绘制文字对象
- 创建`score`变量用于保存分数
- 用`+`连接字符串
- 如何加分？
  1. 加分条件是什么？
  2. 加分条件的等价条件是什么？

```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);

var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);
var scoreTxt = new Text();
var moveY = 0;
var score = 0;

function Loop() {
    
    fish.y = fish.y + moveY;
    moveY = moveY + 0.2;
    if (box2.x < -box2.width) {
        box2.x = canvas.width;
        box2.y = -20 + Math.random() * 200;
        score = score + 1;
    }
    box2.x = box2.x - 2;
    box.x = box2.x;
    box.y = box2.y + box2.height + 120;
    
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    nextFrame(Loop);
}

function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
}

function jump() {
    moveY = -5;
}

Mouse.click = jump;
sky.move = move;
land.move = move;

Loop();
```

### 7 如何让游戏结束

```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);

var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);
var scoreTxt = new Text();
var overTxt = new Text();
var moveY = 0;
var score = 0;
var isOver = true;
var isStart = false;

function Main() {
    if (isOver) Over();
    else {
        if (isStart) Loop();
        else Start();
    }
    nextFrame(Main);
}

function Start() {
    fish.x = 120;
    fish.y = 200;
    sky.x = 0;
    sky.y = 0;
    land.x = 0;
    box2.y = -20 + Math.random() * 200;
    box2.x = canvas.width;
    score = 0;
    isStart = true;
}

function Over() {
    overTxt.src = "Game Over，得分：" + score;
    overTxt.x = 80;
    overTxt.y = 210;
    overTxt.draw();
    overTxt.src = "点击鼠标重新开始";
    overTxt.y = 230;
    overTxt.draw();
}

function Loop() {
    
    fish.y = fish.y + moveY;
    moveY = moveY + 0.2;
    if (box2.x < -box2.width) {
        box2.x = canvas.width;
        box2.y = -20 + Math.random() * 200;
        score = score + 1;
    }
    box2.x = box2.x - 2;
    box.x = box2.x;
    box.y = box2.y + box2.height + 120;
    
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    
}

function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
}

function jump() {
    moveY = -5;
}

Mouse.click = jump;
sky.move = move;
land.move = move;

Main();
```

![游戏框架流程图](.\images\Lv2\L2U2_GameFramework.jpg) 

### 8 碰撞检测

```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);

var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);
var scoreTxt = new Text();
var overTxt = new Text();
var moveY = 0;
var score = 0;
var isOver = false;
var isStart = false;

function Main() {
    if (isOver) Over();
    else {
        if (isStart) Loop();
        else Start();
    }
    nextFrame(Main);
}

function Start() {
    fish.x = 120;
    fish.y = 200;
    sky.x = 0;
    sky.y = 0;
    land.x = 0;
    box2.y = -20 + Math.random() * 200;
    box2.x = canvas.width;
    score = 0;
    moveY = 0;
    isStart = true;
}

function Over() {
    overTxt.src = "Game Over，得分：" + score;
    overTxt.x = 80;
    overTxt.y = 210;
    overTxt.draw();
    overTxt.src = "点击鼠标重新开始";
    overTxt.y = 230;
    overTxt.draw();
}

function Loop() {
    
    fish.y = fish.y + moveY;
    moveY = moveY + 0.2;
    if (box2.x < -box2.width) {
        box2.x = canvas.width;
        box2.y = -20 + Math.random() * 200;
        score = score + 1;
    }
    box2.x = box2.x - 2;
    box.x = box2.x;
    box.y = box2.y + box2.height + 120;
    
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    
    if (fish.collide(box2) || fish.collide(box)) isOver = true;
    if (fish.y > (land.y - fish.height)) isOver = true;
    
}

function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
}

function jump() {
    if (isOver === false && isStart === true) moveY = -5;
    if (isOver === true) {
        isOver = false;
        isStart = false;
    }
}

Mouse.click = jump;

sky.move = move;
land.move = move;

Main();
```







```javascript
// Let us code the future
canvas.width = 355;
canvas.height = 500;

//创建一个图片对象
var sky = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/background.png',0,0,355,500);

var fish = new Sprite('http://ou1htxdl4.bkt.clouddn.com/fish1.png',150,200,50,50);
var land = new Sprite('http://ou1htxdl4.bkt.clouddn.com/ground.png',0,450,355,50);
var box = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,300,60,150);
var box2 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,0,60,150);
var box3 = new Sprite('http://ou1htxdl4.bkt.clouddn.com/yomo/spike3.png',300,-150,60,150);
var scoreTxt = new Text();
var hiscoreTxt = new Text();
var overTxt = new Text();
var moveY = 0;
var score = 0;
var hiScore = 0;
var isOver = false;
var isStart = false;
var distance = 120;

function Main() {
    if (isOver) Over();
    else {
        if (isStart) Loop();
        else Start();
    }
    nextFrame(Main);
}

function Start() {
    fish.x = 120;
    fish.y = 200;
    sky.x = 0;
    sky.y = 0;
    land.x = 0;
    box2.y = -20 + Math.random() * 200;
    box2.x = canvas.width;
    score = 0;
    moveY = 0;
    distance = 120;
    isStart = true;
}

function Over() {
    canvas.clear();
    overTxt.src = "Game Over，得分：" + score;
    overTxt.x = 80;
    overTxt.y = 210;
    overTxt.draw();
    overTxt.src = "点击鼠标重新开始";
    overTxt.y = 230;
    overTxt.draw();
}

function Loop() {
    
    fish.y = fish.y + moveY;
    moveY = moveY + 0.2;
    if (box2.x < -box2.width) {
        box2.x = canvas.width;
        box2.y = -20 + Math.random() * 200;
        score = score + 1;
        if (score > hiScore) hiScore = score;
        distance = distance - 1;
    }
    box2.x = box2.x - 2;
    box.x = box2.x;
    box.y = box2.y + box2.height + distance;
    
    sky.move();
    fish.draw();
    box.draw();
    box2.draw();
    box3.draw();
    land.move();
    scoreTxt.src = "得分：" + score;
    scoreTxt.draw();
    hiscoreTxt.x = 240;
    hiscoreTxt.src = "最高分：" + hiScore;
    hiscoreTxt.draw();
    
    if (fish.collide(box2) || fish.collide(box)) isOver = true;
    if (fish.y > (land.y - fish.height)) isOver = true;
    
}

function move() {
    this.translate(0,0);
    this.draw();
    this.translate(this.width,0);
    this.draw();
    if (this.x < - this.width) {
        this.x = 0;
    }
    // sky.x = (sky.x < -sky.width) ? 0 : sky.x;
    this.x = this.x - 2;
}

function jump() {
    if (isOver === false && isStart === true) moveY = -5;
    if (isOver === true) {
        isOver = false;
        isStart = false;
    }
}

Mouse.click = jump;
sky.move = move;
land.move = move;

Main();
```

