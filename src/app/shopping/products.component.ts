import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/cart-item.model';

@Component({
    selector: 'app-shopping-products',
    templateUrl: './products.component.html'
})
export class ProductComponent {

    products: Product[] = [];

    constructor (private cs: CartService, private ps: ProductService) {
        // this.products = ps.getProducts();
        ps.getProducts()
        .subscribe(
            (data) => this.products = <Product[]>data,
            (error) => console.error(error)
        );
    }

    addToCart(item: Product) {
        this.cs.addToCart(new CartItem(item.name, item.price, 1));
    }

}
