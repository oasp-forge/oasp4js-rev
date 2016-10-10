import { LoginComponent } from '../../main/components/login/Login.component';
import { OaspI18n } from '../../oasp/oasp-i18n/oasp-i18n.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '../../oasp/oasp-security/http-client.service';
import { SecurityService } from '../../oasp/oasp-security/oasp-security.service';

describe('LoginComponent', () => {
    let i18n = new OaspI18n();
    let router: Router;
    let http: Http;
    let form = {username: 'u', password: 'pass'};
    let httpC = new HttpClient(http);
    let security = new SecurityService(router, httpC);
    let login = new LoginComponent(i18n, security);

    let validateLogin, hideAlertLogin, functionLogin, functionSessionExpired, closeErrorLogin;

    beforeEach(() => {
      spyOn(security, 'funcionLogin').and.callFake(() => {});
      spyOn(security, 'functionsesionExpired').and.callFake(() => {});
      spyOn(security, 'closeErrorLogin').and.callFake(() => {});
      spyOn(login, 'validateLogin').and.callFake(() => {
        functionLogin = security.funcionLogin(form.username, form.password);
        functionSessionExpired = security.functionsesionExpired();
      });
      spyOn(login, 'hideAlertLogin').and.callFake(() => {
        closeErrorLogin = security.closeErrorLogin();
      });
      validateLogin = login.validateLogin(form);
      hideAlertLogin = login.hideAlertLogin();
    });

    it('LoginComponent should be defined!', () => {
      expect(login).toBeDefined();
    });

});
