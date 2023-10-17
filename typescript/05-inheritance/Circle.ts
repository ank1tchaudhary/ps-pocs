import { Shape } from "./Shape";

export class Circle extends Shape{
    constructor(x : number,y : number, private _radius : number){
        super(x,y);
    }

    
    public get radius() : number {
        return this._radius;
    }
    
    
    public set radius(v : number) {
        this. _radius= v;
    }
    
    getInfo(): string {
        return super.getInfo() + `, radius=${this.radius}`;
    }

    calculateArea(): number {
        return 3*this.radius*this.radius;
    }
}