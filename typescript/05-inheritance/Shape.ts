export abstract class Shape{
    constructor(private _x : number,private _y : number){}

    get x():number{
        return this._x;
    }

    set x(val : number){
        this._x=val;
    }

    get y():number{
        return this._y;
    }

    set y(val : number){
        this._y=val;
    }

    getInfo():string{
        return `x=${this.x}, y=${this.y}`;
    }

    abstract calculateArea() : number;
}