import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Oasp4jsSampleAppComponent } from '../../../main/components/main/oasp4js-sample.component';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient } from '../../../oasp/oasp-security/http-client.service';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';

let router: Router;
let http: Http;
let httpC = new HttpClient(http);
let securityService = new SecurityService(router, httpC);
let form = {username: 'u', password: 'p'};
let oasp = new Oasp4jsSampleAppComponent(
  securityService,
  new OaspI18n,
  httpC
);

let validateLogin, hideAlertLogin, functionLogin, functionSessionExpired, closeErrorLogin;

describe('Oasp4jsSampleAppComponent', () => {
  beforeEach(() => {

    // spies of SecurityService
    spyOn(securityService, 'funcionLogin').and.callFake((username, password) => {});
    spyOn(securityService, 'functionsesionExpired').and.callFake(() => {});
    spyOn(securityService, 'closeErrorLogin').and.callFake(() => {});

    // spies to Oasp4jsSampleAppComponent
    spyOn(oasp, 'validateLogin').and.callFake(() => {
      functionLogin = securityService.funcionLogin(form.username, form.password);
      functionSessionExpired = securityService.functionsesionExpired();
    });

    spyOn(oasp, 'hideAlertLogin').and.callFake(() => {
      closeErrorLogin = securityService.closeErrorLogin();
    });

    validateLogin = oasp.validateLogin(form);
    hideAlertLogin = oasp.hideAlertLogin();

  });

  it('should be defined!', () => {
    expect(oasp).toBeDefined();
  });

  it('\'s BBOO should point to the right URL ', () => {
    let serverPath = 'http://localhost:8081/';
    expect(securityService.BO.serverPath.substring(0, 22)).toEqual(serverPath);
  });

  it('function \'validateLogin(form)\' should have been called', () => {
    expect(oasp.validateLogin).toHaveBeenCalledWith(form);
  });

  it('function \'hideAlertLogin()\' should have been called', () => {
    expect(oasp.hideAlertLogin).toHaveBeenCalled();
  });

  it('functions from \'SecurityService\' should have been called', () => {
    expect(securityService.funcionLogin).toHaveBeenCalled();
    expect(securityService.functionsesionExpired).toHaveBeenCalled();
  });

});
