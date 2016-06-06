import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { BrewService } from './brew.service';

describe('Brew Service', () => {
  beforeEachProviders(() => [BrewService]);

  it('should ...',
      inject([BrewService], (service: BrewService) => {
    expect(service).toBeTruthy();
  }));
});
