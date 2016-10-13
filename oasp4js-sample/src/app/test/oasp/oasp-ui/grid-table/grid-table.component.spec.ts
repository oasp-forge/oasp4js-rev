import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridTableComponent } from '../../../../oasp/oasp-ui/grid-table/Grid-table.component';

let comp: GridTableComponent;
let fixture: ComponentFixture<GridTableComponent>;
let headerSearch: DebugElement[];
let headerElements: HTMLElement[] = [];
let rowSearch: DebugElement;

describe('GridTableComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTableComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTableComponent);
    comp = fixture.componentInstance;

    comp.attributeNames = ['attribute1', 'attribute2', 'attribute3'];
    comp.headers = ['Testh1', 'Testh2', 'Testh3'];
    fixture.detectChanges();

    headerSearch = fixture.debugElement.queryAll(By.css('th'));
    headerSearch.forEach(element => headerElements.push(element.nativeElement.textContent.trim()));

    comp.dataInput = [];
    comp.dataInput.push({att1: 'value1', att2: 'value2' });
    fixture.detectChanges();

    rowSearch  = fixture.debugElement.query(By.css('tr'));
  });

  it('Input headers should be equal to table headers', () => {
    expect(headerElements).toEqual(comp.headers);
  });

  it('Number of headers should be equal to number of attributes', () => {
    expect(comp.attributeNames.length).toEqual(comp.headers.length);
  });

  it('Row should raise selected event when clicked', () => {
    let selectedObj;
    comp.objSelected.subscribe((select: Object) => selectedObj = select);
    comp.selection = comp.dataInput[0];

    rowSearch.triggerEventHandler('click', null);
    expect(selectedObj).toBe(comp.selection);
  });

  it('Header should raise sort event when clicked', () => {
    let selectedSort;
    comp.sort.subscribe((select) => selectedSort = select);
    comp.sorting = [{name: 'attribute1', direction: 'DESC'}];
    fixture.detectChanges();

    headerSearch[0].triggerEventHandler('click', null);
    expect(selectedSort).toBe(comp.sorting);
  });

});
