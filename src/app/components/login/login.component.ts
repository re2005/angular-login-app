import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup = new FormGroup({
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.loginForm.valid) {
        }
    }

}
