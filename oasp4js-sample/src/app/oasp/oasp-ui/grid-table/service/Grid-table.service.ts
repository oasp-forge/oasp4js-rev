import {Injectable} from '@angular/core'
import {Table} from '../../../../models/table/Table.model'
import {tablesList} from '../../../../resources/tables/Tables.resource'

@Injectable()
export class GridtableService{
  tables : Table[] = tablesList;

  getTables():Table[]{
    return this.tables;
  }

  getTablesOrderBy(dir, name, size){
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

    return tables.slice(0,size);
  }

  applyFilters(num: number, state: string, waiter: string){
      /** back-end call for filtering **/
      return this.tables.slice();
  }
}
