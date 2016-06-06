import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { BrewService } from '../brew.service';


@Component({
  moduleId: module.id,
  selector: 'app-brew-planning',
  templateUrl: 'brew-planning.component.html',
  styleUrls: ['brew-planning.component.css']
})
export class BrewPlanningComponent implements OnInit {

  constructor(private brewService: BrewService, private router: Router) {}

  ngOnInit() {
  }
  
  goBack() {
    this.router.navigateByUrl('/beans');
  }
  
  getApparatus() {
    return this.brewService.getApparatus();
  }
  
  getBeans() {
    return this.brewService.getBeans();
  }

}
