canvas.resize(600, 650);

var s = 0;
var r = 0;
var c1 = 60;
var c2 = 20;
var c3 = 10;
var c4 = 460;
var c5 = 180;
var c6 = 350;
var c7 = 110;
var c8 = 430;
var c9 = 70;
var c10 = 390;

function loop() {
    canvas.clear();
    // Let us code the future
    //背景
    var background = new Rectangle(2, 1, 600, 650);
    background.strokeStyle = "white";
    background.fillStyle = Colors.background || "pink";
    background.draw();
    //头
    var head = new Circle(300, 200, 80);
    head.strokeStyle = "brown";
    head.fillStyle = Colors.head || "white";
    head.draw();
    //左眼
    var eye1 = new Circle(245, 180, 20);
    eye1.strokeStyle = "brown";
    eye1.fillStyle = Colors.eye || "white";
    eye1.draw();
    var eye01 = new Circle(255, 180, 10);
    eye01.strokeStyle = "brown";
    eye01.fillStyle = Colors.pupil || "brown";
    eye01.setAnchor(250, 180);
    eye01.rotate(r);
    eye01.draw();
    //右眼
    var eye2 = new Circle(355, 180, 20);
    eye2.strokeStyle = "brown";
    eye2.fillStyle = Colors.eye || "white";
    eye2.draw();
    var eye02 = new Circle(350, 180, 10);
    eye02.strokeStyle = "brown";
    eye02.fillStyle = Colors.pupil || "brown";
    eye02.setAnchor(355, 180);
    eye02.rotate(r);
    eye02.draw();
    //鼻子
    var nose1 = new Line(310, 190, 295, 190);
    nose1.strokeStyle = "brown";
    nose1.draw();
    var nose2 = new Line(310, 200, 295, 200);
    nose2.strokeStyle = "brown";
    nose2.draw();
    //右边胡子
    var moustache1 = new Line(370, 205, 390+s, 205+s/2);
    moustache1.strokeStyle = "brown";
    moustache1.draw();
    var moustache2 = new Line(370, 212, 390+s, 214+s/2);
    moustache2.strokeStyle = "brown";
    moustache2.draw();
    var moustache3 = new Line(370, 219, 390+s, 224+s/2);
    moustache3.strokeStyle = "brown";
    moustache3.draw();
    //左边胡子
    var moustache4 = new Line(230, 205, 210-s, 205+s/2);
    moustache4.strokeStyle = "brown";
    moustache4.draw();
    var moustache5 = new Line(230, 212, 210-s, 214+s/2);
    moustache5.strokeStyle = "brown";
    moustache5.draw();
    var moustache6 = new Line(230, 219, 210-s, 224+s/2);
    moustache6.strokeStyle = "brown";
    moustache6.draw();
    //左耳朵
    var ear1 = new Triangle(246, 140, 266, 127, 230, 92);
    ear1.strokeStyle = 'brown';
    ear1.fillStyle = 'pink';
    ear1.draw();
    var ear2 = new Triangle(257, 133, 266, 127, 230, 92);
    ear2.strokeStyle = 'brown';
    ear2.fillStyle = Colors.ear || 'gray';
    ear2.draw();
    //右耳朵
    var ear3 = new Triangle(330, 126, 352, 139, 364, 89);
    ear3.strokeStyle = 'brown';
    ear3.fillStyle = Colors.ear || 'gray';
    ear3.draw();
    var ear4 = new Triangle(339, 130, 352, 139, 364, 89);
    ear4.strokeStyle = 'brown';
    ear4.fillStyle = 'pink';
    ear4.draw();
    //嘴巴
    var mouth = new Circle(303, 235, 5);
    mouth.strokeStyle = "brown";
    mouth.fillStyle = Colors.mouth || "white";
    mouth.draw();
    //身体
    var body = new Rectangle(235, 282, 135, 150);
    body.strokeStyle = "brown";
    body.fillStyle = Colors.body || "yellow";
    body.draw();
    //右手
    var hand1 = new Circle(372, 339 + s*3, 15);
    hand1.strokeStyle = "brown";
    hand1.fillStyle = Colors.hand || "white";
    hand1.draw();
    //左手
    var hand2 = new Circle(237, 339 + s*3, 15);
    hand2.strokeStyle = "brown";
    hand2.fillStyle = Colors.hand || "white";
    hand2.draw();
    //右脚
    var foot1 = new Line(354, 432, 354, 486);
    foot1.strokeStyle = "brown";
    foot1.draw();
    var foot2 = new Line(336, 432, 336, 486);
    foot2.strokeStyle = "brown";
    foot2.draw();
    var foot5 = new Rectangle(336, 486, 35, 20);
    foot5.strokeStyle = "brown";
    foot5.fillStyle = Colors.foot || "black";
    foot5.draw();
    //左脚
    var foot3 = new Line(254, 432, 254, 486);
    foot3.strokeStyle = "brown";
    foot3.draw();
    var foot4 = new Line(272, 432, 272, 486);
    foot4.strokeStyle = "brown";
    foot4.draw();
    var foot6 = new Rectangle(254, 486, 35, 20);
    foot6.strokeStyle = "brown";
    foot6.fillStyle = Colors.foot || "black";
    foot6.draw();
    //皱纹
    //衣服上的线
    var wrinkle1 = new Line(266, 127, 331, 127);
    wrinkle1.strokeStyle = "brown";
    wrinkle1.draw();

    var wrinkle2 = new Line(246, 140, 353, 140);
    wrinkle2.strokeStyle = "brown";
    wrinkle2.draw();
    
    var clothes = new Line(236, 432, 369, 283);
    clothes.strokeStyle = "brown";
    clothes.lineWidth = 5;
    clothes.draw();
    //我爱你的九国语言
    var nameColor = Colors.text || "black";
    var list = [];
    list.push({str:"I love you",x:c1,y:283});
    list.push({str:"我爱你们",    x:c2,y:157});
    list.push({str:"Je t’aime,Je t’adore",x:c3,y:43});
    list.push({str:"Ich liebe Dich",x:c4,y:458});
    list.push({str:"S’agapo",x:c5,y:533});
    list.push({str:"Jag lskar dig",x:c6,y:618});
    list.push({str:"Te amo,Tequiero",x:c7,y:251});
    list.push({str:"Ch’an Rak Khun",x:c8,y:30});
    list.push({str:"愛しています",x:c9,y:474});
    list.push({str:"喵喵爱人类~~",x:c10,y:108});
    text(list, nameColor);
}
function text(strList, color) {
    ctx.font = "16" + "px 华文琥珀";
    for(var i = 0;i<strList.length;i++)
    {
        var strObj = strList[i];
        
      ctx.fillText(strObj.str, strObj.x, strObj.y);    
    }
    ctx.fillStyle = color;
}

