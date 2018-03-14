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

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'Product List';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'the-shop',
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./Frontend/app/app.component.ts");
var productList_component_1 = __webpack_require__("./Frontend/app/shop/productList.component.ts");
var cart_component_1 = __webpack_require__("./Frontend/app/shop/cart.component.ts");
var shop_component_1 = __webpack_require__("./Frontend/app/shop/shop.component.ts");
var checkout_component_1 = __webpack_require__("./Frontend/app/checkout/checkout.component.ts");
var login_component_1 = __webpack_require__("./Frontend/app/login/login.component.ts");
var dataService_1 = __webpack_require__("./Frontend/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var routes = [
    { path: "", component: shop_component_1.Shop },
    { path: "checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
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
            providers: [dataService_1.DataService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./Frontend/app/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n"

/***/ }),

/***/ "./Frontend/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\r\n    <div class=\"well\">\r\n        <div class=\"row\">\r\n            <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n            <h3>Confirm Order</h3>\r\n            <table class=\"table table-bordered table-hover\">\r\n                <tr *ngFor=\"let o of data.order.items\">\r\n                    <td><img src=\"/img/{{ o.productCategory }}.jpg\" class=\"img-thumbnail checkout-thumb\" alt=\"\" /></td>\r\n                    <td>{{ o.productCategory }} - {{ o.productTitle }}</td>\r\n                    <td>{{ o.quantity }}</td>\r\n                    <td>{{ o.unitPrice|currency:'SEK':true }}</td>\r\n                    <td>{{ (o.unitPrice * o.quantity)|currency:'SEK':true }}</td>\r\n                </tr>\r\n            </table>\r\n            <div class=\"col-md-4 col-md-offset-8 text-right\">\r\n                <table class=\"table table-condensed\">\r\n                    <tr>\r\n                        <td class=\"text-right\">Subtotal</td>\r\n                        <td class=\"text-right\">{{ data.order.subtotal|currency:'SEK':true }}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-right\">Additional</td>\r\n                        <td class=\"text-right\">$ 0.00</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td class=\"text-right\">Total:</td>\r\n                        <td class=\"text-right\">{{ data.order.subtotal|currency:'SEK':true }}</td>\r\n                    </tr>\r\n                </table>\r\n                <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\r\n                <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./Frontend/app/checkout/checkout.component.ts":
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
var dataService_1 = __webpack_require__("./Frontend/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Checkout = /** @class */ (function () {
    function Checkout(data, router) {
        this.data = data;
        this.router = router;
    }
    Checkout.prototype.onCheckout = function () {
        var _this = this;
        this.data.checkout()
            .subscribe(function (success) {
            if (success) {
                _this.router.navigate(["/"]);
            }
        }, function (err) { return _this.errorMessage = "Failed to save order"; });
    };
    Checkout = __decorate([
        core_1.Component({
            selector: "checkout",
            template: __webpack_require__("./Frontend/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("./Frontend/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;


/***/ }),

/***/ "./Frontend/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"creds.username\" #username=\"ngModel\" required />\r\n                <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required!</div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"creds.password\" #password=\"ngModel\" required/>\r\n                <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"theForm.invalid\" />\r\n                <a href=\"#\" class=\"btn btn-default\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

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
var dataService_1 = __webpack_require__("./Frontend/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.creds = { username: "", password: "" };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (done) {
            if (done) {
                if (_this.data.order.items.length == 0) {
                    _this.router.navigate([""]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
    };
    Login = __decorate([
        core_1.Component({
            selector: "login",
            template: __webpack_require__("./Frontend/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./Frontend/app/shared/dataService.ts":
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
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var order_1 = __webpack_require__("./Frontend/app/shared/order.ts");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.order = new order_1.Order();
        this.products = [];
        this.token = "";
    }
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/initializetoken", creds)
            .map(function (response) {
            var tokenInformation = response.json();
            _this.token = tokenInformation.token;
            _this.tokenExpiration = tokenInformation.expiration;
            return true;
        });
    };
    DataService.prototype.addToOrder = function (product) {
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
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new http_1.Headers({ "Authorization": "Bearer " + this.token })
        })
            .map(function (response) {
            var a = response.json();
            _this.order = new order_1.Order();
            return true;
        });
    };
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "./Frontend/app/shared/order.ts":
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

/***/ "./Frontend/app/shop/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Shopping Cart</h3>\r\n<div>#/Items: {{data.order.items.length}}</div>\r\n<div>Subtotal : {{data.order.subtotal}}</div>\r\n<table class=\"table-condensed table-hover\">\r\n    <thead>\r\n        <tr>\r\n            <td>Product</td>\r\n            <td>#</td>\r\n            <td>$</td>\r\n            <td>Total</td>\r\n\r\n        </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n        <tr *ngFor=\"let o of data.order.items\">\r\n            <td>{{o.productCategory}} - {{o.productTitle}}</td>\r\n            <td>{{o.quantity}}</td>\r\n            <td>{{o.unitPrice}}</td>\r\n            <td>{{o.unitPrice * o.quantity}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<!--<a routerLink=\"checkout\" class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\">Checkout</a>-->\r\n<button class=\"btn btn-success\" *ngIf=\"data.order.items.length > 0\" (click)=\"onCheckout()\">Checkout</button>\r\n\r\n"

/***/ }),

/***/ "./Frontend/app/shop/cart.component.ts":
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
var dataService_1 = __webpack_require__("./Frontend/app/shared/dataService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Cart = /** @class */ (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    };
    Cart = __decorate([
        core_1.Component({
            selector: "the-cart",
            template: __webpack_require__("./Frontend/app/shop/cart.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;


/***/ }),

/***/ "./Frontend/app/shop/productList.component.css":
/***/ (function(module, exports) {

module.exports = ".product-info img {\r\n    width: 150px;\r\n    height:  150px;\r\n    float: left;\r\n    margin: 0 2px;\r\n    border: solid 1px black;\r\n}\r\n"

/***/ }),

/***/ "./Frontend/app/shop/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    \r\n    <div class=\"product-info col-md-4 well well-sm\" *ngFor=\"let p of products\">\r\n        <img src=\"/img/{{p.category}}.jpg\" class=\"img-responsive\" alt=\"\" />\r\n        <h3 style=\"font-size: large; font-weight: bold;\">{{p.title}}</h3>\r\n        <div><strong>Price:</strong> {{p.price}}</div>\r\n        <div><strong>Category:</strong> {{p.category}}</div>\r\n        <div><strong>Description :</strong> {{p.description}}</div>        \r\n        <button id=\"buyButton\" class=\"btn btn-success btn-sm pull-right\" (click)=\"addProduct(p)\">Buy</button>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./Frontend/app/shop/productList.component.ts":
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
var dataService_1 = __webpack_require__("./Frontend/app/shared/dataService.ts");
var ProductList = /** @class */ (function () {
    function ProductList(data) {
        this.data = data;
        this.products = data.products;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadProducts()
            .subscribe(function (success) {
            if (success) {
                _this.products = _this.data.products;
            }
        });
    };
    ProductList.prototype.addProduct = function (product) {
        this.data.addToOrder(product);
    };
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            template: __webpack_require__("./Frontend/app/shop/productList.component.html"),
            styles: [__webpack_require__("./Frontend/app/shop/productList.component.css")]
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;


/***/ }),

/***/ "./Frontend/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <h3>{{title}}</h3>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <div class=\"well well-sm\">\r\n            <the-cart></the-cart>\r\n        </div>\r\n    </div>\r\n</div>"

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

/***/ "./Frontend/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
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
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./Frontend/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map