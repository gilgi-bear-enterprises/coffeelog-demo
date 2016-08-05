import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

import { Brew } from '../../brew.model';
import { BrewService } from '../../brew.service';

@Component({
  moduleId: module.id,
  selector: 'app-beans',
  templateUrl: 'beans.component.html',
  styleUrls: ['beans.component.css']
})
export class BeansComponent implements OnInit {

  brew: Brew;
  
  constructor(private brewService: BrewService) {
    this.brew = this.brewService.brew;
  }

  ngOnInit() {
  
  }

}
