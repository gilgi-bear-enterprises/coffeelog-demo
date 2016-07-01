import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BrewComponent } from './brew/brew.component';
import { SetupComponent } from './brew/setup/setup.component';
import { ApparatusComponent } from './brew/setup/apparatus/apparatus.component';
import { BeansComponent } from './brew/setup/beans/beans.component';
import { PlanComponent } from './brew/setup/plan/plan.component';
import { ExecuteComponent } from './brew/execute/execute.component';
import { LogComponent } from './brew/log/log.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/home', terminal: true},
  { path: 'home', component: HomeComponent },
  { path: 'brew', component: BrewComponent, children: [
      { path: '' },
      { path: 'setup', component: SetupComponent, children: [
          { path: '' },
          { path: 'apparatus', component: ApparatusComponent },
          { path: 'beans', component: BeansComponent },
          { path: 'plan', component: PlanComponent }
      ]},
      { path: 'execute', component: ExecuteComponent },
      { path: 'log', component: LogComponent }
  ] }
];


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
