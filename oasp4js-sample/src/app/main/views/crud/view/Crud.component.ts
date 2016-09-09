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

  public selectedTable = new Table(0,undefined,undefined,undefined,undefined);

  public tables:Table[];
  public headers: string[] = ["Table number","State", "Waiter"];
  public attributeNames: string[] = ["number", "state", "waiter"];
  public states: string[] = ["FREE", "OCCUPIED", "RESERVED"]

  public hideModalDialog = false;
  public numItems: number;
  public myState;
  public modalHeader:string;

  public pageData = {
      pagination: {
          size: 4,
          page: 1,
          total: true
      }};

  constructor(private crudService:CrudService, private crudRestService: CrudRestService){
    this.loadTables();
    this.myState = -1;
  }

  loadTables(){
      this.crudRestService.getTables(this.pageData).subscribe(data => {this.numItems = data.pagination.total; this.tables = data.result});
  }

  openEditModal(){
      this.modalHeader = "Details of Table #" + this.selectedTable.number;
      this.hideModalDialog = true;
  }

  searchFilters(filters){
      this.crudRestService.applyFilters(filters)
                                    .subscribe(data =>
                                        {this.numItems = data.pagination.total;
                                         this.tables = data.result}
                                    );
  }

  pagination(value){
      this.pageData.pagination.page = value;
      this.loadTables();
  }


  changeState(state){
      this.selectedTable.state = state;
      this.crudRestService.saveTable(this.selectedTable);
      this.myState = this.states.indexOf(state) + 1;
  }

  rowSelected(valor){
    if(valor){
        this.selectedTable = valor;
        this.myState = this.states.indexOf(this.selectedTable.state) + 1;
    } else{
        this.selectedTable = new Table(0,undefined,undefined,undefined,undefined);
        this.myState = -1;
    }
  }
}
