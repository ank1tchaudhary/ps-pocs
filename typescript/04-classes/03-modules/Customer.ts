export class Customer {

    constructor(private _firstName : String, private _lastName : String) {}

    get firstName() : String{
        return this._firstName;
    }

    set firstName(value : String){
        this._firstName=value;
    }

    get lastName() : String{
        return this._lastName;
    }

    set lastName(value : String){
        this._lastName=value;
    }

    
}
