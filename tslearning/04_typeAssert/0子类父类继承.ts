class People{
    public myUsername!:string;
    public myAge!:number;
    public address!:string;
    public photo!:string;
    constructor(){
    }
    study(){}
}
class Stu extends People{
    public username!:string;
    public age!:number;
    public address!:string;
    constructor(username:string,age:number,address:string,photo:string){
        super();
    }
}

let people = new People();
let result = people as Stu
result.study()
 new Stu("ww",22,"北京","123")

export {}


// extends关系，无论A,B谁是父类或者子类，A的对象属变量可以断言为B，B的对象变量一样可以断言为A
// 但是注意们一般在绝大多数场景下都是把父类的对象变量断言为子类