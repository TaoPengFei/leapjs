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
