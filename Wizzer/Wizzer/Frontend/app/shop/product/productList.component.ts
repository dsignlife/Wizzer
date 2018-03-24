import { Component, Injectable, OnInit } from "@angular/core";
import { ShopService } from '../shopService';
import { Product, Category } from "./product";

import 'rxjs/add/operator/map';


@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

@Injectable()
export class ProductList implements OnInit {

    constructor(private shopService: ShopService) {

    }

    ngOnInit() {

        this.shopService.loadProducts()
            .subscribe(success => {
                if (success) {
                    //
                }
            });


    }

    public addProduct(product: Product) {
        this.shopService.addToOrder(product);
    }

}
