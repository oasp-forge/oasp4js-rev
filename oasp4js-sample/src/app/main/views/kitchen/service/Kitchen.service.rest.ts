import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KitchenRestService {
  serverPath:String =  'http://10.68.8.26:8081/oasp4j-sample-server/';
  baseOfferPath:String = this.serverPath + 'services/rest/offermanagement/v1';
  baseSalesPath:String = this.serverPath + 'services/rest/salesmanagement/v1';

 constructor(private http:Http) { }

  getOffers(pageData){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      return this.http.post(this.baseOfferPath + '/offer/search', JSON.stringify(pageData), {headers:headers})
                             .map(res =>  res.json())
  }

  getProducts(pageData){
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');

     return this.http.post(this.baseOfferPath + '/product/search', JSON.stringify(pageData), {headers:headers})
                            .map(res =>  res.json())
  }

  getOrderPositions(){
     return this.http.get(this.baseSalesPath + '/orderposition?mealOrSideDish=true&state=ORDERED')
                            .map(res =>  res.json())
  }

  moveOrderPosition(obj, cookId){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      obj.cookId = cookId;
      this.http.post(this.baseSalesPath + '/orderposition/', JSON.stringify(obj), {headers:headers})
                               .map(res =>  res.json())
                               .subscribe()
  }

  finishOrderPosition(obj, state){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      obj.state = state
      this.http.post(this.baseSalesPath + '/orderposition/', JSON.stringify(obj), {headers:headers})
                               .map(res =>  res.json())
                               .subscribe()
  }
}
