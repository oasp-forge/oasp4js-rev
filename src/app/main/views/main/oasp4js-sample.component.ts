import { Component } from '@angular/core';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['../../css/oasp4js-sample.component.css'],
  providers:[SecurityService, OaspI18n]
})

export class Oasp4jsSampleAppComponent {
  title = "oasp4js-sample works!";
  public autoLogTitle = "Ooops...";
  public autoLogInfo = "Session time expired!";

  i18n

  constructor(
    private securityService: SecurityService,
    private oaspI18n : OaspI18n
  ){
    this.oaspI18n.initI18n();
    this.i18n = this.oaspI18n.getI18n();
  }

  validateLogin(username, password){
      this.securityService.funcionLogin(username,password);
      this.securityService.functionsesionExpired();
  }

  hideAlertLogin(){
      this.securityService.closeErrorLogin();
  }
}
