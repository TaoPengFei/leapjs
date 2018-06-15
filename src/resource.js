import { canvas, ctx } from './canvas'

let count = 0
let loaded = 0
let main = function(){};
let r=0

function loadRssAndRun (func) {
  main = func;
  setTimeout(check, 20);
}

let Rss = {}
Rss.add = function () { count++; }
Rss.load = function () { loaded++; }
Rss.isLoaded = function () { return loaded >= count; }

let n = 0
let load_w = 0

function check () {
  if (Rss.isLoaded()){
    canvas.clear();
    main();
  } else { 
    canvas.clear();
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.shadowColor = "grey";

    let w = canvas.width;
    let h = canvas.height;
    // backgorund
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, w, h);

    
    // text
    ctx.textAlign="center";
    ctx.fillStyle = "orange";
    ctx.font = w/8 + "px Arial";
    ctx.fillText('LeapLearner', w*0.5, h*0.25);

    let msg = 'loading' // loading...
    ctx.font = w/16 + "px Arial";
    for (let i = 0; i < n/20 % 3; i++) { msg += '.' }
    ctx.fillText(msg, w*0.5, h*0.7);

    let target = w*0.8*(loaded+1)/count;
    load_w += (target - load_w) * 0.01;

    ctx.fillRect(w*0.1,        h*0.75, load_w,       h*0.025);
    ctx.fillStyle = "white";
    ctx.fillRect(w*0.1+load_w, h*0.75, w*0.8-load_w, h*0.025);

    n++;
    setTimeout(check, 20);
    ctx.restore();
  }
}

export { Rss, loadRssAndRun }
