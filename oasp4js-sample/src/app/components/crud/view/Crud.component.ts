import {Component} from '@angular/core'
import {CrudService} from '../service/Crud.service'
import {Table} from '../../../models/table/Table.model'
import {DetailsComponent} from '../../details/view/Details.component'
import {Command} from '../../../models/command/Command.model'
import {PaginationComponent} from '../../../oasp/oasp-ui/table-pagination/Pagination.component'
import { ModalDialogComponent } from '../../../oasp/oasp-ui/modal-dialog/modal-dialog.component'
import { GridTableComponent } from '../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import { FilterPanelComponent } from '../../../oasp/oasp-ui/filters-panel/view/Filters-panel.component'

@Component({
  selector:'crud',
  templateUrl:'app/components/crud/view/Crud.component.html',
  providers:[CrudService],
  directives:[DetailsComponent, PaginationComponent, ModalDialogComponent, GridTableComponent, FilterPanelComponent],
})

export class CrudComponent{

  public selectedTable = new Table(0,"","",this.arr);

  returnThisValue(value){
    return value;
  }

  public tables:Table[];
  public headers: string[] = ["Table number","State", "Waiter"];
  public attributeNames: string[] = ["number", "state", "waiter"];

  public showTables: Table[];
  public tablesPerPage: number = 4;

  public sortIconState:boolean = false;
  public sortIconStyle = ["glyphicon glyphicon-chevron-down","glyphicon glyphicon-chevron-down","glyphicon glyphicon-chevron-down"];
  public hideModalDialog = true;

  arr:Command[];

  public myState;

  public _commands:Command[];

  public modalHeader:string;

  constructor(
    private crudService:CrudService
  ){
    this.tables = crudService.getTables();
    this.myState = -1;
  }

  sortColumn(column:number, name:string){

    if(this.sortIconStyle[column] === "glyphicon glyphicon-chevron-up"){
        this.sortIconStyle[column] = "glyphicon glyphicon-chevron-down";
        this.tables = this.crudService.getTablesOrderBy(-1, name);
    } else {
        this.sortIconStyle[0] = "glyphicon glyphicon-chevron-down";
        this.sortIconStyle[1] = "glyphicon glyphicon-chevron-down";
        this.sortIconStyle[2] = "glyphicon glyphicon-chevron-down";
        this.sortIconStyle[column] = "glyphicon glyphicon-chevron-up";
        this.tables = this.crudService.getTablesOrderBy(1, name);
    }
  }

  openEditModal(){
    document.getElementById("modal").hidden = !document.getElementById("modal").hidden;
  }

  openEdition(){
    this.hideModalDialog = !this.hideModalDialog;
  }

  searchFilters(filters){
    this.tables = this.crudService.applyFilters(filters);
  }

  pagination(value){
    this.myState = -1;
    this.showTables = value;
  }

  reserve(){
    this.crudService.reserve(this.selectedTable);
    this.myState = 3;
  }

  cancelReservation(){
    this.crudService.cancelReservation(this.selectedTable);
    this.myState = 1;
  }

  occupy(){
    this.crudService.occupy(this.selectedTable);
    this.myState = 2;
  }

  free(){
    this.crudService.free(this.selectedTable);
    this.myState = 1;
  }

  rowSelected(valor){
    if(!valor){
      this.selectedTable = new Table(0,"","",this.arr);
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
      // this.openEditModal();
      this.myState = -1;
    } else {
      this.selectedTable = valor;
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
      this._commands = JSON.parse(JSON.stringify(this.selectedTable.commands));
      if(this.selectedTable.state === "FREE"){
        this.myState = 1;
      }
      else if(this.selectedTable.state === "OCCUPIED"){
        this.myState = 2;
      }
      else if(this.selectedTable.state === "RESERVED"){
        this.myState = 3;
      }
    }
  }

}
