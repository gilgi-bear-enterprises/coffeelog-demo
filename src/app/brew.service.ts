import { Injectable } from '@angular/core';

@Injectable()
export class BrewService {

  apparatus: string;
  beans: string;

  constructor() {
    this.apparatus = 'no apparatus selected';
    this.beans = 'no beans specified';
  }
  
  setApparatus(apparatus: string) {
    this.apparatus = apparatus;
  }
  
  getApparatus(){
    return this.apparatus;
  }
  
  setBeans(beans: string) {
    this.beans = beans;
  }
  
  getBeans() {
    return this.beans;
  }

}
