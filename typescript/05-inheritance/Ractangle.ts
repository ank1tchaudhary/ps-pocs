import { Shape } from "./Shape";

export class Ractangle extends Shape{
    constructor(x : number,y : number, private _height : number, private _width : number){
        super(x,y);
    }

    
    public get hight() : number {
        return this._height;
    }
    
    
    public set height(v : number) {
        this. _height= v;
    }

    public get width() : number {
        return this._width;
    }
    
    
    public set width(v : number) {
        this. _width= v;
    }

    getInfo(): string {
        return super.getInfo() + `, height=${this.height}, width=${this.width}`;
    }

    calculateArea(): number {
        return this._height*this._width;
    }
    
}