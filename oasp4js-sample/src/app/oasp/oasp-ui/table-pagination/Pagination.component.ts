import {Component, OnChanges, EventEmitter} from '@angular/core'

@Component({
  selector:'pagination',
  templateUrl:'app/oasp/oasp-ui/table-pagination/Pagination.component.html',
  inputs:['numItems', 'currentPage', 'rowsPerPage'],
  outputs: ['eventCurrentPage']
})

export class PaginationComponent{

  numItems;
  currentPage:number;
  pageView: number = 1;

  initRowsPerPage: number;
  rowsPerPage: number;
  numberPages: number;

  eventCurrentPage = new EventEmitter();

  ngOnChanges(){
      if(!this.initRowsPerPage) {
        this.initRowsPerPage = this.rowsPerPage;
      }

      if(this.rowsPerPage > this.numItems){
        this.rowsPerPage = this.numItems;
      } else {
        this.rowsPerPage = this.initRowsPerPage;
      }

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
