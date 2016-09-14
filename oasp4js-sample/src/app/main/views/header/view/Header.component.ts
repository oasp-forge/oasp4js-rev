import { Component } from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from "@angular/router";
import {languages} from '../../../resources/languages/Languages.resource'
import {User} from '../../../models/user/User.model';
import {OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import {LanguageSelector} from '../../../../oasp/oasp-ui/language-selector/language-selector.component';
import {LoginService} from '../../login/service/Login.service';

@Component({
    selector: 'header',
    templateUrl: 'app/main/views/header/view/Header.component.html',
    inputs: ["logged", "user"],
    providers: [OaspI18n, LoginService],
    directives: [ROUTER_DIRECTIVES, LanguageSelector]
})

export class HeaderComponent {
    logged: boolean = false;
    user: User;
    dropmenu:boolean = true;
    i18n;
    languages;

    constructor(private router: Router, private loginService:LoginService, private oaspI18n: OaspI18n){
        this.languages = languages;
        this.i18n = oaspI18n.getI18n();
    }

    changeLanguage(code){
      this.oaspI18n.changeLanguage(code);
    }

    logOff(){
      this.loginService.logOut();
      this.router.navigate(['/'])
    }
}
