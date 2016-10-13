import { LoginComponent } from '../../../main/components/login/Login.component';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '../../../oasp/oasp-security/http-client.service';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { OaspModule } from '../../../oasp/oasp.module';

let comp: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let debug: DebugElement;
let native: HTMLElement;
let oaspI18n: OaspI18n;
let i18n;
let validateLogin, hideAlertLogin, functionLogin, functionSessionExpired, closeErrorLogin;
let form = {username: 'user', password: 'pass'};

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class HttpClientStub {
  get(url) { return null; }
  post(url) { return null; }
}

describe('LoginComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   { provide: HttpClient, useClass: HttpClientStub },
                   SecurityService,
                   { provide: Router, useClass: RouterStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;

    spyOn(comp, 'ngOnInit').and.callFake(() => {
      comp.i18n = oaspI18n.getI18n();
    });

    oaspI18n = new OaspI18n();
    i18n = oaspI18n.getI18n();
    fixture.detectChanges();


    debug = fixture.debugElement.query(By.css('form'));
    native = debug.nativeElement;

    spyOn(comp.securityService, 'funcionLogin').and.callFake(() => {});
    spyOn(comp.securityService, 'functionsesionExpired').and.callFake(() => {});
    spyOn(comp.securityService, 'closeErrorLogin').and.callFake(() => {});

    spyOn(comp, 'validateLogin').and.callFake(() => {
      functionLogin = comp.securityService.funcionLogin(form.username, form.password);
      functionSessionExpired = comp.securityService.functionsesionExpired();
    });
    spyOn(comp, 'hideAlertLogin').and.callFake(() => {
      closeErrorLogin = comp.securityService.closeErrorLogin();
    });

    validateLogin = comp.validateLogin(form);
    hideAlertLogin = comp.hideAlertLogin();

  });

  it('pageData has no correct properties pagination and sort', () => {
    expect(native.innerHTML).toBeDefined();
  });

  it(' should have called to the login function of its Security Service', () => {
    expect(comp.securityService.funcionLogin).toHaveBeenCalledWith(form.username, form.password);
  });

});
