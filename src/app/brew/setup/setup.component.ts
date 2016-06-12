import { Component, OnInit } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { ApparatusComponent } from './apparatus';
import { BeansComponent } from './beans';

@Component({
  moduleId: module.id,
  selector: 'app-setup',
  templateUrl: 'setup.component.html',
  styleUrls: ['setup.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/apparatus', component: ApparatusComponent},
  {path: '/beans', component: BeansComponent}
])
export class SetupComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
