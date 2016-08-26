// import {DetailsService} from '../../components/details/service/Details.service';
// import {Table} from '../../models/table/Table.model'
// import {Command} from '../../models/command/Command.model'
// import {beforeEachProviders,beforeEach,describe,expect,it,inject} from '@angular/core/testing';
// import {commandsList} from '../../resources/commands/Commands.resource'
//
// describe('DetailsService [SERVICE]: \n', () => {
//   let service;
//   let c;
//
//   beforeEachProviders(() => [DetailsService]);
//
//   beforeEach(inject([DetailsService], s => {
//     service = s;
//   }));
//
//   it('[TEST_ERROR] DetailsService should have a commandList!', () => {
//     expect(JSON.stringify(service.commands)).toEqual(JSON.stringify(commandsList));
//   })
//
//   it('[TEST_ERROR] typeof DetailsService.commands should be [object Array]!', () => {
//     expect(Object.prototype.toString.call(service.commands)).toBe('[object Array]');
//   })
//
//   it('[TEST_ERROR] items of DetailsService.commands should be instances of class Command!', () => {
//     let index = Math.floor((Math.random() * service.commands.length) + 0);
//     expect(service.commands[index] instanceof Command).toBeTruthy();
//   });
//
// })
