import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {languages} from '../../../resources/languages/Languages.resource'
import {currentLang} from '../../../i18n'
import {ROUTER_DIRECTIVES} from "@angular/router";
import {User} from '../../../models/user/User.model';

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

    currentLanguage = languages[0];
    optionLanguage = languages[1];

    logOffEvent = new EventEmitter<boolean>();

    openMenu(){
      this.dropmenu = !this.dropmenu;
    }

    changeLanguage(){

      let aux = this.currentLanguage.name;
      this.currentLanguage.name = this.optionLanguage.name;
      this.optionLanguage.name = aux;

      aux = this.currentLanguage.iconUrl;
      this.currentLanguage.iconUrl = this.optionLanguage.iconUrl;
      this.optionLanguage.iconUrl = aux;

     currentLang[0] = this.currentLanguage.code;

     this.dropmenu = !this.dropmenu;

    }

    logOff(){
      this.logOffEvent.emit(false);
    }
}
