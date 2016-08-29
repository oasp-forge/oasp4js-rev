import {Component, OnChanges, EventEmitter} from '@angular/core'

@Component({
  selector:'pagination',
  templateUrl:'app/oasp/oasp-ui/table-pagination/Pagination.component.html',
  inputs:['list', 'rowsPerPage'],
  outputs: ['paginationList']
})

export class PaginationComponent{

  list;
  showList;

  currentPage: number = 1;
  pageView: number = 1;

  initRowsPerPage: number;
  rowsPerPage: number;
  numberPages: number;

  paginationList = new EventEmitter();

  ngOnChanges(){
    if(this.list){

      if(!this.initRowsPerPage) {
        this.initRowsPerPage = this.rowsPerPage;
      }

      if(this.rowsPerPage > this.list.length){
        this.rowsPerPage = this.list.length;
      } else {
        this.rowsPerPage = this.initRowsPerPage;
      }

      // This should be server-side
      this.showList = this.list.slice(this.rowsPerPage * (this.currentPage - 1), this.rowsPerPage * (this.currentPage - 1) + this.rowsPerPage);
      this.numberPages = Math.ceil(this.list.length / this.rowsPerPage);
      this.paginationList.emit(this.showList);
      // -------

      if(this.showList.length <= 0){
        this.changePage(this.currentPage - 1, 0);
      }

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

    // This should be server-side
    if(this.rowsPerPage * (this.currentPage - 1) < this.rowsPerPage){
      this.showList = this.list.slice(0, this.rowsPerPage);
    } else{
      this.showList = this.list.slice( this.rowsPerPage * (this.currentPage - 1), this.rowsPerPage * (this.currentPage - 1) + this.rowsPerPage);
    }
    this.paginationList.emit(this.showList)
  }
}
