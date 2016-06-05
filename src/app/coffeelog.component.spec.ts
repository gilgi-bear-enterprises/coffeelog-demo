import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CoffeelogAppComponent } from '../app/coffeelog.component';

beforeEachProviders(() => [CoffeelogAppComponent]);

describe('App: Coffeelog', () => {
  it('should create the app',
      inject([CoffeelogAppComponent], (app: CoffeelogAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'coffeelog works!\'',
      inject([CoffeelogAppComponent], (app: CoffeelogAppComponent) => {
    expect(app.title).toEqual('coffeelog works!');
  }));
});
