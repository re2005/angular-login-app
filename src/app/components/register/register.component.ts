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

    registrationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService,
                public router: Router) {
    }

    ngOnInit() {
        this.authService.getUsersOb().subscribe(d => console.log(d));
    }

    onSubmit() {
        if (this.registrationForm.valid) {
            this.loading = true;
            setTimeout(() => {
                this.authService.setUser(this.registrationForm.value);
                this.router.navigate(['login']);
                this.loading = false;
            }, 1500);
        }

    }

}
