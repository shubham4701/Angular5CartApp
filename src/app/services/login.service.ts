import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    private isLoggedIn: boolean;

    constructor() {
        this.isLoggedIn = false;
     }

    validateUser(user: string, password: string): boolean {
        if (user === 'admin') {
            this.isLoggedIn = true;
            return true;
        } else {
            return false;
        }
    }

    getLoginStatus(): boolean {
        return this.isLoggedIn;
    }

    logoutUser() {
        this.isLoggedIn = false;
    }
}
