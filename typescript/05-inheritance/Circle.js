"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(x, y, _radius) {
        super(x, y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(v) {
        this._radius = v;
    }
    getInfo() {
        return super.getInfo() + `, radius=${this.radius}`;
    }
    calculateArea() {
        return 3 * this.radius * this.radius;
    }
}
exports.Circle = Circle;
