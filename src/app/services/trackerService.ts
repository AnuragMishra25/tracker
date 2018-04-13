import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { TRACKER_ADDRESS } from '../helpers/constant';

@Injectable()
export class TrackerService {
    constructor(private http: Http) {
    }

    getFacebookById(id) {
        return this.http
            .get(TRACKER_ADDRESS + 'facebook/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getGoogleById(id) {
        return this.http
            .get(TRACKER_ADDRESS + 'google/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getDirectById(id) {
        return this.http
            .get(TRACKER_ADDRESS + 'direct/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getEmailById(id) {
        return this.http
            .get(TRACKER_ADDRESS + 'email/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getOrganicById(id) {
        return this.http
            .get(TRACKER_ADDRESS + 'organic/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getVisitorHistoryById(id) {
        return this.http
            .get(TRACKER_ADDRESS + 'visitorHistory/' + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getDirectByParams(params) {
        return this.http
            .get(TRACKER_ADDRESS + 'direct', this.setRequestOptions(params))
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getEmailByParams(params) {
        return this.http
            .get(TRACKER_ADDRESS + 'email', this.setRequestOptions(params))
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getFacebookByParams(params) {
        return this.http
            .get(TRACKER_ADDRESS + 'facebook', this.setRequestOptions(params))
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getGoogleByParams(params) {
        return this.http
            .get(TRACKER_ADDRESS + 'google', this.setRequestOptions(params))
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    getOrganicByParams(params) {
        return this.http
            .get(TRACKER_ADDRESS + 'organic', this.setRequestOptions(params))
            .map((response: Response) => {
                return response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    private setRequestOptions(obj?: any): RequestOptions {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        const options = new RequestOptions({ headers: headers });
        if (obj) {
            const urlParams = new URLSearchParams();
            Object.keys(obj).forEach((key) => {
                urlParams.set(key, obj[key]);
            });
            options.search = urlParams;
        }
        return options;
    }
}