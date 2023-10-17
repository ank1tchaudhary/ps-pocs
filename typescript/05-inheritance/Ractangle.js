"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ractangle = void 0;
const Shape_1 = require("./Shape");
class Ractangle extends Shape_1.Shape {
    constructor(x, y, _height, _width) {
        super(x, y);
        this._height = _height;
        this._width = _width;
    }
    get hight() {
        return this._height;
    }
    set height(v) {
        this._height = v;
    }
    get width() {
        return this._width;
    }
    set width(v) {
        this._width = v;
    }
    getInfo() {
        return super.getInfo() + `, height=${this.height}, width=${this.width}`;
    }
    calculateArea() {
        return this._height * this._width;
    }
}
exports.Ractangle = Ractangle;
