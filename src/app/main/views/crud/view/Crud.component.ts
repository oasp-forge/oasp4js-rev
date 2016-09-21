import { Component } from '@angular/core'
import { Table } from '../../../models/table/Table.model'
import { CrudRestService } from '../service/Crud.service.rest';
import { OaspI18n } from '../../../../oasp/oasp-i18n/oasp-i18n.service';
import { SecurityService} from '../../../../oasp/oasp-security/oasp-security.service';

@Component({
  selector:'crud',
  templateUrl:'Crud.component.html',
  providers:[SecurityService, CrudRestService, OaspI18n]
})

export class CrudComponent{

  public selectedTable = new Table(0,undefined,undefined,undefined,undefined);

  public tables:Table[];
  public headers: string[];
  public attributeNames: string[] = ["number", "state", "waiter"];
  public states: string[] = ["FREE", "OCCUPIED", "RESERVED"]

  public hideModalDialog = false;
  public numItems: number;
  public myState;
  public i18n;
  public modalHeader: string;
  public security = true;

  public pageData = {
      pagination: {
          size: 4,
          page: 1,
          total: true
      }};

  constructor(private securityService: SecurityService, private oaspI18n: OaspI18n, private crudRestService: CrudRestService){
      if(!this.securityService.getUser()){
          this.security = false;
          this.securityService.logOut();
      }else {
          this.i18n = oaspI18n.getI18n();
          this.loadTables();
          this.myState = -1;
          this.headers = [this.i18n.tables.number, this.i18n.tables.state, this.i18n.tables.waiter]
      }
  }

  loadTables(){
      this.crudRestService.getTables(this.pageData).subscribe(data => {this.numItems = data.pagination.total; this.tables = data.result});
  }

  openEditModal(){
      this.modalHeader = this.i18n.details.title + this.selectedTable.number;
      this.hideModalDialog = true;
  }

  searchFilters(filters){
      this.crudRestService.applyFilters(filters)
                                    .subscribe(data =>{
                                        this.numItems = data.pagination.total;
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
