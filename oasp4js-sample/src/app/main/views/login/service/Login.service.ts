import {Injectable} from '@angular/core'
import {User} from '../../../models/user/User.model';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class LoginService{
  private user1 = new User(1,'waiter', 'waiter', 1);
  private user2 = new User(2,'chief', 'chief', 3);
  private user3 = new User(3,'cook', 'cook', 2);

  private users:User[] = [this.user1, this.user2, this.user3];

  serverPath:String =  'http://10.68.8.26:8081/oasp4j-sample-server/';
  basePath:String = this.serverPath + 'services/rest/tablemanagement/v1';
  loginPath:String = this.serverPath + 'services/rest/';

  respuesta = null;

  constructor(private http:Http) { }

  loginCorrect(user:User):boolean{
    let ok = false;
    for(let i = 0; i < this.users.length; i ++){
      if(this.users[i].username === user.username && this.users[i].password === user.password){
        ok = true;
      }
    }
    return ok;
  }

  getIdFromParams(username:string, password:string) : number{
    let res:number;
    for(let i = 0; i < this.users.length; i ++){
      if(this.users[i].getUsername() === username && this.users[i].getPassword() === password){
        res = this.users[i].getId();
      }
    }
    return res;
  }

  getPermissionFromParams(username:string, password:string) : number{
    let res:number;
    for(let i = 0; i < this.users.length; i ++){
      if(this.users[i].getUsername() === username && this.users[i].getPassword() === password){
        res = this.users[i].getPermission();
      }
    }
    return res;
  }

  getUsers() : User[]{
    return this.users;
  }

  funcionLogin(username,password){

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let formData={
      j_username:username,
      j_password:password
    };   

    let a;

    this.http.post('http://10.68.8.26:8081/oasp4j-sample-server/services/rest/login', JSON.stringify({j_username: username, j_password: password}), { headers: headers })
    .map(res => {
      JSON.stringify(res)
    })
    .subscribe(
        data => {this.funcionGetTables();},
        err => console.error('error'),
        () => {
          console.log('done');
    });

    // this.http.post('http://10.68.8.26:8081/oasp4j-sample-server/j_spring_security_login', JSON.stringify(data), {headers:headers})
    // .map(res => {console.log('RESPUESTA!! ---> \n' + res)})
    // .subscribe(data => {console.log(data)});
  }

  funcionGetTables(){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.get(this.basePath + '/table/', { headers: headers })
                           .map(res => {
                             debugger
                             JSON.stringify(res)
                           })
                           .subscribe(data => {});
  }


}
