import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KitchenRestService {
  serverPath:String =  'http://10.68.8.26:8081/oasp4j-sample-server/';
  basePath:String = this.serverPath + 'services/rest/salesmanagement/v1';

 constructor(private http:Http) { }

  getOrders(){
      return this.http.get(this.basePath + '/order')
                             .map(res =>  res.json())
  }

  assignCommand(command){

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(this.basePath + '/orderposition/', JSON.stringify(command),  {headers: headers})
                             .map(res =>  res.json())
                             .subscribe(data => { });
  }

}
