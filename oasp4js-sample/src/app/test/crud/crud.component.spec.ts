import {CrudService} from '../../components/crud/service/Crud.service';
import {CrudComponent} from '../../components/crud/view/Crud.component';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {Table} from '../../models/table/Table.model'

describe('CrudComponent [COMPONENT]: \n', () => {
    let crud:CrudComponent;
    let service:CrudService = new CrudService();
    let a;

    //setup
    beforeEach(() => {
        crud = new CrudComponent(service);
    });

    //specs
    it('[TEST_ERROR] SELECTEDTABLE should be an instance of class Table!!', () => {
      expect(crud.selectedTable instanceof Table).toBe(true);
    });
});
