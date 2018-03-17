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

    constructor(public shopService: ShopService, private router: Router) {
                  
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

        if (!this.shopService.order.orderNumber) {
            this.shopService.order.orderNumber = this.shopService.order.orderDate.getFullYear().toString() + this.shopService.order.orderDate.getTime().toString();
        }

        return this.shopService.http.post("/api/orders", this.shopService.order, {
            headers: new Headers({ "Authorization": "Bearer " + this.shopService.loginService.token })
            })
            .map(response => {
                var a = response.json();
                this.shopService.order = new Order();
                return true;
            });
    }
}