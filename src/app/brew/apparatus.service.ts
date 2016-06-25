import { Injectable } from '@angular/core';
import { APPARATUSES } from './apparatus-list';

@Injectable()
export class ApparatusService {

  constructor() {}

  getApparatuses() {
    return Promise.resolve(APPARATUSES);
  }

}
