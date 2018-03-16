"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var loginService_1 = require("../login/loginService");
var Topnavbar = /** @class */ (function () {
    function Topnavbar(router, login) {
        this.router = router;
        this.login = login;
    }
    Topnavbar = __decorate([
        core_1.Component({
            selector: "topnavbar",
            templateUrl: "topnavbar.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, loginService_1.LoginService])
    ], Topnavbar);
    return Topnavbar;
}());
exports.Topnavbar = Topnavbar;
//# sourceMappingURL=topnavbar.component.js.map