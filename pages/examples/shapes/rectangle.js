/***************************************************************

class Rectangle(x, y, width, height, color)

长方形类
x, y:   左上角顶点的位置
width:  长方形的宽度
height: 长方形的高度
color:  长方形的颜色


***************************************************************/
// 一行代码画出一个
rectangle(10, 10, 100, 50, "red");

// 使用new方式创建，等同于以下方法，使用new方式可以产生一个可以控制的对象
var rect = new Rectangle(10, 100, 100, 50, "green");
rect.draw();

// 通过stroke来仅仅绘制边框，颜色为创建时使用的的颜色
rect.y += 100;
rect.stroke();

// 通过stokeStyle和fillStyle来改变长方形的样式，默认draw = fill
rect.y += 100;
rect.fillStyle = "orange";
rect.strokeStyle = "purple";
rect.draw();
rect.stroke();

// 同样，所有图形都可以设置阴影
rect.y += 100;
rect.shadowColor = 'pink';
rect.shadowBlur = 4;
rect.shadowOffsetX = 5;
rect.shadowOffsetY = 5;
rect.fill();

// 通过transform方法，可以对长方形进行形变
rect.y += 100;
rect.stroke();

rect.x += 100;
rect.scale(0.5, 1);
rect.stroke();

rect.x += 100;
rect.rotate(45);
rect.stroke();