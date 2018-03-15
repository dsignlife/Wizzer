import { Component, OnInit } from "@angular/core";
import { ProductService as productService } from "./productService";
import { Product } from "./product";

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

export class ProductList implements OnInit {

    public products: Product[];

    constructor(private data: productService) {
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

    //public addProduct(product: Product) {
    //    this.data.addToOrder(product);
    //}

}
