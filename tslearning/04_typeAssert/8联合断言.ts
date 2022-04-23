class Vechile {
    constructor(public brand: string, public vechileNo: string, public days: number, public deposit: number) {
        this.brand = brand;
        this.vechileNo = vechileNo;
        this.days = days;
        this.deposit = deposit
    }
    public calculateRent(){

    }
}


class Bus extends Vechile {
    public seatNum!: number
    constructor(brand: string, vechileNo: string, days: number, deposit: number, seatNum: number) {
        super(brand, vechileNo, days, deposit);
        this.seatNum = seatNum
        if (this.seatNum > 200) {
            throw new Error('座位数不能超过200')
        }
    }
    public getPriceBySeatNum() {
        let rentMoneyByDay: number = 0;// 每天的租金
        if (this.seatNum <= 16) {
            rentMoneyByDay = 800;
        } else if (this.seatNum > 16) {
            rentMoneyByDay = 1600;
        }
        return rentMoneyByDay;
    }

    public calculateRent(){
        super.calculateRent();
        return this.days * this.getPriceBySeatNum();
    }
    public checkIsOverNum(isOverWeight:boolean){
        if(isOverWeight){
            this.total = this.total + 2000
        }
    }

}



class Truck extends Vechile {
    ton!: number
    public seatNum!: number
    constructor(brand: string, type: string, days: number, deposit: number, ton: number) {
        super(brand, type, days, deposit);
        this.ton = ton
        if (this.ton < 300 || this.son > 2000) {
            throw new Error('吨数在300-2000吨之间')
        }
    }
    checkIsOverWeight(isOverWeight: boolean) {
        if (isOverWeight) {
            console.log("超载了");
            this.total = this.total + 2000
        }
    }
    CalRentPrice() {// 计算租赁价格
        let rentMoneyByDay: number = 0;// 每天的租金
        if (this.ton <= 500) {
            rentMoneyByDay = 750;
        } else if (this.ton > 500) {
            rentMoneyByDay = 1350
        }
        return rentMoneyByDay
    }
    public calRent() {
        return this.CalRentPrice() * this.days;
    }
}
class Car extends Vechile {
    ton!: number// 座位数
    public seatNum!: number
    constructor(brand: string, type: string, days: number, deposit: number, ton: number) {
        super(brand, type, days, deposit);
        this.ton = ton
        if (this.ton < 300 || this.son > 2000) {
            throw new Error('吨数在300-2000吨之间')
        }
    }


}


class Customer {
    rentVechile(vechile: Bus | Truck | Car) {
        vechile.calculateRent()
    }
}

