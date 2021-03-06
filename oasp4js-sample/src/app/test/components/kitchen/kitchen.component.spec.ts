import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenComponent } from '../../../main/components/kitchen/view/Kitchen.component';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { Router } from '@angular/router';
import { AppModule } from '../../../app.module';
import { OaspModule } from '../../../oasp/oasp.module';

let comp: KitchenComponent;
let fixture: ComponentFixture<KitchenComponent>;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('KitchenComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   SecurityService,
                   { provide: Router, useClass: RouterStub } ]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(KitchenComponent);
    comp = fixture.componentInstance;

    spyOn(comp, 'ngOnInit').and.callFake(() => {
      comp.security = true;
      comp.i18n = comp.oaspI18n.getI18n();
      comp.headers = [comp.i18n.kitchen.id, comp.i18n.kitchen.orderID, comp.i18n.kitchen.offerName,
                      comp.i18n.kitchen.mealName, comp.i18n.kitchen.sideDishName];
    });

    oaspI18n = new OaspI18n();
    i18n = oaspI18n.getI18n();

    fixture.detectChanges();

  });

  it('I18n has been defined', () => {
    expect(comp.i18n).toBeDefined();
  });

});
