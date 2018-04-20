/******************************************************
 *
 * 新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。
 * 
/******************************************************/

class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}


var xiaoming = new Student('小明');
xiaoming.hello();

/******************************************************
class继承
用class定义对象的另一个巨大的好处是继承更方便了。想一想我们从Student派生一个PrimaryStudent需要编写的代码量。现在，原型继承的中间对象，原型对象的构造函数等等都不需要考虑了，直接通过extends来实现：
/******************************************************/

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}
