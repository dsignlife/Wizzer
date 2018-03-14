﻿import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { ObjectProduct } from "../shared/objectProduct";

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

export class ProductList implements OnInit {

    public products: ObjectProduct[];

    constructor(private data: DataService) {
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

    public addProduct(product: ObjectProduct) {
        this.data.addToOrder(product);
    }

}
