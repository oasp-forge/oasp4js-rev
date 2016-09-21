// import { TestBed, async } from '@angular/core/testing'
// import { Oasp4jsSampleAppComponent } from '../../main/views/main/oasp4js-sample.component'
//
// describe('App: Angular200OaspRev', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         Oasp4jsSampleAppComponent
//       ],
//     })
//   })
//
//   it('should create the app', async(() => {
//     let fixture = TestBed.createComponent(Oasp4jsSampleAppComponent)
//     let app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//
//   it(`should have as title 'app works!'`, async(() => {
//     let fixture = TestBed.createComponent(Oasp4jsSampleAppComponent)
//     let app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('oasp4js-sample works!')
//   }))
//
// });
//
//
//


// import {
//   beforeEachProviders,
//   describe,
//   expect,
//   it,
//   inject
// } from '@angular/core/testing'
//
// import {Oasp4jsSampleAppComponent} from '../../main/views/main/oasp4js-sample.component'
// import {LoginService} from '../../main/views/login/service/Login.service'
// import {ROUTER_DIRECTIVES, Router, Routes} from '@angular/router'
// import {Http} from '@angular/http'
// import {OaspI18n} from '../../oasp/oasp-i18n/oasp-i18n.service'
//
// describe('[COMPONENT]: Oasp4jsSampleAppComponent', () => {
//     var router: Router
//     var http: Http
//     var service:LoginService = new LoginService(http)
//     var oaspI18n: OaspI18n
//     var component: Oasp4jsSampleAppComponent = new Oasp4jsSampleAppComponent(router,service,http,oaspI18n)
//
//     beforeAll(() => {
//         router = jasmine.createSpyObj("Router", ['navigate']);
//         component = new Oasp4jsSampleAppComponent(router,service, http, oaspI18n);
//     });
//     it("should be defined", () => {
//       // expect(component).toBeDefined();
//       expect(true).toBe(true)
//     });
//
//     xit('should have as title \'oasp4js-sample works!\'', () => {
//       expect(component.title).toEqual('oasp4js-sample works!');
//     });
// });
