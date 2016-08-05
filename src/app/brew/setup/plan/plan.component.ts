import { Component } from '@angular/core';

import { Brew } from '../../brew.model';
import { BrewService } from '../../brew.service';
import { SliderComponent } from '../../../shared/slider.component';
import { LinkedSlidersComponent } from './linked-sliders.component';

@Component({
  moduleId: module.id,
  selector: 'app-plan',
  templateUrl: 'plan.component.html',
  styleUrls: ['plan.component.css'],
  directives: [ SliderComponent, LinkedSlidersComponent ]
})
export class PlanComponent {

  brew: Brew;

  constructor(private brewService: BrewService) {
    this.brew = this.brewService.brew;
  }

}
