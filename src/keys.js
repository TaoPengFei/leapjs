var keyDown = {};
var keyPressed = {};

var Keys = {};

function Key(key){
    return {
        onkeydown: null,
        onkeyup: null,
        onkeypress: null,
        isDown: function(){
            return keyDown[this.key] ? true : false;
        },
        isPress: function(){
            var r = keyPressed[this.key];
            keyPressed[this.key] = false;
            return r ? true : false;
        }
    }
}

function getKey(key){
    return Keys[key] ? Keys[key] : Keys[key] = new Key();
}

document.onkeyup = function(e){
    keyDown[e.key] = false;
    var key = getKey(e.key);
    if(key && key.onkeyup)
        key.onkeyup();
};

document.onkeydown = function(e){
    keyDown[e.key] = true;
    var key = getKey(e.key);
    if(key && key.onkeydown)
        key.onkeydown();
};

document.onkeypress = function(e){
    keyPressed[e.key] = true;
    var key = getKey(e.key);
    if(key && key.onkeypress)
        key.onkeypress();
};

module.exports = {
    Key: getKey 
}
