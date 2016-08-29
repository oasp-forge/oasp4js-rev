import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Oasp4jsSampleAppComponent } from '../app/oasp4js-sample.component';
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";

describe('[COMPONENT]: Oasp4jsSampleAppComponent', () => {
    let component: Oasp4jsSampleAppComponent;
    let router: Router;
    beforeAll(() => {
        router = jasmine.createSpyObj("Router", ['navigate']);
        component = new Oasp4jsSampleAppComponent(router);
    });
    it("should be defined", () => {
      expect(component).toBeDefined();
    });

    it('should have as title \'oasp4js-sample works!\'', () => {
      expect(component.title).toEqual('oasp4js-sample works!');
    });
});
