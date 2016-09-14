import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, Routes } from "@angular/router";
import { TimerWrapper } from '@angular/core/src/facade/async';
import { Http, Response, Headers } from '@angular/http'
import { HeaderComponent } from '../header/view/Header.component';
import { LoginComponent } from '../login/view/Login.component';
import { LoginService } from '../login/service/Login.service';
import { CrudComponent } from '../crud/view/Crud.component'
import { KitchenComponent } from '../kitchen/view/Kitchen.component'
import { User } from '../../models/user/User.model'
import { ModalDialogComponent } from '../../../oasp/oasp-ui/modal-dialog/modal-dialog.component';
import {OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';

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
  providers:[LoginService, OaspI18n],
  directives: [HeaderComponent, ModalDialogComponent, ROUTER_DIRECTIVES]
})


export class Oasp4jsSampleAppComponent {
  title = "oasp4js-sample works!";

  public autoLog: boolean;
  public mins = 60000;
  public timeout = 10000;
  public timer:number;
  public autoLogTitle = "Ooops...";
  public autoLogInfo = "Session time expired!";

  i18n

  constructor(
    private router: Router,
    private loginService: LoginService,
    private oaspI18n : OaspI18n
  ){
    this.oaspI18n.initI18n();
    this.i18n = this.oaspI18n.getI18n();
    this.autoLog = false;
    this.timer = setInterval(() => {
    }, this.mins*0.15)

  }
}
