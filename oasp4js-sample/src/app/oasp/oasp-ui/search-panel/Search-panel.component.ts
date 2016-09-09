import {Component, ElementRef, ViewChild, OnChanges, EventEmitter} from '@angular/core'
import {i18n} from '../../../main/i18n'

@Component({
  selector:'search-panel',
  templateUrl:'app/oasp/oasp-ui/search-panel/Search-panel.component.html',
  inputs:["searchInputs"],
  outputs: ["searchValues"]
})

export class SearchPanelComponent implements OnChanges{

  searchInputs;
  search;
  searchValues = new EventEmitter();
  i18n

  constructor(){
      this.i18n = i18n[0];
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
