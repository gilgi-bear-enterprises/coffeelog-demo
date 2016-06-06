import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BrewService } from '../brew.service'

@Component({
  moduleId: module.id,
  selector: 'app-apparatus-selection',
  templateUrl: 'apparatus-selection.component.html',
  styleUrls: ['apparatus-selection.component.css'],
  //providers: [BrewService]
})
export class ApparatusSelectionComponent implements OnInit {

  constructor(private brewService: BrewService, private router: Router) {}

  ngOnInit() {
  }
  
  select(apparatus : string) {
    this.brewService.setApparatus(apparatus);
    console.log("apparatus is " + apparatus);
    this.router.navigateByUrl('/beans');
  }

}
