"use strict";
// 对现有数组进行封装，
// 提供get ,remove,add方法
// 其中需求中remove方法有两个，用函数重载来实现
var ArrayList = /** @class */ (function () {
    // 定义一个引用属性【数组】
    function ArrayList(element) {
        this.element = element;
    }
    // 根据索引来查询数组中的指定元素
    ArrayList.prototype.get = function (index) {
        return this.element[index];
    };
    // 显示方法
    ArrayList.prototype.show = function () {
        this.element.forEach(function (item) { console.log(item); });
    };
    // remove(value:number | object){
    // remove(value:number | object):any{
    ArrayList.prototype.remove = function (value) {
        this.element = this.element.filter(function (item, index) {
            if (typeof value === "number") {
                return index !== value;
            }
            else {
                return item !== value;
            }
        });
        return value; // 传过来什么，返回什么，符合需求
    };
    return ArrayList;
}());
var stuOne = { name: "111", age: 11 };
var stuTwo = { name: "222", age: 22 };
var stuThree = { name: "333", age: 33 };
var arr = new ArrayList([stuOne, stuTwo, stuThree]);
var stu = arr.remove(0);
console.log("\u5220\u9664\u7684\u662F\u7B2C".concat(stu, "\u4E2A\u5B66\u751F"));
console.log("剩余的学生还有");
arr.show();
var value = arr.remove(stuThree);
console.log("删除的学生是", value);
console.log("剩余的学生还有");
arr.show();
// 删除方法
// 1 remove(index) 根据数字删除，返回一个数字
// 2 remove(stuOne) 返回这个对象
