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
var order_1 = require("./order/order");
var loginService_1 = require("../.../../login/loginService");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ShopService = /** @class */ (function () {
    function ShopService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.order = new order_1.Order();
        this.products = [];
    }
    Object.defineProperty(ShopService.prototype, "loginRequired", {
        get: function () {
            return this.loginService.loginRequired;
        },
        enumerable: true,
        configurable: true
    });
    ShopService.prototype.login = function (creds) {
        return this.loginService.login(creds);
    };
    ShopService.prototype.addToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId === product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = product.id;
            item.productTitle = product.title;
            item.productDescription = product.description;
            item.categoryId = product.category.categoryId;
            item.categoryName = product.category.categoryName;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    ShopService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    ShopService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, loginService_1.LoginService])
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
//# sourceMappingURL=shopService.js.map