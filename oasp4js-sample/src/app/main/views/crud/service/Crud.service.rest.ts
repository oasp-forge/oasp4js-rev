import { Injectable } from '@angular/core';
import {Table} from '../../../models/table/Table.model'
import {Command} from '../../../models/command/Command.model'
import { BusinessOperations } from '../../../../main/BusinessOperations';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CrudRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private http:Http) { }

  getTables(paginationData){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(this.BO.tableSearchPOST, JSON.stringify(paginationData), {headers:headers})
                              .map(res =>  res.json())
  }

  getOffers(){
    return this.http.get(this.BO.offersGET)
                    .map(res =>  res.json())
  }

  applyFilters(filters){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      if(filters[0].length > 0 || filters[1].length > 0 || filters[1].length > 0){

          var searchCriteria = {
              number : filters[0],
              state : filters[1] === "" ? null : filters[1],
              waiterId : filters[2]
          }
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(searchCriteria), {headers:headers})
          .map(res =>  res.json())
      } else {
          var pageData = {
              pagination: {
                  size: 4,
                  page: 1,
                  total: true
              }};
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(pageData), {headers:headers})
                                  .map(res =>  res.json())
      }
  }

  saveTable(table){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let post = this.http.post(this.BO.tablesPOST, JSON.stringify(table),  {headers: headers})
                        .map(res =>  res.json())
                        .subscribe(data => { });
  }
}
