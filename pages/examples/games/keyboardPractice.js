canvas.resize(600, 700);

// elements
var bg = new Sprite('https://rss.leaplearner.com/Image/Bgs/Alarm_bg_01.png', 0, 0, canvas.width, canvas.height);
var stage = new Sprite('https://rss.leaplearner.com/Image/Bgs/Alarm_frame_01.png', 0, 0, canvas.width, canvas.height);
var monster = new Sprite('https://rss.leaplearner.com/Image/Animals/DigitalMonster_angry.png', 352, 240, 400, 540);
stage.scale(-1, 1);
var keyboard = new Sprite('https://rss.leaplearner.com/teachfiles/Media/键盘.png', 50, 200, 500, 300);
var cursor = new Line(200, 110, 200, 190);
cursor.lineWidth = 3;
cursor.strokeStyle = 'black';
cursor.globalAlpha = new Swing(0, 1, 2);
font('Consolas');
ctx.font = '80px COnsolas';
var retry = new Text('Press [Enter] to try again!', 120, 500, 30);
retry.fillStyle = 'orange';
retry.globalAlpha = new Sine(0, 2, 2);

// global variables
const keys = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890!@#$%^&*()_+-=,./<>?|\\;:\'"';
//ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890!@#$%^&*()_+-=,./<>?|\\;:\'"
var rank = +localStorage.getItem("keyboard_rank") || 1;
var targetText = '';
var typeText = '';
var errorText = '';
var shiftLenth = 0;
var errorCount = 0;
var maxError = 0;
var speed = 2;
// setting
var practices=[
    {'Part1': ''},
    {'Part1': 'f j'},
    {'Part1': 'fff jjj fjfj ffffjjjj'},
    {'Part1': 'jfjf fffjjj jjjfff'},
    {'Part1': 'fjj fjj jjf jjf fjf fjf'},
    {'Part1': 'f j j j ff jf jj jf fj'},
    {'Part1': 'ffff jjjj jjjfff jjffffjj'},
    {'Part1': 'd k'},
    {'Part1': 'dddd kkkk'},
    {'Part1': 'ddd kkk'},
    {'Part1': 'ddkkddkk'},
    {'Part1': 'dkdkk ddkddk dkdk'},
    {'Part1': 'dd dk dk kk kd kd kkd ddk dkdk kkddk dddkkk kkkk dddd kdkdkdd dkdkddk'},
    {'Part1': 'ffff dddd kkk jjj dfd jkj fjdk dfjk dfdfd jkjkj kjfd kjfd jjj ddd kkk fff'},
    {'Part1': 'ffff dddd jjjj kkkk dfdfdf jkjkjk jjkkddff dddfffjjjkkk'},
    {'Part1': 'fkjdkfjdjkdfkjfdkfjdjfk'},
    {'Part1': 's l'},
    {'Part1': 'ssss llll'},
    {'Part1': 'ss ll sss lll slslsl lslsls'},
    {'Part1': 'll ss ssll sll lss lsls slsl lsssl sllls llll ssss lsll slss'},
    {'Part1': 'kk jj ff dd sssd ll df fj jk kl sdfjkl skdl ksjf kd lsfldkd ddklf jfjfls sdfllks jjf lls'},
    {'Part1': 'a ;'},
    {'Part1': 'aaaa ;;;;'},
    {'Part1': 'aaa ;;; aa;;'},
    {'Part1': 'aa;; ;;aa a;a; ;a;a'},
    {'Part1': 'aa;; ;aaa a;;; a;;a ;aa; aa;aa ;;aaa;; ;a;a;a a;a;aaa ;a;aaa;;; ;;a;;a;;aaa;;;'},
    {'Part1': 'asl dad all salads fall; lass; as all ads add slasa jaff kad; flask sad ask all jak dall'},
    {'Part1': 'ask dad all fall lass as ads add salsa flask lass dad all sad jak ask'},
    {'Part1': 'alsdflsdjk;adlsfkd;fdskl;a'},
    {'Part1': 'g h'},
    {'Part1': 'gggg hhhh ggg hhh'},
    {'Part1': 'ghgh gghh hhg ggh gghgg hhghh ghgh hghgg hhhh gggg hghghh gghhghg'},
    {'Part1': 'g h h h g ggghhg hhggghhg hghg hghghg ghghghgggg hghghhhgghghg'},
    {'Part1': 'gggf hhhj fghj fgf jhj jjhhjj ggfhhj ggjjhhff ghfj ghgh jfjfgh ggf jjh'},
    {'Part1': 'glad glass gass gas had hahaha gal hal gaf gaga ladd hasha shahala glasdk'},
    {'Part1': 'half dad glad shall ask flask had slash flags had ask shall salad; dad jaff'},
    {'Part1': 'r u'},
    {'Part1': 'rrr uuu rrrr uuuu'},
    {'Part1': 'rruurr uurruu ruu ruu uur urr uuurr rrru uurr'},
    {'Part1': 'rf rrf rff frr rrrf uuuj ujuj uuj uj frrfr ujujuuj rfff juuu ujjj frrr ujuju rfrfr ufjr rfju'},
    {'Part1': 'usual salad radar rural flag dad harsh sugar us dull rush lurk lusk fusk laugh hug shark has'},
    {'Part1': 'e i'},
    {'Part1': 'ee ii eee iii eeee iiii eiei eeeiii eiieii ieiee iieeii'},
    {'Part1': 'ed eed eddd ik iik ik eded ikik eeed iiik iik eeii eekkii eiei dede deik iked kikik iikiikeeiik'},
    {'Part1': 'address add reader skill did suffer field ear dealers lied alike darker area afraid all died ride area free kiss user idea'},
    {'Part1': 'red fair hers rule as hear life here has raise his rugs raised far he field her hard herself dreaded hair degree are seeds dear fear see'},
    {'Part1': 'afraid guess laugh heard shall slash kill egg'},   
    {'Part1': 'w o'}, 
    {'Part1': 'wwooo wowo ooww wwooww wwww oooo owowow  owwowoowo'},   
    {'Part1': 'ws wws ol ool wswllo ooloww solw wols lol wow slso owwosl wwwooo looo slll wsss lwwwllsosoloo wowowswlol'},  
    {'Part1': 'swear owelower alsoallow row weak flower follow wear sure well road saw wasa order risker soldiers worried'},   
    {'Part1': 'raw saw raod flower follow awkward afford firewood wear sure well willis lower allow also weak swear'}, 
    {'Part1': 'q y'}, 
    {'Part1': 'qyy qqyy yyqqyy qqqq yyyy yqyqyqq qyqyqyy qqyqqy qyqyqyyy yqyqyyyqq yyqqqyyyqqqyqyqq'},  
    {'Part1': 'qa qqa qaa qqqaa yj yyjj yyjjj yjyjy qayj qqqa jyyyj aqyj qaq aqaaq jyj aqaqaq jyjyjjy qqyyjjaa qyaj'},  
    {'Part1': 'sheaf rough yard ready lady risk year liquid joy why require already yellow early sir how qualify offer'}, 
    {'Part1': 't p'}, 
    {'Part1': 'pt ptpt ppt tpptppp ppttpppt tttppp tttttpttppttp ptpppptpt ptptpptt ttpttpttppttp'},  
    {'Part1': 'tf ttf fftt p; p;; ppp; p;p;p tftff ttpp;; ff;;pp ftp; ;p; tf; ;pft ttf pp pp; tp;ppt'},  
    {'Part1': 'fall two soft faith other our tree thirty ought post wealthy adapt white trailer rapidly slight fast teeth'}, 
    {'Part1': 'tywrdup;qeyikgfajhsol higkeyslotruw;pjqfda'},  
    {'Part1': 'we are at a great ease a star as far as refferred sea rewarded were art free'},  
    {'Part1': 'you look up pull up poppy;oil you joy oh pop up you hill ill pill'},  
    {'Part1': 'the air is like this is lot early push up your users for you just did quit loop'},  
    {'Part1': 'with us of depth his safest take out all their faults if wages the world property pay'},  
    {'Part1': 'v m'}, 
    {'Part1': 'vvmm vvvmmm mvmvmvv mmvmmvvvmvm vvmmvv vvvv mmmm vmvmvv mmvmmv'},  
    {'Part1': 'vf vvf ffvvf mjmjj mmjjmmj vmj jmf fvjm ffjjvmj mvjvmmf ffvvffv mjmjmmj jfvmfjmv vmfj vvjmf'},  
    {'Part1': 'i drive everyday as good as dave who developed leadership qualities to moved overhead of other drivers'}, 
    {'Part1': 'muj muj jum jum mmmjuj jujujm jjujujuuu jmjum muj mju ujm ujm jmu jmuumju ujmj'},  
    {'Part1': 'vfr vfr ffvr vrf vrf vvffvvr rvrvrff ffrvfrf fvfrfr fvfv fvr fvr ffrv vrvrf vfr vrf vfrr'},  
    {'Part1': 'c ,'}, 
    {'Part1': 'cc, ,c, ,,,ccc c,c,cc, cc,,,,c ccc,c,c cc,,c,, ,c,cc ,,cc,,ccc'},  
    {'Part1': 'cdk kdc ddkcc cdcdk dkdkc, k,k,cck ,kdc ,cdk d,ck ddkkcc, ,kdcdc dkc ckd cc,kk ckk ,ddc dck kdc'},  
    {'Part1': 'i accept the idea of class, she lost her credit card, this car could reach top speed, the chair must touch the wall'}, 
    {'Part1': ',ki kki, ii,iik ki ,i k, kk, ik, ki, ,kiki,kkkk,,kkikii k,ik,i iiikki,i kii k,, iik ikikiik'},  
    {'Part1': 'cde ced cdd cde dece deccd cedc cde cdcce eeddc ededc ecd edc dcec deccd'}, 
    {'Part1': 'car,lw;fpjiuvdkghqwteyo fhglmjkiopqrwetcasd'}, 
    {'Part1': 'x .'}, 
    {'Part1': 'x.. .x. xx... .xxx. .x.x.xx ..x..x x.xx x..x xxx ... .x.x..xxx'},  
    {'Part1': 'xxs xs sx ssx xxs .ll .l l.. .l.l xsx l.l sx.l sxs lx.ls x.x. x.sl xx.. ..lss xxssll.'},  
    {'Part1': 'exercise makes me feel ralaxed.after i took the exit exam sixty times,i watched mad max.i did extra examples.'}, 
    {'Part1': '.lo .lo .lloo olol. lo..l lol. lo.oo lo.ll llo.lo l.. o..'},  
    {'Part1': 'xsw wsx wsx xsw swxxs wsxsw xwswsx swswx swx xws xxssww wsxxswwsx'},  
    {'Part1': 'z /'}, 
    {'Part1': 'z / zz/ /z/z/zz zzz /// //z//z z/z /z/ zz//zz/ /z/z//z'},  
    {'Part1': 'za zza za zza zzza ///; ;;// /;z zz/ zz//z a///a a;;z; a;a;z z;; z// /a/a/ z/z/z zza //;'},  
    {'Part1': 'i was amazed / the wall / puzzled /how lazy / crazy zak was.  jazz quiz. close'}, 
    {'Part1': '/;p pp;/ //;/pp /;p /p; p;/ pp; ;p;p/ //;;p /;p p;/ /; p; ;pp /;;'},  
    {'Part1': 'zaq zqq zaa qaz qaz zzaqq qazzq aqz aqz qza qaz aqzzaaq aqazqqa qzzqzqa'},  
    {'Part1': 'z,mxcv.mz,.cxm,zcx.,mxczm,c.zxvmz.'}, 
    {'Part1': 'bn bn nb bbn nnbbnnb bbb nnn bnbbb nnbnnb nbnbnnnbbnn'}, 
    {'Part1': 'bf bbf bfbfb fbfbffb njnj jnjnjjjnn bnfj fbf jnj ffjjnnbb fbnj jnbf bjfnjfb bbn bbf nnj jjnn ffb'},  
    {'Part1': 'a bay is the very young offspring of humans.a new born is an infant who is within hours up to a few weeks from birth.'}, 
    {'Part1': 'a strong man can save himself,a great man can save another.'}, 
    {'Part1': 'you got a dream, you gotta protect it.people can not do something themselves, they wanna tell you, you can not do it. if you want something go get it.'}, 
    {'Part1': 'the world is not split into good people and death eaters. we have all got both light and dark inside us. what matters is the part we choose to act on.that is who we really are.'}, 
    {'Part1': 'can a man still be brave if he is afraid. that is the only time a man can be brave.'}, 
    {'Part1': 'there is a saying, yesterday is history,tomorrow is a mystery,but today is a gift,that is why it is called the present.'}, 
    {'Part1': 'your mind is like this water, my friend,when it is agitated,it becomes difficult to see,but if you allow it to settle,the answer becomes clear.'}, 
    {'Part1': 'life is a little bit messy.we all make mistakes.no matter what type of animal you are.change starts with you.'}
];

