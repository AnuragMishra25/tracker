import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';

@Component({
    selector: 'google-component',
    templateUrl: './google.component.html',
    styleUrls: ['./google.component.css'],
    providers: [TrackerService]
})
export class GoogleComponent {
    data: Array<any>=[];

    constructor(private service: TrackerService) {

    }

    ngOnInit() {
        this.service.getGoogleById(1).subscribe(
            res=>{
                this.data = [];
                this.data.push(res.data);
                console.log("Response came");
            },
            err=>{
                console.log("Error occurred");
            }
        )
    }

}
