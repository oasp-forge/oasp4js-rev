import {Injectable} from '@angular/core'
import {Table} from '../../../models/table/Table.model'
import { CrudRestService } from './Crud.service.rest';

@Injectable()
export class CrudService{
  tables : Table[];

  constructor(private crudRestService:CrudRestService)
   { }

  getTables(){
      let a;
      a = this.crudRestService.getTables();
      return a;
  }

  getOffers(){
    return this.crudRestService.getOffers();
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

  getTableById(id:number):Table{
    let res:Table;
    for(let i = 0; i < this.tables.length; i ++){
      if(this.tables[i].number === id){
        res = this.tables[i];
      }
    }
    return res;
  }

}
