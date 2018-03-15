import { Component, Injectable} from "@angular/core";

import { LoginService } from "../../login/loginService";
import { ShopService } from "../shopService";
import { Router } from "@angular/router";


@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styleUrls: []
})
@Injectable()
export class Cart
{
    constructor(public login: LoginService, private router : Router, public data : ShopService) {
        
    }

    public onCheckout() {
        if (this.login.loginRequired) {
            this.router.navigate(["login"]);
        } else {
            this.router.navigate(["checkout"]);

        }
    }
}