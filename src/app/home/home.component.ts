import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    selectedDomain: string;

    constructor(private router: Router) {

    }

    signout(){
        console.log('signout');
        this.router.navigateByUrl('/');
    }
}
