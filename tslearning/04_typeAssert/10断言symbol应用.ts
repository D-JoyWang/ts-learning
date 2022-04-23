function add(one:string |number ,two:string|number){
    return one as any + two as any
}
console.log(add(3,5));
console.log(add("3",5));


// 断言的定义：能把两种有重叠关系的数据类型进行互相转换的一种TS语法，其中一种数据类型住哪换成另外一种类型，类型断言和类型转换一样，但语法格式不同
//  A  B 数据必须重叠
// <Bus>vechils =  vechile as Bus