export default class MyLocalStorage {
    //静态属性和对象属性是类中的两大成员
    static localStorage:MyLocalStorage;// 静态属性：用来限制别人怎么找他，不是限制别人的
    private constructor(){
        console.log("这是TS单例设计模式的静态方法的构造器");

    }
    // 提供一个外部访问方法
    // 通过这个方法用来提供外部得到一个对象的方法
    public static getInstance(){
        // 这样写每次调用都会new 不符合单例模式
        // 局部变量每次运行都会被销毁，还是能无数次的被new
        // let localStorage = new MyLocalStorage();
        // if(!localStorage){
        //     return new MyLocalStorage();
        // }
        if(!this.localStorage){
            this.localStorage =  new MyLocalStorage();
        }
    return this.localStorage

    }
    public setItem(key:string,value:any){
        localStorage.setItem(key,JSON.stringify(value))
    }
    public getItem(key:string){
        let value = localStorage.getItem(key)
        return value != null ? JSON.parse(value) :null
    }
}