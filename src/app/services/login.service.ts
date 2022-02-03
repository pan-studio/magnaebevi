import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import magna_const from '../constants/constants';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  /*basic: string = "Basic ZW1hbnVlbGU6cGFzc3dvcmQ=";
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.basic });

  options = { headers: this.headers };
  */
 options = {};
  constructor(private httpClient: HttpClient,
    private storageService: StorageService) { }


  public logout(){
    this.storageService.clearAllStorage();
  }
  
  public getLogin(userValue: string, passValue: string){
    if(magna_const.isMock){
      var user = {
        nome: "Andrea",
        cognome: "Panetta",
        email: "andrix@gmail.com",
        loyalty: 20,
        credenziali: {
          ruolo: "UTENTE",
        }
      }
      this.storageService.setUserData(user);
      
    }


    return this.httpClient.post<User>(magna_const.service.beUrlLogin, {
   
          "user": userValue,
          "pass" : passValue,
          "ruolo" : ""
  }, this.options);
  }

  
  
  
 
}

