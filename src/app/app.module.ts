import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingModule } from './shopping/shopping.module';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { NotFoundComponent } from './notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';
import { SharedModule } from './shared/shared.module';
import { LoginService } from './services/login.service';
import { LoginGuard } from './services/login.guard';
import { ReversePipe } from './app.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ShoppingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    CartService,
    ProductService,
    LoginService,
    LoginGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
