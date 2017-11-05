var rect = [new Rectangle(100, 100, 100, 100), new Rectangle(200, 300, 100, 100)];
var circle = {
    a: new Circle(100, 100, 50),
    b: new Circle(200, 200, 50)
};

Mouse.move = function(){
    circle.a.x = Mouse.x;
    circle.a.y = Mouse.y;
    circle.b.x = Mouse.x+20;
    circle.b.y = Mouse.y+100;
};

(function main(){
    canvas.clear();
    rect.draw();
    circle.draw();
	var p = rect.collide(circle);
    if(p){
    	new Point(p.x, p.y).draw();
    }
    requestAnimationFrame(main);
}());
