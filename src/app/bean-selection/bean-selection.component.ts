import { Component, OnInit } from '@angular/core';

import { BrewService } from '../brew.service'

@Component({
  moduleId: module.id,
  selector: 'app-bean-selection',
  templateUrl: 'bean-selection.component.html',
  styleUrls: ['bean-selection.component.css'],
  //providers: [BrewService]
})
export class BeanSelectionComponent implements OnInit {

  constructor(private brewService: BrewService) {}

  ngOnInit() {
     console.log("apparatus is " + this.brewService.getApparatus());
  }
  
  getApparatus() {
    return this.brewService.getApparatus();
  }

}
