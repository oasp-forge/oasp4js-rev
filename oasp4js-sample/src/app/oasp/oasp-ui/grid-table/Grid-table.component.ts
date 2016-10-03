import {Component, EventEmitter} from '@angular/core'

@Component({
  selector:'grid-table',
  templateUrl:'Grid-table.component.html',
  inputs:['headers', 'attributeNames', 'dataInput'],
  outputs:['objSelected', 'sort']
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
    sort = new EventEmitter();
    public sortIconStyle = [];

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

    sortColumn(column:number, columnName:string){
        if(this.sortIconStyle[column] === "IconArrowUp"){
            this.sortIconStyle[column] = "IconArrowDown";
            let sort = [{name: columnName, direction: "ASC"}];
            this.sort.emit(sort);
        } else {
            for(let i = 0 ; i < this.tableHeaders.length; i++){
                this.sortIconStyle[i] = "IconArrowDown";
            }
            this.sortIconStyle[column] = "IconArrowUp";
            let sort = [{name: columnName, direction: "DESC"}];
            this.sort.emit(sort);
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
