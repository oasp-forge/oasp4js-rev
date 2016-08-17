import {Injectable} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import {tablesList} from '../../../resources/tables/Tables.resource'

@Injectable()
export class CrudService{
  tables : Table[] = tablesList;

  getTables():Table[]{
    return this.tables;
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
