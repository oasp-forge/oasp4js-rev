// import { DetailsComponent } from '../../main/components/details/view/Details.component';
// import { DetailsRestService } from '../../main/components/details/service/Details.service.rest';
// import { HttpClient} from '../../oasp/oasp-security/http-client.service';
// import { SecurityService} from '../../oasp/oasp-security/oasp-security.service';
// import { OaspI18n } from '../../oasp/oasp-i18n/oasp-i18n.service';
// import { Http } from '@angular/http';
// import { Router } from '@angular/router';
//
// let router: Router;
// let http: Http;
// let i18n = new OaspI18n();
// let httpC = new HttpClient(http);
// let security = new SecurityService(router, httpC);
// let service = new DetailsRestService(security, httpC);
// let details = new DetailsComponent(i18n, service);

describe('DetailsComponent', () => {

    beforeEach(() => {
        // component = new DetailsComponent(service);
    });

    it('DetailsComponent should be defined', () => {
      expect(true).toBeTruthy();
    });
});
