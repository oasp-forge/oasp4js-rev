import {Component, OnInit, OnChanges} from '@angular/core'
import {EventEmitter} from '@angular/core'

@Component({
  selector:'pagination',
  templateUrl:'app/oasp/oasp-ui/table-pagination/Pagination.component.html',
  inputs:['list', 'rowsPerPage'],
  outputs: ['paginationList']
})

export class PaginationComponent implements OnChanges{

  list;
  showList;

  currentPage: number = 1;
  pageView: number = 1;

  rowsPerPage: number;
  numberPages: number;

  paginationList = new EventEmitter();

  ngOnChanges(){
    if(this.rowsPerPage > this.list.length){
      this.rowsPerPage = this.list.length;
    }

    this.showList = this.list.slice(this.rowsPerPage * (this.currentPage - 1), this.rowsPerPage * (this.currentPage - 1) + this.rowsPerPage);

    this.numberPages = Math.ceil(this.list.length / this.rowsPerPage);
    this.paginationList.emit(this.showList)
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

    if(this.rowsPerPage * (this.currentPage - 1) < this.rowsPerPage){
      this.showList = this.list.slice(0, this.rowsPerPage);
    } else{
      this.showList = this.list.slice( this.rowsPerPage * (this.currentPage - 1), this.rowsPerPage * (this.currentPage - 1) + this.rowsPerPage);
    }
    this.paginationList.emit(this.showList)
  }
}
