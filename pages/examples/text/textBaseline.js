/***************************************************************

定义和用法
textBaseline 属性设置或返回在绘制文本时的当前文本基线。

下面的图示演示了 textBaseline 属性支持的各种基线：

文本基线图示
注释：text() 或 text.draw() 方法在画布上定位文本时，将使用指定的 textBaseline 值。

默认值：    top
ctx.textBaseline="alphabetic|top|hanging|middle|ideographic|bottom";

属性值
值           描述
alphabetic  文本基线是普通的字母基线。
top         文本基线是 em 方框的顶端。。
hanging     文本基线是悬挂基线。
middle      文本基线是 em 方框的正中。
ideographic 文本基线是表意基线。
bottom      文本基线是 em 方框的底端。


***************************************************************/

line(5, 100, 395, 100, 1, "blue");


ctx.textBaseline="top";
text("Top",5,100);

ctx.textBaseline="bottom";
text("Bottom",50,100);

ctx.textBaseline="middle";
text("Middle",120,100);

ctx.textBaseline="alphabetic";
text("Alphabetic",190,100);

ctx.textBaseline="hanging";
text("Hanging",290,100);