var a = new Circle(100, 100, 50);
var b = new Circle(150, 100, 50);
var c = new Circle(125, 155, 50);

b.fillStyle = "green";
c.fillStyle = "red";

a.draw();
b.draw();
c.draw();

a.click = function(){
    console.log("a is been clicked");
    a.draw();
};

b.click = function(){
    console.log("b is been clicked");
    b.draw();
};

c.click = function(){
    console.log("c is been clicked");
    this.draw();
};