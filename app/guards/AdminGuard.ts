import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const userJSON = localStorage.getItem('user');

        const user = JSON.parse(userJSON);

        if (user.role === 'ADMIN') {
            return true;
        }

        // not admin so redirect to login page with the return url
        this.router.navigate(['dashboard']);
        return false;
    }
}
