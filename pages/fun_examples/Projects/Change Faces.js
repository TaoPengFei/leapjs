canvas.width = 500;
canvas.height = 500;

var rect = new Rectangle(0, 0, 500, 500);
var face = [
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/face/face1.png",100,30,300,300),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/face/face2.png",100,30,300,300),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/face/face3.png",90,25,300,300),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/face/face4.png",100,30,300,300)
    ];
var eye = [
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/eye/eye1.png",170,180,150,60),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/eye/eye2.png",175,180,150,60),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/eye/eye3.png",175,170,150,65)];
var nose = [
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/nose/nose1.png",230,220,40,30),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/nose/nose2.png",230,235,40,20),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/nose/nose3.png",235,222,30,30)
    ];
var mouth = [
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/mouth/mouth1.png",200,260,90,40),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/mouth/mouth2.png",200,260,90,40),
    new Sprite("http://p0msr3pkn.bkt.clouddn.com/mouth/mouth3.png",200,260,90,40)
    ];
var txt = new Text("换脸",230,400);
var faceID = 0;
var noseID = 0;
var eyeID = 0;
var mouthID = 0;

rect.fillStyle = "lightyellow";

function Loop() {
    rect.fill();
    face[faceID].draw();
    eye[eyeID].draw();
    mouth[mouthID].draw();
    nose[noseID].draw();
    txt.draw();
    nextFrame(Loop);
}

txt.click = function() {
    faceID = Math.floor(Math.random()*4);
    noseID = Math.floor(Math.random()*3);
    eyeID = Math.floor(Math.random()*3);
    mouthID = Math.floor(Math.random()*3);
}

loadRssAndRun(Loop);