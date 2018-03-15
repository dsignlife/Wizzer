import { Component, Injectable } from "@angular/core";

import { ShopService } from "../shopService";
import { Router } from "@angular/router";


@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: []
})
@Injectable()
export class Cart {

    constructor(private router: Router, public data: ShopService) {

    }

    public onCheckout() {
        if (this.data.loginService.isLoggedIn()) {
            this.router.navigate(["shop/checkout"]);
        }

        else {
            this.router.navigate(["login"]);
        }

    }
}