import { CartItem } from '../models/cart-item.model';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

    private cartItems: CartItem[] = [];

    constructor() {
     }

    addToCart(item: CartItem) {
        let itemExist = false;
        this.cartItems.forEach(element => {
            if (element.name === item.name) {
                element.quantity++;
                itemExist = true;
                return;
            }
        });
        if (!itemExist) {
            this.cartItems.push(item);
        }
    }

    removeFromCart(index) {
        this.cartItems.splice(index, 1);
    }

    getCartItems() {
        return this.cartItems;
    }

    cartValue() {
        let price = 0;
        this.cartItems.forEach(element => {
            price += element.quantity * element.price;
        });
        return price;
    }

    getCartLength() {
        let length = 0;
        this.cartItems.forEach(element => {
            length += element.quantity;
        });
        return length;
    }

}
