// Let us code the future

canvas.width = 500;
canvas.height = 500;
var bg = new Sprite('http://owtvvc2bc.bkt.clouddn.com/BG2.png',0,0,500,500);
var body = new Ellipse(175,250,150,180);
var eye1 = new Ellipse(130,170,65,55);
var eye2 = new Ellipse(220,170,65,55);
var tripe = new Ellipse(175,290,130,140);
var leftEye = new Circle(125,180,35);
var leftEye2 = new Circle(125,180,20);
var leftEye3 = new Circle(125,180,10);
var rightEye = new Circle(225,180,35);
var rightEye2 = new Circle(225,180,20);
var rightEye3 = new Circle(225,180,10);
var mouth = new Triangle(160,220,190,220,175,255);
var ball = new Circle(100,100,30);
var isWaveLeft = 0;
var waveLeft = 0;
var shout = new Audio();
shout.src = "http://rss.leaplearner.com/Audio/Com/touch.mp3";
var hit = new Audio();
hit.src = 'http://rss.leaplearner.com/Audio/Dinner/closeui.mp3';
var moveX = 0;
var moveY = 0;
leftEye3.moveX = 0;
leftEye3.moveY = 0;
rightEye3.moveX = 0;
rightEye3.moveY = 0;


var Color = {
    eyeBall: "saddlebrown",
    eyeRim: "gold",
    eyeCore: "white",
    mouth: "saddlebrow",
    tripe: "khaki",
    feather: "darkslateblue",
    ball: "mediumturquoise",
    beak: "violet"
};

var Speed = {
    ballX: 7,
    ballY: 4
}

tripe.fillStyle = Color["tripe"];
eye1.fillStyle = Color["tripe"];
eye2.fillStyle = Color["tripe"];
body.fillStyle = Color["feather"];
leftEye.fillStyle = Color["eyeRim"];
leftEye2.fillStyle = Color["eyeBall"];
leftEye3.fillStyle = Color["eyeCore"];
rightEye.fillStyle = Color["eyeRim"];
rightEye2.fillStyle = Color["eyeBall"];
rightEye3.fillStyle = Color["eyeCore"];
ball.fillStyle = Color["ball"];;
mouth.fillStyle = Color["beak"];

function Loop() {
    canvas.clear();
    bg.draw();
    ball.x += Speed["ballX"];
    ball.y += Speed["ballY"];
    mouth.points[2].y = 250 + waveLeft;
    if (ball.x < ball.r || ball.x > (canvas.width - ball.r))  {
        Speed["ballX"] = -Speed["ballX"];
        hit.play();
    }
    
    if (ball.y < ball.r || ball.y > (canvas.height - ball.r)) {
        Speed["ballY"] = -Speed["ballY"];
        hit.play();
    }
    if (isWaveLeft == 1) {
        waveLeft += 0.5;
        if (waveLeft > 10) {
            isWaveLeft = -1;
        }
    }
    if (isWaveLeft == -1) {
        waveLeft -= 0.5;
        if (waveLeft <= 0) {
            waveLeft = 0;
            isWaveLeft = 0;
        }
    }
    
    foot(110,410,10,30,-1,waveLeft);
    foot(240,410,10,30,1,-waveLeft);
    ear(110,95,20,50,-1,-waveLeft);
    ear(240,95,20,50,1,waveLeft);
    body.fill();
    
    eye1.fill();
    eye2.fill();
    tripe.fill();
    leftEye3.look(ball);
    rightEye3.look(ball);
    leftEye.fill();
    leftEye2.fill();
    leftEye3.fill();
    rightEye.fill();
    rightEye2.fill();
    rightEye3.fill();
    
    feather(135,360,15,30 + waveLeft/2,Color["feather"]);
    feather(175,360,15,30 + waveLeft/2,Color["feather"]);
    feather(215,360,15,30 + waveLeft/2,Color["feather"]);
    feather(115,310,15,30 + waveLeft/4,Color["feather"]);
    feather(155,310,15,30 + waveLeft/4,Color["feather"]);
    feather(195,310,15,30 + waveLeft/4,Color["feather"]);
    feather(235,310,15,30 + waveLeft/4,Color["feather"]);
    feather(95,260,15,30 + waveLeft/2,Color["feather"]);
    feather(135,260,15,30 + waveLeft/2,Color["feather"]);
    feather(175,260,15,30 + waveLeft/2,Color["feather"]);
    feather(215,260,15,30 + waveLeft/2,Color["feather"]);
    feather(255,260,15,30 + waveLeft/2,Color["feather"]);
    
    mouth.fill();
    ball.fill();
    nextFrame(Loop)
}

function feather(x,y,rx,ry,color) {
    var a = new Ellipse(x,y,rx,ry);
    var b = new Rectangle((x-rx),(y-ry),(2*rx),ry);
    a.strokeStyle = color;
    b.fillStyle = tripe.fillStyle;
    b.strokeStyle = tripe.fillStyle;
    a.lineWidth = 3;
    b.lineWidth = a.lineWidth + 1;
    a.stroke();
    b.draw();
}

function foot(x,y,rx,ry,side,moveD) {
    var a = new Ellipse(x,y,rx,ry);
    a.fillStyle = body.fillStyle;
    a.setAnchor(x,y);
    a.rotate(moveD);
    a.fill();
    a.rotate(-10*side + moveD);
    a.translate(10*side,0);
    a.fill();
    a.rotate(-20*side + moveD);
    a.translate(20*side,0);
    a.fill();
}

function ear(x,y,rx,ry,side,moveD) {
    var a = new Ellipse(x,y,rx,ry);
    a.fillStyle = body.fillStyle;
    a.setAnchor(x,y);
    a.rotate(-15*side + moveD);
    a.fill();
}

function LookAt(goal) {
    var size = 7/Math.sqrt((goal.x-this.x)*(goal.x-this.x)+(goal.y-this.y)*(goal.y-this.y));
    this.translate((goal.x-this.x)*size,(goal.y-this.y)*size);
}

function moveEar() {
    isWaveLeft = 1;
    shout.play();
}
leftEye3.look = LookAt;
rightEye3.look = LookAt;
Mouse.click = moveEar;



Loop();