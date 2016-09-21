import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { CrudComponent } from './main/views/crud/view/Crud.component'
import { DetailsComponent } from './main/views/details/view/Details.component'
import { HeaderComponent } from './main/views/header/Header.component'
import { KitchenComponent } from './main/views/kitchen/view/Kitchen.component'
import { LoginComponent } from './main/views/login/login.component'
import { Oasp4jsSampleAppComponent } from './main/views/main/oasp4js-sample.component'
import { GridTableComponent } from './oasp/oasp-ui/grid-table/view/Grid-table.component'
import { LanguageSelector } from './oasp/oasp-ui/language-selector/language-selector.component'
import { ModalDialogComponent } from './oasp/oasp-ui/modal-dialog/modal-dialog.component'
import { SearchPanelComponent } from './oasp/oasp-ui/search-panel/Search-panel.component'
import { PaginationComponent } from './oasp/oasp-ui/table-pagination/Pagination.component'

import { CrudRestService } from './main/views/crud/service/Crud.service.rest'
import { DetailsRestService } from './main/views/details/service/Details.service.rest'
import { KitchenRestService } from './main/views/kitchen/service/Kitchen.service.rest'
import { OaspI18n } from './oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient } from './oasp/oasp-security/http-client.service';
import { SecurityService } from './oasp/oasp-security/oasp-security.service';


@NgModule({
  declarations: [
    Oasp4jsSampleAppComponent,
    CrudComponent,
    DetailsComponent,
    HeaderComponent,
    KitchenComponent,
    LoginComponent,
    GridTableComponent,
    LanguageSelector,
    ModalDialogComponent,
    SearchPanelComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CrudRestService,
    DetailsRestService,
    KitchenRestService,
    OaspI18n,
    HttpClient,
    SecurityService
  ],
  bootstrap: [Oasp4jsSampleAppComponent]
})
export class AppModule { }
