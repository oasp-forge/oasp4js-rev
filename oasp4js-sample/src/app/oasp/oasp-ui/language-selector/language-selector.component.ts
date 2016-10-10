import { Component, Input, Output, OnChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OaspI18n } from '../../oasp-i18n/oasp-i18n.service';

@Component({
    selector: 'oasp-language-selector',
    templateUrl: 'language-selector.component.html'
})

export class LanguageSelectorComponent implements OnChanges {

    @Input('list') list;
    @Output('changeLanguageEvent') changeLanguageEvent = new EventEmitter();

    public currentLanguage;
    public optionLanguages;
    public dropmenu;
    public i18n;
    public selectedLanguage;

    hideModalDialog = false;

    constructor(private oaspI18n: OaspI18n) {
        this.i18n = this.oaspI18n.getI18n();
        this.dropmenu = true;
    }

    ngOnChanges() {
        if (this.list) {
            this.optionLanguages = this.list.slice();
            this.currentLanguage = this.list.find((language) => language.code === this.oaspI18n.getCookie('lang'));
            this.optionLanguages.splice(this.optionLanguages.indexOf(this.currentLanguage), 1);
        }
    }

    openCloseMenu() {
        this.dropmenu = !this.dropmenu;
    }

    changeLanguage(selected) {
        this.openCloseMenu();
        this.hideModalDialog = true;
        this.selectedLanguage = selected;
    }

    cancel() {
        this.hideModalDialog = false;
    }

    confirm() {
        this.currentLanguage = this.selectedLanguage;
        this.optionLanguages = this.list.slice();
        this.optionLanguages.splice(this.optionLanguages.indexOf(this.currentLanguage), 1);

        this.changeLanguageEvent.emit(this.currentLanguage.code);
    }

}
