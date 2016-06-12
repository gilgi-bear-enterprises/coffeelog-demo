import { Component, OnInit } from '@angular/core';

import { BrewService } from '../../brew.service';

@Component({
  moduleId: module.id,
  selector: 'app-apparatus',
  templateUrl: 'apparatus.component.html',
  styleUrls: ['apparatus.component.css']
})
export class ApparatusComponent implements OnInit {

  constructor(private brewService: BrewService) {}

  ngOnInit() {
  }

  selectApparatus(apparatus: string) {
    this.brewService.brew.apparatus = apparatus;
  }

}
