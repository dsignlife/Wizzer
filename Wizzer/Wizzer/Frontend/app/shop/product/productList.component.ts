import { Component, Injectable, OnInit } from "@angular/core";
import { ShopService } from '../shopService';
import { Product, Category } from "./product";

import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs"

@Component({
    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls: ["productList.component.css"]
})

@Injectable()
export class ProductList implements OnInit {

    public products: Product[];
    public categoryIds: number[] = [1,2,3,4,5];

    constructor(private shopService: ShopService, private http : Http) {
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

    public getSearchProductsByCategoryId(id: number): Observable<Product[]> {
        return this.http.get("/api/category/2")
            .map((result: Response) => this.products = result.json());
      
    }

    public search() {
        //this.getSearchProductsByCategoryId();
    }

}
