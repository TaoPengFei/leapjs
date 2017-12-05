var url = "http://llcs-1252287760.cossh.myqcloud.com/Piano/";

var urls = [ "40-C.mp3", "42-D.mp3", "44-E.mp3", "45-F.mp3", "47-G.mp3", "49-A.mp3", "51-B.mp3"];

var Key = Rectangle;
Key.prototype.click = function(){
    this.audio.currentTime = 0;
    this.audio.play();
};

for(var i=0; i<urls.length; i++){
    var key = new Key(0, 550/7*i, 350, 550/7);
    key.fillStyle = RGB(0, 200-20*i, 200-20*i);
    key.audio = new Audio();
    key.audio.src = url + urls[i];
    key.fill();
}
