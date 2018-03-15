import { Injectable } from "@angular/core";

import { Order, OrderItem } from "./order/order";
import { Product } from "./product/product";

import { LoginService } from "../.../../login/loginService";

import { Http, Response, Headers } from "@angular/http";

@Injectable()
export class ShopService {

    public order: Order = new Order();

    constructor(private http: Http, public loginService: LoginService) {

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
            item.productCategory = product.category;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);

        }
    }

}