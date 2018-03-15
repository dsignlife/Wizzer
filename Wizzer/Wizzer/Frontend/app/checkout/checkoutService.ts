import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import { Order } from "../shop/order/order";

import { ShopService } from '../shop/shopService';
import { LoginService } from "../.../../login/loginService";

@Injectable()
export class CheckoutService {


    constructor(private http: Http, public shopService: ShopService, public loginService: LoginService) {

    }

    public checkout() {

        if (!this.shopService.order.orderNumber) {
            this.shopService.order.orderNumber = this.shopService.order.orderDate.getFullYear().toString() + this.shopService.order.orderDate.getTime().toString();
        }

        return this.http.post("/api/orders", this.shopService.order, {
            headers: new Headers({ "Authorization": "Bearer " + this.loginService.token })
        })
            .map(response => {
                this.shopService.order = new Order();
                return true;
            });
    }
}