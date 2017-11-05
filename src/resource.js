var count = 0;
var loaded = 0;
var main;

function loadRssAndRun(func){
    main = func;
    check();
}

function check(){
    if(loaded >= count)
        main();
    else
        requestAnimationFrame(check);
}

module.exports = {
    count: count,
    loaded: loaded,
    loadRssAndRun: loadRssAndRun
}
