"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shopService_1 = require("../shopService");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductList = /** @class */ (function () {
    function ProductList(shopService, http) {
        this.shopService = shopService;
        this.http = http;
        this.searchCategoryId = 1;
        this.products = shopService.products;
        this.searchProducts = shopService.searchProducts;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.shopService.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.shopService.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.shopService.addToOrder(product);
    };
    ProductList.prototype.search = function () {
        var _this = this;
        this.shopService.getSearchProductsByCategoryId(this.searchCategoryId).subscribe(function (success) {
            if (success) {
                _this.products = _this.shopService.searchProducts;
            }
        });
        ;
    };
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: ["productList.component.css"]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [shopService_1.ShopService, http_1.Http])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=productList.component.js.map