import { LoginComponent } from '../../main/components/login/Login.component';
import { Component, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core'
import { User } from '../../main/models/user/User.model';
import { OaspI18n } from '../../oasp/oasp-i18n/oasp-i18n.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '../../oasp/oasp-security/http-client.service';
import { SecurityService } from '../../oasp/oasp-security/oasp-security.service';

describe('\nLoginComponent [COMPONENT]: \n', () => {
    let i18n = new OaspI18n();
    let router: Router;
    let http: Http;
    let httpC = new HttpClient(http);
    let security = new SecurityService(router, httpC);
    let user: User = new User(0, "", "", 0);
    let loginEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
    let userEvent:EventEmitter<User> = new EventEmitter<User>();
    let login = new LoginComponent(i18n, security);

    let validateLogin, hideAlertLogin, functionLogin, functionSessionExpired, closeErrorLogin;

    beforeEach(() => {
      spyOn(security, 'funcionLogin').and.callFake((user) => {});
      spyOn(security, 'functionsesionExpired').and.callFake(() => {});
      spyOn(security, 'closeErrorLogin').and.callFake(() => {});
      spyOn(login, 'validateLogin').and.callFake(() => {
        functionLogin = security.funcionLogin(user);
        functionSessionExpired = security.functionsesionExpired();
      });
      spyOn(login, 'hideAlertLogin').and.callFake(() => {
        closeErrorLogin = security.closeErrorLogin();
      })
      validateLogin = login.validateLogin();
      hideAlertLogin = login.hideAlertLogin();
    });

    it('LoginComponent should be defined!', () => {
      expect(login).toBeDefined();
    });

    it('Variable \'user\' should be defined', () => {
      expect(login.user).toBeDefined();
    });

});
