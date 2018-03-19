webpackJsonp(["main"],{

/***/ "./Frontend/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./Frontend/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./Frontend/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<topnavbar></topnavbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./Frontend/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Wizzer';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "app-root",
            template: __webpack_require__("./Frontend/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./Frontend/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference path="../../wwwroot/lib/jquery/dist/jquery.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Modules
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
//Components
var app_component_1 = __webpack_require__("./Frontend/app/app.component.ts");
var topnavbar_component_1 = __webpack_require__("./Frontend/app/topnavbar/topnavbar.component.ts");
var home_component_1 = __webpack_require__("./Frontend/app/home/home.component.ts");
var contact_component_1 = __webpack_require__("./Frontend/app/contact/contact.component.ts");
var login_component_1 = __webpack_require__("./Frontend/app/login/login.component.ts");
var productList_component_1 = __webpack_require__("./Frontend/app/shop/product/productList.component.ts");
var cart_component_1 = __webpack_require__("./Frontend/app/shop/cart/cart.component.ts");
var shop_component_1 = __webpack_require__("./Frontend/app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__("./Frontend/app/shop/checkout/checkout.component.ts");
//DataServices
var loginService_1 = __webpack_require__("./Frontend/app/login/loginService.ts");
var shopService_1 = __webpack_require__("./Frontend/app/shop/shopService.ts");
var routes = [
    { path: "", component: home_component_1.Home },
    { path: "contact", component: contact_component_1.Contact },
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
                contact_component_1.Contact,
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


/***/ }),

/***/ "./Frontend/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <div class=\"well\">\r\n\r\n        <form method=\"post\">\r\n            <div asp-validation-summary=\"ModelOnly\"></div>\r\n            <div class=\"form-group\">\r\n                <label>Your Name:</label>\r\n                <input class=\"form-control\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Email:</label>\r\n                <input type=\"email\" class=\"form-control\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label >Subject:</label>\r\n                <input type=\"text\" class=\"form-control\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Message:</label>\r\n                <textarea rows=\"4\" class=\"form-control\"></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" value=\"Send Message\" class=\"btn btn-primary\"><i class=\"fa fa-envelope\"></i> Send Message</button>\r\n            </div>\r\n            \r\n            <div class=\"text-success\">WHEN DONE</div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./Frontend/app/contact/contact.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Contact = /** @class */ (function () {
    function Contact() {
        this.title = 'Contact';
    }
    Contact.prototype.ngOnInit = function () {
    };
    Contact = __decorate([
        core_1.Component({
            selector: "contact-page",
            template: __webpack_require__("./Frontend/app/contact/contact.component.html"),
            styleUrls: []
        })
    ], Contact);
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ "./Frontend/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".centralize {\r\n    margin: auto;\r\n    top: 20%;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    position: fixed;\r\n}"

/***/ }),

/***/ "./Frontend/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <div class=\"row carousel-holder\">\r\n        <div class=\"col-md-6 col-md-push-3 centralize\">\r\n            <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\r\n                <ol class=\"carousel-indicators\">\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\">\r\n                    </li>\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\">\r\n                    </li>\r\n                    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\">\r\n                    </li>\r\n                </ol>\r\n                <div class=\"carousel-inner\">\r\n                    <div class=\"item active\">\r\n                        <img class=\"slide-image\" src=\"http://ricoh-itpartner.com/ritp/wp-content/uploads/2017/05/web.jpg\" alt=\"\" style=\"width: 900px; height: 540px;\">\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <img class=\"slide-image\" src=\"http://arlaservices.nl/wp-content/uploads/2016/04/A20160401.jpg\" alt=\"\" style=\"width: 900px; height: 540px;\">\r\n                    </div>\r\n                    <div class=\"item\">\r\n                        <img class=\"slide-image\" src=\"https://www.hostslim.eu/blog/wp-content/uploads/2017/07/xr6508_nieuwe-hardwarewebshop-voor-entertainment-industrie@2x.jpg\" alt=\"\" style=\"max-width: 900px; max-height: 540px;\">\r\n                    </div>\r\n                </div>\r\n                <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\r\n                    <span class=\"fa fa-chevron-left\"></span>\r\n                </a>\r\n                <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\r\n                    <span class=\"fa fa-chevron-right\"></span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./Frontend/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Home = /** @class */ (function () {
    function Home() {
        this.title = 'Home';
    }
    Home.prototype.ngOnInit = function () {
    };
    Home = __decorate([
        core_1.Component({
            selector: "home-page",
            template: __webpack_require__("./Frontend/app/home/home.component.html"),
            styles: [__webpack_require__("./Frontend/app/home/home.component.css")]
        })
    ], Home);
    return Home;
}());
exports.Home = Home;


/***/ }),

