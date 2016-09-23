import { Angular200OaspRevPage } from './app.po';

describe('angular2-0-0-oasp-rev App', function() {
  let page: Angular200OaspRevPage;

  beforeEach(() => {
    page = new Angular200OaspRevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
