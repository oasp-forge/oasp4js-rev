import { LanguageSelectorComponent } from '../../../../oasp/oasp-ui/language-selector/language-selector.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';

let comp: LanguageSelectorComponent;
let fixture: ComponentFixture<LanguageSelectorComponent>;

describe('language-selector-component', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSelectorComponent ],
      providers: [ OaspI18n ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(LanguageSelectorComponent);
      comp    = fixture.componentInstance;
    });
  }));

  it('aaaaaaaaaaaaa', async(() => {
    expect(comp.dropmenu).toBeTruthy();
  }));

});
