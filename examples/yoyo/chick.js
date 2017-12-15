// Let us code the future
canvas.width = 700;
canvas.height = 700;

var head = new Ellipse(300,228,150,145);//头
head.strokeStyle ='black';
head.fillStyle = 'purple';
head.draw();

var eye11 = new Ellipse(225,120,66,55);//左眼1
eye11.strokeStyle ='black';
eye11.fillStyle = 'white';
eye11.draw();

var eye21 = new Ellipse(360,110,65,55);//右眼1
eye21.fillStyle = 'white';
eye21.draw();

var eye22 = new Circle(247, 120, 30);//右眼2
eye22.strokeStyle ='black';
eye22.fillStyle = 'black';
eye22.draw();

var eye12 = new Circle(334, 115, 30);//左眼2
eye12.strokeStyle ='black';
eye12.fillStyle = 'black';
eye12.draw();

var mouth = new Triangle(257,203,328,193,295,254);//嘴
mouth.strokeStyle ='orange';
mouth.fillStyle = 'orange';
mouth.draw();

var line1 = new Line(280,373,280,420);//左腿
line1.lineWidth = 8;
line1.strokeStyle ='orange';
line1.draw();

var line2 = new Line(280,420,222,434);//左脚丫1
line2.lineWidth = 8;
line2.strokeStyle ='orange';
line2.draw();

var line3 = new Line(280,420,327,432);//左脚丫2
line3.lineWidth = 8;
line3.strokeStyle ='orange';
line3.draw();

var line4 = new Line(339,368,340,422);//右腿
line4.lineWidth = 8;
line4.strokeStyle ='orange';
line4.draw();

var line5 = new Line(340,422,293,439);//右脚丫1
line5.lineWidth = 8;
line5.strokeStyle ='orange';
line5.draw();

var line6 = new Line(341,418,388,437);//右脚丫2
line6.lineWidth = 8;
line6.strokeStyle ='orange';
line6.draw();

var hand1 = new Ellipse(469,226,20,20);//右手
hand1.strokeStyle ='black';
hand1.fillStyle = 'purple';
hand1.draw();

var hand2 = new Circle(130, 227, 20);//左手
hand2.strokeStyle ='black';
hand2.fillStyle = 'purple';
hand2.draw();
