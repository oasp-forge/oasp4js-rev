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

  disableLoading(){
    this.http.disableLoading();
  }

  getOffers(pageData){
    return this.http.post(this.BO.offerSearchPOST, JSON.stringify(pageData))
                    .map(res =>  res.json())
  }

  getProducts(pageData){
    return this.http.post(this.BO.productSearchPOST, JSON.stringify(pageData))
                    .map(res =>  res.json())
  }


  getOrderPositions(sort){
    return this.http.get(this.BO.orderPositionParamsGET + "&name="+ sort[0].name + "&direction="+ sort[0].direction)
                    .map(res =>  res.json())
  }

  applyFilters(filters){
      let url = this.BO.orderPositionParamsGET;
      if(filters[0].length > 0){
          url = this.BO.orderPositionGET + '/' + filters[0];
      } else {
          if(filters[1].length > 0){
              url += '&orderId='+filters[1];
          }
          if(filters[2].length > 0){
              url += '&offerName='+filters[2];
          }
          if(filters[3].length > 0){
              url += '&mealName='+filters[3];
          }
          if(filters[4].length > 0){
              url += '&sideDishName='+filters[4];
          }
      }

      return this.http.get(url)
                      .map(res =>  res.json())
  }

  returnOrderPosition(obj){
    obj.cookId = null;
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe(data => {this.http.disableLoading()},
                        err =>  { this.http.disableLoading()})
  }

  doneOrderPosition(obj){
    obj.state = "PREPARED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe(data => {this.http.disableLoading()})
  }

  rejectOrderPosition(obj){
    obj.state = "CANCELLED"
    this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
             .map(res =>  res.json())
             .subscribe(data => {this.http.disableLoading()},
                        err =>  { this.http.disableLoading()})
    }

  moveOrderPosition(obj, cookId){
      obj.cookId = cookId;
      return this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
                               .map(res =>  res.json())
  }

  finishOrderPosition(obj, state){
      obj.state = state
      this.http.post(this.BO.orderPositionPOST, JSON.stringify(obj))
                               .map(res =>  res.json())
                               .subscribe(data => {this.http.disableLoading()},
                                          err =>  { this.http.disableLoading()})
  }
}
