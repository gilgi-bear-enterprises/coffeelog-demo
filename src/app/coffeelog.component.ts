import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { BrewComponent } from './brew';

import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'coffeelog-app',
  templateUrl: 'coffeelog.component.html',
  styleUrls: ['coffeelog.component.css'],
  directives: [ROUTER_DIRECTIVES, NgClass],

})
export class CoffeelogAppComponent {
  constructor(private router: Router, private route: ActivatedRoute) {};
}
