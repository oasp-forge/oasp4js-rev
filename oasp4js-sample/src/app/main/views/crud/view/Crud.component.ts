import {Component} from '@angular/core'
import {CrudService} from '../service/Crud.service'
import {Table} from '../../../models/table/Table.model'
import {DetailsComponent} from '../../details/view/Details.component'
import {Command} from '../../../models/command/Command.model'
import {PaginationComponent} from '../../../../oasp/oasp-ui/table-pagination/Pagination.component'
import {ModalDialogComponent} from '../../../../oasp/oasp-ui/modal-dialog/modal-dialog.component'
import {GridTableComponent} from '../../../../oasp/oasp-ui/grid-table/view/Grid-table.component'
import {SearchPanelComponent} from '../../../../oasp/oasp-ui/search-panel/Search-panel.component'
import { CrudRestService } from '../service/Crud.service.rest';

@Component({
  selector:'crud',
  templateUrl:'app/main/views/crud/view/Crud.component.html',
  providers:[CrudService],
  directives:[DetailsComponent, PaginationComponent, ModalDialogComponent, GridTableComponent, SearchPanelComponent],
})

export class CrudComponent{

  public selectedTable = new Table(0,"","",this.arr);

  public tables:Table[];
  public headers: string[] = ["Table number","State", "Waiter"];
  public attributeNames: string[] = ["number", "state", "waiter"];

  public showTables: Table[];
  public tablesPerPage: number = 4;
  public hideModalDialog = false;

  arr:Command[];

  public myState;
  public _commands:Command[];
  public modalHeader:string;

  constructor(private crudService:CrudService, private crudRestService: CrudRestService){
    crudService.getTables().subscribe(data => {this.tables = data});
    this.myState = -1;
  }

  openEditModal(){
    debugger
    this.hideModalDialog = true;
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
      this.myState = -1;
    } else {
      this.selectedTable = valor;
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
      this.crudService.getOffers()
          .subscribe(data => {
            this._commands = data
      });
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
