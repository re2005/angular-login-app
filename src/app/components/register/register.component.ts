import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registrationForm: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getUsersOb().subscribe(d => console.log(d));
    }

    onSubmit() {
        if (this.registrationForm.valid) {
            this.authService.setUser(this.registrationForm.value);
        }
    }

}
