import { Injectable } from '@angular/core';
import {Command} from '../../../models/command/Command.model'
//import { environment } from '../environment';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DetailsRestService {
    serverPath:String =  'http://10.68.8.26:8081/oasp4j-sample-server/';
    basePath:String = this.serverPath + 'services/rest/tablemanagement/v1';
    productsPath:String = this.serverPath + 'services/rest/offermanagement/v1';
    headers = new Headers();

    constructor(private http:Http) { }

    getPositions(tableId){
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      //POST METHOD TO RETRIEVE DATA FROM SPECIFIC TABLE -> NOT WORKING
      // return this.http.get('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order')//,JSON.stringify(obj),{headers: headers})
      // .map(res =>  res.json())

      var requestPayload = {
        state:"CLOSED",
        tableId:tableId
      }
      return this.http.post('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order/search', JSON.stringify(requestPayload), {headers: this.headers})
                           .map(res => {debugger; res.json()});
    }

    getMenus(){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        return this.http.get('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/offermanagement/v1/offer')
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

        this.http.post("http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order/", JSON.stringify(data),  {headers: headers})
                               .map(res =>  res.json())
                               .subscribe(data => { });
    }
}
