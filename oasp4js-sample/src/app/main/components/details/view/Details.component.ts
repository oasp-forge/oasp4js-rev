import { Component, EventEmitter } from '@angular/core'
import { Table } from '../../../models/table/Table.model'
import { OrderPosition } from '../../../models/orderposition/Orderposition.model'
import { DetailsRestService } from '../service/Details.service.rest'
import { OaspI18n } from '../../../../oasp/oasp-i18n/oasp-i18n.service';

@Component({
  selector:'tableDetails',
  templateUrl:'Details.component.html',
  inputs:['parentTable'],
  outputs:['resultEvent', 'closeWindowEvent']
})

export class DetailsComponent{
  resultEvent:EventEmitter<Table> = new EventEmitter<Table>();
  closeWindowEvent = new EventEmitter();

  public headers: string[];
  public attributeNames: string[];

  public parentTable:Table;
  public offers = [];
  public offerToAdd = null;
  public selectedPosition = null;
  public viewMenu: boolean = true;

  public numItems: number;
  public positions: OrderPosition[] = [];
  public order;
  public i18n;

  public pageData;

  constructor(private oaspI18n:OaspI18n, private detailsRestService: DetailsRestService){
      this.i18n = oaspI18n.getI18n();
      this.headers = [this.i18n.details.number,this.i18n.details.description, this.i18n.details.state, this.i18n.details.price, this.i18n.details.comment];
      this.attributeNames = ["id", "offerName", "state", "price", "comment"];
  }

  ngOnInit(){
      this.pageData = {
          pagination: {
              size: 4,
              page: 1,
              total: true
          },
          state : "CLOSED",
          tableId : this.parentTable.id,
          sort: [{name: "id", direction: "ASC"}]
        };
      this.loadPositions();
      this.detailsRestService.getMenus().subscribe(data => {
                                                            this.offers = data
                                                            this.detailsRestService.disableLoading();
                                                          });
  }

  loadPositions(){
      this.detailsRestService.getPositions(this.pageData)
                                            .subscribe(data => {
                                                                this.positions = data.result[0].positions;
                                                                this.order = data.result[0].order;
                                                                this.detailsRestService.disableLoading();
                                                              });
  }

  sortColumnBy(sortParam){
    this.pageData.sort = sortParam;
    this.loadPositions();
  }

  openMenu(){
    this.viewMenu = !this.viewMenu;
  }

  pagination(value){
      this.pageData.pagination.total = value;
      this.loadPositions();
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
