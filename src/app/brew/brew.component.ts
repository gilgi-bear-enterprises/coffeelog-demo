import { Component, OnInit } from '@angular/core';
import { SetupComponent } from './setup';
import { Routes , Router, ROUTER_DIRECTIVES} from '@angular/router';
import { ExecuteComponent } from './execute';
import { LogComponent } from './log';
import { BrewService } from './brew.service';
import { ApparatusService } from './apparatus.service';

@Component({
  moduleId: module.id,
  selector: 'app-brew',
  templateUrl: 'brew.component.html',
  styleUrls: ['brew.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [BrewService, ApparatusService]
})
@Routes([
  {path: '/setup', component: SetupComponent},
  {path: '/execute', component: ExecuteComponent},
  {path: '/log', component: LogComponent}
])
export class BrewComponent implements OnInit {

  constructor(private router: Router, private brewService: BrewService, private apparatusService: ApparatusService) {}

  ngOnInit() {
  }
  
}
