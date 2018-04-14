import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TrackerService } from '../../../services/trackerService';
import { Page, PagedData } from '../../../helpers/PageClass';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'direct-component',
    templateUrl: './direct.component.html',
    styleUrls: ['./direct.component.css'],
    providers: [TrackerService]
})
export class DirectComponent {
    data: Array<any> = [];
    page = new Page();
    rows = new Array<any>();
    sortColumn: string = '';
    searchKeyword: string = '';
    searchColumn: string = '';

    constructor(private service: TrackerService,
        public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
        this.page.pageNumber = 1;
        this.page.size = 4;
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
        } else if (this.searchColumn == 'visit') {
            obj.searchColumn = 'visitCounter'
        } else {
            obj.searchColumn = this.searchColumn;
        }
        obj.sortColumn = this.sortColumn;
        this.service.getDirectByParams(obj)
            .subscribe(
                (res) => {
                    this.toastr.success('Fetching your Direct Ads visitors!!', 'Success!');
                    const pagedData: any = this.getPagedData(this.page, res.data.rows, res.data.count);
                    this.page = pagedData.page;
                    this.rows = pagedData.data;
                }, error => {
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
            local.visitCounter = jsonObj.visitCounter;
            local.createdAt = jsonObj.createdAt;
            pagedData.data.push(local);
        }
        pagedData.page = page;
        return pagedData;
    }

    onSort(eve) {
        console.log(eve);
        console.log(eve.column.prop);
        console.log(eve.newValue);
        this.sortColumn = eve.column.prop + ',' + eve.newValue;
        this.setPage({ offset: 0 });
        this.page.pageNumber = 1;
    }

    onSearch() {
        this.getDataFromServer();
    }

    onClear() {
        this.searchColumn = '';
        this.searchKeyword = '';
        this.getDataFromServer();
    }
}
