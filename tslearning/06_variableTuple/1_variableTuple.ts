// const [username, age]: [string, number, string, string, ...any[]] = ['大白', 22, "哈哈哈", '机会哦', 'gfdgfdgffg', 444]
// const [username, age, ...rest]: [string, number, string, string, ...any[]] = ['大白', 22, "哈哈哈", '机会哦', 'gfdgfdgffg', 444]
// const [username, age, ...rest]: [username: string, age: number, ...rest: any[]] = ['大白', 22, "哈哈哈", '机会哦', 'gfdgfdgffg', 444]
// console.log(username);
// console.log(age);
// console.log(rest);

// rest 位置
const [username, age, ...rest]: [username: string, age: number, ...rest: any[], dec: string] = ['大白', 22, "哈哈哈", '机会哦', 'gfdgfdgffg', 55, "说明"]

// 视频待续
console.log(rest);
export { }