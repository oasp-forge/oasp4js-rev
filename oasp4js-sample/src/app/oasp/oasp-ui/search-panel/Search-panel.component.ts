import {Component, ElementRef, ViewChild, OnChanges, EventEmitter} from '@angular/core'
import {OaspI18n} from '../../oasp-i18n/oasp-i18n.service';

@Component({
  selector:'search-panel',
  templateUrl:'app/oasp/oasp-ui/search-panel/Search-panel.component.html',
  providers: [OaspI18n],
  inputs: ["searchInputs"],
  outputs: ["searchValues"]
})

export class SearchPanelComponent implements OnChanges{

  searchInputs;
  search;
  searchValues = new EventEmitter();
  i18n

  constructor(oaspI18n: OaspI18n){
      this.i18n = oaspI18n.getI18n();
  }

  ngOnChanges(){
      if(this.searchInputs){
          this.search = this.searchInputs;
      }
  }

  clearForm(){
    for(let i = 0 ; i < this.search.length ; i++ ){
        this.search[i].value = "";
    }
  }

  doSearch(){
    let values = [];
    for(let i = 0 ; i < this.search.length ; i++ ){
        values.push(this.search[i].value);
    }
    this.searchValues.emit(values);
  }
}
