import {DetailsService} from '../../main/views/details/service/Details.service';
import {Table} from '../../main/models/table/Table.model'
import {Command} from '../../main/models/command/Command.model'
import {beforeEachProviders,beforeEach,describe,expect,it,inject} from '@angular/core/testing';

describe('DetailsService [SERVICE]: \n', () => {
  let service;
  let c;

  beforeEachProviders(() => [DetailsService]);

  beforeEach(inject([DetailsService], s => {
    service = s;
  }));

  it('[TEST_ERROR] DetailsComponent should be defined!', () => {
    expect(service).toBeDefined();
  });

  it('[TEST_ERROR] typeof DetailsService.commands should be [object Array]!', () => {
    expect(Object.prototype.toString.call(service.commandList)).toBe('[object Array]');
  })

  xit('[TEST_ERROR] items of DetailsService.commands should be instances of class Command!', () => {
    let index = Math.floor((Math.random() * service.commandList.length) + 0);
    expect(service.commandList[index] instanceof Command).toBeTruthy();
  });

})
