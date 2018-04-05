import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
    templateUrl: './manage.component.html'
})
export class ManageComponent {

    products: Product[];
    frmProduct: Product = new Product(null, null, null, null);
    deleteSuccess = false;
    editModeOn = false;
    saveSuccess = false;

    constructor(private ps: ProductService) {
        ps.getProducts()
            .subscribe(
                (data) => this.products = <Product[]>data,
                (error) => console.error(error)
            );
            this.deleteSuccess = false;
    }

    delete(item: Product) {
        this.ps.removeProduct(item)
        .subscribe(
            (success) => {
                this.products.splice(this.products.findIndex(e => e.id === item.id), 1);
                this.deleteSuccess = true;
            },
            (error) => {
                console.error('Error : ' + JSON.stringify(error));
            }
        );
    }

    editItem(item: Product) {
        this.editModeOn = true;
        Object.assign(this.frmProduct, item);
        this.frmProduct = item;
    }

    update(id) {
        this.ps.updateProduct(this.frmProduct)
        .subscribe(
            (success) => {
                this.saveSuccess = true;
                this.editModeOn = false;
            },
            (error) => {
                console.log('Error : ' + JSON.stringify(error));
            }
        );
    }
}
