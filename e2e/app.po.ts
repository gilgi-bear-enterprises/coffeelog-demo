export class CoffeelogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('coffeelog-app h1')).getText();
  }
}