// methods
function save(){ localStorage.setItem("keyboard_rank", rank); }
function getText(){
    if(rank >= practices.length){
        rank = randint(1, practices.length);
    }
    return practices[rank].Part1;
}

function main(){
    canvas.clear();
    nextFrame(main);
    
    // win
    if(typeText.length == targetText.length && errorCount <= maxError){
        rank++;
        save();
        start();
    } else if(typeText.length >= targetText.length){
        start();
    }
    
    // updates
    if(monster.x > canvas.width) monster.x = canvas.width;
    monster.x -= speed/10;
    
    bg.draw();
    cursor.draw();
    
    text("Stage: " + rank, 80, 10, 40, 'orange');
    text("Error: " + errorCount + '/' +maxError, 400, 20, 30, errorCount > maxError ? 'red' : 'green');
    text(targetText, 200-shiftLenth, 100, 80, 'white');
    text(typeText, 200-shiftLenth, 100, 80, 'green');
    text(errorText, 200-shiftLenth, 100, 80, 'red');
    
    keyboard.draw();
    stage.draw();
    monster.draw();
    
    if(isGameOver()) nextFrame(GameOver);
}

function isGameOver(){ return monster.x <= 150; }

// keyboard2 will not file key press event
document.onkeydown = function (e) {
    // console.log(e.key);
    if(keys.indexOf(e.key) != -1){
       
       // type error
       if(targetText[typeText.length] != e.key){
           errorText += targetText[typeText.length];
           typeText += ' ';
           monster.x -= 3;
           errorCount += 1;
       }
       else {
           typeText += e.key; 
           errorText += ' ';
           monster.x += 3;
       }
    } else if(e.key == 'Backspace') {
        typeText = typeText.substring(0,typeText.length-1);
        errorText = errorText.substring(0,errorText.length-1);
    } else if(e.key == 'Enter' && isGameOver) {
        start();
    }
    shiftLenth = ctx.measureText(typeText).width;
};

function GameOver(){
    nextFrame(GameOver);
    bg.draw();
    image('https://rss.leaplearner.com/Image/Animals/DigitalMonster_happy.png', 160, 130, 300, 350);
    retry.draw();
}

function start(){
    targetText = getText();
    typeText = '';
    errorText = '';
    monster.x = canvas.width;
    shiftLenth = 0;
    speedPlus = 0;
    errorCount = 0;
    shake();
    maxError = Math.floor(1 + targetText.length/10);
    nextFrame(main);
}

function shake(){
    canvas.decrease = new Increase(1, 0, 1, false);
    canvas.shakeSize = new Sine(0, 0.1, 0.4);
    
    if(canvas.func) clearInterval(canvas.func);
    
    canvas.func = setInterval(function(){
        let scale = 1 + canvas.shakeSize * canvas.decrease;
        canvas._translate(canvas.width*(1-scale)/2, canvas.height*(1-scale)/2);
        canvas.scale(scale, scale);
    }, 20);
}

start();