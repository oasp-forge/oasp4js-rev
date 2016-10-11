import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchPanelComponent } from '../../../../oasp/oasp-ui/search-panel/Search-panel.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

let comp: SearchPanelComponent;
let fixture: ComponentFixture<SearchPanelComponent>;
let DelSearch, DelCancel: DebugElement;
let htmlElSearch, htmlElCancel: HTMLElement;

let oaspI18n, i18n;

describe('SearchPanelComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPanelComponent ],
      providers: [ OaspI18n ]
    }).compileComponents();
  }));

  beforeEach(() => {
      fixture = TestBed.createComponent(SearchPanelComponent);
      comp = fixture.componentInstance;

      oaspI18n = new OaspI18n();
      i18n = oaspI18n.getI18n();

      comp.searchInputs = [{name: 'id', value: '1'}, {name: 'state', value: 'FREE'}, {name: 'id', value: '1'}];
      fixture.detectChanges();

      DelSearch  = fixture.debugElement.query(By.css('.btn-primary'));
      htmlElSearch = DelSearch.nativeElement;

      DelCancel  = fixture.debugElement.query(By.css('.btn-warning'));
      htmlElCancel = DelCancel.nativeElement;
  });

  it('buttons should have correctly translated text', () => {
      expect(htmlElSearch.textContent).toEqual(i18n.buttons.searchBtn);
  });

  it('buttons should have correctly translated text', () => {
      expect(htmlElCancel.textContent).toEqual(i18n.buttons.clearBtn);
  });

  it('Output values should be correctly builded', () => {
      let searchValues;
      comp.searchValues.subscribe((select) => searchValues = select);

      comp.search = [];
      comp.searchInputs.forEach(element => comp.search.push(element.value));
      fixture.detectChanges();

      DelSearch.triggerEventHandler('click', null);
      expect(searchValues).toBe(comp.search);
  });

});
