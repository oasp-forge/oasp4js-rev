import {CrudService} from '../../components/crud/service/Crud.service';
import {CrudComponent} from '../../components/crud/view/Crud.component';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {Table} from '../../models/table/Table.model'

describe('\nCrudComponent [COMPONENT]: \n', () => {
    let component:CrudComponent;
    let service:CrudService = new CrudService();

    //setup
    beforeEach(() => {
        component = new CrudComponent(service);
    });

    //specs
    it('[TEST_ERROR] CrudComponent should be defined!', () => {
      expect(component).toBeDefined();
    });

    it('[TEST_ERROR] SELECTEDTABLE should be an instance of class Table!', () => {
      expect(component.selectedTable instanceof Table).toBe(true);
    });

});
