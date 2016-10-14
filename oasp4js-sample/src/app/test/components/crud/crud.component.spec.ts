import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CrudComponent } from '../../../main/components/crud/view/Crud.component';
import { CrudRestService } from '../../../main/components/crud/service/Crud.service.rest';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient} from '../../../oasp/oasp-security/http-client.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';
import { OaspModule } from '../../../oasp/oasp.module';
import { AppModule } from '../../../app.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

let comp: CrudComponent;
let fixture: ComponentFixture<CrudComponent>;
let debugSearch: DebugElement;
let nativeSearch: HTMLElement;
let debugModal: DebugElement;
let nativeModal: HTMLElement;
let debugGrid: DebugElement;
let nativeGrid: HTMLElement;
let oaspI18n: OaspI18n;
let i18n;

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class HttpClientStub {
  get(url) { return null; }
  post(url) { return null; }
}

describe('CrudComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule, OaspModule ],
      providers: [ OaspI18n,
                   CrudRestService,
                   { provide: HttpClient, useClass: HttpClientStub },
                   SecurityService,
                   { provide: Router, useClass: RouterStub }]
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

 it('should have a Search Panel UI component', () => {
   debugSearch  = fixture.debugElement.query(By.css('app-search-panel'));
   nativeSearch = debugSearch.nativeElement;
   expect(nativeSearch.textContent).toBeDefined();
 });

 it('should have a Grid Table UI component', () => {
   debugGrid  = fixture.debugElement.query(By.css('app-grid-table'));
   nativeGrid = debugSearch.nativeElement;
   expect(nativeGrid.textContent).toBeDefined();
 });

 it('should have a Modal Dialog UI component', () => {
   debugModal  = fixture.debugElement.query(By.css('app-modal-dialog'));
   // should not be defined of 'hideModalDialog' variable
   expect(nativeModal).not.toBeDefined();
 });

});
