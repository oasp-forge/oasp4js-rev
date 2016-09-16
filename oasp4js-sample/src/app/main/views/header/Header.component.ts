import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from "@angular/router";
import { languages } from '../../resources/languages/Languages.resource'
import { User } from '../../models/user/User.model';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { LanguageSelector } from '../../../oasp/oasp-ui/language-selector/language-selector.component';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service'


@Component({
    selector: 'header',
    templateUrl: 'app/main/views/header/Header.component.html',
    inputs: ["logged", "user"],
    providers: [OaspI18n, SecurityService],
    directives: [ROUTER_DIRECTIVES, LanguageSelector]
})

export class HeaderComponent {
    logged: boolean = false;
    user: User;
    dropmenu:boolean = true;
    i18n;
    languages;

    constructor(private securityService:SecurityService, private oaspI18n: OaspI18n){
        this.i18n = oaspI18n.getI18n();
        this.languages = languages;
    }

    changeLanguage(code){
      this.oaspI18n.changeLanguage(code);
    }

    logOff(){
      this.securityService.logOut();
    }
}
