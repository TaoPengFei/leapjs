/***************************************************************

定义和用法
measureText() 方法返回包含一个对象，该对象包含以像素计的指定字体宽度。

提示：如果您需要在文本向画布输出之前，就了解文本的宽度，那么请使用该方法。


ctx.measureText(text).width;

参数值
参数  描述
text    要测量的文本。


***************************************************************/
canvas.showAxis();

let msg = "Hello World";

text(msg, 100, 100, 20);

ctx.font = "20px Arial";
let len = ctx.measureText(msg).width;

text("!", 100+len, 100);