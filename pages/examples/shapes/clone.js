/***************************************************************

shape.clone()

返回一个shape的克隆体，拥有shape所有的属性，该克隆体拥有独立的属性空间

***************************************************************/

ctx.shadowColor = "#000000ff";

var url = "https://llcs-1252287760.cossh.myqcloud.com/";
var bird = new Animation(url+"animations/bird.png", 80, 120, 56, 42);
bird.setFrame(8, 1); // shiftX, shiftY, frameX, frameY, columns, rows

var bird2 = bird.clone();

bird2.y += 100;
bird2.setSpeed(20);

function main(){
    canvas.clear();
    bird.draw();
    bird2.draw();
}

run(main);