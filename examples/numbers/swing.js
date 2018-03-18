/***************************************************************

class Swing {
  constructor (start, end, cycleTime, loop=true) {}
}

创建一个增长的数字，随时间变化
* 从数值start变化到end再变会start
* 变化周期为cycleTime（second）
* loop 是否循环变化


***************************************************************/

let x = new Increase(100, 500, 10, false);

let y1 = new Swing(-40, 40, 3);
let y2 = new Swing(-40, 40, 3, false);
let y3 = new Swing(-40, 40, 1);

let y4 = new Increase(1, 0, 10, false);

canvas.showAxis();

setInterval(function(){
    point(x, 100 + y1);
    point(x, 200 + y2);
    point(x, 300 + y3);
    point(x, 400 + y3*y4);
}, 20);