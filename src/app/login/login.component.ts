import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string;
    password: string;

    constructor(private router: Router) {
        
    }

    login() {
        this.router.navigateByUrl('/Home');
    }
}
