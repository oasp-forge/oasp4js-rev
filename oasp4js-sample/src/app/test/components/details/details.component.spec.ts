import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DetailsComponent } from '../../../main/components/details/view/Details.component';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { GridTableComponent } from '../../../oasp/oasp-ui/grid-table/Grid-table.component';
import { PaginationComponent  } from '../../../oasp/oasp-ui/table-pagination/Pagination.component';
import { DetailsRestService } from '../../../main/components/details/service/Details.service.rest';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { HttpClient} from '../../../oasp/oasp-security/http-client.service';
import { Router } from '@angular/router';
import { Table } from '../../../main/models/table/Table.model';

let comp: DetailsComponent;
let fixture: ComponentFixture<DetailsComponent>;
let titleDe: DebugElement;
let titleEl: HTMLElement;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class HttpClientStub {
  get(url) { return null; }
  post(url) { return null; }
}

describe('DetailsComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent, GridTableComponent, PaginationComponent],
      providers: [ OaspI18n,
                   DetailsRestService,
                   { provide: HttpClient, useClass: HttpClientStub },
                   SecurityService,
                   { provide: Router, useClass: RouterStub } ]
    }).compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(DetailsComponent);
    comp = fixture.componentInstance;

    spyOn(comp, 'ngOnInit').and.callFake(() => {
      comp.i18n = comp.oaspI18n.getI18n();
      comp.headers = [comp.i18n.details.number, comp.i18n.details.description, comp.i18n.details.state,
      comp.i18n.details.price, comp.i18n.details.comment];
      comp.attributeNames = ['id', 'offerName', 'state', 'price', 'comment'];
    });

    oaspI18n = new OaspI18n();
    i18n = oaspI18n.getI18n();
    comp.parentTable = new Table(1, 0, 1, 'FREE', 0);

    fixture.detectChanges();


    titleDe = fixture.debugElement.query(By.css('p'));
    titleEl = titleDe.nativeElement;


  });

  it('Input headers should be equal to table headers', () => {
    expect(titleEl.textContent).toContain(comp.parentTable.state);
  });

});
