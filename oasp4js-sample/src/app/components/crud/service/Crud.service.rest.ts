import { Injectable } from '@angular/core';
import {Table} from '../../../models/table/Table.model'
//import { environment } from '../environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
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
      return this.http.get(this.basePath + '/table/')
                     .toPromise()
                     .then(response => response.json().data as Table[])
                     .catch(this.handleError);
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
