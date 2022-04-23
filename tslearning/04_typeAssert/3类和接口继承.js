"use strict";
exports.__esModule = true;
var Stu = /** @class */ (function () {
    function Stu(name, age, address, phone) {
        this.username = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    Stu.prototype.kk = function () {
        console.log("kk");
    };
    return Stu;
}());
var people = { username: 'ww', age: 22, address: "你好", phone: '111' };
var result = people;
result.kk();
var stu = new Stu("student", 22, 'ddd', "111");
var result2 = stu;
console.log(result2.age);
// 和1类型
