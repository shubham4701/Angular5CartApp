import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  cartSize: number;
  cs: CartService;
  ls: LoginService;

  constructor(private csx: CartService,
              private lsx: LoginService,
              private router: Router) {
    this.cs = csx;
    this.ls = lsx;
    this.cartSize = this.cs.getCartItems().length;
  }

  logoutUser() {
    this.ls.logoutUser();
    this.router.navigate(['/login']);
  }

}
