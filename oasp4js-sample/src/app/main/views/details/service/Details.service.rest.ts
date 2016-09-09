import { Injectable } from '@angular/core';
import {Command} from '../../../models/command/Command.model'
import { BusinessOperations } from '../../../../main/BusinessOperations';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DetailsRestService {

  BO:BusinessOperations = new BusinessOperations();
  constructor(private http:Http) { }

  getPositions(tableId){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {
      state : "CLOSED",
      tableId : tableId
    };
    return this.http.post(this.BO.orderSearchPOST, JSON.stringify(data), {headers: headers})
                    .map(res => res.json())
  }

  getMenus(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.BO.offersGET)
                    .map(res =>  res.json())
  }

  updateOrder(order, positions){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    var data = {
      order: order,
      positions : positions
    }
    for(let i = 0 ; i < data.positions.length; i++){
      data.positions[i].orderId = data.order.id;
      data.positions[i].revision = null;
    }
    this.http.post(this.BO.orderPOST, JSON.stringify(data),  {headers: headers})
             .map(res =>  res.json())
             .subscribe(data => {})
  }
}
