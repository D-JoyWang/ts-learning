// 对现有数组进行封装，
// 提供get ,remove,add方法
// 其中需求中remove方法有两个，用函数重载来实现
class ArrayList {
    // 定义一个引用属性【数组】
    constructor(public element: Array<object>) { }
    // 根据索引来查询数组中的指定元素
    get(index: number) {
        return this.element[index]
    }
    // 显示方法
    show() {
        this.element.forEach((item) => { console.log(item) })
    }
    remove(value: number): number
    remove(value: object): object
    // remove(value:number | object){
    // remove(value:number | object):any{
    remove(value: number | object): number | object {
        this.element = this.element.filter((item, index) => {
            if (typeof value === "number") {
                return index !== value
            } else {
                return item !== value
            }
        })
        return value // 传过来什么，返回什么，符合需求
    }
}
let stuOne = { name: "111", age: 11 }
let stuTwo = { name: "222", age: 22 }
let stuThree = { name: "333", age: 33 }
let arr = new ArrayList([stuOne, stuTwo, stuThree])
let stu = arr.remove(0)
console.log(`删除的是第${stu}个学生`);
console.log("剩余的学生还有");
arr.show()
let value = arr.remove(stuThree)
console.log("删除的学生是", value);
console.log("剩余的学生还有");
arr.show()
// 删除方法
// 1 remove(index) 根据数字删除，返回一个数字
// 2 remove(stuOne) 返回这个对象