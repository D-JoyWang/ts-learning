function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype.friends = ['ww', 'yy']
Parent.prototype.eat = function () {
    console.log(this.name + '吃饭')
}
function Son(favor, sex) {
    this.favor = favor
    this.sex = sex
}
let parent = new Parent()
console.log('parent', parent)

let son = new Son()
console.log('son', son)
console.log('Son.prototype', Son.prototype)

// 原型链继承
// 好处
// 子类对象变量可以访问父类实例属性
// 子类对象可以访问父类原型对象空间中的属性和方法
// Son.prototype = new Parent()
// Parent.prototype.constructor = Son
// console.log('Son.prototype', Son.prototype)
// console.log('Parent.prototype', Parent.prototype)

// let sonObj2 = new Son('打篮球哎', '男')
// console.log('sonObj2', sonObj2)

// console.log('sonObj2访问son类自身的属性', sonObj2.favor)
// console.log('sonObj2访问friends属性', sonObj2.friends)

// console.log('Son.prototype', Son.prototype)
// console.log('Parent.prototype', Parent.prototype)

Son.prototype = Parent.prototype
// Son.prototype  和Parent.prototype 和sonObj2.__proto__指向的原型对象空间
// Parent.prototype指向的原型对象空间指向Son构造函数对象空间
// 这违背了Parent原型对象空间的constructor必须指向Parent函数对象空间
Parent.prototype.constructor = Son
console.log('Son.prototype', Son.prototype)
console.log('Parent.prototype', Parent.prototype)
let sonObj2 = new Son('打篮球哎', '男')
console.log('sonObj2', sonObj2)

console.log('sonObj2访问son类自身的属性', sonObj2.favor)
console.log('sonObj2访问friends属性', sonObj2.friends)
