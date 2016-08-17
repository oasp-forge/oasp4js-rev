import { Injectable } from '@angular/core'; 
import { Table } from './table';
import { TableManagementRestService } from './table-mgmt.rest.service';
import { TABLES } from './mock-tables';   
import { Observable } from 'rxjs/Rx';
/*
  This class represent a bridge between the components and all service classes (http, mocks, etc). In this case the class is like a sample with a mock TABLES. In the future we need to use TableManagementRestService
*/ 
@Injectable()
export class TableService { 

  constructor(private _tableManagementRestService:TableManagementRestService) { }

  /*getTable(id:number){  
    var result;
    for(var i = 0; i < TABLES.length; i++){
      if(i == id)
        result = TABLES[i];
    }
    debugger
    return Promise.resolve(result);
  }*/

  getTable(id:number) {
    var JSONTable:any;
    
    return this._tableManagementRestService.getTable(101).map(table => {this.toTable(table)});
  }

  toTable(JSONTable:any){  
    return new Table(JSONTable.id,JSONTable.waiterId,JSONTable.state);
  }

  /*
  getTable(id:number){  
    return Promise.resolve(TABLES).then(
      tables => tables.filter(table => table.id === id)[0]
    ); 
  }*/

  getTables(){
    return Promise.resolve(TABLES);
  }

  getPaginatedTables(pagenumber:number, pagesize:number){
    return Promise.resolve(TABLES); //There are not pages in this mock
  }

  createTable(id:number, table:Table){
    table.id = id;
    TABLES.push(table); 
  }

  deleteTable(table:Table){ 
    var index = TABLES.indexOf(table);
    if (index != -1) {
        TABLES.splice(index, 1);
    }
  }

  saveTable(table:Table){
    var index = TABLES.indexOf(table);
    if (index != -1) {
        TABLES.splice(index, 1, table);
    }else{
      TABLES.push(table);
    }
  } 

  reserve(table:Table){
    var index = TABLES.indexOf(table);
    if (index != -1) {
        TABLES[index].state = "RESERVED";
    }
  }

  cancelReservation(table:Table){
    var index = TABLES.indexOf(table);
    if (index != -1) {
        TABLES[index].state = "FREE";
    }
  }

  occupy(table:Table){
    var index = TABLES.indexOf(table);
    if (index != -1) {
        TABLES[index].state = "OCCUPIED";
    }
  }

  free(table:Table){
    var index = TABLES.indexOf(table);
    if (index != -1) {
        TABLES[index].state = "FREE";
    }
  }

}
