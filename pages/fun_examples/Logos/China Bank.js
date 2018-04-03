canvas.width = 400;
canvas.height = 400;

var circle = new Circle(200, 200, 100);
var line = new Line(200, 100, 200, 160);
var rect = new Rectangle(160, 165, 80, 70);

circle.lineWidth = 20;
circle.strokeStyle = "red";
circle.stroke();

line.lineWidth = 20;
line.strokeStyle = "red";
line.draw();

rect.lineWidth = 20;
rect.strokeStyle = "red";
rect.radius = 5;
rect.stroke();

line.y1 = 240;
line.y2 = 300;
line.lineWidth = 20;
line.strokeStyle = "red";
line.draw();