import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public generateRandomString(){
    return Math.random().toString(36).slice(-8);
  }
}
