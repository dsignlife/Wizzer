import { Component, Injectable } from "@angular/core";
import { ShopService } from '../shopService';
import { Product, Category } from "../product/product";
import { ProductList } from "../product/productList.component";


@Component({
    selector: "product-list-search",
    templateUrl: "productListSearch.component.html"
})

@Injectable()
export class ProductListSearch {

    public categoryIds: number[] = [0, 1, 2, 3, 4, 5];
    public searchCategoryId: number = 0;
    public searchProductName: string;


    constructor(private shopService: ShopService) {

    }

    public search() {

        if (this.searchCategoryId > -1) {
            if (this.searchProductName.length > 0) {
                this.shopService.getSearchProductsByNameAndCategoryId(this.searchProductName, this.searchCategoryId)
                    .subscribe(success => {
                        if (success) {
                            this.shopService.products = this.shopService.searchProducts;
                        }
                    });
            } else {
                this.shopService.getSearchProductsByCategoryId(this.searchCategoryId).subscribe(success => {
                    if (success) {
                        this.shopService.products = this.shopService.searchProducts;

                    }
                });
            }

        }

        else {
            //error message
        }

    }

    public resetSearch() {
        this.shopService.products = this.shopService.allProducts;
    }

}
