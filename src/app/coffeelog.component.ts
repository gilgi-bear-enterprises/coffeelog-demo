import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Routes, Router, RouteSegment, OnActivate, ROUTER_DIRECTIVES } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApparatusSelectionComponent } from './apparatus-selection/apparatus-selection.component';
import { BeanSelectionComponent } from './bean-selection/bean-selection.component';
import { BrewPlanningComponent } from './brew-planning/brew-planning.component';

@Component({
  moduleId: module.id,
  selector: 'coffeelog-app',
  templateUrl: 'coffeelog.component.html',
  styleUrls: ['coffeelog.component.css'],
  directives: [ROUTER_DIRECTIVES, NgClass],

})

@Routes([
    { path: '/', component: HomeComponent },
    { path: '/brew', component: ApparatusSelectionComponent },
    { path: '/beans', component: BeanSelectionComponent },
    { path: '/plan', component: BrewPlanningComponent }
])
export class CoffeelogAppComponent implements OnActivate {
  title = 'Coffee Log';
  routeSegment : RouteSegment;
  constructor(private router: Router) {};
  
  routerOnActivate(current : RouteSegment) {
      this.routeSegment = current;
  }
  
  isSelectedRoute(routeURL: string){
   console.log("The routeURL is: " + routeURL);
   console.log("The route segment is: " + this.routeSegment);
   console.log("The routeURL tree is: " + this.router.createUrlTree([routeURL, this.routeSegment]));
   return this.router.urlTree.contains(this.router.createUrlTree([routeURL, this.routeSegment]));
  }
}
