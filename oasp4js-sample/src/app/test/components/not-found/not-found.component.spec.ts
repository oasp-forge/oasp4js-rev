import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundComponent } from '../../../main/components/not-found/not-found.component';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { Router } from '@angular/router';
import { AppModule } from '../../../app.module';
import { OaspModule } from '../../../oasp/oasp.module';

let comp: NotFoundComponent;
let fixture: ComponentFixture<NotFoundComponent>;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('NotFoundComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   { provide: Router, useClass: RouterStub } ]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(NotFoundComponent);
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
