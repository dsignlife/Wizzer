"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
//Components
var app_component_1 = require("./app.component");
var topnavbar_component_1 = require("./topnavbar/topnavbar.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var productList_component_1 = require("./shop/product/productList.component");
var cart_component_1 = require("./shop/cart/cart.component");
var shop_component_1 = require("./shop/shop.component");
var checkout_component_1 = require("./shop/checkout/checkout.component");
//DataServices
var loginService_1 = require("./login/loginService");
var shopService_1 = require("./shop/shopService");
var routes = [
    { path: "", component: home_component_1.Home },
    { path: "shop", component: shop_component_1.Shop },
    { path: "shop/checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                topnavbar_component_1.Topnavbar,
                home_component_1.Home,
                productList_component_1.ProductList,
                cart_component_1.Cart,
                shop_component_1.Shop,
                checkout_component_1.Checkout,
                login_component_1.Login
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
            ],
            providers: [shopService_1.ShopService, loginService_1.LoginService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map