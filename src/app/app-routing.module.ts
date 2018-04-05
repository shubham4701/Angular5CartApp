import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './shopping/products.component';
import { CartItemsComponent } from './shopping/cart-items.component';
import { NotFoundComponent } from './notfound.component';
import { ManageComponent } from './shopping/manage.component';
import { CreateProductComponent } from './shopping/create-product.component';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [
  {path: '', component: ProductComponent, pathMatch: 'full'},
  {path: 'mycart', component: CartItemsComponent},
  {path: 'products', component: ProductComponent},
  {path: 'manage', component: ManageComponent, canActivate: [LoginGuard]},
  {path: 'new', component: CreateProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
