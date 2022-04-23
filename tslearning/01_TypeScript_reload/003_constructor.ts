// 计算正方形面积
type type_chartParam = {
    width?:number,
    height?:number,
    radius?:number
}
class Square {
    public width:number;
    public height:number;
    constructor(width:number,height:number)
    constructor(value:type_chartParam)
    constructor(paramObjWidth:any,height:number = 0){
        if(typeof paramObjWidth ==='number'){
            this.width = paramObjWidth
            this.height = height
        }else{
            this.width = paramObjWidth.width
            this.height = paramObjWidth.height
        }
    }
    public getArea():number{
        return this.height * this.width
    }
}
let square1 = new Square(40,50)
console.log(square1.getArea());
let chartParamObj:type_chartParam = {width:40,height:50}
let square2 = new Square(chartParamObj)
console.log(square2.getArea());
