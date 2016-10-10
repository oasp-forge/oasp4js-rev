import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { KitchenComponent } from '../../../main/components/kitchen/view/Kitchen.component';
import { KitchenRestService } from '../../../main/components/kitchen/service/Kitchen.service.rest';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient} from '../../../oasp/oasp-security/http-client.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';

let router: Router;
let http: Http;
let httpC = new HttpClient(http);
let securityService = new SecurityService(router, httpC);
let kitchenRestService = new KitchenRestService(httpC);
let kitchen;

describe('KitchenComponent', () => {
  beforeEach(() => {
    kitchen = new KitchenComponent(securityService, new OaspI18n, kitchenRestService);
  });

  it('pageData has no correct properties pagination and sort', () => {
      expect(kitchen.pageData.pagination).toBeDefined();
      expect(kitchen.sort).toBeDefined();
  });
});
