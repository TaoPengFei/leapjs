var inheritPrototype = function(subClass, superClass){
    var prototype = Object.create(superClass.prototype);
    prototype.constructor = subClass;
    subClass.prototype = prototype;
};

Array.prototype.contain = function(obj){
    var i = this.length;
    while(i--){
        if(this[i] === obj)
            return true;
    }
    return false;
};

Array.prototype.max = function(){
    return Math.max.apply(null, this);
};

Array.prototype.min = function(){
    return Math.min.apply(null, this);
}

module.exports = {
    inheritPrototype: inheritPrototype
};
