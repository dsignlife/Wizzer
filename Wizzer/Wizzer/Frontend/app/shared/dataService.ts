import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';
import { ObjectProduct } from "./objectProduct";
import { Order, OrderItem } from "./order";


@Injectable()
export class DataService {

    public order: Order = new Order();
    public products: ObjectProduct[] = [];

    constructor(private http: HttpClient) {

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

    public loadProducts(): Observable<boolean> {
        return this.http.get("/api/products")
            .map((data: ObjectProduct[]) => {
                this.products = data;
                return true;
            });
    }
}
