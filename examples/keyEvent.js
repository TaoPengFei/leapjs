var rect = new Rectangle(100, 100, 200, 200);

Key.ArrowUp.down = function(){rect.y -= 10;};
Key.ArrowDown.down = function(){rect.y += 10;};
Key.ArrowLeft.down = function(){rect.x -= 10;};
Key.ArrowRight.down = function(){rect.x += 10;};

(function main(){
    canvas.clear();
    rect.draw();
    requestAnimationFrame(main);
}() );
