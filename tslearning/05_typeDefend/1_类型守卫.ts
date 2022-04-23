// 请编写一个操作函数对象方法和属性的函数实现一下功能：
// 1：当对象字符串属性有空格时就去掉空格后输出
// 2：当遇到对象方法时就执行，其它数据类型的属性一律输出
// 3：只有对象中包含allowoutput属性时才允许输出
// 4：函数接收到外部传入的null undefined {} 直接输出不是一个合法对象

let testObj = {
    name: 'wan g y an',
    age: 32,
    eat() {
        console.log(this);
        console.log(StingUtil.trimSpace(this.name) + '吃饭');
    },
    allowInput: 1
}
class StingUtil {
    public static trimSpace(str: string): string {
        return str.replace(/\s/g, "")
    }
}
function processObjOutput(obj: any) {
    if (!obj || JSON.stringify(obj) === '{}') {
        console.log("不是一个合法对象");
    }
    if (obj && "allowInput" in obj) {//3：判断allowInput属性或者方法是不是存在于对象中
        console.log("属性存在");
        let value;
        Object.keys(obj).forEach((key) => {
            value = obj[key]
            // 把变量的范围缩小，在语句块内使用
            if (typeof value === "string") {//1：当对象字符串属性有空格时就去掉空格后输出
                // console.log(key + ":" + value.replace(/\s+/g, ""));
                console.log(key + ":" + StingUtil.trimSpace(value));
            } else if (typeof value === 'function') {
                obj[key]()
                // 2：当遇到对象方法时就执行，其它数据类型的属性一律输出
            } else {
                console.log(key + ":" + value);
            }

        })
    }

}
// processObjOutput(testObj)
processObjOutput({})
// processObjOutput(undefined)
// processObjOutput(null)

export { }