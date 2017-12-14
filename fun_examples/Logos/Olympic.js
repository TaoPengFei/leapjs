canvas.width = 300;
canvas.height = 200;

var circle = new Circle(50, 70, 40);
circle.lineWidth = 8;

circle.strokeStyle = "blue";
circle.stroke();

circle.x = 150;
circle.strokeStyle = "black";
circle.stroke();

circle.x = 250;
circle.strokeStyle = "red";
circle.stroke();

circle.x = 100;
circle.y = 110;
circle.strokeStyle = "yellow";
circle.stroke();

circle.x = 200;
circle.strokeStyle = "green";
circle.stroke();
