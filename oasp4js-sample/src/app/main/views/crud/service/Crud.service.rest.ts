import { Injectable } from '@angular/core'
import { HttpClient } from '../../../../oasp/oasp-security/http-client.service'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { Table } from '../../../models/table/Table.model'
import { Command } from '../../../models/command/Command.model'
import { BusinessOperations } from '../../../../main/BusinessOperations'
import { SecurityService } from '../../../../oasp/oasp-security/oasp-security.service'

@Injectable()
export class CrudRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private securityService: SecurityService, private http:HttpClient) { }

  getTables(paginationData){
      return this.http.post(this.BO.tableSearchPOST, JSON.stringify(paginationData))
                              .map(res =>  res.json())
  }

  getOffers(){
    return this.http.get(this.BO.offersGET)
                    .map(res =>  res.json())
  }

  applyFilters(filters){
      if(filters[0].length > 0 || filters[1].length > 0 || filters[1].length > 0){

          let searchCriteria = {
              number : filters[0],
              state : filters[1] === "" ? null : filters[1],
              waiterId : filters[2]
          }
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(searchCriteria))
          .map(res =>  res.json())
      } else {
          let pageData = {
              pagination: {
                  size: 4,
                  page: 1,
                  total: true
              }};
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(pageData))
                                  .map(res =>  res.json())
      }
  }

  saveTable(table){
    let post = this.http.post(this.BO.tablesPOST, JSON.stringify(table))
                        .map(res =>  res.json())
                        .subscribe(data => { });
  }
}
