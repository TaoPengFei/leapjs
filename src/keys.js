var Key = {
    a: {},
    b: {},
    c: {}
};

document.onkeyup = function(e){
    var key = Key[e.key];
    if(key && key.onkeyup)
        key.onkeyup();
};

document.onkeydown = function(e){
    var key = Key[e.key];
    if(key && key.onkeydown)
        key.onkeydown();
};

document.onkeypress = function(e){
    var key = Key[e.key];
    if(key && key.onkeypress)
        key.onkeypress();
};

module.exports = {
    Key: Key
};
