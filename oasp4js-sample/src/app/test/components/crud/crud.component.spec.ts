import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComponent } from '../../../main/components/crud/view/Crud.component';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { Router } from '@angular/router';
import { AppModule } from '../../../app.module';
import { OaspModule } from '../../../oasp/oasp.module';

let comp: CrudComponent;
let fixture: ComponentFixture<CrudComponent>;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('CrudComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   SecurityService,
                   { provide: Router, useClass: RouterStub } ]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(CrudComponent);
    comp = fixture.componentInstance;

    spyOn(comp, 'ngOnInit').and.callFake(() => {
      comp.security = true;
      comp.i18n = comp.oaspI18n.getI18n();
      comp.myState = -1;
      comp.headers = [comp.i18n.tables.number, comp.i18n.tables.state, comp.i18n.tables.waiter];
      comp.attributeNames = ['number', 'state', 'waiter'];
      comp.states = ['FREE', 'OCCUPIED', 'RESERVED'];
    });

    oaspI18n = new OaspI18n();
    i18n = oaspI18n.getI18n();

    fixture.detectChanges();

  });

  it('I18n has been defined', () => {
    expect(comp.i18n).toBeDefined();
  });

});
