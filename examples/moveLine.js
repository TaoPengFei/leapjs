var line = new Line(100, 100, 200, 200);

line.setLineDash([5, 5]);
line.stroke();

line.x += 100;
line.stroke();