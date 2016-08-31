import {Component, ElementRef, ViewChild, OnChanges, EventEmitter} from '@angular/core'

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
