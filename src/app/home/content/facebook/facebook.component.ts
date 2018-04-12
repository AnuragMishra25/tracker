import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';

@Component({
    selector: 'facebook-component',
    templateUrl: './facebook.component.html',
    styleUrls: ['./facebook.component.css'],
    providers: [TrackerService]
})
export class FacebookComponent {
    data: any = [];
    constructor(private service: TrackerService) {

    }

    ngOnInit() {
        // this.getData();
        this.service.getFacebookById(1).subscribe(
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

    getData() {
        this.data.push({
            id: 1,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 2,
            medium: '20mdief',
            campaign: 'FB_ADS_3',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 3,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 4,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 5,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 6,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 7,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 8,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 9,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 10,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 11,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 12,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });
        this.data.push({
            id: 13,
            medium: 'dont know',
            campaign: 'FB_ADS',
            term: 'SOMETHING_TERM',
            content: 'this is sparta',
            others: '{{id : block}}'
        });

    }

}
