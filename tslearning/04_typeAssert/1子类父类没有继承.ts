class People{
    constructor(public username:string,public age:number,public address:string){
    }
}
class Stu {
    public username!:string;
    public age!:number;
    public address!:string;
    public phone!:string
    constructor(username:string,age:number,address:string,phone:string){
    }
    public study(){
        console.log("cnjncjk");
    }
}

let people = new People('people',22,'1111111')
let result = people as Stu
// result.study()

let stu = new Stu('people',22,'1111111',"122222")
let peopleToStu = stu as People
console.log(peopleToStu.address);

export {}


// 两个类中的任意一个类的所有实例属性【不包括静态属性】加上所有的public方法
// 和另外一个类中的所有public属性方法完全相同，或者是另外一个实例的子集，
// 这两个类可以互相断言，否则不可以
// 两个类必须是子集关系 A包含B或者B包含A 且包含关系必须是public签名条件