/***************************************************************

颜色HSL表示法

HSL(h, saturation, light)

h: 颜色编号，从0到360
saturation：饱和度，0~1
light：亮度，0~1

***************************************************************/
var line = new Line(50, 150, 100, 150);

line.setAnchor(150, 150);
line.lineWidth = 5;

for(var i=0; i<=360; i++){
    line.strokeStyle = HSL(i, 1, 0.5);
    line.rotate(i);
    line.stroke();
}