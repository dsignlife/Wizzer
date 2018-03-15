import { Component } from "@angular/core";
import { LoginService } from "../../login/loginService";
import { Router } from "@angular/router";

@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: []
})

export class Cart
{
    constructor(public data: LoginService, private router : Router) {
        
    }

    public onCheckout() {
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        } else {
            this.router.navigate(["checkout"]);

        }
    }
}