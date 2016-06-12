import { Injectable } from '@angular/core';

import { Brew } from './brew.model';

@Injectable()
export class BrewService {
  brew: Brew;

  constructor() {
    this.brew = new Brew();
  }
  
}
