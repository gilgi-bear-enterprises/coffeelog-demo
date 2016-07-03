import { Component, OnInit } from '@angular/core';

import { Brew } from '../../brew.model';
import { BrewService } from '../../brew.service';
import { SliderComponent } from '../../../shared/slider.component';

@Component({
  moduleId: module.id,
  selector: 'app-plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['plan.component.css'],
  directives: [ SliderComponent ]
})
export class PlanComponent implements OnInit {

  brew: Brew;

  constructor(private brewService: BrewService) {
    this.brew = this.brewService.brew;
  }

  ngOnInit() {

  }

}
