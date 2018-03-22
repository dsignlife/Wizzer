import { Component, Injectable, OnInit } from "@angular/core";
import { ShopService } from '../shopService';
import { Product, Category } from "./product";

import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';


@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

@Injectable()
export class ProductList implements OnInit {

    public products: Product[];
    public searchProducts: Product[];


    public searchCategoryId: number = 1;
    public searchProductName: string;

    constructor(private shopService: ShopService, private http: Http) {
        this.products = shopService.products;
        this.searchProducts = shopService.searchProducts;
    }

    ngOnInit() {

        this.shopService.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.shopService.products;
                }
            });

    }

    public addProduct(product: Product) {
        this.shopService.addToOrder(product);
    }

    public search() {

        this.shopService.getSearchProductsByCategoryId(this.searchCategoryId).subscribe(success => {
            if (success) {
                this.products = this.shopService.searchProducts;
            }
        });;



    }

}
