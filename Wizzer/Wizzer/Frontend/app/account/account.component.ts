import { Component, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login/loginService";

@Component({
    selector: "account",
    templateUrl: "account.component.html"
})

@Injectable()
export class Account {

    constructor(private router: Router, public login : LoginService) {
        
    }


}