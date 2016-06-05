import { CoffeelogPage } from './app.po';

describe('coffeelog App', function() {
  let page: CoffeelogPage;

  beforeEach(() => {
    page = new CoffeelogPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('coffeelog works!');
  });
});
