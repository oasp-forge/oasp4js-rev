import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {languages} from '../../../resources/languages/Languages.resource'
import {ROUTER_DIRECTIVES} from "@angular/router";
import {User} from '../../../models/user/User.model';
import {i18n} from '../../../i18n'
import {I18n} from '../../../i18n'

@Component({
    selector: 'header',
    templateUrl: 'app/main/views/header/view/Header.component.html',
    inputs: ["logged", "user"],
    outputs: ["logOffEvent"],
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {
    logged: boolean = false;
    user: User;
    dropmenu:boolean = true;
    i18n;

    currentLanguage = languages[0];
    optionLanguage = languages[1];

    logOffEvent = new EventEmitter<boolean>();

    constructor(private myI18n: I18n){
        this.i18n = i18n[0];
    }

    openMenu(){
      this.dropmenu = !this.dropmenu;
    }

    changeLanguage(){

      this.myI18n.changeLanguage(this.optionLanguage.code);

      let aux = this.currentLanguage;
      this.currentLanguage = this.optionLanguage;
      this.optionLanguage = aux;

      this.dropmenu = !this.dropmenu;

    }

    logOff(){
      this.logOffEvent.emit(false);
    }
}
