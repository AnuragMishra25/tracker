import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    email: string;
    password: string;

    constructor() {

    }
}
