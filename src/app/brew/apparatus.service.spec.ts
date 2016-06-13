import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ApparatusService } from './apparatus.service';

describe('Apparatus Service', () => {
  beforeEachProviders(() => [ApparatusService]);

  it('should ...',
      inject([ApparatusService], (service: ApparatusService) => {
    expect(service).toBeTruthy();
  }));
});
