class Swing {
    constructor (min, max, speed) {
        this.min = min;
        this.max = max;
        this.cycle = (max - min)/speed * 2000;
        this.t = new Date().getTime();
    }
    
    get val() {
        var deltaT = (new Date().getTime() - this.t) % this.cycle;
        var x = (this.max - this.min) * 2 * deltaT / this.cycle + this.min;
        if(deltaT > this.cycle/2) return 2*this.max - x;
        else return x;
    }
}

class Increase {
    constructor (min, max, speed) {
        this.min = min;
        this.max = max;
        this.cycle = (max - min)/speed * 1000;
        this.t = new Date().getTime();
    }
    
    get val() {
        var deltaT = (new Date().getTime() - this.t) % this.cycle;
        var x = (this.max - this.min) * deltaT / this.cycle + this.min;
        return x;
    }
}

var pos = {};

var Fish = {   
    actions: {}
};
        
Fish.use = function(Colors, Actions){
    // colors 
    Fish.colors = Colors;
    Fish.background = new Rectangle(0, 0, canvas.width, canvas.height);
    Fish.background.fillStyle = Colors.background;
  
    for(var attr in Actions){
        if(Actions[attr] > 10) Actions[attr] = 10;
        else if(Actions[attr] < 0) Actions[attr] = 0;
    }
    
    // Actions
    Fish.actions.moveX = new Increase(-100, canvas.width+100, Actions.moveX * 20);
    Fish.actions.moveY = new Swing(50, canvas.height-50, Actions.moveY * 20); 
    Fish.actions.wave  = new Swing(0, 10, Actions.wave * 10);
    Fish.actions.wink  = new Swing(0, 15, Actions.wink * 5);
    Fish.actions.breath= new Swing(0, 10, Actions.breath);
    loop();
};


Fish.update = function(){
    var x = Fish.actions.moveX.val;
    var y = Fish.actions.moveY.val;
    
    var wave = Fish.actions.wave.val;
    var wink = Fish.actions.wink.val;
    
    Fish.tail = new Polygon(
        x - 100, y + 50,
        x - 100, y - 50,
        x - 160 + wave, y - 60,
        x - 140 + wave/2, y,
        x - 160 + wave, y + 60);
    Fish.tail.fillStyle = Fish.colors.fin;
    
    Fish.back = new Polygon(
        x + 91, y - 130,
        x + 4 - wave/2,  y - 130,
        x - 68 - wave, y - 107,
        x - 63, y - 80,
        x + 68, y - 61);
    Fish.back.fillStyle = Fish.colors.fin;
    
    Fish.body = new Ellipse(x,    y,    120, 100);
    Fish.body.fillStyle = Fish.colors.body;
    
    Fish.eye  = new Ellipse(x+80, y-20, 25,  25 - wink);
    Fish.eye.fillStyle = Fish.colors.eye;
    Fish.eye.strokeStyle = Fish.colors.edge;
    Fish.eye.lineWidth = 3;
    
    Fish.eyeBall = new Circle (x+90, y-20, 10 - wink/5);
    Fish.eyeBall.fillStyle = Fish.colors.eyeBall;

    Fish.fin = new Polygon(
        x,      y + 20, 
        x - 10, y + 40 + wave,
        x + 50, y + 40 + wave,
        x + 40, y + 20);
    Fish.fin.fillStyle = Fish.colors.fin;
    
    Fish.stripe = new Polygon(
        x - 35, y - 70,
        x - 60, y - 16,
        x - 25, y - 26,
        x - 50, y + 26
        );
    Fish.stripe.fillStyle = Fish.colors.stripe;
    Fish.stripe.strokeStyle = Fish.colors.edge;
    Fish.stripe.lineWidth = 3;
    
    var r = Fish.actions.breath.val;
    Fish.mouth = new Circle(x + 110, y + 30, r);
    Fish.mouth.fillStyle = Colors.background; 

};

Fish.draw = function(){
    Fish.background.fill();
    Fish.back.fill();
    Fish.tail.fill();
    Fish.body.fill();
    Fish.stripe.draw();
    Fish.eye.draw();
    Fish.eyeBall.fill();
    Fish.fin.fill();
    Fish.mouth.fill();
};

function loop(){
  canvas.clear();
  Fish.update();
  Fish.draw();
  nextFrame(loop);
}
/////////////////////////////////////////////////////////

var Colors = {
    background: "cyan",
    body: "yellow",
    
    stripe: "white",
    edge: "brown",
    
    eye: "white",
    eyeBall: "black",
    
    fin: "#ffee00",
    mouth: "yellow"
};

var Actions = {
    moveX: 10,
    moveY: 2,
    wave: 5,
    wink: 10,
    breath: 10,
};

Fish.use(Colors, Actions);