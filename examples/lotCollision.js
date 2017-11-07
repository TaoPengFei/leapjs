var r = 20;
var cs = [];
var count = 60;

function update(){
    for(var i=0; i<count; i++){
        c = cs[i];
        if(c == this) continue;
        var p = this.collide(c);

        if(p){
            if(p.x != this.x) this.x -= 5*Math.random()*(p.x - this.x)/Math.abs(p.x - this.x);
            if(p.y != this.y) this.y -= 5*Math.random()*(p.y - this.y)/Math.abs(p.y - this.y);
        }

        if(this.x < r) this.x = r;
        if(this.y < r) this.y = r;
        if(this.x + r > canvas.width) this.x = canvas.width - r;
        if(this.y + r > canvas.height) this.y = canvas.height - r;
    }
}

for(var i=0; i<count; i++){
    c = new Circle(200, 200+i, r);
    c.update = update;
    cs.push(c);
}

(function main(){
    canvas.clear();
    for(var i=0; i<cs.length; i++)
        cs[i].update();
    cs.draw();
    nextFrame(main);
})();
