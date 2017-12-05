var bg = new Rectangle(0, 0, 350, 550);

var head = new Circle(200, 280, 60);
head.fillStyle = "white";

var body = new Circle(200, 400, 100);
body.fillStyle = "white";

var eye = new Circle(180, 270, 10);
eye.fillStyle = "black";

bg.draw();

body.fill();
head.draw();
eye.fill();

eye.x = 220;
eye.fill();
