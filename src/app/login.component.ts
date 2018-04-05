import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    title = 'Log In';
    hasSignUp = true;
    invalidCredentials = false;

    constructor(private ls: LoginService, private router: Router) { }

    doLogin($event) {
        if (this.ls.validateUser($event.user, $event.password)) {
            this.router.navigate(['/manage']);
        } else {
            this.invalidCredentials = true;
        }
    }
}