/***/ "./Frontend/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a href=\"#\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./Frontend/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shopService_1 = __webpack_require__("./Frontend/app/shop/shopService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Login = /** @class */ (function () {
    function Login(shopService, router) {
        this.shopService = shopService;
        this.router = router;
        this.creds = { username: "", password: "" };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.shopService.login(this.creds)
            .subscribe(function (done) {
            if (done) {
                if (_this.shopService.order.items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["shop/checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    Login = __decorate([
        core_1.Component({
            selector: "login",
            template: __webpack_require__("./Frontend/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [shopService_1.ShopService, router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./Frontend/app/login/loginService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.token = "";
        this.loggedIn = false;
    }
    Object.defineProperty(LoginService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.isLoggedIn = function () {
        this.loggedIn = this.token.length > 0;
        return this.loggedIn;
    };
    LoginService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/initializetoken", creds)
            .map(function (response) {
            var tokenInformation = response.json();
            _this.token = tokenInformation.token;
            _this.tokenExpiration = tokenInformation.expiration;
            _this.loggedIn = true;
            return true;
        });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./Frontend/app/shop/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{data.order.items.length}}</div>\r\n<div>Subtotal : {{data.order.subtotal}}</div>\r\n<table class=\"table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n\r\n        </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{o.categoryName}} - {{o.productTitle}}</td>\r\n            <td>{{o.quantity}}</td>\r\n            <td>{{o.unitPrice}}</td>\r\n            <td>{{o.unitPrice * o.quantity}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<!--<a routerLink=\"checkout\" class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\">Checkout</a>-->\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>\r\n\r\n"

/***/ }),

/***/ "./Frontend/app/shop/cart/cart.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shopService_1 = __webpack_require__("./Frontend/app/shop/shopService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
            template: __webpack_require__("./Frontend/app/shop/cart/cart.component.html"),
            styleUrls: []
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, shopService_1.ShopService])
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;


/***/ }),

/***/ "./Frontend/app/shop/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".checkout-thumb { max-width: 100px; }"

/***/ }),

/***/ "./Frontend/app/shop/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\r\n    <div class=\"well\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n            <h3>Confirm Order</h3>\r\n\r\n            <div class=\"container-fluid\">\r\n                <table class=\"table \">\r\n                    <tr>\r\n                        <th>Img</th>\r\n                        <th>Product</th>\r\n                        <th>Quantity</th>\r\n                        <th>unitPrice</th>\r\n                        <th>TotalPrice</th>\r\n                    </tr>\r\n\r\n                    <tr *ngFor=\"let o of shopService.order.items\">\r\n                        <td><img src=\"/img/Category{{ o.categoryId }}.jpg\" class=\"img-thumbnail checkout-thumb\" alt=\"\" /></td>\r\n                        <td>{{ o.categoryId }} - {{ o.productTitle }}</td>\r\n                        <td>{{ o.quantity }}</td>\r\n                        <td>{{ o.unitPrice|currency:'SEK':true }}</td>\r\n                        <td>{{ (o.unitPrice * o.quantity)|currency:'SEK':true }}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n                <table class=\"table table-condensed\">\r\n                    <tr>\r\n                        <td class=\"text-right\">Subtotal</td>\r\n                        <td class=\"text-right\">{{ shopService.order.subtotal|currency:'SEK':true }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-right\">Additional</td>\r\n                        <td class=\"text-right\">$ 0.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-right\">Total:</td>\r\n                        <td class=\"text-right\">{{ shopService.order.subtotal|currency:'SEK':true }}</td>\r\n                    </tr>\r\n                </table>\r\n                <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n                <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./Frontend/app/shop/checkout/checkout.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shopService_1 = __webpack_require__("./Frontend/app/shop/shopService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var order_1 = __webpack_require__("./Frontend/app/shop/order/order.ts");
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
            var a = response.json();
            _this.shopService.order = new order_1.Order();
            return true;
        });
    };
    Checkout = __decorate([
        core_1.Component({
            selector: "checkout",
            template: __webpack_require__("./Frontend/app/shop/checkout/checkout.component.html"),
            styles: [__webpack_require__("./Frontend/app/shop/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [shopService_1.ShopService, router_1.Router])
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;


/***/ }),

/***/ "./Frontend/app/shop/order/order.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__("./node_modules/lodash/lodash.js");
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


/***/ }),

/***/ "./Frontend/app/shop/product/productList.component.css":
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    border: solid 1px black;\r\n    float: left;\r\n    height: 150px;\r\n    margin: 0 2px;\r\n    width: 150px;\r\n}"

/***/ }),

