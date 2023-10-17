class Customer {
    private _firstName : String;
    private _lastName : String;
    constructor(fName : String, lName : String) {
        this._firstName = fName;
        this._lastName = lName;
    }

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

let customerA = new Customer("Ankit","Chaudhary");
console.log(`Hi ${customerA.firstName} ${customerA.lastName}`)