/// <reference path="../../wwwroot/lib/jquery/dist/jquery.d.ts" />

//Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


import * as $ from "jquery";

//Components
import { AppComponent } from "./app.component";
import { Topnavbar } from "./topnavbar/topnavbar.component";
import { Home } from "./home/home.component";
import { Contact } from "./contact/contact.component";
import { Login } from "./login/login.component";
import { ProductList } from "./shop/product/productList.component";
import { Cart } from "./shop/cart/cart.component";
import { Shop } from "./shop/shop.component";
import { Checkout } from "./shop/checkout/checkout.component";
//DataServices
import { LoginService } from "./login/loginService";
import { ShopService } from "./shop/shopService";

let routes = [
    { path: "", component: Home },
    { path: "contact", component: Contact },
    { path: "shop", component: Shop },
    { path: "shop/checkout", component: Checkout },
    { path: "login", component: Login }
];

@
NgModule({
    declarations: [
        AppComponent,
        Topnavbar,
        Home,
        Contact,
        ProductList,
        Cart,
        Shop,
        Checkout,
        Login    

    ],
    imports: [
        
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes, { useHash: true, enableTracing: false })
    ],
    providers: [ShopService, LoginService],
    bootstrap: [AppComponent]
})
export class AppModule
{
}