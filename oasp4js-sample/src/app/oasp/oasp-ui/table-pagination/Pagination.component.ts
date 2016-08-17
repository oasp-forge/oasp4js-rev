import {Component, OnInit} from '@angular/core'
import {EventEmitter} from '@angular/core'

@Component({
  selector:'pagination',
  templateUrl:'app/oasp/oasp-ui/table-pagination/Pagination.component.html',
  inputs:['list', 'rowsPerPage'],
  outputs: ['listEmitter']
})

export class PaginationComponent implements OnInit{

  list;
  showList;

  currentPage: number = 1;
  pageView: number = 1;

  rowsPerPage: number;
  numberPages: number;

  listEmitter = new EventEmitter();

  ngOnInit(){
    if(this.rowsPerPage > this.list.length){
      this.rowsPerPage = this.list.length;
    }

    this.showList = this.list.slice(0, this.rowsPerPage);

    this.numberPages = Math.ceil(this.list.length / this.rowsPerPage);
    this.listEmitter.emit(this.showList)
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
    this.listEmitter.emit(this.showList)
  }
}
