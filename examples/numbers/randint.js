/***************************************************************

randint(start, end)

返回一个start~end之间的随机整数
Math.floor(start + Math.random() * (end - start)) 

***************************************************************/

canvas.scale(10, 10);
canvas.showAxis();

setInterval(function(){
    let x = randint(1, 5) * 10;
    let y = randint(1, 5) * 10;
    point(x, y);
}, 200);