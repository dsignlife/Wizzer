"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductList = /** @class */ (function () {
    function ProductList() {
        this.product = [{
                title: "1p",
                price: 2.2
            }, {
                title: "2p",
                price: 1
            }, {
                title: "3p",
                price: 4
            }];
    }
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: []
        })
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=productList.component.js.map