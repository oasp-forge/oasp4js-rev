import {Component, ElementRef, ViewChild, EventEmitter} from '@angular/core'

@Component({
  selector:'filter-panel',
  templateUrl:'app/oasp/oasp-ui/filters-panel/view/Filters-panel.component.html',
  outputs: ["filterValues"]
})

export class FilterPanelComponent{

  @ViewChild('filters') form;

  filterValues = new EventEmitter();

  clearForm(){
    for(let i = 0 ; i < this.form.nativeElement.children.length ; i++ ){
        this.form.nativeElement.children[i].value = "";
    }
  }

  searchFilters(){
    let filterValues = [];
    for(let i = 0 ; i < this.form.nativeElement.children.length ; i++ ){
        filterValues.push(this.form.nativeElement.children[i].value);
    }
    this.filterValues.emit(filterValues);
  }
}
