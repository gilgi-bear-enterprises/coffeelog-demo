import { Injectable } from '@angular/core';

@Injectable()
export class BrewService {

  apparatus: string;

  constructor() {
    this.apparatus = 'no apparatus selected';
  }
  
  setApparatus(apparatus: string) {
    this.apparatus = apparatus;
  }
  
  getApparatus(){
    return this.apparatus;
  }

}
