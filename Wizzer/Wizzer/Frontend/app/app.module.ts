import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ProductList } from './shop/product/productList.component';
import { Cart } from './shop/cart/cart.component';
import { Shop } from './shop/shop.component';

import { Checkout } from "./checkout/checkout.component";
import { Login } from './login/login.component';

import { ShopService } from './shop/shopService';



import { RouterModule } from "@angular/router";

import { FormsModule } from '@angular/forms';

let routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout },
    { path: "login", component: Login }

];

@
    NgModule({
        declarations: [
            AppComponent,

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
    providers: [ShopService],
        bootstrap: [AppComponent]
    })

export class AppModule { }
