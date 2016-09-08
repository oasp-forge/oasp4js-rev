import {CrudService} from '../../main/views/crud/service/Crud.service';
import {CrudRestService} from '../../main/views/crud/service/Crud.service.rest';
import {Table} from '../../main/models/table/Table.model'
import {Command} from '../../main/models/command/Command.model'
import {beforeEachProviders,beforeEach,describe,expect,it,inject} from '@angular/core/testing';

import {Http} from '@angular/http';

describe('CrudService [SERVICE]: \n', () => {
  let service;
  let http:Http;
  let rest:CrudRestService = new CrudRestService(http);
  let tables;

  beforeEach(() => {
      service = new CrudService(rest);
  });

  it('[TEST_ERROR] CrudComponent should be defined!', () => {
    expect(service).toBeDefined();
  });

})
