var Key = {};

var keyboard = "abcdefghijklmnopqrstuvwxyz1234567890";
var keyboard2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
"Enter", "Escape"];

for(var i=0; i<keyboard.length; i++){
    Key[keyboard[i]] = {};
}

for(i=0; i<keyboard2.length; i++){
    Key[keyboard2[i]] = {};
}

document.onkeyup = function(e){
    var key = Key[e.key];
    if(key && key.up)
        key.up();
};

document.onkeydown = function(e){
    var key = Key[e.key];
    if(key && key.down)
        key.down();
};

// keyboard2 will not file key press event
document.onkeypress = function(e){
    var key = Key[e.key];
    if(key && key.press)
        key.press();
};

module.exports = {
    Key: Key
};
