canvas.width = 500;
canvas.height = 500;

var rect = new Rectangle(150,150,200,200);
function Loop() {
    canvas.clear();
    rect.fillStyle = RGB(rect.width-200,rect.height,0);
    if (rect.width > 200) {
        rect.width -= 1;
        rect.x += 0.5;
    }
    if (rect.height < 200) {
        rect.height += 1;
        rect.y -= 1;
    }
    rect.draw();
    nextFrame(Loop);
}
function clickAction() {
    if (rect.height > 20) {
        rect.height -= 20;
        rect.y += 20;
        rect.width += 20;
        rect.x -= 10;
    }
}
Mouse.click = clickAction;
Loop();