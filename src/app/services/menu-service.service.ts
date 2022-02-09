import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScontisticaComponent } from '../components/magna_bevi/pages/admin/scontistica/createmenu/scontistica.component';
import magna_const from '../constants/constants';
import { Item } from '../interfaces/item.interface';
import { Menu } from '../interfaces/menu.interface';
import { Sconto } from '../interfaces/sconto.interfaces';

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
  
  public creaScontistica(scontistica: Sconto){
    return this.httpClient.post<Sconto>(magna_const.service.beUrlSconto, scontistica);
  }

  //todo 
  public getAllMenu(){
    return this.httpClient.get<Menu[]>(magna_const.service.beUrlMenu)
  }

  public getAllSconti(){
    return this.httpClient.get<Sconto[]>(magna_const.service.beUrlSconto);
  }

  public updateItem(item: Item) {
    return this.httpClient.post<Item>(magna_const.service.beUrlMenu + 'item', item)
  }

}
