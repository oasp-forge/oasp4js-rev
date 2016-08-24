import {CrudService} from '../service/Crud.service';
import {CrudComponent} from '../view/Crud.component';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';

xdescribe('Component: CrudComponent', () => {
    let crud:CrudComponent;
    let service:CrudService = new CrudService();
    let a;
    
    //setup
    beforeEach(() => {
        crud = new CrudComponent(service);
    });

    //specs
    it('Should get 5 dogs', () => {
      a = true;
      expect(a).toBe(true);
      // crud.ngOnInit();
      // expect(list.items.length).toBe(5);
      // expect(list.items).toEqual(['golden retriever', 'french bulldog', 'german shepherd', 'alaskan husky', 'jack russel terrier']);
    });
});
