import { Component, OnInit } from '@angular/core';

import { BrewService } from '../../brew.service';
import { Apparatus } from '../../apparatus.model';
import { ApparatusService } from '../../apparatus.service';

@Component({
  moduleId: module.id,
  selector: 'app-apparatus',
  templateUrl: 'apparatus.component.html',
  styleUrls: ['apparatus.component.css']
})
export class ApparatusComponent implements OnInit {

  apparatuses: Apparatus[];

  constructor(private brewService: BrewService, private apparatusService: ApparatusService) {}

  ngOnInit() {
    this.getApparatuses();
  }

  getApparatuses() {
    this.apparatusService.getApparatuses().then(apparatuses => this.apparatuses = apparatuses);
  }

  selectApparatus(apparatus: string) {
    this.brewService.brew.apparatus = apparatus;
  }

}
