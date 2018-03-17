import { Component } from "@angular/core";
import { ShopService } from '../shop/shopService';
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})

export class Login {
    public creds = { username: "", password: "" }
    public errorMessage: string;

    constructor(private shopService: ShopService, private router: Router) {

    }

    public onLogin() {
        this.shopService.login(this.creds)
            .subscribe(done => {
                if (done) {
                    if (this.shopService.order.items.length == 0) {
                        this.router.navigate([""]);
                    } else {
                        this.router.navigate(["shop/checkout"]);
                    }
                }
            }, err => this.errorMessage = "Failed to login");
    }
}