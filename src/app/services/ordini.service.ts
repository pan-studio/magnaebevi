import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import magna_const from '../constants/constants';
import { Ordine } from '../interfaces/ordine.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdiniService {

  baseUrl: string = magna_const.service.beUrlOrdini;

  constructor(private httpClient: HttpClient) { }

  
  public creaOrdine(ordine: Ordine){
    return this.httpClient.post<Ordine>(this.baseUrl, ordine)
  }

  public getOrdine(riferimento: string){
    return this.httpClient.get<Ordine>(this.baseUrl+"/"+riferimento);
  }


  public getAllOrdine(){
    return this.httpClient.get<Ordine[]>(this.baseUrl);
  }

  public deleteOrdine(riferimento: string){
    return this.httpClient.delete<Ordine>(this.baseUrl+"/"+riferimento);
  }

}
