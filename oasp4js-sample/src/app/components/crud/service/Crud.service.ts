import {Injectable} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {tablesList} from '../../../resources/tables/Tables.resource'

@Injectable()
export class CrudService{
  tables : Table[] = tablesList;

  getTables():Table[]{
    return this.tables;
  }

  getTablesOrderByNumber(dir){
    let tables = this.tables.slice();
    tables.sort((n1,n2) => {
      if(dir === "asc"){
        if (n1.number < n2.number) {
            return 1;
        }

        if (n1.number > n2.number) {
            return -1;
        }
      } else {
        debugger
        if (n1.number > n2.number) {
            return 1;
        }

        if (n1.number < n2.number) {
            return -1;
        }
      }

      return 0;
    });

    return tables;
  }

  getTablesOrderByState(dir){
    let tables = this.tables.slice();
    tables.sort((n1,n2) => {
      if(dir === "asc"){
        if (n1.state < n2.state) {
            return 1;
        }

        if (n1.state > n2.state) {
            return -1;
        }
      } else {
        if (n1.state > n2.state) {
            return 1;
        }

        if (n1.state < n2.state) {
            return -1;
        }
      }
      return 0;
    });

    return tables;
  }

  getTablesOrderByWaiter(dir){
    let tables = this.tables.slice();
    tables.sort((n1,n2) => {
      if(dir === "asc"){
        if (n1.waiter < n2.waiter) {
            return 1;
        }

        if (n1.waiter > n2.waiter) {
            return -1;
        }
      } else {
        if (n1.waiter > n2.waiter) {
            return 1;
        }

        if (n1.waiter < n2.waiter) {
            return -1;
        }
      }

      return 0;
    });

    return tables;
  }

  getTableById(id:number):Table{
    let res:Table;
    for(let i = 0; i < this.tables.length; i ++){
      if(this.tables[i].number === id){
        res = this.tables[i];
      }
    }
    return res;
  }

  reserve(table:Table){
    for(let i = 0; i < this.tables.length; i ++){
      if(this.tables[i].getNumber() === table.getNumber()){
        this.tables[i].setState("RESERVED");
      }
    }
  }

  cancelReservation(table:Table){
    for(let i = 0; i < this.tables.length; i ++){
      if(this.tables[i].getNumber() === table.getNumber()){
        this.tables[i].setState("FREE");
      }
    }
  }

  occupy(table:Table){
    for(let i = 0; i < this.tables.length; i ++){
      if(this.tables[i].getNumber() === table.getNumber()){
        this.tables[i].setState("OCCUPIED");
      }
    }
  }

  free(table:Table){
    for(let i = 0; i < this.tables.length; i ++){
      if(this.tables[i].getNumber() === table.getNumber()){
        this.tables[i].setState("FREE");
      }
    }
  }

}
