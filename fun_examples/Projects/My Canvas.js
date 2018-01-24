canvas.width = 350;
canvas.height = 500;

var panel = new Rectangle(10, 400, 330, 70);
var s_brush = new Circle(30, 435, 3);
var m_brush = new Circle(50, 435, 4);
var l_brush = new Circle(75, 435, 6);
var c_blue = new Rectangle(100, 420, 30, 30);
var c_red = new Rectangle(140, 420, 30, 30);
var c_green = new Rectangle(180, 420, 30, 30);
var c_yellow = new Rectangle(220, 420, 30, 30);
var c_black = new Rectangle(260, 420, 30, 30);
var c_white = new Rectangle(300, 420, 30, 30);
var selection = new Rectangle(20, 425, 20, 20);
var clearBtn = new Rectangle(280, 10, 60, 20);
var clearTxt = new Text("清理画布");

var my_brush = new Circle();
var isDrawing = false;
var x1,y1,x2,y2 = 0;
panel.fillStyle = "lightgrey";
panel.strokeStyle = "grey";
my_brush.r = 3;
my_brush.fillStyle = "black";
c_blue.fillStyle = "blue";
c_red.fillStyle = "red";
c_green.fillStyle = "green";
c_yellow.fillStyle = "yellow";
c_black.fillStyle = "black";
c_white.fillStyle = "white";
clearTxt.font = "14px Arial";
clearTxt.x = 290;
clearTxt.y = 4;
clearTxt.fillStyle = "black";
clearBtn.fillStyle = "lightgrey";
selection.strokeStyle = "black";

function Loop() {
    drawPanel();
    nextFrame(Loop);
}

function clear() {
    canvas.clear();
}
function drawline() {
    x1 = x2;
    y1 = y2;
    x2 = this.x;
    y2 = this.y;
    var draw_line = new Line(x1,y1,x2,y2);
    draw_line.lineCap = "round";
    draw_line.lineWidth = this.r * 2;
    draw_line.strokeStyle = this.fillStyle;
    draw_line.stroke();
}
function drawPanel() {
    panel.draw();
    s_brush.fill();
    m_brush.fill();
    l_brush.fill();
    c_blue.draw();
    c_red.draw();
    c_green.draw();
    c_yellow.draw();
    c_black.draw();
    c_white.draw();
    clearBtn.draw();
    clearTxt.draw();
    selection.stroke();
}
function brush_click() {
    my_brush.r = this.r;
    selection.x = this.x - 10;
    selection.y = this.y - 10;
}
function color_click() {
    my_brush.fillStyle = this.fillStyle;
    s_brush.fillStyle = this.fillStyle;
    m_brush.fillStyle = this.fillStyle;
    l_brush.fillStyle = this.fillStyle;
}

Mouse.down = function() {
    x1 = Mouse.x;
    y1 = Mouse.y;
    x2 = Mouse.x;
    y2 = Mouse.y;
    isDrawing = true;
    my_brush.x = Mouse.x;
    my_brush.y = Mouse.y;
    my_brush.draw();
};

Mouse.up = function() {
    isDrawing = false;
};

Mouse.move = function() {
    my_brush.x = Mouse.x;
    my_brush.y = Mouse.y;
    if (isDrawing) my_brush.draw();
};

my_brush.draw = drawline;
c_blue.click = c_red.click = c_green.click = c_yellow.click = c_black.click = c_white.click = color_click;
s_brush.click = m_brush.click = l_brush.click = brush_click;
clearTxt.click = clear;
Loop();