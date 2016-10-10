
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CrudComponent } from '../../../main/components/crud/view/Crud.component';
import { CrudRestService } from '../../../main/components/crud/service/Crud.service.rest';
import { OaspI18n} from '../../../oasp/oasp-i18n/oasp-i18n.service';
import { HttpClient} from '../../../oasp/oasp-security/http-client.service';
import { SecurityService} from '../../../oasp/oasp-security/oasp-security.service';

let router: Router;
let http: Http;
let httpC = new HttpClient(http);
let securityService = new SecurityService(router, httpC);
let crudRestService = new CrudRestService(httpC);
let crud;

describe('CrudComponent', () => {
  beforeEach(() => {
    crud = new CrudComponent(securityService, new OaspI18n, crudRestService);

  });

  it('pageData has no correct properties pagination and sort', () => {
      expect(crud.pageData.pagination).toBeDefined();
      expect(crud.pageData.sort).toBeDefined();
  });
});
