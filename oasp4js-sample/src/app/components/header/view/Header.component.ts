import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {languages} from '../../../resources/languages/Languages.resource'
import {ROUTER_DIRECTIVES} from "@angular/router";
import {User} from '../../../models/user/User.model';

@Component({
    selector: 'header',
    templateUrl: 'app/components/header/view/Header.component.html',
    inputs: ["logged", "user"],
    outputs: ["logOffEvent"],
    directives: [ROUTER_DIRECTIVES]
})

export class HeaderComponent {
    logged: boolean = false;
    user: User;
    dropmenu:boolean = true;

    currentIcon:string = languages[0].iconUrl;
    currentLanguage: string = languages[0].name;

    optionIcon:string = languages[1].iconUrl;
    optionLanguage: string = languages[1].name;

    logOffEvent = new EventEmitter<boolean>();

    openMenu(){
        debugger
      this.dropmenu = !this.dropmenu;
    }

    changeLanguage(){
      let aux = this.currentLanguage;

      this.currentLanguage = this.optionLanguage;
      this.optionLanguage = aux;

      aux = this.currentIcon;
      this.currentIcon = this.optionIcon;
      this.optionIcon = aux;

      this.dropmenu = !this.dropmenu;
    }

    logOff(){
      this.logOffEvent.emit(false);
    }
}
