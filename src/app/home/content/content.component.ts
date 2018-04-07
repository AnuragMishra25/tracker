import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content-component',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent {

    currentTab= 'General';
    chartType = 'horizontalBar';
    data: any;
    options: any;

    constructor() {
        this.chartLoad();
    }

    signout() {
        console.log('signout');
    }

    onTabClick(tab) {
        this.currentTab = tab;
    }

    chartLoad() {
        let stack = 'stack 0';
        this.data = {
            labels: ["First Source", "Second Source", "Third Source", "Fourth Source", "Fifth Source", "Other Sources"],
            datasets: [{
                label: 'Facebook',
                stack: stack,
                data: [15, 10, 9, 7, 6, 3],
                // backgroundColor: 'rgba(255, 99, 132, 0.2)',
                backgroundColor: 'blue',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1
            }, {
                label: 'Google',
                stack: stack,
                data: [18, 15, 11, 8, 11, 16],
                backgroundColor: 'red',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: 'Organic',
                stack: stack,
                data: [23, 20, 18, 13, 16, 21],
                backgroundColor: 'orange',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }, {
                label: 'Direct',
                stack: stack,
                data: [17, 12, 7, 15, 18, 23],
                backgroundColor: 'green',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Emails',
                stack: stack,
                data: [8, 3, 5, 8, 11, 16],
                backgroundColor: 'purple',
                borderColor: 'rgba(153, 102, 255, 1)',
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
}
