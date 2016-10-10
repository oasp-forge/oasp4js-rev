import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../oasp/oasp-security/http-client.service';
import 'rxjs/add/operator/map';
import { BusinessOperations } from '../../../../main/BusinessOperations';

@Injectable()
export class CrudRestService {

  BO: BusinessOperations = new BusinessOperations();
  constructor(private http: HttpClient) { }

  disableLoading() {
    this.http.disableLoading();
  };

  getTables(paginationData) {
      return this.http.post(this.BO.tableSearchPOST, JSON.stringify(paginationData))
                      .map(res =>  res.json() );
  };

  applyFilters(filters) {
      if (filters[0].length > 0 || filters[1].length > 0 || filters[2].length > 0) {
          let searchCriteria = {
              number : filters[0],
              state : filters[1] === '' ? null : filters[1],
              waiterId : filters[2]
          };
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(searchCriteria))
          .map(res =>  res.json());
      } else {
          let pageData = {
              pagination: {
                  page: 1,
                  size: 4,
                  total: true
              }};
          return this.http.post(this.BO.tableSearchPOST, JSON.stringify(pageData))
                                  .map(res =>  res.json());
      }
  };

  saveTable(table) {
    this.http.post(this.BO.tablesPOST, JSON.stringify(table))
                        .map(res =>  res.json())
                        .subscribe(data => { this.http.disableLoading(); },
                                   err =>  { this.http.disableLoading(); });
  };
}
