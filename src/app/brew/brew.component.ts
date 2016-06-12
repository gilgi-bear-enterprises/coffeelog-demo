import { Component, OnInit } from '@angular/core';
import { SetupComponent } from './setup';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { ExecuteComponent } from './execute';
import { LogComponent } from './log';

@Component({
  moduleId: module.id,
  selector: 'app-brew',
  templateUrl: 'brew.component.html',
  styleUrls: ['brew.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/setup', component: SetupComponent},
  {path: '/execute', component: ExecuteComponent},
  {path: '/log', component: LogComponent}
])
export class BrewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
