// 实现一个按钮类
class Button extends Rectangle {
    
    constructor(src, x, y, w, h, color){
        super(x, y, w, h, color);
        this.src = src; 
    }
    
    draw () {
        ctx.save();
        
        // 位置居中
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        super.draw();
        text(this.src, this.x+this.w/2, this.y+this.h/2);
        ctx.restore();
    }
}

var btn1 = new Button("别点我", 100, 100, 150, 40, 'grey');
var btn2 = new Button("点我", 100, 300, 150, 55, 'green');

btn1.draw();
btn2.draw();

btn1.click = function(){
    alert("别点我");
};

btn2.click = function(){
    alert("点我");
};