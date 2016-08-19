import {Component, Output, EventEmitter} from '@angular/core'
import {User} from '../../../models/user/User.model';
import {LoginService} from '../service/Login.service'

@Component({
  selector:'login',
  templateUrl: 'app/components/login/view/Login.component.html',
  providers:[LoginService],
  outputs:['loginEvent', 'userEvent']
})

export class LoginComponent{

  loginEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  userEvent:EventEmitter<User> = new EventEmitter<User>();

  user:User;
  public n: number = 1;
  loginFailed:boolean = true;

  constructor(
    private loginService:LoginService
  ){ }

  private hideAlertLogin(){
    this.loginFailed = !this.loginFailed;
  }

  private validateLogin(username, password){
      this.user = new User(null, username, password);
      if(this.loginService.loginCorrect(this.user)){
        this.loginEvent.emit(true);
        this.user.setId(this.loginService.getIdFromParams(this.user.username, this.user.password));
        this.userEvent.emit(this.user);
      }
      else{
        this.loginFailed = false;
      }
    }
}
