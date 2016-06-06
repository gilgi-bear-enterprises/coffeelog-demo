import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { BrewService } from '../brew.service'

@Component({
  moduleId: module.id,
  selector: 'app-bean-selection',
  templateUrl: 'bean-selection.component.html',
  styleUrls: ['bean-selection.component.css'],
  //providers: [BrewService]
})
export class BeanSelectionComponent implements OnInit {

  constructor(private brewService: BrewService, private router: Router) {}

  ngOnInit() {
     console.log("apparatus is " + this.brewService.getApparatus());
  }
  
  getApparatus() {
    return this.brewService.getApparatus();
  }
  
  goBack() {
    this.router.navigateByUrl('/brew');
  }
  
  goNext(beans: string) {
    this.brewService.setBeans(beans);
    this.router.navigateByUrl('/plan');
  }

}
