import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CrudComponent } from '../view/Crud.component';

beforeEachProviders(() => [CrudComponent]);

describe('App: CrudComponent', () => {
  it('should create the app',
      inject([CrudComponent], (crud: CrudComponent) => {
    expect(crud).toBeTruthy();
  }));

  it('should have as message \'crud.component is working!\'',
      inject([CrudComponent], (crud: CrudComponent) => {
    expect(crud.message).toEqual('crud.component is working!');
  }));
});
