import {Component} from '@angular/core'
import {CrudService} from '../service/Crud.service'
import {Table} from '../../../models/table/Table.model'
import {DetailsComponent} from '../../details/view/Details.component'
// import {Command} from '../../../models/command/Command.model'
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

  public selectedTable = new Table(undefined,undefined,undefined,undefined,undefined);
  public paginationPath = "http://10.68.8.26:8081/oasp4j-sample-server/services/rest/tablemanagement/v1/table/search"


  public tables:Table[];
  public headers: string[] = ["Table number","State", "Waiter"];
  public attributeNames: string[] = ["number", "state", "waiter"];
  public states: string[] = ["FREE", "OCCUPIED", "RESERVED"]

  public showTables: Table[];
  public hideModalDialog = false;

  public myState;
  public modalHeader:string;

  public pageData = {
      pagination: {
          size: 4,
          page: 1,
          total: true
      }};

  constructor(private crudService:CrudService, private crudRestService: CrudRestService){
    crudService.getTables().subscribe(data => {this.tables = data});
    this.myState = -1;
  }

  openEditModal(){
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
      this.hideModalDialog = true;
  }

  searchFilters(filters){
      this.tables = this.crudService.applyFilters(filters);
  }

  pagination(value){
      this.myState = -1;
      this.showTables = value;
  }

  changeState(state){
      this.selectedTable.state = state;
      this.crudRestService.saveTable(this.selectedTable);
      this.myState = this.states.indexOf(state) + 1;
  }

  rowSelected(valor){
    if(valor){
        this.selectedTable = valor;
        var a:number;
        this.myState = this.selectedTable.state + 1;
        // this.myState = this.states.indexOf(this.selectedTable.state) + 1;
    } else{
        this.selectedTable = new Table(undefined,undefined,undefined,undefined,undefined);
        this.myState = -1;
    }
  }
}
