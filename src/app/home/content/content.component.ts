import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content-component',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {

    currentTab: 'General';

    constructor() {

    }

    signout() {
        console.log('signout');
    }

    onTabClick(tab) {
        this.currentTab = tab;
    }
}
