var p = new Point();

Mouse.move = function(){
    p.x = Mouse.x;
    p.y = Mouse.y;
    p.draw();
};
