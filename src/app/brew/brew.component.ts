import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { SetupComponent } from './setup';
import { Router, ROUTER_DIRECTIVES} from '@angular/router';
import { ExecuteComponent } from './execute';
import { LogComponent } from './log';
import { BrewService } from './brew.service';
import { ApparatusService } from './apparatus.service';

@Component({
  moduleId: module.id,
  selector: 'app-brew',
  templateUrl: 'brew.component.html',
  styleUrls: ['brew.component.css'],
  directives: [ROUTER_DIRECTIVES, NgClass],
  providers: [BrewService, ApparatusService]
})
export class BrewComponent implements OnInit {

  constructor(private router: Router, private brewService: BrewService, private apparatusService: ApparatusService) {}

  ngOnInit() {
  }

}
