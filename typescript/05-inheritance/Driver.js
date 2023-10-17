"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Ractangle_1 = require("./Ractangle");
let circle = new Circle_1.Circle(2, 3, 3);
let ractangle = new Ractangle_1.Ractangle(2, 3, 2, 2);
console.log(circle, circle.calculateArea());
console.log(ractangle, ractangle.calculateArea());
