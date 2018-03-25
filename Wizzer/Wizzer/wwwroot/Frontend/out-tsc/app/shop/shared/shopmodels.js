"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
exports.Order = Order;
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
exports.OrderItem = OrderItem;
//# sourceMappingURL=shopmodels.js.map