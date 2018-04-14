import { Component, OnInit } from '@angular/core';
import { Colors } from '../../helpers/bootstrapColors';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'content-component',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {

    currentTab = 'General';
    chartType = 'horizontalBar';
    data: any;
    options: any;

    constructor() {
        
    }

    signout() {
        console.log('signout');
    }

    onTabClick(tab) {
        this.currentTab = tab;
    }


}
