import { Injectable } from '@angular/core';
import { HttpClient } from '../../../../oasp/oasp-security/http-client.service'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BusinessOperations } from '../../../../main/BusinessOperations';

@Injectable()
export class KitchenRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private http:HttpClient) {
  }

  getOffers(pageData){
    return this.http.post(this.BO.offerSearchPOST, JSON.stringify(pageData))
                    .map(res =>  res.json())
  }

  getProducts(pageData){
    return this.http.post(this.BO.productSearchPOST, JSON.stringify(pageData))
                    .map(res =>  res.json())
  }

  getOrderPositions(){
    return this.http.get(this.BO.orderPositionParamsGET)
                    .map(res =>  res.json())
  }

  assignOrderPosition(obj){
    obj.cookId = 1;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe()
  }

  returnOrderPosition(obj){
    obj.cookId = null;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe()
  }

  doneOrderPosition(obj){
    obj.state = "PREPARED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe()
  }

  rejectOrderPosition(obj){
    obj.state = "CANCELLED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe()
    }

  moveOrderPosition(obj, cookId){
      obj.cookId = cookId;
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
                               .map(res =>  res.json())
                               .subscribe()
  }

  finishOrderPosition(obj, state){
      obj.state = state
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
                               .map(res =>  res.json())
                               .subscribe()
  }
}
