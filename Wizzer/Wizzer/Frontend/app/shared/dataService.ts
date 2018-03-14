import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';
import { ObjectProduct } from "./objectProduct";
import { Order, OrderItem } from "./order";


@Injectable()
export class DataService {

    public order: Order = new Order();
    public products: ObjectProduct[] = [];

    private token = "";
    private tokenExpiration: Date;

    constructor(private http: Http) {

    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
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

    public addToOrder(product: ObjectProduct) {

        let item = this.order.items.find(i => i.productId === product.id);
        if (item) {
            item.quantity++;
        } else {

            item = new OrderItem();
            item.productId = product.id;
            item.productCategory = product.category;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);

        }
    }

    public checkout() {

        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }

        return this.http.post("/api/orders", this.order, {
            headers: new Headers({ "Authorization": "Bearer " + this.token })
        })
            .map(response => {
                var a = response.json();
                this.order = new Order();
                return true;
            });
    }

    public loadProducts(): Observable<ObjectProduct[]> {
        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());
    }


}
