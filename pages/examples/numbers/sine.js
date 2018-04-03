/***************************************************************

class Sine {
  constructor (start, wave, cycleTime, loop=true) {}
}

创建一个增长的数字，随时间变化
* 从数值start变化，按照正弦曲线变化，波峰为wave
* 变化周期为cycleTime（second）
* loop 是否循环变化


***************************************************************/

let x = new Increase(100, 500, 10, false);

let y1 = new Sine(0, 40, 3);
let y2 = new Sine(0, 40, 3, false);
let y3 = new Sine(0, 40, 1);

let y4 = new Increase(1, 0, 10, false);

canvas.showAxis();

setInterval(function(){
    point(x, 100 + y1);
    point(x, 200 + y2);
    point(x, 300 + y3);
    point(x, 400 + y3*y4);
}, 20);