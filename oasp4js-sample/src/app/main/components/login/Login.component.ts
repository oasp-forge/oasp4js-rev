import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector: 'app-login',
  templateUrl: 'Login.component.html'
})

export class LoginComponent implements OnInit {

  public i18n;

  constructor(public oaspI18n: OaspI18n, public securityService: SecurityService) {
  }

  ngOnInit() {
    this.i18n = this.oaspI18n.getI18n();
  }

  hideAlertLogin() {
      this.securityService.closeErrorLogin();
  }

  validateLogin(form) {
      this.securityService.funcionLogin(form.value.username, form.value.password);
      this.securityService.functionsesionExpired();
  }

}
