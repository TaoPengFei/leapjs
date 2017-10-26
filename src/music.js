function Music(src){
    this.audio = new Audio();
    this.audio.src = src;
    this.audio.preload = "auto";
}

Music.prototype.autoPlay = function(b){
    this.audio.autoPlay = b;
};

Music.prototype.play = function(){
    this.audio.currentTime = 0;
    this.audio.play();
};

Music.prototype.stop = function(){
    this.audio.pause();
};

Music.prototype.loop = function(b){
    this.audio.loop = b; // true or false
};

module.exports = {
    Music: Music
};
