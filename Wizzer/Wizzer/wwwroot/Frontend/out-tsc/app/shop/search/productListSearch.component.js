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
var ProductListSearch = /** @class */ (function () {
    function ProductListSearch(shopService) {
        this.shopService = shopService;
        this.searchCategoryId = 0;
    }
    ProductListSearch.prototype.ngOnInit = function () {
        this.shopService.loadCategories()
            .subscribe(function (success) {
            if (success) {
                //
            }
        });
    };
    ProductListSearch.prototype.search = function () {
        var _this = this;
        if (this.searchCategoryId > -1) {
            if (this.searchProductName.length > 0) {
                this.shopService.getSearchProductsByNameAndCategoryId(this.searchProductName, this.searchCategoryId)
                    .subscribe(function (success) {
                    if (success) {
                        _this.shopService.products = _this.shopService.searchProducts;
                    }
                });
            }
            else {
                this.shopService.getSearchProductsByCategoryId(this.searchCategoryId).subscribe(function (success) {
                    if (success) {
                        _this.shopService.products = _this.shopService.searchProducts;
                    }
                });
            }
        }
        else {
            //error message
        }
    };
    ProductListSearch.prototype.resetSearch = function () {
        this.shopService.products = this.shopService.allProducts;
    };
    ProductListSearch = __decorate([
        core_1.Component({
            selector: "product-list-search",
            templateUrl: "productListSearch.component.html"
        }),
        core_1.Injectable(),
        __metadata("design:paramtypes", [shopService_1.ShopService])
    ], ProductListSearch);
    return ProductListSearch;
}());
exports.ProductListSearch = ProductListSearch;
//# sourceMappingURL=productListSearch.component.js.map