interface IPeople{
    username:string,
    age:number,
    address:string,
    phone:string
}
class Stu {
    public username!:string;
    public age!:number;
    public address!:string;
    public phone!:string
    constructor(name:string,age:number,address:string,phone:string){
        this.username = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    public kk(){
        console.log("kk");
    }
}

let people :IPeople = {username:'ww',age:22,address:"你好",phone:'111'}
let result = people as Stu
result.kk();


let stu = new Stu("student",22,'ddd',"111")
let result2 = stu as IPeople;
console.log(result2.age);
export {}

// 和2类型一样