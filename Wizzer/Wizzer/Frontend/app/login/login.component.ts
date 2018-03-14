﻿import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})

export class Login {
    public creds = { username: "", password: "" }
    public errorMessage: string;

    constructor(private data: DataService, private router: Router) {

    }

    public onLogin() {
        this.data.login(this.creds)
            .subscribe(done => {
                if (done) {
                    if (this.data.order.items.length == 0) {
                        this.router.navigate([""]);
                    } else {
                        this.router.navigate(["checkout"]);
                    }
                }
            }, err => this.errorMessage = "Failed to login");
    }
}