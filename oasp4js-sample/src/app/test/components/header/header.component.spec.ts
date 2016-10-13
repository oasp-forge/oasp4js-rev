import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from '../../../main/components/header/Header.component';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { languages } from '../../../main/resources/languages/Languages.resource';
import { Router } from '@angular/router';
import { AppModule } from '../../../app.module';
import { OaspModule } from '../../../oasp/oasp.module';
import { User } from '../../../main/models/user/User.model';

let comp: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('HeaderComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   SecurityService,
                   { provide: Router, useClass: RouterStub } ]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;

    languages.forEach(lang => lang.iconUrl = '');

    spyOn(comp, 'ngOnInit').and.callFake(() => {
      comp.i18n = comp.oaspI18n.getI18n();
      comp.languages = languages;
      comp.user = new User(0, 'user', 'pass', 0);
      comp.logged = false;
      comp.dropmenu = true;
    });

    oaspI18n = new OaspI18n();
    i18n = oaspI18n.getI18n();

    fixture.detectChanges();

  });

  it('I18n has been defined', () => {
    expect(comp.i18n).toBeDefined();
  });

});
