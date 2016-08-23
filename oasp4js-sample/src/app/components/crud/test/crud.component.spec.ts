// import {CrudComponent} from '../view/Crud.component';
// import {CrudService} from '../service/Crud.service';
// // import {
// //   beforeEachProviders,
// //   beforeEach,
// //   describe,
// //   expect,
// //   it,
// //   inject,
// //   TestComponentBuilder
// // } from '@angular/core/testing';
//
// import {
//   beforeEachProviders,
//   beforeEach,
//   describe,
//   expect,
//   it,
//   inject,
//   TestComponentBuilder
// } from 'angular2/testing';
//
// describe('Component: CrudComponent', () => {
//   let tcb;
//
//   //setup
//   beforeEachProviders(() => [
//     TestComponentBuilder,
//     CrudComponent
//   ]);
//
//   beforeEach(inject([TestComponentBuilder], _tcb => {
//     tcb = _tcb
//   }));
//
//   //specs
//   it('should render `Hello World!`', done => {
//     tcb.createAsync(CrudComponent).then(fixture => {
//       let crud = fixture.componentInstance;
//       let element = fixture.nativeElement;
//       crud.name = 'World';
//       fixture.detectChanges(); //trigger change detection
//       expect(crud.message).toBe('Hello World!');
//       done();
//     })
//     .catch(e => done.fail(e));
//   });
// })
