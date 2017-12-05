var circle = new Circle();

function drawCircle(x, y, r, c){
    circle.x = x;
    circle.y = y;
    circle.r = r;
    circle.fillStyle = c;
    circle.draw();
}


drawCircle(200, 400, 100, "white");
drawCircle(200, 280, 60, "white");
drawCircle(180, 270, 10, "black");
drawCircle(220, 270, 10, "black");