function start() {
    for(var attr in Actions){
        if(Actions[attr] > 10) Actions[attr] = 10;
        else if(Actions[attr] < 0) Actions[attr] = 0;
    }
    
    if(Actions.beard) s = new Swing(0, 10, Actions.beard*2);
    if(Actions.eye) r = new Increase(0, 360, 60 * Actions.eye);
    
    if(Actions.text){
        c1 = new Increase(-100, canvas.width+100, 20 * Actions.text);
        c2 = new Increase(-100, canvas.width+100, 22 * Actions.text);
        c3 = new Increase(-100, canvas.width+100, 22 * Actions.text);
        c4 = new Increase(-100, canvas.width+100, 23 * Actions.text);
        c5 = new Increase(-100, canvas.width+100, 24 * Actions.text);
        c6 = new Increase(-100, canvas.width+100, 25 * Actions.text);
        c7 = new Increase(-100, canvas.width+100, 26 * Actions.text);
        c8 = new Increase(-100, canvas.width+100, 27 * Actions.text);
        c9 = new Increase(-100, canvas.width+100, 28 * Actions.text);
        c10 = new Increase(-100, canvas.width+100, 29 * Actions.text);
    }
}

setInterval(loop, 16.7);

var Colors = {
    background: '',
    head: '',
    eye: '',
    pupil: '',
    ear: '',
    mouth: '',
    body: '',
    hand: '',
    foot: '',
    text: ''
};

var Actions = {
    beard: 10,
    eye: 10,
    text: 10
};

start();