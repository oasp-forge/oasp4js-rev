import {CrudService} from '../../components/crud/service/Crud.service';
import {Table} from '../../models/table/Table.model'
import {Command} from '../../models/command/Command.model'
import {beforeEachProviders,beforeEach,describe,expect,it,inject} from '@angular/core/testing';
import {commandsList} from '../../resources/commands/Commands.resource'

describe('CrudService [SERVICE]: \n', () => {
  let service;
  let tables;

  beforeEachProviders(() => [CrudService]);

  beforeEach(inject([CrudService], s => {
    service = s;
    tables = service.getTables();
  }));

  it('[TEST_ERROR] CrudComponent should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('[TEST_ERROR] typeof TABLES should be [object Array]!', () => {
    expect(Object.prototype.toString.call(tables)).toBe('[object Array]');
  })

  it('[TEST_ERROR] Array TABLES CrudService should not be empty!', () => {
    expect(tables.length).toBeGreaterThan(0);
  })

  it('[TEST_ERROR] items of TABLES should be instances of class Table!', () => {
    let index = Math.floor((Math.random() * tables.length) + 0);
    expect(tables[index] instanceof Table).toBe(true);
  })


})
