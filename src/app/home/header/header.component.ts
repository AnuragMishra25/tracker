import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    constructor(private router: Router) {

    }

    signout(){
        console.log('signout');
        this.router.navigateByUrl('/');
    }
}
