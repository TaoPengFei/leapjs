// Let us code the future
var oldText = text;
var text = function(msg, x, y, size, color){
    msg.split("\n").forEach(function(src){
        oldText(src, x, y, size, color);
        y += size;
    });
};

var msg = `这是第一行
Hello, World!
这是一段非常长的话
这不是第四行

        -- LeapLearner
`;

text(msg, 100, 100, 20, 'red');

text(msg, 200, 300, 30, 'green');