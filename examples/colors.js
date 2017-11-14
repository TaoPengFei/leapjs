var colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

var crect = new Rectangle(10, 10, 200, 25);
var cname = new Text("color", 20, 28);

for(var i=0; i<colors.length; i++){
  crect.fillStyle = colors[i];
  cname.src = colors[i];
  crect.fill();
  cname.fill();
  crect.y += 30;
  cname.y += 30;
}
