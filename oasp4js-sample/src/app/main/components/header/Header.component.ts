import { Component } from '@angular/core';
import { languages } from '../../resources/languages/Languages.resource'
import { User } from '../../models/user/User.model';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service'


@Component({
    selector: 'header',
    templateUrl: 'Header.component.html',
    inputs: ["logged", "user"]
})

export class HeaderComponent {
    logged: boolean;
    user: User;
    dropmenu:boolean;
    i18n;
    languages;

    constructor(private securityService:SecurityService, private oaspI18n: OaspI18n){
        this.i18n = oaspI18n.getI18n();
        this.languages = languages;
        this.logged = false;
        this.dropmenu = true;
    }

    changeLanguage(code){
        this.oaspI18n.changeLanguage(code);
    }

    logOff(){
        this.securityService.logOut();
    }
}
