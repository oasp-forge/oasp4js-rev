import { Injectable } from '@angular/core';
import {Table} from '../../../models/table/Table.model'
import {Command} from '../../../models/command/Command.model'
import { BusinessOperations } from '../../../../main/BusinessOperations';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CrudRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private http:Http) { }

  getTables(){
    return this.http.get(this.BO.tablesGET)
                    .map(res =>  res.json())
  }

  getOffers(){
    return this.http.get(this.BO.offersGET)
                    .map(res =>  res.json())
  }

  applyFilters(filters){
    return this.http.get(this.BO.tablesGET + 10 + filters[0])
                    .map(res =>  res.json())
  }

  saveTable(table){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let post = this.http.post(this.BO.tablesPOST, JSON.stringify(table),  {headers: headers})
                        .map(res =>  res.json())
                        .subscribe(data => { });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
