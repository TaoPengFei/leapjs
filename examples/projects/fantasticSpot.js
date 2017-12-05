var t = 0;
var bg = new Rectangle(0, 0, canvas.width, canvas.height);
var dot = new Point();
dot.r = 0.5;

(function draw(){
	bg.globalCompositeOperation = 'source-over';
	bg.fillStyle = 'hsla(0, 0%, 0%, .1)';
	bg.fill();

    var foo, i, r;
    foo = Math.sin(t) * 2 * Math.PI;

    for(i=0; i<200; ++i){
        r = 150 * Math.sin(i * foo);
        dot.fillStyle = 'hsla(' + i+12 + ', 100%, 60%, 1)';
        dot.x = Math.sin(i) * r + canvas.width / 2;
        dot.y = Math.cos(i) * r + canvas.height / 2;
        dot.fill();
    }
    t += 0.00005;
    t %= 2 * Math.PI;
    nextFrame(draw);
}());
