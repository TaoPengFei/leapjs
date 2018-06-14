var polygon = new Polygon(168, 72, 63, 252, 281, 110, 64, 87, 245, 245);

var circle = new Circle(153, 273, 30);

var scale = 1, deltaScale = 0.01;
var degree = 0;
polygon.update = function(){
    this.scale(scale, scale);
    scale += deltaScale;
    if(scale > 2) deltaScale = -0.01;
    if(scale < 1) deltaScale = 0.01;
    this.rotate(degree++);
};

function main(){
    canvas.clear();
    polygon.update();
    polygon.draw();
    circle.draw();
    var p = polygon.collide(circle);
    if(p){
        new Point(p.x, p.y).draw();
    }
}

run(main);
