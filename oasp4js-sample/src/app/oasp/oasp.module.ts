import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridTableComponent } from './oasp-ui/grid-table/view/Grid-table.component'

import { Collapse } from './oasp-ui/directives/collapse.component.ts';
import { LanguageSelector } from './oasp-ui/language-selector/language-selector.component'
import { ModalDialogComponent } from './oasp-ui/modal-dialog/modal-dialog.component'
import { PaginationComponent } from './oasp-ui/table-pagination/Pagination.component'

import { OaspI18n } from './oasp-i18n/oasp-i18n.service';
import { HttpClient } from './oasp-security/http-client.service';
import { SecurityService } from './oasp-security/oasp-security.service';

import { SearchPanelComponent } from './oasp-ui/search-panel/Search-panel.component'

@NgModule({
  declarations: [
    GridTableComponent,
    LanguageSelector,
    ModalDialogComponent,
    PaginationComponent,
    SearchPanelComponent,
    Collapse
  ],
  imports: [
    CommonModule
  ],
  providers: [
    OaspI18n,
    HttpClient,
    SecurityService
  ],
  exports: [
    GridTableComponent,
    LanguageSelector,
    ModalDialogComponent,
    PaginationComponent,
    SearchPanelComponent,
    Collapse
  ]
})
export class OaspModule { }
