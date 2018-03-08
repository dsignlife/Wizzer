var StoreCustomer = /** @class */ (function () {
    function StoreCustomer(firstName, lastName) {
        this.visits = 0;
        this.lastName = lastName;
        this.firstName = firstName;
    }
    StoreCustomer.prototype.showName = function () {
        alert("Welcome " + this.firstName + " " + this.lastName);
        return true;
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        set: function (val) {
            this.ourName = val;
        },
        enumerable: true,
        configurable: true
    });
    return StoreCustomer;
}());
//# sourceMappingURL=storecustomer.js.map