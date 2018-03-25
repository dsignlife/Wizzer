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
var shopmodels_1 = require("./shared/shopmodels");
var loginService_1 = require("../.../../login/loginService");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ShopService = /** @class */ (function () {
    function ShopService(http, loginService) {
        this.http = http;
        this.loginService = loginService;
        this.allProducts = [];
        this.products = [];
        this.allCategories = [];
        this.searchProducts = [];
        this.order = new shopmodels_1.Order();
    }
    Object.defineProperty(ShopService.prototype, "loginRequired", {
        //Login
        get: function () {
            return this.loginService.loginRequired;
        },
        enumerable: true,
        configurable: true
    });
    ShopService.prototype.login = function (creds) {
        return this.loginService.login(creds);
    };
    ShopService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, loginService_1.LoginService])
    ], ShopService);
    return ShopService;
}());
exports.ShopService = ShopService;
//# sourceMappingURL=shopService.js.map