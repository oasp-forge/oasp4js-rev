import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {languages} from '../../../resources/languages/Languages.resource'

@Component({
    selector: 'header',
    templateUrl: 'app/components/header/view/Header.component.html',
    inputs: ["logged", "username"],
    outputs: ["logOffEvent"]
})

export class HeaderComponent {
    logged: boolean = false;
    username: string;
    dropmenu:boolean = false;

    currentIcon:string = languages[0].iconUrl;
    currentLanguage: string = languages[0].name;

    optionIcon:string = languages[1].iconUrl;
    optionLanguage: string = languages[1].name;

    logOffEvent = new EventEmitter<boolean>();

    openMenu(){
      this.dropmenu = !this.dropmenu;
      document.getElementById("dropMenuId").hidden = this.dropmenu;
    }

    changeLanguage(){
      let aux = this.currentLanguage;

      this.currentLanguage = this.optionLanguage;
      this.optionLanguage = aux;

      aux = this.currentIcon;
      this.currentIcon = this.optionIcon;
      this.optionIcon = aux;
    }

    logOff(){
      this.logOffEvent.emit(false);
    }
}
