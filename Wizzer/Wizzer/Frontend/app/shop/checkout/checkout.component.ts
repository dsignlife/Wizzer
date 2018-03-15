import { Component } from "@angular/core";
import { ShopService } from '../shopService';
import { Router } from "@angular/router";
import { Headers } from "@angular/http";
import { Order } from "../order/order";



@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class Checkout {

    public errorMessage: string;

    constructor(public data: ShopService, private router: Router) {
                  
    }

    public onCheckout() {
        this.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }

    public checkout() {

        if (!this.data.order.orderNumber) {
            this.data.order.orderNumber = this.data.order.orderDate.getFullYear().toString() + this.data.order.orderDate.getTime().toString();
        }

        return this.data.http.post("/api/orders", this.data.order, {
            headers: new Headers({ "Authorization": "Bearer " + this.data.loginService.token })
            })
            .map(response => {
                var a = response.json();
                this.data.order = new Order();
                return true;
            });
    }
}