import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector:'login',
  templateUrl: 'app/main/views/login/Login.component.html',
  providers:[SecurityService, OaspI18n]
})

export class LoginComponent{

  i18n

  constructor(private router:Router, private oaspI18n: OaspI18n, private securityService:SecurityService){
      this.i18n = oaspI18n.getI18n();
  }

  hideAlertLogin(){
      this.securityService.closeErrorLogin();
  }

  validateLogin(username, password){
      this.securityService.funcionLogin(username,password);
      this.securityService.functionsesionExpired();
  }

}
