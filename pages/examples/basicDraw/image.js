/***************************************************************

image(url, x, y, width, height)

在画布上画出一个图片：

* 图片的地址为url，图片需要支持跨域访问
* 图片的左上角顶点位置为(x,y)，默认为(0,0)
* 图片的显示宽度为width，默认显示宽度大小为图片原始宽度
* 图片的显示高度为height，默认显示高度为图片原始高度

***************************************************************/

var url1 = "https://rss.leaplearner.com/Image/Bgs/Alarm_bg_01.png";
var url2 = "https://rss.leaplearner.com/Image/Bgs/bluebg.jpg";

// 使用图片铺满整个屏幕，利用canvas的属性，可以用来设置背景
image(url1, 0, 0, canvas.width, canvas.heigh);

// 不带任何参数，默认显示图片原始大小
image("https://rss.leaplearner.com/Image/Role/Frog1.png");

image("https://rss.leaplearner.com/Image/Role/Frog1.png", 200, 200, 100, 100);


/***************************************************************
图片的加载需要时间，如果图片未缓存，画图片时会有一定的延迟，可能会导致图片的绘制顺序与预期不同。一般等图片缓存后重新执行就可以解决这个问题，否则需要定义一个函数，使用loadRssAndRun()来加载资源。使用loadRssAndRun()方法

***************************************************************/