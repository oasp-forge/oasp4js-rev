import {Component, Output, EventEmitter, OnChanges, OnInit} from '@angular/core'

import {Table} from '../../../models/table/Table.model'
import {Offer} from '../../../models/offer/Offer.model'
import {OrderPosition} from '../../../models/orderposition/Orderposition.model'

import {DetailsService} from '../service/Details.service'

import {PaginationComponent} from '../../../../oasp/oasp-ui/table-pagination/Pagination.component'
import {GridTableComponent} from '../../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {DetailsRestService} from '../service/Details.service.rest'

@Component({
  selector:'tableDetails',
  templateUrl:'app/main/views/details/view/Details.component.html',
  inputs:['parentTable'],
  providers:[DetailsService],
  outputs:['resultEvent', 'closeWindowEvent'],
  directives:[PaginationComponent, GridTableComponent],
})

export class DetailsComponent implements OnInit{
  resultEvent:EventEmitter<Table> = new EventEmitter<Table>();
  closeWindowEvent = new EventEmitter();



  positionsPath = "http://10.68.8.26:8081/oasp4j-sample-server/services/rest/salesmanagement/v1/order/search"

  public headers: string[] = ["number","description", "state", "price", "Comment"];
  public attributeNames: string[] = ["id", "offerName", "state", "price", "comment"];

  public parentTable:Table;
  public offers = [];
  public offerToAdd = null;
  public selectedPosition = null;
  public viewMenu: boolean = true;

  public showPositions: OrderPosition[];

  public positions: OrderPosition[] = [];
  public order;

  constructor(private detailsRestService: DetailsRestService, private detailsService:DetailsService){}

  ngOnInit(){
      this.detailsRestService.getPositions(this.parentTable.id).subscribe(data => {this.positions = data.result[0].positions; this.order = data.result[0].order});
      this.detailsRestService.getMenus().subscribe(data => this.offers = data);
  }

  openMenu(){
    this.viewMenu = !this.viewMenu;
  }

  clickedRow(valor){
      this.selectedPosition = valor;
  }

  addCommand(){
      this.viewMenu = !this.viewMenu;
      this.positions.push(new OrderPosition(undefined, 0, "", undefined, this.offerToAdd.id, this.offerToAdd.name, this.offerToAdd.price,'ORDERED', undefined, undefined));
      this.resetValues();
  }

  removeCommand(){
      this.positions.splice(this.positions.indexOf(this.selectedPosition),1);
  }

  resetValues(){
      this.selectedPosition = null;
      this.offerToAdd = null;
  }

  pagination(value){
      this.showPositions = value;
  }

  cancel(){
      this.resultEvent.emit(this.parentTable);
      this.closeWindowEvent.emit(false);
  }

  submit(){
      this.resultEvent.emit(this.parentTable);
      this.detailsRestService.updateOrder(this.order, this.positions);
      this.closeWindowEvent.emit(false);
  }

}
