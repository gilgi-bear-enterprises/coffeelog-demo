import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Routes, Router, RouteSegment, UrlSegment, OnActivate, ROUTER_DIRECTIVES } from '@angular/router';
import { BrewComponent } from './brew';

import { HomeComponent } from './home/home.component';

@Component({
  moduleId: module.id,
  selector: 'coffeelog-app',
  templateUrl: 'coffeelog.component.html',
  styleUrls: ['coffeelog.component.css'],
  directives: [ROUTER_DIRECTIVES, NgClass],

})

@Routes([
    { path: '/', component: HomeComponent },
    { path: '/brew', component: BrewComponent}
])
export class CoffeelogAppComponent implements OnActivate {
  title = 'Coffee Log';
  routeSegment : RouteSegment;
  constructor(private router: Router) {};
  
  routerOnActivate(curr : RouteSegment) {
      this.routeSegment = curr;
  }

  isSelectedRoute(routePath: string) {
     let currentRoute = this.router.urlTree.firstChild(this.router.urlTree.root);
     let segment = currentRoute == null ? '/' : currentRoute.segment;
     return  segment == routePath;
  }
}
