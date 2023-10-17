var Customer = /** @class */ (function () {
    function Customer(fName, lName) {
        this._firstName = fName;
        this._lastName = lName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customerA = new Customer("Ankit", "Chaudhary");
console.log("Hi ".concat(customerA.firstName, " ").concat(customerA.lastName));
