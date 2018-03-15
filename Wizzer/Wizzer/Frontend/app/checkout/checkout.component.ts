import { Component } from "@angular/core";
import { CheckoutService } from './checkoutService';

import { Router } from "@angular/router";


@Component({
    selector: "checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class Checkout {

    public errorMessage: string;

    constructor(public checkoutService: CheckoutService, private router: Router) {

    }

    public onCheckout() {
        this.checkoutService.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }
}