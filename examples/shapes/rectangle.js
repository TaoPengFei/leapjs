/***************************************************************

class Rectangle(x, y, width, height)

长方形类
x, y:   左上角顶点的位置
width:  长方形的宽度
height: 长方形的高度


***************************************************************/

var rect = new Rectangle(10, 10, 100, 50);
rect.draw();

var rect = new Rectangle(10, 200, 50, 100);
rect.fillStyle = "red";
rect.fill();

rect.x += 100;
rect.strokeStyle = "green";
rect.stroke();

rect.x += 100;
rect.draw();
