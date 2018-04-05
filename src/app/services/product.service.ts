
import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

    private products: Product[] = [];
    private restUrl = 'http://localhost:5000/wsproducts';

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(this.restUrl);
    }

    addProduct(product: Product) {
        return this.http.post(this.restUrl, product);
    }

    removeProduct(product: Product) {
        return this.http.delete(this.restUrl + '/' + product.id);
    }

    updateProduct(product: Product) {
        return this.http.put<Product>(this.restUrl + '/' + product.id, product);
    }
}
