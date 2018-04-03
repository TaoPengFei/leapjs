canvas.height = 400;
canvas.width = 600;
var dashboard = new Sprite("http://ou1htxdl4.bkt.clouddn.com/zhongpan-01.png",184,106,233,233);
var clk = new Sprite("http://ou1htxdl4.bkt.clouddn.com/L1U3/images/clock_1.png",150,50,300,350);
var bg = new Sprite("http://ou1htxdl4.bkt.clouddn.com/L1U3/images/234697-130203193G545.jpg",0,-10,600,450);

var rect = new Rectangle(0,0,400,600);
var h_line = new Line(300, 225, 300, 165);
var m_line = new Line(300, 225, 300, 145);
var s_line = new Line(300, 225, 300, 115);

rect.fillStyle = "lightyellow";
s_line.setAnchor(300, 225);
m_line.setAnchor(300, 225);
h_line.setAnchor(300, 225);

s_line.lineCap = "round";
m_line.lineCap = "round";
h_line.lineCap = "round";

s_line.rotate(0);
m_line.rotate(60);
h_line.rotate(90);

s_line.strokeStyle = "green";
m_line.strokeStyle = "red";
h_line.strokeStyle = "yellow";

s_line.lineWidth = 4;
m_line.lineWidth = 7;
h_line.lineWidth = 10;

var h, m, s;
var h_angle,m_angle,s_angle;
var t;

function updateTime(){
  t = new Date();
  h = t.getHours();
  m = t.getMinutes();
  s = t.getSeconds();
    
  //任务2 通过时间计算三根针的角度
  s_angle = 6 * s;
  m_abgle = 6 * m;
  h_angle = 30 * h;
  //任务2结束
  
}
function main(){
  updateTime();
  canvas.clear();
 
  //任务3 让三根针转动
  s_line.rotate(s_angle);
  m_line.rotate(m_angle);
  h_line.rotate(h_angle);
  //任务3结束

  rect.draw();
  bg.draw();
  clk.draw();
  
  
  //任务4 画出表盘
  dashboard.draw();
  //任务4结束
  
  
  //任务1 画出指针
  s_line.draw();
  m_line.draw();
  h_line.draw();
  //任务1结束
  
}

setInterval(main, 1000);
