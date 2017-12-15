var x, y, wave, wink, breath;
var background, stripe, edge, body, eye, pupil, fin;

x = canvas.width/2;
y = canvas.height/2;
        
function start(){
    // default colors
    Colors.background = Colors.background || "white";
    Colors.stripe = Colors.stripe || "white";
    Colors.edge = Colors.edge || "#cccccc";
    Colors.body = Colors.body || "#eeeeee";
    Colors.eye = Colors.eye || "#ffffff";
    Colors.pupil = Colors.pupil || "#eeeeee";
    Colors.fin = Colors.fin || "#cccccc";
    
    // make all the attributes between 0 and 10
    for(var attr in Actions){
        if(Actions[attr] > 10) Actions[attr] = 10;
        else if(Actions[attr] < 0) Actions[attr] = 0;
    }
    
    // Actions
    if(Actions.moveX)
        x = new Increase(-100, canvas.width+100, Actions.moveX * 20);
    if(Actions.moveY)    
        y = new Sine(50, canvas.height-50, Actions.moveY * 20);
    
    wave  = new Swing(0, 10, Actions.wave * 10);
    wink  = new Swing(0, 15, Actions.wink * 5);
    breath= new Swing(0, 10, Actions.breath);
    loop();
}


function draw(){
    
    noStroke();
    
    // bg
    fill(Colors.background);
    rectangle(0, 0, canvas.width, canvas.height);
    
    // fin
    fill(Colors.fin);
    polygon(
        x + 91, y - 130,
        x + 4 - wave/2,  y - 130,
        x - 68 - wave, y - 107,
        x - 63, y - 80,
        x + 68, y - 61);
    
    // tail
    polygon(
        x - 100,          y + 50,
        x - 100,          y - 50,
        x - 160 + wave,   y - 60,
        x - 140 + wave/2, y,
        x - 160 + wave,   y + 60);

    // body
    fill(Colors.body);
    ellipse(x, y, 120, 100);
    
    // stripe
    fill(Colors.stripe);
    stroke(Colors.edge);
    lineWidth(3);
    polygon(
        x - 35, y - 70,
        x - 60, y - 16,
        x - 25, y - 26,
        x - 50, y + 26
    );
         
    // eye
    fill(Colors.eye);
    ellipse(x+80, y-20, 25, 25-wink);

    // pupil
    noStroke();
    lineWidth(1);
    fill(Colors.pupil);
    circle(x+90, y-20, 10-wink/5);
    
    // fin right
    fill(Colors.fin);
    polygon(
        x,      y + 20, 
        x - 10, y + 40 + wave,
        x + 50, y + 40 + wave,
        x + 40, y + 20);

    // mouth
    fill(Colors.background);
    circle(x + 110, y + 30, breath);
}

function loop(){
  canvas.clear();
  draw();
  nextFrame(loop);
}
/////////////////////////////////////////////////////////

var Colors = {
    background: "",
    body: "",
    
    stripe: "",
    edge: "",
    
    eye: "",
    pupil: "",
    
    fin: ""
};

var Actions = {
    moveX: 10,
    moveY: 10,
    wave: 10,
    wink: 10,
    breath: 10,
};

start();