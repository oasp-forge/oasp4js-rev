import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { BusinessOperations } from '../../../../main/BusinessOperations';
import { SecurityService } from '../../../../oasp/oasp-security/oasp-security.service'

@Injectable()
export class KitchenRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor( private securityService: SecurityService, private http:Http) {
  }

  getOffers(pageData){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    return this.http.post(this.BO.offerSearchPOST, JSON.stringify(pageData), {headers:headers})
                    .map(res =>  res.json())
  }

  getProducts(pageData){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    return this.http.post(this.BO.productSearchPOST, JSON.stringify(pageData), {headers:headers})
                    .map(res =>  res.json())
  }

  getOrderPositions(){
    return this.http.get(this.BO.orderPositionParamsGET)
                    .map(res =>  res.json())
  }

  assignOrderPosition(obj){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    obj.cookId = 1;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
  }

  returnOrderPosition(obj){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    obj.cookId = null;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
  }

  doneOrderPosition(obj){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    obj.state = "PREPARED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
  }

  rejectOrderPosition(obj){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);
    obj.state = "CANCELLED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
    }

  moveOrderPosition(obj, cookId){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);

      obj.cookId = cookId;
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
                               .map(res =>  res.json())
                               .subscribe()
  }

  finishOrderPosition(obj, state){
      let csrf = this.securityService.getcsrfToken();
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('X-CSRF-TOKEN', csrf);

      obj.state = state
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
                               .map(res =>  res.json())
                               .subscribe()
  }
}
