// 对现有数组进行封装，
// 提供get ,remove,add方法
// 其中需求中remove方法有两个，用函数重载来实现
class ArrayList<T> {
    // public element: Array<object>
    public element: Array<T>
    public index: number = 0;
    // 定义一个引用属性【数组】
    constructor() {
        this.element = []
    }
    // 往数组中添加元素
    public add(ele: T) {
        this.element[this.index++] = ele
    }
    // 根据索引来查询数组中的指定元素
    get(index: number):T {
        this.checkIndex()
        return this.element[index]
    }
    public checkIndex() {
        if (this.index < 0) {
            throw new Error('数组下标不能为零')
        }
    }
    show() {
        this.element.forEach((item) => { console.log(item) })
    }
    remove(value: number): number
    remove(value: T): T
    remove(value: number | T): number | T {
        this.element = this.element.filter((item, index) => {
            if (typeof value === "number") {
                return index !== value
            } 
            else {
                return item !== value
            }
        })
        return value
    }
}
let stuOne = { name: "111", age: 11 }
let stuTwo = { name: "222", age: 22 }
let stuThree = { name: "333", age: 33 }
let arrList = new ArrayList()
arrList.add(stuOne)
arrList.add(stuTwo)
arrList.add(stuThree)
console.log(arrList.get(0));

export { }