import {Component, OnChanges, EventEmitter} from '@angular/core'
import {OaspI18n} from '../../oasp-i18n/oasp-i18n.service';

@Component({
  selector:'pagination',
  templateUrl:'app/oasp/oasp-ui/table-pagination/Pagination.component.html',
  providers: [OaspI18n],
  inputs:['numItems', 'rowsPerPage'],
  outputs: ['eventCurrentPage']
})

export class PaginationComponent{

  numItems;
  currentPage:number =1;
  pageView: number = 1;

  rowsPerPage: number;
  numberPages: number;

  eventCurrentPage = new EventEmitter();
  i18n

  constructor(oaspI18n: OaspI18n){
      this.i18n = oaspI18n.getI18n();
  }

  ngOnChanges(){
      if(this.numItems){
          this.numberPages = Math.ceil(this.numItems / this.rowsPerPage);
      } else {
          this.currentPage = 1;
          this.numberPages = 1;
      }
  }

  changePage(page: number, view: number){

    if(page > 0){
      this.currentPage = page;
      if(page < this.pageView){
        this.pageView -= 4;
      }
      if(page > this.pageView + 3){
        this.pageView += 4;
      }
    }

    if(view > 0){
      this.pageView = view;
    }

    this.eventCurrentPage.emit(this.currentPage);
  }

}
