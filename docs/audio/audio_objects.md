## 音乐与音效对象

好的项目离不开音效，合适的音效可以让一个项目发挥出200%的效果。前面的play和pause方法只能控制音乐音效的暂停和开始，如果要对音乐音效进行更多的控制，那么就要创建一个音效对象来控制了。

```javascript
var music = new Audio();
music.src = "https://rss.leaplearner.com/a/16/gameBG.mp3"
music.play();
```

### 属性和方法

#### src

定义和用法：设置或返回音频元素的当前来源 

可能的值：

- 绝对 URL - 指向另一个网站（比如src = "https://rss.leaplearner.com/a/16/gameBG.mp3"）
- 相对 URL - 指向网站内的某个文件（比如 src="/data/movie.ogg"）

使用绝对URL，可以使用任意的音效资源，避免发布在不同网址时同步资源。

返回值：

* 字符串值 - 当前的音频来源。 

#### currentTime

定义和用法：currentTime 属性设置或返回音频/视频播放的当前位置（以秒计）。当设置该属性时，播放会跳跃到指定的位置。

#### oncanplaythrough

当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生 canplaythrough 事件。

当音频/视频处于加载过程中时，会依次发生以下事件：

- loadstart
- durationchange
- loadedmetadata
- loadeddata
- progress
- canplay
- canplaythrough

大部分情况下，我们只要使用该方法就可以了。它可以保证音效是处于可以播放的状态。

### 音乐

背景音乐一般是长度较长的音乐，且需要循环播放。默认情况下，音乐播放结束后不会重复播放。我们可以将音效的`loop`属性设置为true，这样只要播放结束，这个音乐就会重复播放。

```javascript
var music = new Audio();
music.src = "ddd.mp3"
music.loop = true;
music.play();
```

### 音效

无论是音乐还是音效，浏览器在加载时都需要耗费一定的时间，因此一般都是通过异步加载的。因此只有在加载结束后才能进行播放。一般通过`oncanplaythrough`函数来调用播放音效。

如果是音效，我们可以在项目执行之前进行加载。本书不涉及到资源的管理和加载，如果有兴趣，可以去网上了解更多预加载的知识。

**实例：色阶钢琴**

```javascript
var url = "http://llcs-1252287760.cossh.myqcloud.com/Piano/";

var urls = [ "40-C.mp3", "42-D.mp3", "44-E.mp3", "45-F.mp3", "47-G.mp3", "49-A.mp3", "51-B.mp3"];

var Key = Rectangle;
Key.prototype.click = function(){
    this.audio.currentTime = 0;
    this.audio.play();
};

for(var i=0; i<urls.length; i++){
    var key = new Key(0, 550/7*i, 350, 550/7);
    key.fillStyle = RGB(0, 200-20*i, 200-20*i);
    key.audio = new Audio();
    key.audio.src = url + urls[i];
    key.fill();
}
```

