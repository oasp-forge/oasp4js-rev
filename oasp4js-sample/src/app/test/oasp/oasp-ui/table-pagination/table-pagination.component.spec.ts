import { PaginationComponent } from '../../../../oasp/oasp-ui/table-pagination/Pagination.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

let pagination: PaginationComponent;


describe('search-panel-component', () => {
  beforeEach(() => {
    pagination = new PaginationComponent(new OaspI18n);
  });

});
