import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CoffeelogAppComponent, environment } from './app/';

import { ROUTER_PROVIDERS } from '@angular/router';
import { BrewService } from './app/brew.service'

if (environment.production) {
  enableProdMode();
}

bootstrap(CoffeelogAppComponent, [ROUTER_PROVIDERS, BrewService
]);
