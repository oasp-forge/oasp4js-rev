import {CrudService} from '../../components/crud/service/Crud.service';
import {CrudComponent} from '../../components/crud/view/Crud.component';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';

xdescribe('CrudComponent [COMPONENT]: \n', () => {
    let crud:CrudComponent;
    let service:CrudService = new CrudService();
    let a;

    //setup
    beforeEach(() => {
        crud = new CrudComponent(service);
    });

    //specs
    it('[TEST_ERROR] var a should be TRUE!', () => {
      a = false;
      expect(a).toBe(true);
      // crud.ngOnInit();
      // expect(list.items.length).toBe(5);
      // expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});
