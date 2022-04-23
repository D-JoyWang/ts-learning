"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyLocalStorage = /** @class */ (function () {
    function MyLocalStorage() {
        console.log("这是TS单例设计模式的静态方法的构造器");
    }
    // 提供一个外部访问方法
    // 通过这个方法用来提供外部得到一个对象的方法
    MyLocalStorage.getInstance = function () {
        // 这样写每次调用都会new 不符合单例模式
        // 局部变量每次运行都会被销毁，还是能无数次的被new
        // let localStorage = new MyLocalStorage();
        // if(!localStorage){
        //     return new MyLocalStorage();
        // }
        if (!this.localStorage) {
            this.localStorage = new MyLocalStorage();
        }
        return this.localStorage;
    };
    MyLocalStorage.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    MyLocalStorage.prototype.getItem = function (key) {
        var value = localStorage.getItem(key);
        return value != null ? JSON.parse(value) : null;
    };
    return MyLocalStorage;
}());
exports.default = MyLocalStorage;
