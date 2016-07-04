import { Component, Input, Output, SimpleChanges, EventEmitter } from '@angular/core';

import { SliderComponent } from '../../../shared/slider.component';

@Component({
  moduleId: module.id,
  selector: 'linked-sliders',
  templateUrl: 'linked-sliders.component.html',
  styleUrls: ['linked-sliders.component.css'],
  directives: [ SliderComponent ]
})
export class LinkedSlidersComponent {

  @Input() waterMass: number;
  @Input() beansMass: number;
  @Input() ratio: number;
  @Output() waterMassChange:EventEmitter<any> = new EventEmitter();
  @Output() beansMassChange:EventEmitter<any> = new EventEmitter();
  @Output() ratioChange:EventEmitter<any> = new EventEmitter();

  constructor() {}

  waterMassChanged(newValue: number, obj: SliderComponent) {
    this.waterMass = newValue;
    this.beansMass = Math.round(this.waterMass / this.ratio);
    this.beansMassChange.emit(this.beansMass);
    this.waterMassChange.emit(this.waterMass);
    obj.forceChange(this.beansMass);
  }

  beansMassChanged(newValue: number, obj: SliderComponent) {
    this.beansMass = newValue;
    this.waterMass = Math.round(this.beansMass * this.ratio);
    this.waterMassChange.emit(this.waterMass);
    this.beansMassChange.emit(this.beansMass);
    obj.forceChange(this.waterMass);
  }

  ratioChanged(newValue: number, obj: SliderComponent) {
    this.ratio = newValue;
    this.waterMass = Math.round(this.beansMass * this.ratio);
    this.waterMassChange.emit(this.waterMass);
    this.ratioChange.emit(this.ratio);
    obj.forceChange(this.waterMass);
  }
}
