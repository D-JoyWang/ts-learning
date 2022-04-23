"use strict";
var Square = /** @class */ (function () {
    function Square(paramObjWidth, height) {
        if (height === void 0) { height = 0; }
        if (typeof paramObjWidth === 'number') {
            this.width = paramObjWidth;
            this.height = height;
        }
        else {
            this.width = paramObjWidth.width;
            this.height = paramObjWidth.height;
        }
    }
    Square.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Square;
}());
var square1 = new Square(40, 50);
console.log(square1.getArea());
var chartParamObj = { width: 40, height: 50 };
var square2 = new Square(chartParamObj);
console.log(square2.getArea());
