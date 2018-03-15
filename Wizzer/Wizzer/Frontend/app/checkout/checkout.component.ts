import { Component } from "@angular/core";
import { ShopService } from '../shop/shopService';
import { Router } from "@angular/router";


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
        this.data.checkout()
            .subscribe(success => {
                if (success) {
                    this.router.navigate(["/"]);
                }
            }, err => this.errorMessage = "Failed to save order");
    }
}