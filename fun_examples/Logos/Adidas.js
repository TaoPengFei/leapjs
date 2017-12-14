canvas.width = 400;
canvas.height = 400;

var line = new Line(100, 170, 136, 230);

line.lineWidth = 40;
line.strokeStyle = "black";
line.draw();

line.x1 = 140;
line.y1 = 130;
line.x2 = 200;
line.y2 = 230;
line.draw();

line.x1 = 180;
line.y1 = 90;
line.x2 = 264;
line.y2 = 230;
line.draw();

line.x1 = 80;
line.y1 = 220;
line.x2 = 290;
line.y2 = 220;
line.lineWidth = 60;
line.strokeStyle = "white";
line.draw();