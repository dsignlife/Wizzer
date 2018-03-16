import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class LoginService {

    public token = "";
    public tokenExpiration: Date;
    public loggedIn = false;


    constructor(private http: Http) {

    }


    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }

    public isLoggedIn(): boolean {
        this.loggedIn = this.token.length > 0;
        return this.loggedIn;
    }

    public login(creds) {
        return this.http.post("/account/initializetoken", creds)
            .map(response => {
                var tokenInformation = response.json();
                this.token = tokenInformation.token;
                this.tokenExpiration = tokenInformation.expiration;
                return true;
            });


    }
}