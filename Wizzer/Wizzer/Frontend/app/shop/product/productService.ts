import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';

import { Product } from "./product";

@Injectable()
export class ProductService
{

    public products: Product[] = [];

    constructor(private http: Http) {

    }

    public loadProducts(): Observable<Product[]> {
        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());
    }


}