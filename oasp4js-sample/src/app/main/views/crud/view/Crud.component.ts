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
  public paginationPath = "http://10.68.8.26:8081/oasp4j-sample-server/services/rest/tablemanagement/v1/table/search"
  public pageData = {
            pagination: {
              size: 4,
              page: 1,
              total: true
      }};

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

  changeState(state, btn){
      this.selectedTable.state = state;
      this.crudRestService.saveTable(this.selectedTable);
      this.myState = btn;
  }

  rowSelected(valor){
    if(!valor){
      this.selectedTable = new Table(0,"","",this.arr);
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
      this.myState = -1;
    } else {
      this.selectedTable = valor;
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
    //   this._commands = JSON.parse(JSON.stringify(this.selectedTable.commands));
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
