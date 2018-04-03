/***************************************************************

定义和用法
globalCompositeOperation 属性设置或返回如何将一个源（新的）图像绘制到目标（已有）的图像上。

源图像 = 您打算放置到画布上的绘图。

目标图像 = 您已经放置在画布上的绘图。

默认值：    source-over
JavaScript 语法：  ctx.globalCompositeOperation="source-in";
属性值
值   描述
source-over 默认。在目标图像上显示源图像。
source-atop 在目标图像顶部显示源图像。源图像位于目标图像之外的部分是不可见的。
source-in   在目标图像中显示源图像。只有目标图像内的源图像部分会显示，目标图像是透明的。
source-out  在目标图像之外显示源图像。只会显示目标图像之外源图像部分，目标图像是透明的。
destination-over    在源图像上方显示目标图像。
destination-atop    在源图像顶部显示目标图像。源图像之外的目标图像部分不会被显示。
destination-in  在源图像中显示目标图像。只有源图像内的目标图像部分会被显示，源图像是透明的。
destination-out 在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。
lighter 显示源图像 + 目标图像。
copy    显示源图像。忽略目标图像。
xor 使用异或操作对源图像与目标图像进行组合。


***************************************************************/
canvas.resize(1, 1);

var gco= ["source-atop", "source-in", "source-out", "source-over", 
          "destination-atop", "destination-in", "destination-out",
          "destination-over", "lighter", "copy", "xor"];

for (n=0;n<gco.length;n++)
{
    document.write("<div id='p_" + n + "' style='float:left;'>" + gco[n] + ":<br>");
    var c=document.createElement("canvas");
    c.width=120;
    c.height=100;
    document.getElementById("p_" + n).appendChild(c);
    var ctx=c.getContext("2d");    
    ctx.fillStyle="blue";
    ctx.fillRect(10,10,50,50);
    ctx.globalCompositeOperation=gco[n];
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(50,50,30,0,2*Math.PI);
    ctx.fill();
    document.write("</div>");   
}
