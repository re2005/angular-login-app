import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    loading = false;
    error: string;

    registrationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService,
                private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit() {
        if (this.registrationForm.valid && !this.authService.getUser(this.registrationForm.value.username)) {
            this.loading = true;
            setTimeout(() => {
                this.authService.setUser(this.registrationForm.value);
                this.router.navigate(['login']);
                this.loading = false;
            }, 1500);
        } else {
            this.error = 'This  user is already registered';
        }

    }

}
