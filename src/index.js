const canvas = require('./canvas.js').canvas;
const Line = require('./shapes.js').Line;
const Rectangle = require('./shapes.js').Rectangle;


canvas.width = 600;
canvas.height = 300;

line = new Line(10, 20, 30, 40, "red");
rect = new Rectangle(100, 100, 200, 200, "green");

function draw(){
  line.draw();
  rect.draw();
}

