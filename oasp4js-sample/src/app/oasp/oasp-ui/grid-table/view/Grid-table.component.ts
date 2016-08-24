import {Component, OnChanges, EventEmitter} from '@angular/core'
import {GridtableService} from '../service/Grid-table.service'

@Component({
  selector:'grid-table',
  templateUrl:'app/oasp/oasp-ui/grid-table/view/Grid-table.component.html',
  inputs:['headers', 'attributeNames', 'dataInput'],
  outputs:['objSelected'],
  providers:[GridtableService]
})

export class GridTableComponent implements OnChanges{

  headers;
  attributeNames;
  dataInput;

  public rowsData = [];
  public attributesNames = [];
  public tableHeaders = [];

  public selection;
  objSelected = new EventEmitter();

  public sortIconStyle = ["glyphicon glyphicon-chevron-down","glyphicon glyphicon-chevron-down","glyphicon glyphicon-chevron-down"];

  constructor(private gridtableService : GridtableService){
  }

  ngOnChanges(){
    this.attributesNames = this.attributeNames;
    this.tableHeaders = this.headers;
    this.rowsData = this.dataInput;
  }

  sortColumn(column:number, name:string){

    if(this.sortIconStyle[column] === "glyphicon glyphicon-chevron-up"){
        this.sortIconStyle[column] = "glyphicon glyphicon-chevron-down";
        this.rowsData = this.gridtableService.getTablesOrderBy(-1, name, this.rowsData.length);
    } else {
        this.sortIconStyle[0] = "glyphicon glyphicon-chevron-down";
        this.sortIconStyle[1] = "glyphicon glyphicon-chevron-down";
        this.sortIconStyle[2] = "glyphicon glyphicon-chevron-down";
        this.sortIconStyle[column] = "glyphicon glyphicon-chevron-up";
        this.rowsData = this.gridtableService.getTablesOrderBy(1, name, this.rowsData.length);
    }
  }

  clickedRow(valor){
    if(this.selection === valor){
      this.selection = undefined;
    } else {
      this.selection = valor;
    }
    this.objSelected.emit(this.selection);
  }
}
