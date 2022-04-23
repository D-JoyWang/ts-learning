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
/**
 * 判断是不是字符串的自定义守卫
 */
// function isString(str: any): boolean {
//     return typeof str === 'string'
// }
function isString(str: any): str is string {
    return typeof str === 'string'
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
            // if ( value === "string") {//1：当对象字符串属性有空格时就去掉空格后输出
            if (isString(value)) {//1：当对象字符串属性有空格时就去掉空格后输出
                // if (typeof value === "string") {//1：当对象字符串属性有空格时就去掉空格后输出
                // console.log(key + ":" + value.replace(/\s+/g, ""));
                console.log("typeof value", typeof value);
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
processObjOutput(testObj)
// processObjOutput(undefined)
// processObjOutput(null)

export { }