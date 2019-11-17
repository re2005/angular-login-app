import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) {
    }

    canActivate(): boolean {
        if (this.auth.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}
