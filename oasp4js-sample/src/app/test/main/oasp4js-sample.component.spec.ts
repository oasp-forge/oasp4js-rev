import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import {Oasp4jsSampleAppComponent} from '../../main/views/main/oasp4js-sample.component';
import {LoginService} from '../../main/views/login/service/Login.service'
import {ROUTER_DIRECTIVES, Router, Routes} from "@angular/router";
import {Http} from '@angular/http';

describe('[COMPONENT]: Oasp4jsSampleAppComponent', () => {
    let component: Oasp4jsSampleAppComponent;
    let router: Router;
    let http: Http;
    let service:LoginService = new LoginService(http);

    beforeAll(() => {
        router = jasmine.createSpyObj("Router", ['navigate']);
        component = new Oasp4jsSampleAppComponent(router,service, http);
    });
    it("should be defined", () => {
      expect(component).toBeDefined();
    });

    it('should have as title \'oasp4js-sample works!\'', () => {
      expect(component.title).toEqual('oasp4js-sample works!');
    });
});
