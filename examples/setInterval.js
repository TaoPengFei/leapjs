var rect = new Rectangle(10, 10, 200, 100);
function loop(){
    rect.x += 10;
    rect.y += 10;
    rect.draw();
}

setInterval(loop, 1000);
