import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login/loginService";

@Component({
    selector: "topnavbar",
    templateUrl: "topnavbar.component.html"
})

export class Topnavbar {

    public loggedIn : boolean;

    constructor(private router: Router, public login: LoginService) {
        this.loggedIn = this.login.loggedIn;
    }



}