import { Component, OnInit, Input } from '@angular/core';
import { languages } from '../../resources/languages/Languages.resource';
import { OaspI18n } from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService } from '../../../oasp/oasp-security/oasp-security.service';

@Component({
    selector: 'app-header',
    templateUrl: 'Header.component.html'
})

export class HeaderComponent implements OnInit {
    @Input('logged') logged: boolean;
    @Input('user') user;

    public isCollapsed: boolean = true;
    dropmenu: boolean;
    i18n;
    languages;

    constructor(private securityService: SecurityService, public oaspI18n: OaspI18n) {
    }

    ngOnInit() {
      this.i18n = this.oaspI18n.getI18n();
      this.languages = languages;
      this.logged = false;
      this.dropmenu = true;
    }

    changeLanguage(code) {
        this.oaspI18n.changeLanguage(code);
    }

    logOff() {
        this.securityService.logOut();
        this.isCollapsed = true;
    }

}
