import { Injectable } from '@angular/core';
import {Table} from '../../../models/table/Table.model'
//import { environment } from '../environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

declare let $:any; // --> AÑADIDO

/*
  Need to know how to do a http connection with the server
*/
@Injectable()
export class CrudRestService {
  serverPath:String =  'http://localhost:8081/oasp4j-sample-server/';
  basePath:String = this.serverPath + 'services/rest/tablemanagement/v1';

 constructor(private http:Http) { }

  getTable(id:number) {
    //return this.http.get(this.basePath + '/table/' + id).map((res:Response) => res.json());
  }

  getTables(): Promise<Table[]>{
      // let a = this.http.get(this.basePath + '/table/')
      //                .toPromise()
      //                .then(response => response.json().data as Table[])
      //                .catch(this.handleError);
      // debugger
      // return a;

//       let res;
//
//       this.http.get(this.basePath + '/currentuser/')
//                   .map(response => response.json())
//                   .subscribe(result => res = result);

      var a = {};
      // var obj = this.http.get(this.basePath + '/table/');
      // debugger

      var obj = this.http.get(this.basePath + '/table/')
      .map(res => JSON.stringify(res));

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
