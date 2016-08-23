import {Injectable} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {tablesList} from '../../../resources/tables/Tables.resource'

@Injectable()
export class CrudService{
  tables : Table[] = tablesList;

  getTables():Table[]{
    return this.tables;
  }

  getTablesOrderBy(dir, name){
    /** This should be a call to back-end server **/
    let tables = this.tables.slice();
    tables.sort((n1,n2) => {
      if (n1[name] > n2[name]) {
          return 1 * dir;
      }

      if (n1[name] < n2[name]) {
          return -1 * dir;
      }

      return 0;
    });

    return tables;
  }


  applyFilters(num: number, state: string, waiter: string){
      /** back-end call for filtering **/
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
