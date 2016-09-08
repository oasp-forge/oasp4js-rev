import { Injectable } from '@angular/core';
import {Table} from '../../../models/table/Table.model'
import {Command} from '../../../models/command/Command.model'
//import { environment } from '../environment';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Need to know how to do a http connection with the server
*/
@Injectable()
export class CrudRestService {
  serverPath:String =  'http://10.68.8.26:8081/oasp4j-sample-server/';
  basePath:String = this.serverPath + 'services/rest/tablemanagement/v1';
  productsPath:String = this.serverPath + 'services/rest/offermanagement/v1';

 constructor(private http:Http) { }

  getTables(paginationData){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.basePath + '/table/search', JSON.stringify(paginationData), {headers:headers})
                              .map(res =>  res.json())
  }

  getOffers(){
    return this.http.get(this.productsPath + '/offer/')
                           .map(res =>  res.json())
  }

  applyFilters(filters){
      return this.http.get(this.basePath + '/table/' + 10 + filters[0])
                             .map(res =>  res.json())
  }

  saveTable(table){

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let post = this.http.post(this.basePath + '/table/', JSON.stringify(table),  {headers: headers})
                             .map(res =>  res.json())
                             .subscribe(data => { });
      //post.unsubscribe();
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}
