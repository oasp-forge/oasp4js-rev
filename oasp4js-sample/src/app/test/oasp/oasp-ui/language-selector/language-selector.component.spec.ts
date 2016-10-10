import { LanguageSelectorComponent } from '../../../../oasp/oasp-ui/language-selector/language-selector.component';
import { OaspI18n} from '../../../../oasp/oasp-i18n/oasp-i18n.service';

let languageSelector: LanguageSelectorComponent;


describe('language-selector-component', () => {
  beforeEach(() => {
    languageSelector = new LanguageSelectorComponent(new OaspI18n);
  });

});
