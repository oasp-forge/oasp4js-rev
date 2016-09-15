import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, Routes } from "@angular/router";
import { TimerWrapper } from '@angular/core/src/facade/async';
import { Http, Response, Headers } from '@angular/http'
import { User } from '../../models/user/User.model'
import { HeaderComponent } from '../header/Header.component';
import { LoginComponent } from '../login/view/Login.component';
import { CrudComponent } from '../crud/view/Crud.component'
import { KitchenComponent } from '../kitchen/view/Kitchen.component'
import { ModalDialogComponent } from '../../../oasp/oasp-ui/modal-dialog/modal-dialog.component';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Routes([
    { path: '', component: LoginComponent },
    { path: '/Tables', component: CrudComponent },
    { path: '/Kitchen', component: KitchenComponent }
])

@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['../../css/oasp4js-sample.component.css'],
  providers:[SecurityService, OaspI18n],
  directives: [HeaderComponent, ModalDialogComponent, ROUTER_DIRECTIVES]
})


export class Oasp4jsSampleAppComponent {
  title = "oasp4js-sample works!";
  public autoLogTitle = "Ooops...";
  public autoLogInfo = "Session time expired!";

  i18n

  constructor(
    private router: Router,
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
