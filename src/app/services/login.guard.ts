import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private ls: LoginService, private router: Router) {}
    canActivate(): boolean {
        if (!this.ls.getLoginStatus()) {
            this.router.navigate(['login']);
        }
        return true;
    }
}
