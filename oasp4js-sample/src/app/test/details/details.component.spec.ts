import { DetailsComponent } from '../../main/components/details/view/Details.component';
import { DetailsRestService } from '../../main/components/details/service/Details.service.rest';
import { HttpClient} from '../../oasp/oasp-security/http-client.service';
import { SecurityService} from '../../oasp/oasp-security/oasp-security.service';
import { OaspI18n } from '../../oasp/oasp-i18n/oasp-i18n.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';

describe('DetailsComponent', () => {

    let router: Router;
    let http: Http;
    let i18n = new OaspI18n();
    let httpC = new HttpClient(http);
    let security = new SecurityService(router, httpC);
    let service = new DetailsRestService(security, httpC);
    let details;

    let ngOnInit, loadPositions, sortColumnBy, cancel, submit;
    let getMenus;

    beforeEach(() => {

      details = new DetailsComponent(i18n, service);
      let fixture = TestBed.createComponent(DetailsComponent);
      details = fixture.componentInstance;
      // service spies
      spyOn(service, 'getMenus').and.callFake(() => {
        details.offers = ['filled', 'with', 'fake', 'data'];
      });

      // component spies
      spyOn(details, 'loadPositions').and.callFake(() => {});
      spyOn(details, 'ngOnInit').and.callFake(() => {
        loadPositions = details.loadPositions();
        getMenus = service.getMenus();
      });

      ngOnInit = details.ngOnInit();

      // cancel = details.cancel();
      // submit = details.submit();

    });

    // it('DetailsComponent should be defined', () => {
    //   expect(details).toBeDefined();
    // });
    //
    // it('\'offers\' should contain some data', () => {
    //   expect(details.offers.length).toBeGreaterThan(0);
    // });

});
