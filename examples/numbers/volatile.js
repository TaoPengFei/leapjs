/***************************************************************

class Volatile {
  constructor (func) {}
}

创建一个增长的数字，随时间变化
* 变化规律由func决定
* func(t)，t单位：秒


***************************************************************/
let sin = Math.sin;
let cos = Math.cos;

function func1(t) {
    return 160 * sin(t) * sin(t) * sin(t) + 200;
}

function func2(t) {
    return - 130 * cos(t) + 50 * cos(2*t) + 20 * cos(3*t) + 10* cos(4*t) + 200;
}

let x = new Volatile(func1);
let y = new Volatile(func2);

canvas.showAxis();

setInterval(function(){
    point(x, y);
}, 20);