import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LanguageSelectorComponent } from '../../../../oasp/oasp-ui/language-selector/language-selector.component';
import { ModalDialogComponent } from '../../../../oasp/oasp-ui/modal-dialog/modal-dialog.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

let comp: LanguageSelectorComponent;
let fixture: ComponentFixture<LanguageSelectorComponent>;
let languageDe, menuDe, modalOpenDe, modalCloseDe: DebugElement;

describe('LanguageSelectorComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSelectorComponent, ModalDialogComponent ],
      providers: [ OaspI18n ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    comp = fixture.componentInstance;

    comp.list = [
      { name: 'English', code : 'en', iconUrl: ''},
      { name: 'Deutsch', code : 'de', iconUrl: ''},
      { name: 'Español', code : 'es', iconUrl: ''}
    ];

    comp.optionLanguages = comp.list.slice();
    comp.currentLanguage = comp.list[0];
    comp.selectedLanguage = comp.currentLanguage;

    fixture.detectChanges();

    languageDe = fixture.debugElement.query(By.css('li'));
    menuDe = fixture.debugElement.query(By.css('button'));

    comp.hideModalDialog = true;
    fixture.detectChanges();

    modalOpenDe = fixture.debugElement.query(By.css('.btn-primary'));
    modalCloseDe = fixture.debugElement.query(By.css('.btn-warning'));
  });

  it('modal confirmation dialog should be opened when clicked on list', () => {
    languageDe.triggerEventHandler('click', null);
    expect(comp.hideModalDialog).toBe(true);
  });

  it('modal should close when clicked on cancel', () => {
    modalCloseDe.triggerEventHandler('click', null);
    expect(comp.hideModalDialog).toBe(false);
  });

  it('list should be open/close when clicked on the button language', () => {
    let previousState = comp.dropmenu;
    menuDe.triggerEventHandler('click', null);
    expect(comp.dropmenu).toBe(!previousState);
  });

  it('Ouput value should give selected language code correctly', () => {
    let changeLanguage;
    comp.changeLanguageEvent.subscribe((select) => changeLanguage = select);

    modalOpenDe.triggerEventHandler('click', null);
    expect(changeLanguage).toBe(comp.currentLanguage.code);
  });

});
