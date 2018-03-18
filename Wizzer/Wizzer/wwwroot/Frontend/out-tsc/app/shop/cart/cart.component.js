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
var Cart = /** @class */ (function () {
    function Cart(router, data) {
        this.router = router;
        this.data = data;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginService.loggedIn === true)
            this.router.navigate(["shop/checkout"]);
        else
            this.router.navigate(["login"]);
    };
    Cart = __decorate([
        core_1.Component({
            selector: "the-cart",
            templateUrl: "cart.component.html",
            styleUrls: []
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, shopService_1.ShopService])
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.component.js.map