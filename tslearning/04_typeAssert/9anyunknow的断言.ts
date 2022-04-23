
let symid = Symbol('objid')
let obj = {[symid]:1001,name:'www',age:22}

let username = obj['name']
let id = obj[symid]// 类型symbol不能作为索引类型使用
console.log(id);
// 解决
// let objid1 = obj["symid" as any]
// let objid2 = obj["symid" as unknown]
// 类型unknown不能作为索引类型使用