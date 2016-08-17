import { Injectable } from '@angular/core'; 
import { Table } from './table'; 
//import { environment } from '../environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
/*
  Need to know how to do a http connection with the server
*/
@Injectable()
export class TableManagementRestService { 
  serverPath:String =  'http://localhost:8081/oasp4j-sample-server/';
  basePath:String = this.serverPath + 'services/rest/tablemanagement/v1';
  
  
 
 constructor(private http:Http) { }

  getTable(id:number) { 
    return this.http.get(this.basePath + '/table/' + id).map((res:Response) => res.json());
  }

  getTables(){
    return this.http.get(this.basePath + '/table/').map((res:Response) => res.json());
  }

  getPaginatedTables(pagenumber:number, pagesize:number){

  }

  createTable(id:number, table:Table){

  }

  deleteTable(id:number){
    
  }

  saveTable(table:Table){

  } 
}