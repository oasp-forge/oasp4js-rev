import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { GridTableComponent } from '../../../../oasp/oasp-ui/grid-table/Grid-table.component';

let comp: GridTableComponent;
let fixture: ComponentFixture<GridTableComponent>;
let headerSearch: DebugElement[];
let headerElements: HTMLElement[] = [];
let expectedHeaderNames;

describe('GridTableComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTableComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(GridTableComponent);
    comp = fixture.componentInstance;

    expectedHeaderNames = ['attribute1', 'attribute2', 'attribute3'];
    comp.attributeNames = expectedHeaderNames;
    comp.headers = ['Testh1', 'Testh2', 'Testh3'];
    fixture.detectChanges();

    headerSearch = fixture.debugElement.queryAll(By.css('th'));
    headerSearch.forEach(element => headerElements.push(element.nativeElement.textContent.trim()));
  });

  it('headers corresponds with table headers', () => {
    expect(headerElements).toEqual(comp.headers);
  });

  it('number of headers should be equal to number of attributes', () => {
    expect(comp.attributeNames.length).toEqual(comp.headers.length);
  });

});
