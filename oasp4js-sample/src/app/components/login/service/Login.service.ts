import {Injectable} from '@angular/core'
import {User} from '../../../models/user/User.model';

@Injectable()
export class LoginService{
  private user1 = new User(1,'chief', 'chief');
  private users:User[] = [this.user1];

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

}
