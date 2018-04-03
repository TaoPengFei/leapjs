/***************************************************************

定义和用法
ctx.textAlign 属性根据锚点，设置或返回文本内容的当前对齐方式。

通常，文本会从指定位置开始，不过，如果您设置为 textAlign="right" 并将文本放置到位置 150，那么会在位置 150 结束。

提示：使用 text() 或 text.draw() 方法在实际地在画布上绘制并定位文本。

默认值：    start
JavaScript 语法：  
ctx.textAlign="center|end|left|right|start";

属性值
值       描述
start   默认。文本在指定的位置开始。
end     文本在指定的位置结束。
center  文本的中心被放置在指定的位置。
left    文本左对齐。
right   文本右对齐。


***************************************************************/

line(150, 20, 150, 170, 1, "red");

// 显示不同的 textAlign 值
ctx.textAlign="start";
text("textAlign=start", 150, 60);

ctx.textAlign="end";
text("textAlign=end", 150, 80);

ctx.textAlign="left";
text("textAlign=left", 150, 100);

ctx.textAlign="center";
text("textAlign=center", 150, 120);

ctx.textAlign="right";
text("textAlign=right", 150, 140);