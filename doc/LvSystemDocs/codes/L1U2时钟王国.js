canvas.height = 400;
canvas.width = 600;

var bg = new Sprite("http://ou1htxdl4.bkt.clouddn.com/L1U3/images/234697-130203193G545.jpg",0,0,600,400);

var dashboard = new Sprite("http://ou1htxdl4.bkt.clouddn.com/zhongpan-01.png",184,106,233,233);
var clk = new Sprite("http://ou1htxdl4.bkt.clouddn.com/L1U3/images/clock_1.png",150,50,300,350);
var music = new Audio('https://rss.leaplearner.com/BGM/BallGame/gameBG.mp3');
var bear = new Sprite('https://rss.leaplearner.com/Image/Animals/Bear.png',0,200,100,100);
var h_line = new Line(300, 225, 300, 165);
var m_line = new Line(300, 225, 300, 145);
var s_line = new Line(300, 225, 300, 115);
var s_angle = 0;
var m_angle = 0;
var h_angle = 0;

s_line.strokeStyle = "blue";
m_line.strokeStyle = "red";
h_line.strokeStyle = "yellow";

s_line.lineWidth = 4;
m_line.lineWidth = 7;
h_line.lineWidth = 10;

s_line.lineCap = "round";
m_line.lineCap = "round";
h_line.lineCap = "round";

s_line.setAnchor(300,225);
m_line.setAnchor(300,225);
h_line.setAnchor(300,225);


function main() {

  t = new Date();
  h = t.getHours();
  m = t.getMinutes();
  s = t.getSeconds();
  
  //控制时钟旋转的代码
  bg.draw();
  clk.draw();
  dashboard.draw();
  
  s_angle = s * 6;
  m_angle = m * 6;
  h_angle = h * 30;
  
  s_line.rotate(s_angle);
  m_line.rotate(m_angle);
  h_line.rotate(h_angle);

  s_line.draw();
  m_line.draw();
  h_line.draw();


  if (h === 10 && m === 50 && s === 20) {
      music.play();
  }
  
  bear.height = 100 + s;
  bear.y = bear.y - 1;
  bear.draw();
}

setInterval(main,1000);

