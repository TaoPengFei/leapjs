var rect = new Rectangle(100, 100, 100, 100);
var rect2 = new Rectangle(50, 180, 200, 20);

var degree = 0;

(function main(){
    canvas.clear();
    rect.rotate(degree++);
    rect.draw();
    rect2.draw();
    var p = rect.collide(rect2);
    if(p){
        new Point(p.x, p.y).draw();
    }
    nextFrame(main);
}());
