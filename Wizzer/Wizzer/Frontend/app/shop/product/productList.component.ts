import { Component, Injectable, OnInit } from "@angular/core";
import { ShopService } from '../shopService';
import { Product } from "./product";

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

@Injectable()
export class ProductList implements OnInit {

    public products: Product[];

    constructor(private shopService: ShopService) {
        this.products = shopService.products;
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

}
