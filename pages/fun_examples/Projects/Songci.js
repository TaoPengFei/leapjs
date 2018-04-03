//如梦令
canvas.width = 350;
canvas.height = 500;
canvas.preventDefaultEvent();

var rumengling = [
    '曾宴桃源深洞，一曲舞鸾歌凤。长记别伊时，和泪出门相送。如梦，如梦，残月落花烟重。',
    '腊半雪梅初绽，玉屑琼英碎剪。素艳与清香，别有风流堪羡。苞嫩，蕊浅，羞破寿阳人面。',
    '疑是水晶宫殿，云女天仙宝宴。吟赏欲黄昏，风送一声羌管。烟淡，霜淡，月在画楼西畔。',
    '秋千争闹粉墙，闲看燕紫莺黄。啼到绿阴处，唤回浪子闲忙。春光，春光，正是拾翠寻芳。',
    '昨夜雨疏风骤，浓睡不消残酒，试问卷帘人，却道海棠依旧。知否，知否，应是绿肥红瘦。',
    '莺嘴啄花红溜，燕尾点波绿皱。指冷玉笙寒，吹彻小梅春透。依旧，依旧，人与绿杨俱瘦。',
    '遥夜沉沉如水，风紧驿亭深闭。梦破鼠窥灯，霜送晓寒侵被。无寐，无寐，门外马嘶人起。',
    '为向东坡传语，人在玉堂深处，别后有谁来，雪压小桥无路，归去，归去。江上一犁春雨。',
    '正是辘轳金井，满砌花红冷。蓦地一相逢，心事眼波难定。谁省，谁省，从此簟纹灯影。',
    '木叶纷纷归路，残月晓风何处。消息半浮沈，今夜相思几许。秋雨，秋雨，一半西风吹去。'
    ];
var cizu = [];
var xinCi = [];
var i,j;
var txt = new Text();
var rmlTxt = new Text("生成如梦令");
rmlTxt.x = 100;
rmlTxt.y = 400;
rmlTxt.draw();

function writeSC(cipai) {
    canvas.clear();
    xinCi = [];
    for (i in cipai) {
        cizu[i] = cipai[i].replace(/。/g ,'，').split('，');
    }
    xinCi.length = cizu[0].length;
    for (i = 0; i < xinCi.length; i++) {
        xinCi[i] = cizu[Math.floor(Math.random()*cipai.length)][i];
        txt.x = 80;
        txt.y = 80 + i * 30;
        txt.src = xinCi[i];
        txt.draw();
    }
    rmlTxt.draw();
}

rmlTxt.click = function() {
    writeSC(rumengling);
}