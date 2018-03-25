import { Component, Injectable, OnInit } from "@angular/core";
import { ShopService } from '../shopService';
import { Product, OrderItem } from "../shared/shopmodels";
import { Observable } from "rxjs"
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

        this.loadProducts()
            .subscribe(success => {
                if (success) {
                    //
                }
            });


    }

    public loadProducts(): Observable<Product[]> {

        return this.shopService.http.get("/api/products")
            .map(result =>
                this.shopService.products = this.shopService.allProducts = result.json()
            );
    }

    public addToOrder(product: Product) {

        let item = this.shopService.order.items.find(i => i.productId === product.id);
        if (item) {
            item.quantity++;
        } else {
            
            item = new OrderItem();
            item.productId = product.id;
            item.productTitle = product.title;
            item.productDescription = product.description;

            item.categoryId = product.category.categoryId;
            item.categoryName = product.category.categoryName;

            item.unitPrice = product.price;
            item.quantity = 1;
            this.shopService.order.items.push(item);

        }
    }



}
