import { Injectable } from "@angular/core";

import { Order, OrderItem } from "./order/order";
import { Product, Category } from "./product/product";

import { LoginService } from "../.../../login/loginService";
import { Observable } from "rxjs"
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {

    public allProducts: Product[] = [];
    public products: Product[] = [];

    public allCategories : Category[] = [];
    public searchProducts: Product[] = [];

    public order: Order = new Order();

    constructor(public http: Http, public loginService: LoginService) {

    }

    ///Product List

    public loadProducts(): Observable<Product[]> {

        return this.http.get("/api/products")
            .map((result: Response) =>
                this.products = this.allProducts = result.json()
            );
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



    ///Login

    public get loginRequired(): boolean {
        return this.loginService.loginRequired;
    }

    public login(creds) {
        return this.loginService.login(creds);
    }


    ///Searching

    public loadCategories(): Observable<Product[]> {

        return this.http.get("/api/category/")
            .map((result: Response) =>
                this.allCategories = result.json()
            );
    }

    public getSearchProductsByCategoryId(id: number): Observable<Product[]> {
        if (id < 0)
            id = 0;
        return this.http.post("/api/category/" + id, null)
            .map((result: Response) => this.searchProducts = result.json());

    }

    public getSearchProductsByNameAndCategoryId(name: string, id: number): Observable<Product[]> {
        if (id < 1) {
            return this.http.post("/api/category/" + name, null).map((result: Response) => this.searchProducts = result.json());
        }
        else {
            return this.http.post("/api/category/" + id + "/" + name, null).map((result: Response) => this.searchProducts = result.json());
        }

    }

}