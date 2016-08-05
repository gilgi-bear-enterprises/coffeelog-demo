import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { ApparatusComponent } from './apparatus';
import { BeansComponent } from './beans';
import { PlanComponent } from './plan';

import { Brew } from '../brew.model';
import { BrewService } from '../brew.service';

@Component({
  moduleId: module.id,
  selector: 'app-setup',
  templateUrl: 'setup.component.html',
  styleUrls: ['setup.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class SetupComponent implements OnInit {

  brew: Brew;

  constructor(private brewService: BrewService) {
    this.brew = this.brewService.brew;
  }

  ngOnInit() {
  }

}
