import { NgModule } from '@angular/core';
import { ProductComponent } from './products.component';
import { CartItemsComponent } from './cart-items.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { CreateProductComponent } from './create-product.component';
import { ReversePipe } from '../app.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
    ],
    declarations: [
        ProductComponent,
        CartItemsComponent,
        ManageComponent,
        CreateProductComponent,
        ReversePipe
    ],
    providers: [],
    bootstrap: [ProductComponent],
    exports: [
        ProductComponent,
        CartItemsComponent
    ]
})
export class ShoppingModule { }
