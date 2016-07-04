import { Component, ElementRef, ViewChild, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'slider',
    styleUrls: ['slider.component.css'],
    template: 
    `
    <div class="block slider" id="slider" #slider></div>
    <div class="block input">
      <input type="tel" [(ngModel)]="slideValue" (ngModelChange)="onChange($event)">
    </div>
    `
})
export class SliderComponent implements AfterViewInit {
    
    @ViewChild('slider') el:ElementRef;
    @Input() minValue: number = 0;
    @Input() maxValue: number = 100;
    @Input() slideValue: number = 0;
    @Output() slideValueChange:EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngAfterViewInit() {
      $(this.el.nativeElement).slider({
        range: false,
        animate: true,
        min: this.minValue,
        max: this.maxValue,
        value: this.slideValue,
        slide: ( event, ui ) => {
          this.slideValue = ui.value;
          this.slideValueChange.emit(this.slideValue);
        }
      });
    }
    
    onChange(event) {
      $(this.el.nativeElement).slider('value', this.slideValue);
      this.slideValueChange.emit(this.slideValue);
    }

    forceChange(value: number) {
      $(this.el.nativeElement).slider('value', value);
    }
}
