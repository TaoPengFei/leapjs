/***************************************************************

shape.setAnchor(x, y)

设置图形的旋转中心点，配合其他变形方法使用

参数：
x: 默认为0.5
y: 默认为0.5

默认即图形的中心位置，如果是图形左上角，则为(0, 0)，右下角为(1, 1)，一次类推

***************************************************************/
ctx.globalAlpha = 0.5;
var rect = new Rectangle(100, 100, 100, 100);
var rect2 = new Rectangle(100, 100, 100, 100);

rect2.setAnchor(0, 0);

i = 0;
function main(){
    canvas.clear();
    canvas.showAxis();
    rect.rotate(i++);
    rect.draw();
    
    rect2.rotate(i++);
    rect2.draw();
}

run(main);
