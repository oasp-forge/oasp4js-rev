import { SearchPanelComponent } from '../../../../oasp/oasp-ui/search-panel/Search-panel.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

let searchPanel: SearchPanelComponent;

describe('search-panel-component', () => {
  beforeEach(() => {
    searchPanel = new SearchPanelComponent(new OaspI18n);
  });

});
