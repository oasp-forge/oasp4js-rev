import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BusinessOperations } from '../../../../main/BusinessOperations';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KitchenRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private http:Http) {}

  getOffers(pageData){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.BO.offerSearchPOST, JSON.stringify(pageData), {headers:headers})
                    .map(res =>  res.json())
  }

  getProducts(pageData){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.BO.productSearchPOST, JSON.stringify(pageData), {headers:headers})
                    .map(res =>  res.json())
  }

  getOrderPositions(){
    return this.http.get(this.BO.orderPositionParamsGET)
                    .map(res =>  res.json())
  }

  assignOrderPosition(obj){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    obj.cookId = 1;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
  }

  returnOrderPosition(obj){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    obj.cookId = null;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
  }

  doneOrderPosition(obj){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    obj.state = "PREPARED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
  }

  rejectOrderPosition(obj){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    obj.state = "CANCELLED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
             .map(res =>  res.json())
             .subscribe()
    }

  moveOrderPosition(obj, cookId){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      obj.cookId = cookId;
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
                               .map(res =>  res.json())
                               .subscribe()
  }

  finishOrderPosition(obj, state){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      obj.state = state
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj), {headers:headers})
                               .map(res =>  res.json())
                               .subscribe()
  }
}
