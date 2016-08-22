import {Component} from '@angular/core'
import {CrudService} from '../service/Crud.service'
import {Table} from '../../../models/table/Table.model'
import {DetailsComponent} from '../../details/view/Details.component'
import {Command} from '../../../models/command/Command.model'
import {PaginationComponent} from '../../../oasp/oasp-ui/table-pagination/Pagination.component'
import { ModalDialogComponent } from '../../../oasp/oasp-ui/modal-dialog/modal-dialog.component'
// import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector:'crud',
  templateUrl:'app/components/crud/view/Crud.component.html',
  providers:[CrudService],
  // directives:[DetailsComponent, PaginationComponent, ModalDialogComponent, MODAL_DIRECTIVES],
  directives:[DetailsComponent, PaginationComponent, ModalDialogComponent],
  // viewProviders:[BS_VIEW_PROVIDERS],
})

export class CrudComponent{
  public selectedTable:Table = new Table(0,'','',this.arr, this.arr);
  /********* PRUEBA MODAL DE OASP *************/
  dialog_header:String = "Details for Table #" + this.selectedTable.getNumber().toString();
  public componentLoaded = "tableDetails";

  dialog_buttons:Object = [
    {
        label: 'Accept',
        onClick: function (context) {
          console.log("ACEPTAR");
        },
        isActive: function (context) {
            return true;
        },
        class: 'btn btn-primary',
        hidden: false
    },
    {
        label: 'Cancel',
        onClick: function (context) {
          this.hideModalDialog = !this.hideModalDialog;
        },
        isActive: function (context) {
            return true;
        },
        class: 'btn btn-warning',
        hidden: false
    }
  ];
  /**********************************/

  returnThisValue(value){
    return value;
  }

  public tables:Table[];
  public showTables: Table[];
  public tablesPerPage: number = 4;

  public sortIconState:boolean = false;
  public sortIconStyle = ["glyphicon glyphicon-chevron-down","glyphicon glyphicon-chevron-down","glyphicon glyphicon-chevron-down"];
  public hideModalDialog = true;

  arr:Command[];

  public myState;

  constructor(
    private crudService:CrudService
  ){
    this.tables = crudService.getTables();
    this.myState = 0;
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

  openEdition(){
    this.hideModalDialog = !this.hideModalDialog;
  }

  pagination(value){
    this.selectedTable = new Table(0,'','',this.arr, this.arr);
    this.myState = 0;
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

  clickedRow(valor){
    if(this.selectedTable === valor){
      this.selectedTable = new Table(0,'','',this.arr, this.arr);
      this.myState = 0;
    } else {
      this.selectedTable = valor;
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

  resetTable(valor){
    let index = this.crudService.getTables().indexOf(this.selectedTable);
    this.crudService.getTables()[index] = valor;
  }
}
