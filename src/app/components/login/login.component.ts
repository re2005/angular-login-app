import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {IUser} from '../../interfaces/user';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    users: IUser[];
    authInvalid = false;
    userListener: Subscription;

    loginForm: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService,
                public router: Router) {
    }

    ngOnInit() {
        this.userListener = this.authService.getUsersOb().subscribe(d => this.users = d);
    }

    public onSubmit(): void {
        if (this.loginForm.valid) {
            this.authInvalid = !this.authService.isPasswordValid(this.loginForm.value.username, this.loginForm.value.password);
            if (!this.authInvalid) {
                this.authService.setToken(this.loginForm.value.username);
                this.router.navigate(['/']);
            }
        }
    }

    public removeUser(username): void {
        this.authService.removeUser(username);
    }

    ngOnDestroy() {
        this.userListener.unsubscribe();
    }

}
