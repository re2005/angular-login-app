import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {IUser} from '../../interfaces/user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    users: IUser[];
    username = 0;
    authInvalid = false;

    loginForm: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService,
                public router: Router) {
    }

    ngOnInit() {
        this.authService.getUsersOb().subscribe(d => this.users = d);
    }

    public onSubmit(): void {
        if (this.loginForm.valid && this.username !== 0) {
            this.authInvalid = !this.authService.isPasswordValid(this.username, this.loginForm.value.password);
            if (!this.authInvalid) {
                this.authService.setToken(this.username);
                this.router.navigate(['/']);
            }
        }
    }

    public setUsername(username): void {
        this.username = username;
    }

    public removeUser(user): void {
        this.authService.removeUser(user.username);
    }

}
