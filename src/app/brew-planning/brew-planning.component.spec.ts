import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BrewPlanningComponent } from './brew-planning.component';

describe('Component: BrewPlanning', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BrewPlanningComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BrewPlanningComponent],
      (component: BrewPlanningComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BrewPlanningComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BrewPlanningComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-brew-planning></app-brew-planning>
  `,
  directives: [BrewPlanningComponent]
})
class BrewPlanningComponentTestController {
}

