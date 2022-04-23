class People {
    public name !: string
    public eat() {
        console.log("People类中的eat方法")
    }
}

class AmericanPeople extends People {
    public phone!: string
    public eat() {
        console.log("AmericanPeople类中的吃饭方法：用叉子吃饭");
    }
}

class ChinesePeople extends People {
    public eat() {
        console.log("ChinesePeople类中的吃饭方法：用筷子吃饭");
    }
}

class TuZhuPeople extends People {
    public eat() {
        console.log("TuZhuPeople类中的吃饭方法：用手抓着吃饭");
    }
}

// 父类的对象变量可以接受任何一个子类的对象，
let people1: People = new AmericanPeople();
people1.eat();

let people2: People = new ChinesePeople();
people2.eat();

let people3: People = new TuZhuPeople();
people3.eat();
