canvas.resize(350, 500);
var r = 20;
var cs = [];
var count = 80;

function update(j){
    this.y += 1;
    for(var i=0; i<count; i++){
        c = cs[i];
        if(c == this) continue;
        var p = this.collide(c);

        if(p){
            var d = Math.sqrt((this.x-c.x)*(this.x-c.x) +
                              (this.y-c.y)*(this.y-c.y));
            
            var dx = (2*r - d)/(d + 1e-6) * (this.x-c.x);
            var dy = (2*r - d)/(d + 1e-6) * (this.y-c.y);

            this.x += dx/3;
            this.y += dy/3;
            c.x -= dx/3;
            c.y -= dy/3;
        }
    }
    if(this.x < r) this.x = r;
    if(this.y < r) this.y = r;
    if(this.x + r > canvas.width) this.x = canvas.width - r;
    if(this.y + r > canvas.height) this.y = canvas.height - r;   
}

for(var i=0; i<count; i++){
    c = new Circle(150+50*Math.random(), 150+50*Math.random(), r);
    c.update = update;
    cs.push(c);
}

function main(){
    canvas.clear();

    for(var i=0; i<cs.length; i++){
        cs[i].update(i);
        cs[i].stroke();
    }

}

run(main);
