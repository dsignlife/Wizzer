"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.products = [];
    }
    ProductService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .map(function (result) { return _this.products = result.json(); });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.js.map