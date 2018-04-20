/******************************************************

如何引用其他外部库
在开发环境中，在lib中配置
在本环境使用，按照以下第8行添加，注意保留第9行

*******************************************************/
//</script><script src='https://rss.leaplearner.com/teachfiles/Text/qrcode.js'>
//</script><script>

canvas.resize(300, 300);

var message = "Hello World!";
var q = new QrEncoder(); // create a QR encoder

var arr =  q.encode(message, 4);  
// message, type:1, 2, 3, 4, 数值越大，容错率越高

var len = arr.length;
var size = canvas.width/len;

arr.forEach(function(ar, i){
    ar.forEach(function(b, j){
        if(b){
            rectangle(j*size, i*size, size, size, 'black');
        }
    });
});
