/******************************************************

Boolean

布尔值
布尔值和布尔代数的表示完全一致，一个布尔值只有true、false两种值，要么是true，要么是false，可以直接用true、false表示布尔值，也可以通过布尔运算计算出来：


*******************************************************/

true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值


// &&运算是与运算，只有所有都为true，&&运算结果才是true：

true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false

// ||运算是或运算，只要其中有一个为true，||运算结果就是true：

false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true

// !运算是非运算，它是一个单目运算符，把true变成false，false变成true：

!true; // 结果为false
!false; // 结果为true
!(2 > 5); // 结果为true

// 布尔值经常用在条件判断中，比如：

var age = 15;
if (age >= 18) {
    console.log('adult');
} else {
    console.log('teenager');
}