/***************************************************************

shape.collide(shape2)

判断shape是否和shape2发生碰撞

返回值：
碰撞：     {x, y} 某个碰撞点的坐标
无碰撞：    false

***************************************************************/

var rect = new Rectangle(100, 100, 100, 100);
var circle = new Circle(100, 100, 30);

Mouse.move = function(){
    circle.x = Mouse.x;
    circle.y = Mouse.y;
};

(function main(){
    canvas.clear();
    rect.draw();
    circle.draw();
    var p = circle.collide(rect);
    if(p){
        new Point(p.x, p.y).draw();
    }
    nextFrame(main);
}());
