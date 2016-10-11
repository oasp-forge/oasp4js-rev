import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OaspI18n } from '../../oasp-i18n/oasp-i18n.service';

@Component({
  selector: 'app-search-panel',
  templateUrl: 'Search-panel.component.html'
})

export class SearchPanelComponent {
  @Input('searchInputs') searchInputs;
  @Output('searchValues') searchValues = new EventEmitter();
  search = [];
  i18n;

  constructor(oaspI18n: OaspI18n) {
      this.i18n = oaspI18n.getI18n();
  }

  clearForm() {
    for (let i = 0 ; i < this.searchInputs.length ; i++ ) {
        this.searchInputs[i].value = '';
    }
    this.doSearch();
  }

  doSearch() {
      this.searchInputs.forEach(element => this.search.push(element.value));
      this.searchValues.emit(this.search);
  }
}
