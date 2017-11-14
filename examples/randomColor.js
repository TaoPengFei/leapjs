var circle = new Circle();

function randomInt(n){
    return Math.floor(Math.random() * n);
}

function randomRGBA(){
    return RGBA(randomInt(255), randomInt(255), randomInt(255), Math.random());
}

Mouse.move = function(){
  circle.x = Mouse.x;
  circle.y = Mouse.y;
  circle.r = 10 + 20 * Math.random();
  circle.fillStyle = randomRGBA();
  circle.fill();
};
