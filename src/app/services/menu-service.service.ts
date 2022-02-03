import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import magna_const from '../constants/constants';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

 

  constructor(private httpClient: HttpClient) { }

  public creaMenu(menu: Menu){
    return this.httpClient.post<Menu>(magna_const.service.beUrlMenu, menu);
  }

  public getMenu(id: number){
    return this.httpClient.get<Menu>(magna_const.service.beUrlMenu +id);
  }
  
  //todo 
  public getAllMenu(){
    
  }
}
