import {Component, Output, EventEmitter} from '@angular/core'
import {User} from '../../../models/user/User.model';
import {LoginService} from '../service/Login.service';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector:'login',
  templateUrl: 'app/main/views/login/view/Login.component.html',
  providers:[LoginService, OaspI18n],
  outputs:['loginEvent', 'userEvent']
})

export class LoginComponent{

  loginEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  userEvent:EventEmitter<User> = new EventEmitter<User>();

  user:User;
  loginFailed:boolean = true;
  i18n

  constructor(private oaspI18n: OaspI18n, private loginService:LoginService){
      this.i18n = oaspI18n.getI18n();
    }

  private hideAlertLogin(){
    this.loginFailed = !this.loginFailed;
  }

  validateLogin(username, password){
      this.user = new User(null, username, password, null);
      if(this.loginService.loginCorrect(this.user)){
        this.loginEvent.emit(true);
        this.user.setId(this.loginService.getIdFromParams(this.user.username, this.user.password));
        this.loginService.funcionLogin(username,password);
        this.user.setPermission(this.loginService.getPermissionFromParams(this.user.username, this.user.password));
        this.userEvent.emit(this.user);
      }
      else{
        this.loginFailed = false;
      }
  }
}
