import {Component} from '@angular/core'
import {CrudService} from '../service/Crud.service'
import {Table} from '../../../models/table/Table.model'
import {DetailsComponent} from '../../details/view/Details.component'
import {Command} from '../../../models/command/Command.model'
import {PaginationComponent} from '../../../oasp/oasp-ui/table-pagination/Pagination.component'

@Component({
  selector:'crud',
  templateUrl:'app/components/crud/view/Crud.component.html',
  providers:[CrudService],
  directives:[DetailsComponent, PaginationComponent]
})

export class CrudComponent{

  public tables:Table[];
  public showTables: Table[];
  public tablesPerPage: number = 4;

  arr:Command[];
  public selectedTable:Table = new Table(0,'','',this.arr, this.arr);
  public myState;

  constructor(
    private crudService:CrudService
  ){
    this.tables = crudService.getTables();
    this.myState = 0;
  }

  openEdition(){

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
}
