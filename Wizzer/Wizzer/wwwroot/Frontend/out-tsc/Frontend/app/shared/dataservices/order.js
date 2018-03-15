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
var order_1 = require("../viewmodels/order");
var login_1 = require("../dataservices/login");
var http_1 = require("@angular/http");
var OrderService = /** @class */ (function () {
    function OrderService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.order = new order_1.Order();
    }
    Object.defineProperty(OrderService.prototype, "loginRequired", {
        get: function () {
            return this.loginService.token.length == 0 || this.loginService.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/initializetoken", creds)
            .map(function (response) {
            var tokenInformation = response.json();
            _this.loginService.token = tokenInformation.token;
            _this.loginService.tokenExpiration = tokenInformation.expiration;
            return true;
        });
    };
    OrderService.prototype.addToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId === product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new order_1.OrderItem();
            item.productId = product.id;
            item.productCategory = product.category;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    OrderService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new http_1.Headers({ "Authorization": "Bearer " + this.loginService.token })
        })
            .map(function (response) {
            var a = response.json();
            _this.order = new order_1.Order();
            return true;
        });
    };
    OrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, login_1.LoginService])
    ], OrderService);
    return OrderService;
}());
exports.OrderService = OrderService;
//# sourceMappingURL=order.js.map