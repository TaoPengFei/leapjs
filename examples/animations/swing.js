class Swing {
  constructor (min, max, speed) {
    this.min = min;
    this.max = max;
    this.t2 = (max - min)/speed * 2000;
    this.t = new Date().getTime();
  }

  get val() {
    let deltaT = (new Date().getTime() - this.t) % this.t2;
    let x = (this.max - this.min) * 2 * deltaT / this.t2 + this.min; 
    if(deltaT > this.t2/2) return 2*this.max - x;
    else return x;
  }
}

Actions = {
  move: 10

};

var eye = new Circle();

a = new Swing(100, 200, 50 * Actions.move);
b = new Swing(100, 200, 20 * Actions.move);
c = new Swing(10, 200, 50);

(function main(){
  canvas.clear();

  eye.x = a.val;
  eye.y = b.val;
  eye.r = c.val;
  eye.draw();

  nextFrame(main);
}());
