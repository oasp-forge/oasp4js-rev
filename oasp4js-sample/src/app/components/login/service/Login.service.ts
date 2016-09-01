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

  serverPath:String =  'http://localhost:8081/oasp4j-sample-server/';
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
         
    let data={
      j_username:username,
      j_password:password
    };
//     data["j_username"]=username;
//     data["j_password"]=password;

    console.log(data); //this is printing both times correctly
    //on second request data is blank where as it works correctly for first time       
    var post = this.http.post(this.loginPath + 'login', JSON.stringify(data),{headers: headers})
        .map((res: Response) => res.json());

    var get = this.http.get(this.basePath + '/table/')
          .map(res => JSON.stringify(res))
          .subscribe(
                data => {
                console.log("Response of GET ===>" + data);
          });

  }

}
