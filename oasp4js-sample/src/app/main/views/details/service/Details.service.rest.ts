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

    getCommands(obj){
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        return this.http.get('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order')//,JSON.stringify(obj),{headers: headers})
        .map(res =>  res.json())
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
            order: "orders -> informacion de la order",
            positions : `positions -> array de positions (que van dentro de la order)
                         que todavia no tenemos`
        }

        this.http.post("http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order/", JSON.stringify(data),  {headers: headers})
                               .map(res =>  res.json())
                               .subscribe(data => { });
    }
}
