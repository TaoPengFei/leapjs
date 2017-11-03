var rect1 = new Rectangle(50, 100, 100, 100);
var rect2 = new Rectangle(200, 100, 100, 100);


var a = {x: rect1, y: rect2};

a.draw();

ctx.translate(0, 150);

[rect1, rect2].draw();
