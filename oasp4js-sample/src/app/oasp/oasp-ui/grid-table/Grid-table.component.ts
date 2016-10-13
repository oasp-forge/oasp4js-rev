import {Component, EventEmitter, Input, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-grid-table',
  templateUrl: 'Grid-table.component.html'
})

export class GridTableComponent implements OnChanges {

    @Input('headers') headers;
    @Input('attributeNames') attributeNames;
    @Input('dataInput') dataInput;

    @Output('objSelected') objSelected = new EventEmitter();
    @Output('sort') sort = new EventEmitter();

    attNames = [];

    selection;
    sorting;
    sortIconStyle = [];

    constructor() {};

    ngOnChanges() {
        this.attNames = this.attributeNames;
        this.headers = this.headers;
        this.dataInput = this.dataInput;
        this.selection = undefined;
        if (this.sortIconStyle.length === 0) {
            for (let i = 0 ; i < this.headers.length; i++) {
                this.sortIconStyle.push('IconArrowDown');
            }
        }
    }

    sortColumn(column: number, columnName: string) {
        if (this.sortIconStyle[column] === 'IconArrowUp') {
            this.sortIconStyle[column] = 'IconArrowDown';
            this.sorting = [{name: columnName, direction: 'ASC'}];
            this.sort.emit(this.sorting);
        } else {
            for (let i = 0 ; i < this.headers.length; i++) {
                this.sortIconStyle[i] = 'IconArrowDown';
            }
            this.sortIconStyle[column] = 'IconArrowUp';
            this.sorting = [{name: columnName, direction: 'DESC'}];
            this.sort.emit(this.sorting);
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
