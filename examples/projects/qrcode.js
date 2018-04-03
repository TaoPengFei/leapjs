/****************************************************************************/
// 引用外部库，提供QrEncoder类
</script>
<script src='https://rss.leaplearner.com/teachfiles/Text/qrcode.js'></script>
<script>
/****************************************************************************/
canvas.resize(300, 300);

var message = "Hello World!";
var q = new QrEncoder(); // create a QR encoder
var arr =  q.encode(message, 4);  // message, type:1, 2, 3, 4

var len = arr.length;
var size = canvas.width/len;

arr.forEach(function(ar, i){
    ar.forEach(function(b, j){
        if(b){
            rectangle(j*size, i*size, size, size, 'black');
        }
    })
})
