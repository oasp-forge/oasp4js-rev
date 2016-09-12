import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {languages} from '../../../resources/languages/Languages.resource'
import {ROUTER_DIRECTIVES} from "@angular/router";
import {User} from '../../../models/user/User.model';
import {OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import {LanguageSelector} from '../../../../oasp/oasp-ui/language-selector/language-selector.component';

@Component({
    selector: 'header',
    templateUrl: 'app/main/views/header/view/Header.component.html',
    inputs: ["logged", "user"],
    outputs: ["logOffEvent"],
    providers: [OaspI18n],
    directives: [ROUTER_DIRECTIVES, LanguageSelector]
})

export class HeaderComponent {
    logged: boolean = false;
    user: User;
    dropmenu:boolean = true;
    i18n;
    languages;

    logOffEvent = new EventEmitter<boolean>();

    constructor(private oaspI18n: OaspI18n){
        this.languages = languages;
        this.i18n = oaspI18n.getI18n();
    }

    changeLanguage(code){
      this.oaspI18n.changeLanguage(code);
    }

    logOff(){
      this.logOffEvent.emit(false);
    }
}
