import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../table.service'; 
import { Table } from '../table'; 
import { ButtonBarComponent } from '../../oasp/oasp-ui/button-bar/button-bar.component';
 

@Component({
	selector: 'table-mgmt-search',
	templateUrl: './app/table-mgmt/table-search/table-search.component.html',
	styleUrls: ['./app/oasp4js-sample.component.css'],
	directives: [ButtonBarComponent]
})
export class TableSearchComponent implements OnInit{ 

    constructor(private _tableService: TableService) {}

    TABLES:Array<Table>; 
    selectedTable:Table;

    ngOnInit() {    
        this._tableService.getTables().then(tables => this.TABLES = tables);
    }

    openEditDialog = function (tableRow) {
    };

    selectedItems:Object = [];
    maxSize:number = 5;
    totalItems:number;
    numPerPage:number;
    currentPage:number;
  
    onItemClick(position,$event){  
        this.selectedTable = position;

        var e:any = event;
        var table:any = e.target.parentElement.parentElement;
        //debugger

        for(var i = 1; i < table.rows.length; i++){
          table.rows[i].style.color = "";
          table.rows[i].style.backgroundColor  = "";
        }

        e.target.parentElement.style.backgroundColor  = "#5BC0DE";
        e.target.parentElement.style.color = "#FFF";  
    }
	 
    buttonDefs:Object = [
        {
            label: 'Edit',
            onClick: function () {
                
            },
            isActive: function () {
                return this.selectedTable;
            }
        },
        {
            label: 'Reserve',
            onClick: function () {
                this._tableService.reserve(this.selectedTable);
            },
            isActive: function () {
                return this.selectedTable && this.selectedTable.state === 'FREE';
            }
        },
        {
            label: 'Cancel Reservation',
            onClick: function () {
                this._tableService.cancelReservation(this.selectedTable);
            },
            isActive: function () {
                return this.selectedTable && this.selectedTable.state === 'RESERVED';
            }
        },
        {
            label: 'Occupy',
            onClick: function () {
                this._tableService.occupy(this.selectedTable);
            },
            isActive: function () {
                return this.selectedTable && (this.selectedTable.state === 'RESERVED' || this.selectedTable.state === 'FREE');
            }
        },
        {
            label: 'Free',
            onClick: function () {
                this._tableService.free(this.selectedTable);
            },
            isActive: function () {
                return this.selectedTable && this.selectedTable.state === 'OCCUPIED';
            }
        }
    ]; 
  	
    //BUTTONS -> We have a problem with the context if we use oasp-ui button-bar
    onButtonClick(buttonDef) { 
        if (buttonDef && this.isFunction(buttonDef.onClick)) {
            buttonDef.onClick.apply(this);
        }
    }

    isButtonDisabled(buttonDef) { 
        if (buttonDef && this.isFunction(buttonDef.isActive)) {
            return !buttonDef.isActive.apply(this);
        } 
        if (buttonDef && this.isFunction(buttonDef.isNotActive)) {
            return buttonDef.isNotActive.apply(this);
        }
        return true;
    }

    isFunction(functionToCheck) {
  		var getType = {};
    	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  	} 
} 
