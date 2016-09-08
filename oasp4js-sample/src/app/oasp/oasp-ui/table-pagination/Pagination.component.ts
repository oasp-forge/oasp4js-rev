import {Component, OnChanges, EventEmitter} from '@angular/core'
import { Http, Response,Headers } from '@angular/http';

@Component({
  selector:'pagination',
  templateUrl:'app/oasp/oasp-ui/table-pagination/Pagination.component.html',
  inputs:['list', 'path', 'initPaginationParams'],
  outputs: ['paginationList']
})

export class PaginationComponent{

  showList;
  list;
  path;
  initPaginationParams;
  paginationData;
  paginationParams;

  currentPage: number = 1;
  pageView: number;

  initRowsPerPage: number;
  rowsPerPage: number = 4;
  numberPages: number;

  paginationList = new EventEmitter();


  constructor(private http:Http){
  }

  ngOnInit(){
      if(this.initPaginationParams && this.initPaginationParams.pagination ){
          this.rowsPerPage = this.initPaginationParams.pagination.size;
      }
      this.currentPage = 1;
      this.pageView = 1;
  }

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

      this.numberPages = Math.ceil(this.list.length / this.rowsPerPage);
    }

      var headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.paginationParams = {
          pagination: {
              size: this.rowsPerPage,
              page: this.currentPage,
              total: true
          }};

      this.http.post(this.path,
                     JSON.stringify(this.paginationParams),
                     {headers: headers})
                                        .map(res => res.json())
                                        .subscribe(data => {
                                            if(data && data.result[0] && data.result[0].order){
                                                this.showList = data.result[0].positions
                                            } else {
                                                this.showList = data.result;
                                            }
                                        })

      if(this.showList && this.showList.length <= 0){
        this.changePage(this.currentPage - 1, 0);
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

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.paginationParams = {
        pagination: {
            size: this.rowsPerPage,
            page: this.currentPage,
            total: true
        }};

    this.http.post(this.path,
                   JSON.stringify(this.paginationParams),
                   {headers: headers})
                                      .map(res => res.json())
                                      .subscribe(data => {
                                          if(data && data.result[0] && data.result[0].order){
                                              this.showList = data.result[0].positions
                                          } else {
                                              this.showList = data.result;
                                          }
                                      })
  }

}
