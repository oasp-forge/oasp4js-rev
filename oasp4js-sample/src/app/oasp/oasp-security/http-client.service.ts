import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

export var loading = false;

@Injectable()
export class HttpClient {
    private headers: Headers;

    constructor(private http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type',  'application/json');
    }

    addDefaultHeader(name, value) {
      this.headers.append(name, value);
    }

    get(url) {
        loading = true;
        let response = this.http.get(url);
        return response;
    }

    post(url, data) {
        loading = true;
        let response = this.http.post(url, data, {
          headers: this.headers
        });
        return response;
    }

    getLoading() {
        return loading;
    }

    disableLoading() {
        loading = false;
    }
}
