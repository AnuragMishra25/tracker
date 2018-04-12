import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';

@Component({
    selector: 'organic-component',
    templateUrl: './organic.component.html',
    styleUrls: ['./organic.component.css'],
    providers: [TrackerService]
})
export class OrganicComponent {

    data: Array<any>=[];
    constructor(private service: TrackerService) {

    }

    ngOnInit() {
        this.service.getOrganicById(1).subscribe(
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
