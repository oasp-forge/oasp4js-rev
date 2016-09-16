import {Injectable} from '@angular/core'

@Injectable()
export class GridtableService{

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
}
