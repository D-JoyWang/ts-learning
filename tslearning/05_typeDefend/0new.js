function Person(phone, age) {
    this.age = age
    this.phone = phone
}

Person.prototype.doEat = function () {
    console.log('电话', this.phone)
}

let person = new Person('1111', 222)

// new一个实例对象的三个步骤：
// 1：创建一个object对象
// var obj = new Object();
var obj = {}
console.log('obj', obj)
console.log('typeof obj', typeof obj)
//2: 让新创建的对象的__proto__指向Person原型对象空间
obj.__proto__ = Person.prototype
console.log('obj', obj)
console.log('typeof obj', typeof obj)

//3: 借用Person中的构造函数为obj对象变量增加age属性和phone属性
Person.apply(obj, ['111', 23])
console.log('obj', obj)
console.log('typeof obj', typeof obj)
