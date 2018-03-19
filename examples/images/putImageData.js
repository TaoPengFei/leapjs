/***************************************************************

定义和用法
putImageData() 方法将图像数据（从指定的 ImageData 对象）放回画布上。

提示：请参阅 getImageData() 方法，它可复制画布上指定的矩形的像素数据。

提示：请参阅 createImageData() 方法，它可创建新的空白 ImageData 对象。

JavaScript 语法：
context.putImageData(imgData,x,y,dirtyX,dirtyY,dirtyWidth,dirtyHeight);
参数值
参数          描述
imgData     规定要放回画布的 ImageData 对象。
x           ImageData 对象左上角的 x 坐标，以像素计。
y           ImageData 对象左上角的 y 坐标，以像素计。
dirtyX      可选。水平值（x），以像素计，在画布上放置图像的位置。
dirtyY      可选。水平值（y），以像素计，在画布上放置图像的位置。
dirtyWidth  可选。在画布上绘制图像所使用的宽度。
dirtyHeight 可选。在画布上绘制图像所使用的高度。


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