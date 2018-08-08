## 音乐与音效对象

### 内容概要

#### Audio类

创建一个音乐对象，需要通过对象的src属性来指定音乐链接。Audio是h5支持的音效对象。

```javascript
var music = new Audio();
```

#### 属性 Attribute

| 属性        | 用法                                     |
| ----------- | ---------------------------------------- |
| src         | 设置或返回音频元素的当前来源             |
| currentTime | 设置或返回音频播放的当前位置（以秒计）。 |
| loop        | 设置或者返回音频是否循环播放             |
| volume      | 设置或者返回音频的音量                   |

#### 方法 method

| 方法  | 用法     |
| ----- | -------- |
| play  | 播放音乐 |
| pause | 暂停播放 |

#### 事件 event

| 事件             | 用法                 |
| ---------------- | -------------------- |
| oncanplaythrough | 当音乐可以播放时触发 |

### 音效类 Audio

好的项目离不开音效，合适的音效可以让一个项目发挥出200%的效果。前面的play和pause方法只能控制音乐音效的暂停和开始，如果要对音乐音效进行更多的控制，那么就要创建一个音效对象来控制了。

```javascript
var music = new Audio();
music.src = "https://r.leaplearner.com/a/16/gameBG.mp3"
music.play();
```

#### 属性 Attribute

##### src 资源地址

定义和用法：设置或返回音频元素的当前来源 

可能的值：

- 绝对 URL - 指向另一个网站（比如src = "https://rss.leaplearner.com/a/16/gameBG.mp3"）
- 相对 URL - 指向网站内的某个文件（比如 src="/data/movie.ogg"）

使用绝对URL，可以使用任意的音效资源，避免发布在不同网址时同步资源。

返回值：

* 字符串值 - 当前的音频来源。 

##### currentTime 当前播放位置

定义和用法：currentTime 属性设置或返回音频/视频播放的当前位置（以秒计）。

当设置该属性时，播放会跳跃到指定的位置。

**例子：从头播放**

```javascript
var music = new Audio();
music.src = "https://r.leaplearner.com/a/17/InRoom.mp3";
music.play();

Mouse.click = function(){
    music.currentTime = 0;
};
```

每次在画布上点击鼠标，音乐的播放时间都回到0，也就是从头开始。

##### loop 是否循环播放

背景音乐一般是长度较长的音乐，且需要循环播放。默认情况下，音乐播放结束后不会重复播放。我们可以将音效的`loop`属性设置为true，这样只要播放结束，这个音乐就会重复播放。

运行以下代码一段时间，然后把第3行注释，比较以下2段代码控制的音乐的播放效果。

```javascript
var music = new Audio();
music.src = "https://r.leaplearner.com/a/1/BonusTime.mp3"
music.loop = true;  // 将本行代码注释，查看效果
music.play();
```

记的开启电脑的音效

##### volume 音量

规定音频/视频的当前音量。必须是介于 0.0 与 1.0 之间的数字。

例值：

- 1.0 是最高音量（默认）
- 0.5 是一半音量 （50%）
- 0.0 是静音



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

#### 方法 Method

##### play 播放

开始播放音频/视频 ，如果音效已经在播放中，play方法没有作用。在pause后重新使用play，将从停下来的位置继续播放。

##### pause 暂停

暂停音乐的播放，如果音乐没有在播放，该方法无效果。

**例子：用鼠标来控制音乐的播放和暂停**

首先，创建一个音效对象，我们选择一首较长的音乐作为对象。

```javascript
var music = new Audio();
music.src = "https://r.leaplearner.com/a/17/InRoom.mp3";
```

使用鼠标来控制音效的播放，在鼠标按下时，开始播放，如果松开鼠标，暂停播放

```javascript
Mouse.down = function(){
    music.play();
};

Mouse.up = function(){
    music.pause();
};
```



#### 事件 Event

##### oncanplaythrough