/***/ "./Frontend/app/shop/product/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">\r\n                <h1 class=\"panel-title\">Search for Products</h1>\r\n            </div>\r\n\r\n            <div class=\"panel-body\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"searchCategoryId\">Category ID</label>\r\n                    <select id=\"searchCategoryId\"\r\n                            name=\"searchCategoryId\"\r\n                            class=\"form-control\">\r\n                        <option *ngFor=\"let id of categoryIds\"\r\n                                value=\"{{id}}\">{{id}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"searchProductName\">Product Name</label>\r\n                    <input type=\"text\"\r\n                           id=\"searchProductName\"\r\n                           name=\"searchProductName\"\r\n                           class=\"form-control\" />\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"panel-footer\">\r\n                <button formnovalidate=\"formnovalidate\" class=\"btn btn-sm btn-primary\" (click)=\"search()\"><i class=\"fa fa-search\"></i>&nbsp;Search</button>\r\n                <button formnovalidate=\"formnovalidate\" class=\"btn btn-sm btn-primary\" (click)=\"resetSearch()\"><i class=\"fa fa-share-alt\"></i>&nbsp;Reset</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <img src=\"/img/{{p.category.categoryName}}.jpg\" class=\"img-responsive\" alt=\"\" />\r\n        <h3 style=\"font-size: large; font-weight: bold;\">{{p.title}}</h3>\r\n        <div>\r\n            <strong>Price:</strong> {{p.price}}\r\n        </div>\r\n        <div>\r\n            <strong>Category:</strong> {{p.category.categoryName}}\r\n        </div>\r\n        <div>\r\n            <strong>Description :</strong> {{p.description}}\r\n        </div>\r\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./Frontend/app/shop/product/productList.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var shopService_1 = __webpack_require__("./Frontend/app/shop/shopService.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ProductList = /** @class */ (function () {
    function ProductList(shopService, http) {
        this.shopService = shopService;
        this.http = http;
        this.searchProducts = [];
        this.categoryIds = [1, 2, 3, 4, 5];
        this.products = shopService.products;
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
    ProductList.prototype.getSearchProductsByCategoryId = function (id) {
        //Todo fix post
        var _this = this;
        return this.http.post("/api/category/2", "")
            .map(function (result) { return _this.searchProducts = result.json(); });
    };
    ProductList.prototype.search = function () {
        //this.getSearchProductsByCategoryId();
    };
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            template: __webpack_require__("./Frontend/app/shop/product/productList.component.html"),
            styles: [__webpack_require__("./Frontend/app/shop/product/productList.component.css")]
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [shopService_1.ShopService, http_1.Http])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./Frontend/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row col-md-12\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{title}}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./Frontend/app/shop/shop.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Shop = /** @class */ (function () {
    function Shop() {
    }
    Shop = __decorate([
        core_1.Component({
            selector: "the-shop",
            template: __webpack_require__("./Frontend/app/shop/shop.component.html"),
            styleUrls: []
        })
    ], Shop);
    return Shop;
}());
exports.Shop = Shop;


/***/ }),

/***/ "./Frontend/app/shop/shopService.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var order_1 = __webpack_require__("./Frontend/app/shop/order/order.ts");
var loginService_1 = __webpack_require__("./Frontend/app/login/loginService.ts");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
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


/***/ }),

/***/ "./Frontend/app/topnavbar/topnavbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n    <header class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <div class=\"navbar-brand\"><i class=\"fa fa-shopping-bag\"></i> Wizzer Project</div>\r\n            <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu\">&#9776;</button>\r\n        </div>\r\n\r\n        <div id=\"menu\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\" ng-model=\"login.loggedIn\">\r\n                <li><a routerLink=\"\">Home</a></li>\r\n                <li><a routerLink=\"contact\">Contact</a></li>\r\n                <li><a routerLink=\"checkout\">Checkout</a></li>\r\n                <li><a routerLink=\"shop\">Shop</a></li>\r\n\r\n\r\n                <li ng-show=\"login.loggedIn\"><a routerLink=\"login\">Login</a></li>\r\n                <li ng-show=\"!login.loggedIn\"><a routerLink=\"login\">Logout</a></li>\r\n\r\n\r\n            </ul>\r\n        </div>\r\n    </header>\r\n</div>\r\n"

/***/ }),

/***/ "./Frontend/app/topnavbar/topnavbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var loginService_1 = __webpack_require__("./Frontend/app/login/loginService.ts");
var Topnavbar = /** @class */ (function () {
    function Topnavbar(router, login) {
        this.router = router;
        this.login = login;
        $(document).ready(function () {
            var x = 0;
            var s = "";
            var theForm = $("#theForm");
            theForm.hide();
            var button = $("#buyButton");
            button.on("click", function () {
                console.log("Buying Item");
            });
            var productInfo = $(".product-props li");
            productInfo.on("click", function () {
                console.log("clicked one of the items: " + $(this).text());
            });
            var $loginToggle = $("#loginToggle");
            var $popupForm = $(".popup-form");
            var $cartToggle = $("#cartToggle");
            $loginToggle.on("click", function () {
                $popupForm.slideToggle(1000);
            });
            $cartToggle.on("click", function () {
                $popupForm.slideToggle(500);
            });
        });
    }
    Topnavbar = __decorate([
        core_1.Component({
            selector: "topnavbar",
            template: __webpack_require__("./Frontend/app/topnavbar/topnavbar.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router, loginService_1.LoginService])
    ], Topnavbar);
    return Topnavbar;
}());
exports.Topnavbar = Topnavbar;


/***/ }),

/***/ "./Frontend/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
exports.environment = {
    production: false
};


/***/ }),

/***/ "./Frontend/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./Frontend/app/app.module.ts");
var environment_1 = __webpack_require__("./Frontend/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./Frontend/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map