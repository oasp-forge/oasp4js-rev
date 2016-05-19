export class Oasp4jsSamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('oasp4js-sample-app h1')).getText();
  }
}
