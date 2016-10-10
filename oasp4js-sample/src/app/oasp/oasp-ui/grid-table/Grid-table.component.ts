import {Component, EventEmitter, Input, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'oasp-grid-table',
  templateUrl: 'Grid-table.component.html'
})

export class GridTableComponent implements OnChanges {

    @Input('headers') headers;
    @Input('attributeNames') attributeNames;
    @Input('dataInput') dataInput;

    @Output('objSelected') objSelected = new EventEmitter();
    @Output('sort') sort = new EventEmitter();

    rowsData = [];
    attNames = [];
    tableHeaders = [];

    selection;
    sortIconStyle = [];

    constructor() {};

    ngOnChanges() {
        this.attNames = this.attributeNames;
        this.tableHeaders = this.headers;
        this.rowsData = this.dataInput;
        this.selection = undefined;
        if (this.sortIconStyle.length === 0) {
            for (let i = 0 ; i < this.tableHeaders.length; i++) {
                this.sortIconStyle.push('IconArrowDown');
            }
        }
    }

    sortColumn(column: number, columnName: string) {
        if (this.sortIconStyle[column] === 'IconArrowUp') {
            this.sortIconStyle[column] = 'IconArrowDown';
            let sort = [{name: columnName, direction: 'ASC'}];
            this.sort.emit(sort);
        } else {
            for (let i = 0 ; i < this.tableHeaders.length; i++) {
                this.sortIconStyle[i] = 'IconArrowDown';
            }
            this.sortIconStyle[column] = 'IconArrowUp';
            let sort = [{name: columnName, direction: 'DESC'}];
            this.sort.emit(sort);
        }
    }

    clickedRow(valor) {
        if (this.selection === valor) {
            this.selection = undefined;
        } else {
            this.selection = valor;
        }
        this.objSelected.emit(this.selection);
    }
}
