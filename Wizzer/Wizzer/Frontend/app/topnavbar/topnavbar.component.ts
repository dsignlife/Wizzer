import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login/loginService";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs"

@Component({
    selector: "topnavbar",
    templateUrl: "topnavbar.component.html"
})

export class Topnavbar {


    constructor(private router: Router, public login: LoginService) {
    }

}