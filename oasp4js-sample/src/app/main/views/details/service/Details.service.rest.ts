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

 constructor(private http:Http) { }

  addCommand(command, id){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.put('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/offermanagement/v1/offer/' + id, JSON.stringify(command), {headers: headers})
                      .map(res =>  res.json())
                      .subscribe(data => { });
  }

  getCommands(){
      return this.http.get('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/offermanagement/v1/offer/')
                      .map(res =>  res.json())
  }

}
