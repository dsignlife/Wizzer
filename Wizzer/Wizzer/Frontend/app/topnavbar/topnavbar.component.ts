import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login/loginService";

@Component({
    selector: "topnavbar",
    templateUrl: "topnavbar.component.html"
})

export class Topnavbar {


    constructor(private router: Router, public login: LoginService) {

        $(document).ready(function () {
            var x = 0;
            var s = "";

            var theForm = $("#theForm");
            theForm.hide();

            var button = $("#buyButton");
            button.on("click", function () {
                console.log("Buying Item");
            });

            var productInfo = $(".product-props li");
            productInfo.on("click", function () {
                console.log("clicked one of the items: " + $(this).text());
            });

            var $loginToggle = $("#loginToggle");
            var $popupForm = $(".popup-form");
            var $cartToggle = $("#cartToggle");

            $loginToggle.on("click", function () {
                $popupForm.slideToggle(1000);
            });

            $cartToggle.on("click", function () {
                $popupForm.slideToggle(500);
            });


        });
    }

}