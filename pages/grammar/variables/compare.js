// 比较运算符
// 当我们对Number做比较时，可以通过比较运算符得到一个布尔值：

console.log(2 > 5); // false
console.log(5 >= 2); // true
console.log(7 == 7); // true

// 实际上，JavaScript允许对任意数据类型做比较：

console.log(false == 0); // true
console.log(false === 0); // false

// 要特别注意相等运算符==。JavaScript在设计时，有两种比较运算符：

// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

// 由于JavaScript这个设计缺陷，不要使用==比较，始终坚持使用===比较。
// 另一个例外是NaN这个特殊的Number与所有其他值都不相等，包括它自己：

console.log(NaN === NaN); // false
// 唯一能判断NaN的方法是通过isNaN()函数：

console.log(isNaN(NaN)); // true
// 最后要注意浮点数的相等比较：

console.log(1 / 3 === (1 - 2 / 3)); // false

// 这不是JavaScript的设计缺陷。浮点数在运算过程中会产生误差，因为计算机无法精确表示无限循环小数。要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

console.log(Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001); // true