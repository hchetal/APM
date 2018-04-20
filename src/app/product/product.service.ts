import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class ProductService {

    constructor(private _http: HttpClient) { }

    private _productUrl: string = "./api/products/products.json";
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log("All: " + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){ 
        console.log(err.message)
        return Observable.throw(err.message);
    }
}