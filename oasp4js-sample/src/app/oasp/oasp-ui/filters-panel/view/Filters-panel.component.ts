import {Component, ElementRef, ViewChild, EventEmitter} from '@angular/core'

@Component({
  selector:'search-panel',
  templateUrl:'app/oasp/oasp-ui/filters-panel/view/Filters-panel.component.html',
  outputs: ["searchValues"]
})

export class SearchPanelComponent{

  @ViewChild('filters') form;

  searchValues = new EventEmitter();

  clearForm(){
    for(let i = 0 ; i < this.form.nativeElement.children[0].children.length ; i++ ){
        this.form.nativeElement.children[0].children[i].children[1].value = "";
    }
  }

  search(){
    let values = [];
    for(let i = 0 ; i < this.form.nativeElement.children[0].children.length ; i++ ){
        values.push(this.form.nativeElement.children[0].children[i].children[1].value);
    }
    this.searchValues.emit(values);
    this.clearForm();
  }
}
