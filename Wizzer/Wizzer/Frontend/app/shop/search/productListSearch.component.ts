import { Component, Injectable, OnInit } from "@angular/core";
import { ShopService } from '../shopService';
import { Observable } from "rxjs"
import { Product } from "../shared/shopmodels";

@Component({
    selector: "product-list-search",
    templateUrl: "productListSearch.component.html"
})

@Injectable()
export class ProductListSearch implements OnInit {

    public searchCategoryId: number = 0;
    public searchProductName: string;


    constructor(private shopService: ShopService) {

    }

    ngOnInit() {

        this.loadCategories()
            .subscribe(success => {
                if (success) {
                    //
                }
            });


    }

    public search() {

        if (this.searchCategoryId > -1) {
            if (this.searchProductName.length > 0) {
                this.getSearchProductsByNameAndCategoryId(this.searchProductName, this.searchCategoryId)
                    .subscribe(success => {
                        if (success) {
                            this.shopService.products = this.shopService.searchProducts;
                        }
                    });
            } else {
                this.getSearchProductsByCategoryId(this.searchCategoryId).subscribe(success => {
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



    public loadCategories(): Observable<Product[]> {

        return this.shopService.http.get("/api/category/")
            .map((result) =>
                this.shopService.allCategories = result.json()
            );
    }

    public getSearchProductsByCategoryId(id: number): Observable<Product[]> {
        if (id < 0)
            id = 0;
        return this.shopService.http.post("/api/category/" + id, null)
            .map((result) => this.shopService.searchProducts = result.json());

    }

    public getSearchProductsByNameAndCategoryId(name: string, id: number): Observable<Product[]> {
        if (id < 1) {
            return this.shopService.http.post("/api/category/" + name, null).map((result) => this.shopService.searchProducts = result.json());
        }
        else {
            return this.shopService.http.post("/api/category/" + id + "/" + name, null).map((result) => this.shopService.searchProducts = result.json());
        }

    }



}
