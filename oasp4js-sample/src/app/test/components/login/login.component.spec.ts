import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../../../main/components/login/Login.component';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { Router } from '@angular/router';
import { AppModule } from '../../../app.module';
import { OaspModule } from '../../../oasp/oasp.module';

let comp: LoginComponent;
let fixture: ComponentFixture<LoginComponent>;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('LoginComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   SecurityService,
                   { provide: Router, useClass: RouterStub } ]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;

    spyOn(comp, 'ngOnInit').and.callFake(() => {
      comp.i18n = comp.oaspI18n.getI18n();
    });

    oaspI18n = new OaspI18n();
    i18n = oaspI18n.getI18n();

    fixture.detectChanges();

  });

  it('I18n has been defined', () => {
    expect(comp.i18n).toBeDefined();
  });

});