当浏览器预计能够在不停下来进行缓冲的情况下持续播放指定的音频/视频时，会发生` canplaythrough` 事件。

当音频/视频处于加载过程中时，会依次发生以下事件：

- loadstart
- durationchange
- loadedmetadata
- loadeddata
- progress
- canplay
- canplaythrough

大部分情况下，我们只要使用`oncanplaythrough`方法就可以了。它可以保证音效是处于可以播放的状态。

### Audio 的其他属性和方法

#### 其他属性

| 属性                                                         | 描述                                                       |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| [audioTracks](http://www.w3school.com.cn/tags/av_prop_audiotracks.asp) | 返回表示可用音轨的 AudioTrackList 对象                     |
| [autoplay](http://www.w3school.com.cn/tags/av_prop_autoplay.asp) | 设置或返回是否在加载完成后随即播放音频/视频                |
| [buffered](http://www.w3school.com.cn/tags/av_prop_buffered.asp) | 返回表示音频/视频已缓冲部分的 TimeRanges 对象              |
| [controller](http://www.w3school.com.cn/tags/av_prop_controller.asp) | 返回表示音频/视频当前媒体控制器的 MediaController 对象     |
| [controls](http://www.w3school.com.cn/tags/av_prop_controls.asp) | 设置或返回音频/视频是否显示控件（比如播放/暂停等）         |
| crossOrigin                                                  | 设置或返回音频/视频的 CORS 设置                            |
| [currentSrc](http://www.w3school.com.cn/tags/av_prop_currentsrc.asp) | 返回当前音频/视频的 URL                                    |
| [currentTime](http://www.w3school.com.cn/tags/av_prop_currenttime.asp) | 设置或返回音频/视频中的当前播放位置（以秒计）              |
| [defaultMuted](http://www.w3school.com.cn/tags/av_prop_defaultmuted.asp) | 设置或返回音频/视频默认是否静音                            |
| [defaultPlaybackRate](http://www.w3school.com.cn/tags/av_prop_defaultplaybackrate.asp) | 设置或返回音频/视频的默认播放速度                          |
| [duration](http://www.w3school.com.cn/tags/av_prop_duration.asp) | 返回当前音频/视频的长度（以秒计）                          |
| [ended](http://www.w3school.com.cn/tags/av_prop_ended.asp)   | 返回音频/视频的播放是否已结束                              |
| [error](http://www.w3school.com.cn/tags/av_prop_error.asp)   | 返回表示音频/视频错误状态的 MediaError 对象                |
| [loop](http://www.w3school.com.cn/tags/av_prop_loop.asp)     | 设置或返回音频/视频是否应在结束时重新播放                  |
| [mediaGroup](http://www.w3school.com.cn/tags/av_prop_mediagroup.asp) | 设置或返回音频/视频所属的组合（用于连接多个音频/视频元素） |
| [muted](http://www.w3school.com.cn/tags/av_prop_muted.asp)   | 设置或返回音频/视频是否静音                                |
| [networkState](http://www.w3school.com.cn/tags/av_prop_networkstate.asp) | 返回音频/视频的当前网络状态                                |
| [paused](http://www.w3school.com.cn/tags/av_prop_paused.asp) | 设置或返回音频/视频是否暂停                                |
| [playbackRate](http://www.w3school.com.cn/tags/av_prop_playbackrate.asp) | 设置或返回音频/视频播放的速度                              |
| [played](http://www.w3school.com.cn/tags/av_prop_played.asp) | 返回表示音频/视频已播放部分的 TimeRanges 对象              |
| [preload](http://www.w3school.com.cn/tags/av_prop_preload.asp) | 设置或返回音频/视频是否应该在页面加载后进行加载            |
| [readyState](http://www.w3school.com.cn/tags/av_prop_readystate.asp) | 返回音频/视频当前的就绪状态                                |
| [seekable](http://www.w3school.com.cn/tags/av_prop_seekable.asp) | 返回表示音频/视频可寻址部分的 TimeRanges 对象              |
| [seeking](http://www.w3school.com.cn/tags/av_prop_seeking.asp) | 返回用户是否正在音频/视频中进行查找                        |
| [src](http://www.w3school.com.cn/tags/av_prop_src.asp)       | 设置或返回音频/视频元素的当前来源                          |
| [startDate](http://www.w3school.com.cn/tags/av_prop_startdate.asp) | 返回表示当前时间偏移的 Date 对象                           |
| [textTracks](http://www.w3school.com.cn/tags/av_prop_texttracks.asp) | 返回表示可用文本轨道的 TextTrackList 对象                  |
| [videoTracks](http://www.w3school.com.cn/tags/av_prop_videotracks.asp) | 返回表示可用视频轨道的 VideoTrackList 对象                 |
| [volume](http://www.w3school.com.cn/tags/av_prop_volume.asp) | 设置或返回音频/视频的音量                                  |

#### 方法速查

| 方法                                                         | 描述                                    |
| ------------------------------------------------------------ | --------------------------------------- |
| [addTextTrack()](http://www.w3school.com.cn/tags/av_met_addtexttrack.asp) | 向音频/视频添加新的文本轨道             |
| [canPlayType()](http://www.w3school.com.cn/tags/av_met_canplaytype.asp) | 检测浏览器是否能播放指定的音频/视频类型 |
| [load()](http://www.w3school.com.cn/tags/av_met_load.asp)    | 重新加载音频/视频元素                   |
| [play()](http://www.w3school.com.cn/tags/av_met_play.asp)    | 开始播放音频/视频                       |
| [pause()](http://www.w3school.com.cn/tags/av_met_pause.asp)  | 暂停当前播放的音频/视频                 |

#### 其他事件

| 事件                                                         | 描述                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| abort                                                        | 当音频/视频的加载已放弃时                    |
| [canplay](http://www.w3school.com.cn/tags/av_event_canplay.asp) | 当浏览器可以播放音频/视频时                  |
| [canplaythrough](http://www.w3school.com.cn/tags/av_event_canplaythrough.asp) | 当浏览器可在不因缓冲而停顿的情况下进行播放时 |
| [durationchange](http://www.w3school.com.cn/tags/av_event_durationchange.asp) | 当音频/视频的时长已更改时                    |
| emptied                                                      | 当目前的播放列表为空时                       |
| ended                                                        | 当目前的播放列表已结束时                     |
| error                                                        | 当在音频/视频加载期间发生错误时              |
| [loadeddata](http://www.w3school.com.cn/tags/av_event_loadeddata.asp) | 当浏览器已加载音频/视频的当前帧时            |
| [loadedmetadata](http://www.w3school.com.cn/tags/av_event_loadedmetadata.asp) | 当浏览器已加载音频/视频的元数据时            |
| [loadstart](http://www.w3school.com.cn/tags/av_event_loadstart.asp) | 当浏览器开始查找音频/视频时                  |
| pause                                                        | 当音频/视频已暂停时                          |
| play                                                         | 当音频/视频已开始或不再暂停时                |
| playing                                                      | 当音频/视频在已因缓冲而暂停或停止后已就绪时  |
| [progress](http://www.w3school.com.cn/tags/av_event_progress.asp) | 当浏览器正在下载音频/视频时                  |
| ratechange                                                   | 当音频/视频的播放速度已更改时                |
| seeked                                                       | 当用户已移动/跳跃到音频/视频中的新位置时     |
| seeking                                                      | 当用户开始移动/跳跃到音频/视频中的新位置时   |
| stalled                                                      | 当浏览器尝试获取媒体数据，但数据不可用时     |
| suspend                                                      | 当浏览器刻意不获取媒体数据时                 |
| timeupdate                                                   | 当目前的播放位置已更改时                     |
| volumechange                                                 | 当音量已更改时                               |
| waiting                                                      | 当视频由于需要缓冲下一帧而停止               |