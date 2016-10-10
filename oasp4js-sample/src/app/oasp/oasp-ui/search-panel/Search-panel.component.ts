import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {OaspI18n} from '../../oasp-i18n/oasp-i18n.service';

@Component({
  selector: 'oasp-search-panel',
  templateUrl: 'Search-panel.component.html'
})

export class SearchPanelComponent implements OnChanges {
  @Input('searchInputs') searchInputs;
  @Output('searchValues') searchValues = new EventEmitter();
  search;
  i18n;

  constructor(oaspI18n: OaspI18n) {
      this.i18n = oaspI18n.getI18n();
  }

  ngOnChanges() {
      if (this.searchInputs) {
          this.search = this.searchInputs;
      }
  }

  clearForm() {
    for (let i = 0 ; i < this.search.length ; i++ ) {
        this.search[i].value = '';
    }
    this.doSearch();
  }

  doSearch() {
      let values = [];
      for (let i = 0 ; i < this.search.length ; i++ ) {
          values.push(this.search[i].value);
      }
      this.searchValues.emit(values);
  }
}
