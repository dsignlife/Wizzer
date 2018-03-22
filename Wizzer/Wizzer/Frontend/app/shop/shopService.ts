import { Injectable } from "@angular/core";

import { Order, OrderItem } from "./order/order";
import { Product } from "./product/product";

import { LoginService } from "../.../../login/loginService";
import { Observable } from "rxjs"
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {

    public order: Order = new Order();
    public products: Product[] = [];

    public searchProducts: Product[] = [];
    public categoryIds: number[] = [1, 2, 3, 4, 5];


    constructor(public http: Http, public loginService: LoginService) {

    }

    public get loginRequired(): boolean {
        return this.loginService.loginRequired;
    }

    public login(creds) {
        return this.loginService.login(creds);
    }

    public addToOrder(product: Product) {

        let item = this.order.items.find(i => i.productId === product.id);
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
            this.order.items.push(item);

        }
    }

    public getSearchProductsByCategoryId(id: number): Observable<Product[]> {

        //Todo fix post
        return this.http.post("/api/category/"+id, null)
            .map((result: Response) => this.searchProducts = result.json());

    }

    public getSearchProductsByNameAndCategoryId(name : string, id?: number): Observable<Product[]> {

        //Todo fix post
        return this.http.post("/api/category/" + name, null)
            .map((result: Response) => this.searchProducts = result.json());

    }

    public loadProducts(): Observable<Product[]> {

        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());
    }

}