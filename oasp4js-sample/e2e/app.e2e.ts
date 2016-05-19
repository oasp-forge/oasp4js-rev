import { Oasp4jsSamplePage } from './app.po';

describe('oasp4js-sample App', function() {
  let page: Oasp4jsSamplePage;

  beforeEach(() => {
    page = new Oasp4jsSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('oasp4js-sample works!');
  });
});
