import { Injectable } from "@angular/core";

import { Product, Category, Order, OrderItem  } from "./shared/shopmodels";

import { LoginService } from "../.../../login/loginService";
import { Observable } from "rxjs"
import { Http, Response, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class ShopService {

    public allProducts: Product[] = [];
    public products: Product[] = [];

    public allCategories : Category[] = [];
    public searchProducts: Product[] = [];

    public order: Order = new Order();

    constructor(public http: Http, public loginService: LoginService) {

    }

    //Login

    public get loginRequired(): boolean {
        return this.loginService.loginRequired;
    }

    public login(creds) {
        return this.loginService.login(creds);
    }


}