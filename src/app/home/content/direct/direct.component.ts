import { Component, OnInit, ViewContainerRef, ViewEncapsulation, ViewChild } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';
import { Page, PagedData } from '../../../helpers/PageClass';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Utility } from '../../../helpers/utility';

@Component({
    selector: 'direct-component',
    templateUrl: './direct.component.html',
    styleUrls: ['./direct.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [TrackerService]
})
export class DirectComponent {
    data: Array<any> = [];
    page = new Page();
    rows: Array<any> = [];
    sortColumn: string = '';
    searchKeyword: string = '';
    searchColumn: string = '';
    isSource: boolean = false;
    searchSource: string = '';
    expanded: any = {};
    @ViewChild('directTable') table: any;

    constructor(private service: TrackerService,
        public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.page.pageNumber = 1;
        this.page.size = 20;
        this.sortColumn = 'id,asc';
    }

    setPage(pageInfo) {
        this.page.pageNumber = pageInfo.offset + 1;
        this.getDataFromServer();
    }

    ngOnInit() {
        this.getDataFromServer();
    }

    getDataFromServer() {
        let obj: any = {};
        obj.currentPage = this.page.pageNumber;
        obj.pageSize = this.page.size;
        obj.search = this.searchKeyword;
        if (this.searchColumn == 'campaign') {
            obj.searchColumn = 'campaignName';
        } else if (this.searchColumn == 'source') {
            obj.searchColumn = 'visitCounter';
            obj.search = this.searchSource;
        } else {
            obj.searchColumn = this.searchColumn;
        }
        obj.sortColumn = this.sortColumn;
        this.service.getDirectByParams(obj)
            .subscribe(
                (res) => {
                    // this.toastr.success('Fetching your Direct Ads visitors!!', 'Success!');
                    const pagedData: any = this.getPagedData(this.page, res.data.rows, res.data.count);
                    this.page = pagedData.page;
                    this.rows = pagedData.data;
                }, (error) => {
                    this.toastr.error('Oops , seems like something broke!!', 'Oops!');
                    console.log("Error occurred");
                });
    }

    private getPagedData(page: Page, companyData, count) {
        const pagedData = new PagedData();
        page.totalElements = count;
        page.totalPages = page.totalElements / page.size;
        const start = (page.pageNumber * page.size) - page.size;
        const end = Math.min((start + page.size), page.totalElements);
        let someData: Array<any> = [];
        for (let i = 0; i < companyData.length; i++) {
            const jsonObj = companyData[i];
            const local: any = {};
            local.id = jsonObj.id;
            local.campaignName = jsonObj.campaignName;
            local.medium = jsonObj.medium;
            local.source = jsonObj.source;
            local.term = jsonObj.term;
            local.content = jsonObj.content;
            local.others = jsonObj.others;
            local.sourceLevel = jsonObj.visitCounter;
            local.createdAt = jsonObj.createdAt;
            someData.push(local);
        }
        pagedData.page = page;
        let d: Array<any> = [];
        d = Utility.convertPagedDataToDisplay(someData);
        pagedData.data = d;
        return pagedData;
    }

    onSort(eve) {
        if (eve.column.prop == 'sourceLevel') {
            this.sortColumn = 'visitCounter' + ',' + eve.newValue;
        } else {
            this.sortColumn = eve.column.prop + ',' + eve.newValue;
        }
        this.setPage({ offset: 0 });
        this.page.pageNumber = 1;
    }

    onSearch() {
        this.page.pageNumber = 1;
        this.getDataFromServer();
    }

    onSelectChange() {
        if (this.searchColumn == 'source') {
            this.isSource = true;
        } else {
            this.isSource = false;
        }
    }

    onClear() {
        this.searchColumn = '';
        this.page.pageNumber = 1;
        this.searchSource = '';
        this.searchKeyword = '';
        this.getDataFromServer();
    }

    toggleExpandRow(row) {
        this.table.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
    }
}
