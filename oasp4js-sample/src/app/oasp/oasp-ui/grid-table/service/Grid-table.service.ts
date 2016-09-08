import {Injectable} from '@angular/core'
import {Table} from '../../../../main/models/table/Table.model'
// import {tablesList} from '../../../../main/resources/tables/Tables.resource'

@Injectable()
export class GridtableService{
  // tables : Table[] = tablesList;
  //
  // getTables():Table[]{
  //   return this.tables;
  // }

  getTablesOrderBy(dir, name, data){
    /** This should be a call to back-end server **/
    data.sort((n1,n2) => {
      if (n1[name] > n2[name]) {
          return 1 * dir;
      }

      if (n1[name] < n2[name]) {
          return -1 * dir;
      }

      return 0;
    });

    return data.slice(0,data.length);
  }

  // applyFilters(num: number, state: string, waiter: string){
  //     /** back-end call for filtering **/
  //     return this.tables.slice();
  // }
}
