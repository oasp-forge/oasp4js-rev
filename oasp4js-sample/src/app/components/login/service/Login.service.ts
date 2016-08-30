import {Injectable} from '@angular/core'
import {User} from '../../../models/user/User.model';

@Injectable()
export class LoginService{
  private user1 = new User(1,'waiter', 'waiter', 1);
  private user2 = new User(2,'chief', 'chief', 3);
  private user3 = new User(3,'cook', 'cook', 2);

  private users:User[] = [this.user1, this.user2, this.user3];

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

}
