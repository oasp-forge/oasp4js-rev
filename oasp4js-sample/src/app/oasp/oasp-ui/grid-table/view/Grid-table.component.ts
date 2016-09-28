import {Component, EventEmitter} from '@angular/core'
import {GridtableService} from '../service/Grid-table.service'

@Component({
  selector:'grid-table',
  templateUrl:'Grid-table.component.html',
  inputs:['headers', 'attributeNames', 'dataInput'],
  outputs:['objSelected'],
  providers:[GridtableService]
})

export class GridTableComponent{

    headers;
    attributeNames;
    dataInput;

    public rowsData = [];
    public attributesNames = [];
    public tableHeaders = [];

    public selection;
    objSelected = new EventEmitter();
    public sortIconStyle = [];

    constructor(private gridtableService : GridtableService){
    }

    ngOnChanges(){
        this.attributesNames = this.attributeNames;
        this.tableHeaders = this.headers;
        this.rowsData = this.dataInput;
        this.selection = undefined;
        if(this.sortIconStyle.length === 0){
            for(let i = 0 ; i < this.tableHeaders.length; i++){
                this.sortIconStyle.push("IconArrowDown");
            }
        }
    }

    sortColumn(column:number, name:string){
        if(this.sortIconStyle[column] === "IconArrowUp"){
            this.sortIconStyle[column] = "IconArrowDown";
            this.rowsData = this.gridtableService.getTablesOrderBy(-1, name, this.rowsData);
        } else {
            for(let i = 0 ; i < this.tableHeaders.length; i++){
                this.sortIconStyle[i] = "IconArrowDown";
            }
            this.sortIconStyle[column] = "IconArrowUp";
            this.rowsData = this.gridtableService.getTablesOrderBy(1, name, this.rowsData);
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
