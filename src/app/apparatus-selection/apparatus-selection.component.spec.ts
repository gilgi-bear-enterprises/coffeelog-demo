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
import { ApparatusSelectionComponent } from './apparatus-selection.component';

describe('Component: ApparatusSelection', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ApparatusSelectionComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ApparatusSelectionComponent],
      (component: ApparatusSelectionComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ApparatusSelectionComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ApparatusSelectionComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-apparatus-selection></app-apparatus-selection>
  `,
  directives: [ApparatusSelectionComponent]
})
class ApparatusSelectionComponentTestController {
}

