import { Component } from '@angular/core'
import { User } from '../../models/user/User.model';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector:'login',
  templateUrl: 'Login.component.html'
})

export class LoginComponent{

  user: User = new User(0, "", "", 0);
  i18n

  constructor(private oaspI18n: OaspI18n, private securityService:SecurityService){
      this.i18n = oaspI18n.getI18n();
  }

  hideAlertLogin(){
      this.securityService.closeErrorLogin();
  }

  validateLogin(){
      this.securityService.funcionLogin(this.user);
      this.securityService.functionsesionExpired();
  }

}
