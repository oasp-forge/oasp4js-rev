import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginationComponent } from '../../../../oasp/oasp-ui/table-pagination/Pagination.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

let comp: PaginationComponent;
let fixture: ComponentFixture<PaginationComponent>;
let Del: DebugElement;
let htmlEl: HTMLElement;
let buttonsDe: DebugElement[];

describe('PaginationComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      providers: [ OaspI18n ]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(PaginationComponent);
      comp = fixture.componentInstance;

      comp.numberPages = 5;
      fixture.detectChanges();

      Del  = fixture.debugElement.query(By.css('.selected'));
      htmlEl = Del.nativeElement;

      buttonsDe = fixture.debugElement.queryAll(By.css('button'));
  });

  it('currentPage starts selected', () => {
      expect(htmlEl.textContent).toEqual(comp.currentPage.toString());
  });

  it('Next button should increment currentPage', () => {
      let previousCurrentPage = comp.currentPage;
      buttonsDe[3].triggerEventHandler('click', null);
      expect(comp.currentPage).toEqual(previousCurrentPage + 1);
  });

  it('Previous button should decrement currentPage', () => {
      comp.currentPage = 2;
      comp = fixture.componentInstance;
      let previousCurrentPage = comp.currentPage;
      buttonsDe[1].triggerEventHandler('click', null);
      expect(comp.currentPage).toEqual(previousCurrentPage - 1);
  });

  it('Next button on a fourth page should increment pageView', () => {
      let previousPageView = comp.pageView;
      comp.currentPage = 4;
      comp = fixture.componentInstance;
      buttonsDe[7].triggerEventHandler('click', null);
      expect(comp.pageView).toEqual(previousPageView + 4);
  });

  it('Previous button on a first page should decrement pageView', () => {
      comp.currentPage = 5;
      comp.pageView = 5;
      comp = fixture.componentInstance;
      let previousPageView = comp.pageView;
      buttonsDe[1].triggerEventHandler('click', null);
      expect(comp.pageView).toEqual(previousPageView - 4);
  });

  it('Last button should move currentPage to the last page', () => {
      let lastPage = comp.numberPages - (comp.numberPages % 4) + 1;
      buttonsDe[8].triggerEventHandler('click', null);
      expect(comp.currentPage).toEqual(lastPage);
  });

  it('Pagination output should return current currentPage', () => {
      comp.currentPage = 3;
      comp = fixture.componentInstance;
      let pageOutput;
      comp.eventCurrentPage.subscribe((select) => pageOutput = select);
      fixture.detectChanges();

      Del.triggerEventHandler('click', null);
      expect(pageOutput).toBe(comp.currentPage);
  });

});
