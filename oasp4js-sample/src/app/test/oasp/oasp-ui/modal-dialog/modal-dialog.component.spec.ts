import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModalDialogComponent } from '../../../../oasp/oasp-ui/modal-dialog/modal-dialog.component';

let comp: ModalDialogComponent;
let fixture: ComponentFixture<ModalDialogComponent>;
let Del: DebugElement;
let htmlEl: HTMLElement;

describe('ModalDialogComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDialogComponent ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDialogComponent);
    comp = fixture.componentInstance;

    comp.title = 'modal-title';
    fixture.detectChanges();

    Del  = fixture.debugElement.query(By.css('h3'));
    htmlEl = Del.nativeElement;

  });

  it('Title has been defined', () => {
    expect(htmlEl.textContent).toBeTruthy();
  });

  it('Input title should be equal to modal title', () => {
    expect(htmlEl.textContent).toEqual(comp.title);
  });
});
