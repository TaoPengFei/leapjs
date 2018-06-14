/***************************************************************

shape.rotate(degree)

让图形旋转一定的角度

默认旋转中心点为图形中心点，可以通过shape.setAnchor来修改旋转中心点

参数：
degree：     角度，单位为°，360度为一圈
无碰撞：    false

shape.setAnchor(x, y)
设置图形的旋转中心点，x、y为坐标值，默认为图形的中心点

shape.setAnchorRate(x, y)
设置图形的旋转中心点，x、y为比率，默认为0.5, 0.5，即中心点

上述2个方法只能生效一个，后续方法会覆盖之前的方法

***************************************************************/

var rectOrange = new Rectangle(100, 100, 100, 100);
var rectRed = new Rectangle(200, 200, 100, 100, "red");
var rectGreen = new Rectangle(100, 200, 100, 100, "green");

rectGreen.setAnchor(100, 200);
rectRed.setAnchorRate(1, 1);

let i = 0;

// 把鼠标移过去查看效果
Mouse.move = function(){
    rectOrange.rotate(i++);
    rectRed.rotate(i);
    rectGreen.rotate(i);
};

function main(){
    canvas.clear();
    rectOrange.draw();
    rectRed.draw();
    rectGreen.draw();
}

run(main);
