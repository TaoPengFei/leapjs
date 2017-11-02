var rect = new Rectangle(100, 100, 200, 100);
var circle = new Circle(100, 100, 100);

Mouse.move = function(){
    circle.x = Mouse.x;
    circle.y = Mouse.y;
    if(circle.collide(rect))
        circle.fillStyle = "red";
    else
        circle.fillStyle = "green";
};

(function main(){
    canvas.clear();
    rect.draw();
    circle.draw();
    requestAnimationFrame(main);
}());
