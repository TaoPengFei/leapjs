var a = new Circle();

a.acts = [];
a.act_i = 0;

Circle.prototype.moveTo = function(x, y){
    this.acts.push({x: x, y: y});
};

Circle.prototype.update = function(){
    var act = this.acts[this.act_i];
    if(act){
        if(!(act.dx && act.dy)){
			var d = Math.sqrt((act.x - this.x)*(act.x - this.x) + 
                              (act.y - this.y)*(act.y - this.y));
        	act.dx = (act.x - this.x) / d;
        	act.dy = (act.y - this.y) / d;
        }
        this.x += act.dx;
        this.y += act.dy;

        if((Math.abs(this.x - act.x) < 1) && (Math.abs(this.y - act.y) < 1)){
            this.act_i++;
        }
    }
};

(function(){
    canvas.clear();
    a.update();
    a.draw();    
    nextFrame(arguments.callee);
}());

a.moveTo(100, 200);
a.moveTo(300, 200);
a.moveTo(100, 100);
