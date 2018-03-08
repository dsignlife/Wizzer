import { Component } from "@angular/core";

@Component({
    selector: "product-list",
    templateUrl : "productList.component.html",
    styleUrls: []
})

export class ProductList {
    public products = [{
        title: "1p",
        price: 2.2
    }, {
        title: "2p",
        price: 1
    }, {
        title: "3p",
        price: 4

    }];
}