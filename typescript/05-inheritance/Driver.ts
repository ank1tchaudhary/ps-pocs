import { Circle } from "./Circle";
import { Ractangle } from "./Ractangle";


let circle = new Circle(2,3,3);
let ractangle = new Ractangle(2,3,2,2);
console.log(circle, circle.calculateArea())
console.log(ractangle, ractangle.calculateArea())