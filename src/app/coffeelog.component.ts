import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApparatusSelectionComponent } from './apparatus-selection/apparatus-selection.component';
import { BeanSelectionComponent } from './bean-selection/bean-selection.component';

@Component({
  moduleId: module.id,
  selector: 'coffeelog-app',
  templateUrl: 'coffeelog.component.html',
  styleUrls: ['coffeelog.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '/', component: HomeComponent },
    { path: '/brew', component: ApparatusSelectionComponent },
    { path: '/beans', component: BeanSelectionComponent }
])
export class CoffeelogAppComponent {
  title = 'coffeelog works!';
}
