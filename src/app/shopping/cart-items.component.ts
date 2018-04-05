import { Component } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-cart-items',
    templateUrl: './cart-items.component.html'
})
export class CartItemsComponent {
    cartItems: Array<CartItem> = [];
    cs: CartService;
    constructor(private csx: CartService) {
        this.cs = csx;
        this.cartItems = this.cs.getCartItems();
     }

     removeFromCart(index) {
         this.cs.removeFromCart(index);
     }

}
