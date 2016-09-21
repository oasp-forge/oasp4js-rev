import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'

@Injectable()
export class HttpClient {
    private headers: Headers

    constructor(private http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
    }

    addDefaultHeader(name, value){
      this.headers.append(name, value);
    }

    get(url) {
      return this.http.get(url);
    }

    post(url, data) {
      return this.http.post(url, data, {
        headers: this.headers
      });
    }
}
