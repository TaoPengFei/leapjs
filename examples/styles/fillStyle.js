/***************************************************************

定义和用法
fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。

默认值：    'orange'
JavaScript 语法：  context.fillStyle=color|gradient|pattern;

属性值
值   描述
color   指示绘图填充色的 CSS 颜色值。默认值是 'orange'
gradient    用于填充绘图的渐变对象（线性或放射性）
pattern 用于填充绘图的 pattern 对象

***************************************************************/

circle(100, 100, 50);

ctx.fillStyle = 'red';

circle(100, 100, 30);