/***************************************************************

shape.rotate(degree)

让图形旋转一定的角度

默认旋转中心点为图形中心点，可以通过shape.setAnchor来修改旋转中心点

参数：
degree：     角度，单位为°，360度为一圈
无碰撞：    false

***************************************************************/

var rect = new Rectangle(100, 100, 100, 100);

let i = 0;

// 把鼠标移过去查看效果
Mouse.move = function(){
    rect.rotate(i++);
};

function main(){
    canvas.clear();
    rect.draw();
}

run(main);
