import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';
import { Page, PagedData } from '../../../helpers/PageClass';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Colors } from '../../../helpers/bootstrapColors';

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [TrackerService]
})
export class DashboardComponent {

    chartType = 'horizontalBar';
    data: any;
    options: any;
    visitors: string;
    conversions: string;
    firstSourceConversions: string;
    ratio: string;
    loading = false;

    constructor(public toastr: ToastsManager, vcr: ViewContainerRef){
        this.toastr.setRootViewContainerRef(vcr);
        this.chartLoad();
    }

    ngOnInit(){
        this.getNumbers();
    }
    
    chartLoad() {
        let stack = 'stack 0';
        // this.toastr.success('Welcome back Anurag, Hope you having a great day!','Success!');
        this.toastr.info('Welcome back Anurag, Hope you having a great day!');
        this.data = {
            labels: ["First Source", "Second Source", "Third Source", "Fourth Source", "Fifth Source", "Other Sources"],
            datasets: [{
                label: 'Facebook',
                stack: stack,
                data: [15, 10, 9, 7, 6, 3],
                // backgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: Colors.primary,
                borderColor: Colors.primary,
                borderWidth: 1
            }, {
                label: 'Google',
                stack: stack,
                data: [18, 15, 11, 8, 11, 16],
                backgroundColor: Colors.danger,
                borderColor: Colors.danger,
                borderWidth: 1
            }, {
                label: 'Organic',
                stack: stack,
                data: [23, 20, 18, 13, 16, 21],
                backgroundColor: Colors.warning,
                borderColor: Colors.warning,
                borderWidth: 1
            }, {
                label: 'Direct',
                stack: stack,
                data: [17, 12, 7, 15, 18, 23],
                backgroundColor: Colors.success,
                borderColor: Colors.success,
                borderWidth: 1
            }, {
                label: 'Emails',
                stack: stack,
                data: [8, 3, 5, 8, 11, 16],
                backgroundColor: Colors.info,
                borderColor: Colors.info,
                borderWidth: 1
            }]
        };
        this.options = {
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }

    getNumbers(){
        this.visitors = (893456).toLocaleString('en');
        this.conversions = (38876).toLocaleString('en');
        this.firstSourceConversions = (12982).toLocaleString('en'); 
        this.ratio = (0.56).toLocaleString('en');
    }
}

