import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';

@Component({
    selector: 'direct-component',
    templateUrl: './direct.component.html',
    styleUrls: ['./direct.component.css'],
    providers: [TrackerService]
})
export class DirectComponent {
    data: Array<any>=[];
    constructor(private service: TrackerService) {

    }

    ngOnInit() {
        this.getDirectData();
    }

    getDirectData(){
        this.service
        .getDirectByParams({
            currentPage: 1,
            pageSize: 10,
            search: '',
            // order_by: 'medium' + "," + (this.query.orderAscending ? "ASC" : "DESC"),
            sortColumn : 'id' + ',' + 'ASC',
          })
        .subscribe(
        (res) => {
            this.data = [];
          this.data = res.data.rows;
        }, error => console.log("Error occurred"));
    }
}
