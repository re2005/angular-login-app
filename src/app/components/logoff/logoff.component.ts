import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-logoff',
    templateUrl: './logoff.component.html',
    styleUrls: ['./logoff.component.scss']
})
export class LogoffComponent {

    constructor(private authService: AuthService,
                private router: Router) {
    }


    logoff() {
        this.authService.removeToken();
        this.router.navigate(['login']);
    }
}
