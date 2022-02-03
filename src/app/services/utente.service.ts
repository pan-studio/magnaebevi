import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }


  login(){
    /* TO DO */
  }

  /*public getAll(){
    return this.httpClient.get<[User]>()
  }*/

    baseUrl = 'http://localhost:8080/api/v1/magnabevi/utente';

    public creaUtente(utente: User){
      return this.httpClient.post<User>(this.baseUrl, utente);
    }

    public updateFidelityByCode(codice:String | number="") {
      let punti=12

      this.storageService.setPunti(punti);

      //da decommentare con il servizio giusto

     /*
      this.httpClient.get<any>(this.baseUrl+"/fidelity?code="+codice).subscribe(res=>{
        if(res.valid){
          
          let punti=res.punti
          this.storageService.setPunti(punti);
          let user = storageService.getUserData();
          this.updateUtente(user).sunscribe(res=>)
        } else allert("codice non valido")
          
      });*/
    }

    public updateUtente(utente: User){
      return this.httpClient.post<User>(this.baseUrl+"/update", utente);
    }

    public deleteUtente(id: number){
      return this.httpClient.delete<User>(this.baseUrl+"/"+id);
    }

    public getUtente(id: number){
      return this.httpClient.get<User>(this.baseUrl+"/"+id);
    }

    public getAll(){
      return this.httpClient.get<[User]>(this.baseUrl);
    }

    public checkLogin(username: string, password:string){
      return this.httpClient.post<any>("http://localhost:8081/api/v1/login", {
        username: username,
        password: password
      });
    }


  /*public login(username:String, password:String) {
    return this.httpClient.post<any>(this.baseUrl+"/login", 
    { 
      username: username,
      password: password
    })
  }
  
  
  
  public getLogin(){

    
    return this.httpClient.get(this.baseUrl+'/utenti.json');
  } */
}
