import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'

@Injectable()
export class HttpClient {
    private headers: Headers
    private loading: boolean = false;

    constructor(private http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
    }

    addDefaultHeader(name, value){
      this.headers.append(name, value);
    }

    get(url) {
        this.loading = true;
        let response = this.http.get(url);
        this.loading = false;
        return response;
    }

    post(url, data) {
        this.loading = true;
        let response = this.http.post(url, data, {
          headers: this.headers
        });
        this.loading = false;
        return response;
    }

    getLoading(){
        return this.loading;
    }
}
