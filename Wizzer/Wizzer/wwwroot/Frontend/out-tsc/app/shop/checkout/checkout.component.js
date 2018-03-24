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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var order_1 = require("../order/order");
var Checkout = /** @class */ (function () {
    function Checkout(shopService, router) {
        this.shopService = shopService;
        this.router = router;
    }
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order"; });
    };
    Checkout.prototype.checkout = function () {
        var _this = this;
        if (!this.shopService.order.orderNumber) {
            this.shopService.order.orderNumber = this.shopService.order.orderDate.getFullYear().toString() + this.shopService.order.orderDate.getTime().toString();
        }
        return this.shopService.http.post("/api/orders", this.shopService.order, {
            headers: new http_1.Headers({ "Authorization": "Bearer " + this.shopService.loginService.token })
        })
            .map(function (response) {
            _this.shopService.order = new order_1.Order();
            return true;
        });
    };
    Checkout = __decorate([
        core_1.Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ["checkout.component.css"]
        }),
        __metadata("design:paramtypes", [shopService_1.ShopService, router_1.Router])
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;
//# sourceMappingURL=checkout.component.js.map