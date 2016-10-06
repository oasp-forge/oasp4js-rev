import { Component } from '@angular/core';
import { User } from '../../models/user/User.model'
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient} from '../../../oasp/oasp-security/http-client.service';


@Component({
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['../../css/oasp4js-sample.component.css']
})

export class Oasp4jsSampleAppComponent {
  
  public autoLogTitle = "Ooops...";
  public autoLogInfo = "Session time expired!";

  i18n

  constructor(
    private securityService: SecurityService,
    private oaspI18n : OaspI18n,
    private http : HttpClient
  ){
    this.oaspI18n.initI18n();
    this.i18n = this.oaspI18n.getI18n();
  }

  validateLogin(form){
      this.securityService.funcionLogin(form.value.username, form.value.password);
      this.securityService.functionsesionExpired();
  }


  hideAlertLogin(){
      this.securityService.closeErrorLogin();
  }
}
