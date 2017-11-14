canvas.width = 600;
canvas.height = 400;
var grd = ctx.createLinearGradient(0,0,100,10);
grd.addColorStop(0,"lightblue");
grd.addColorStop(1/8,"red");
grd.addColorStop(2/8,"orange");
grd.addColorStop(3/8,"yellow");
grd.addColorStop(4/8,"green");
grd.addColorStop(5/8,"cyan");
grd.addColorStop(6/8,"blue");
grd.addColorStop(7/8,"purple");
grd.addColorStop(1,"lightblue");

var sky = new Rectangle(0, 0, 600, 400);
sky.fillStyle = "lightblue";
sky.fill();

var rect = new Rectangle(0, 0, 100, 10);
rect.fillStyle = grd;
rect.translate(0, 400);
rect.setAnchor(300, 400);
for(var i=0; i<180; i+=1){
    rect.rotate(i);
    rect.fill();
}
