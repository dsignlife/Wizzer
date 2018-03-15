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

    constructor(private data: ShopService) {
        this.products = data.products;
    }

    ngOnInit() {
        this.data.loadProducts()
            .subscribe(success => {
                if (success) {
                    this.products = this.data.products;
                }
            });
    }

    public addProduct(product: Product) {
        this.data.addToOrder(product);
    }

}
