/***************************************************************

定义和用法
strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。

默认值：    'orange'
JavaScript 语法：  
ctx.strokeStyle=color|gradient|pattern;

属性值
值           描述
color       指示绘图笔触颜色的 CSS 颜色值。默认值是 #000000。
gradient    用于填充绘图的渐变对象（线性或放射性）
pattern     用于创建 pattern 笔触的 pattern 对象


***************************************************************/
fill(false);

circle(100, 100, 30);

ctx.strokeStyle = 'red';
circle(100, 100, 50);