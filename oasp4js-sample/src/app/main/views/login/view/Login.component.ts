import {Component, Output, EventEmitter} from '@angular/core'
import {Router} from '@angular/router'
import {User} from '../../../models/user/User.model';
import {LoginService} from '../service/Login.service';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector:'login',
  templateUrl: 'app/main/views/login/view/Login.component.html',
  providers:[LoginService, OaspI18n]
})

export class LoginComponent{

  i18n

  constructor(private router:Router, private oaspI18n: OaspI18n, private loginService:LoginService){
      this.i18n = oaspI18n.getI18n();
  }

  hideAlertLogin(){
      this.loginService.closeErrorLogin();
  }

  validateLogin(username, password){
      this.loginService.funcionLogin(username,password);
  }

}
