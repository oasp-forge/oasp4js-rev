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
  offersPath:String = this.serverPath + 'services/rest/offermanagement/v1';

 constructor(private http:Http) { }

  getTable(id:number) {
    //return this.http.get(this.basePath + '/table/' + id).map((res:Response) => res.json());
  }

  getTables(): Promise<Table[]>{
      var a = {};

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var obj = this.http.get(this.basePath + '/table/', { headers: headers })
                             .map(res => JSON.stringify(res))
                             .subscribe(data => {a = data} );

      return null;
  }

  getOffers(): Promise<Command[]>{

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      var obj = this.http.get(this.basePath + '/offer/', { headers: headers })
                             .map(res => {
                               debugger
                             })
                             .subscribe();

      return null;
  }

  getPaginatedTables(pagenumber:number, pagesize:number){

  }

  createTable(id:number, table:Table){

  }

  deleteTable(id:number){

  }

  saveTable(table:Table){

  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}
