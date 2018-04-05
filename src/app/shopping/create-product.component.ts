import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
    templateUrl: './create-product.component.html'
})
export class CreateProductComponent {
    frmProduct: Product = new Product(null, null, null, null);
    createSuccess = false;
    constructor(private ps: ProductService) {
        this.createSuccess = false;
     }
    addProduct() {
        this.ps.addProduct(this.frmProduct)
        .subscribe(
            (success) => {
                console.log('Add success : ' + JSON.stringify(success));
                this.frmProduct = new Product(null, null, null, null);
                this.createSuccess = true;
            },
            (error) => {
                console.error('Error : ' + JSON.stringify(error));
            }
        );
    }
}
