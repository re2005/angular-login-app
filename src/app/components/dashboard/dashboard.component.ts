import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {IUser} from '../../interfaces/user';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user: IUser;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.user = this.authService.getCurrentUser();
    }

}
