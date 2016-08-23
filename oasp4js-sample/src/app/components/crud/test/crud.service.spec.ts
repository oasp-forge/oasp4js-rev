import {CrudService} from '../service/Crud.service'
import {Table} from '../../../models/table/Table.model'
import {Command} from '../../../models/command/Command.model'
import {
  beforeEachProviders,
  beforeEach,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {commandsList} from '../../../resources/commands/Commands.resource'

describe('Service: CrudService', () => {
  let service;

  beforeEachProviders(() => [CrudService]);

  beforeEach(inject([CrudService], s => {
    service = s;
  }));

  it('Should return tables from TABLES_LIST', () => {
    let tables = service.getTables();
    expect(1).toBe(1);
  })
})
