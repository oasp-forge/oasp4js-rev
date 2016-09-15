import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Table } from '../../../models/table/Table.model'
import { Command } from '../../../models/command/Command.model'
import { BusinessOperations } from '../../../../main/BusinessOperations';
import { SecurityService } from '../../../../oasp/oasp-security/oasp-security.service'

@Injectable()
export class CrudRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private securityService: SecurityService, private http:Http) { }

  getTables(paginationData){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
      return this.http.post(this.BO.tableSearchPOST, JSON.stringify(paginationData), {headers:headers})
                              .map(res =>  res.json())
  }

  getOffers(){
    return this.http.get(this.BO.offersGET)
                    .map(res =>  res.json())
  }

  applyFilters(filters){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
      if(filters[0].length > 0 || filters[1].length > 0 || filters[1].length > 0){

          let searchCriteria = {
              number : filters[0],
              state : filters[1] === "" ? null : filters[1],
              waiterId : filters[2]
          }
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(searchCriteria), {headers:headers})
          .map(res =>  res.json())
      } else {
          let pageData = {
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
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    let post = this.http.post(this.BO.tablesPOST, JSON.stringify(table),  {headers: headers})
                        .map(res =>  res.json())
                        .subscribe(data => { });
  }
}
