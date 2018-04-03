/***************************************************************

定义和用法
getImageData() 方法返回 ImageData 对象，该对象拷贝了画布指定矩形的像素数据。

对于 ImageData 对象中的每个像素，都存在着四方面的信息，即 RGBA 值：

R - 红色 (0-255)
G - 绿色 (0-255)
B - 蓝色 (0-255)
A - alpha 通道 (0-255; 0 是透明的，255 是完全可见的)
color/alpha 以数组形式存在，并存储于 ImageData 对象的 data 属性中。

提示：在操作完成数组中的 color/alpha 信息之后，您可以使用 putImageData() 方法将图像数据拷贝回画布上。

例子：
以下代码可获得被返回的 ImageData 对象中第一个像素的 color/alpha 信息：

red=imgData.data[0];
green=imgData.data[1];
blue=imgData.data[2];
alpha=imgData.data[3];


JavaScript 语法
var imgData=ctx.getImageData(x,y,width,height);
参数值
参数  描述
x   开始复制的左上角位置的 x 坐标。
y   开始复制的左上角位置的 y 坐标。
width   将要复制的矩形区域的宽度。
height  将要复制的矩形区域的高度。


***************************************************************/

let url = "https://rss.leaplearner.com/Image/Bgs/Alarm_bg_01.png";
let imageData;

Mouse.move = function(){
    imageData = ctx.getImageData(Mouse.x, Mouse.y, 100, 100);
};

setInterval(function(){
    image(url, 100, 100);
    ctx.putImageData(imageData, 0, 0);
}, 20);