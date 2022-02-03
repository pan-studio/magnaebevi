import { Injectable } from '@angular/core';
import { ignoreElements } from 'rxjs/operators';
import { Item } from '../interfaces/item.interface';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setUserData(userData: User){
    
    localStorage.setItem("isLogged","true");
    localStorage.setItem("user", JSON.stringify(userData));
  }

  public isLoggedIn():boolean {
    let logged = localStorage.getItem("isLogged");
    if(logged && logged=="true")
      return true;
    return false;
  }
  public getUserData():User{

    if(localStorage.getItem("isLogged") == "true"){
    let user = localStorage.getItem("user");
    return JSON.parse(user+"");
    } else {
      return JSON.parse("{}");
    }
  }

  public isLogged():boolean{

    let logged = localStorage.getItemm("isLogged");
    if (logged == "true")
    { return true }
    return false;
  }
  public removeUserData(){
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user");
  }

  public getCart(){
    let cart = localStorage.getItem("cart");
    
    if(cart){
      return JSON.parse(cart);
    } else {
      return this.emptyCart();
    }

  }

  public removeFromCart(index:number){
    let cart = this.getCart();
    
    delete cart.carrello[index];
         
    localStorage.setItem("cart",JSON.stringify(cart));

    return cart;
  }

  public emptyCart(){
    
    let newCart = {carrello:[]};
      localStorage.setItem("cart",JSON.stringify(newCart));
      return newCart;
  }

  public addProductToCart(prodotto:Item):void{
    let cart = this.getCart();
        cart.carrello.push(prodotto);
        localStorage.setItem("cart",JSON.stringify(cart));
  } 

  public addQuantitaToProdotto(index:number, quantita:number){
    let cart = this.getCart();
    cart.carrello[index].quantita= quantita;
    localStorage.setItem("cart",JSON.stringify(cart));
    debugger;
    return cart;
  }

  public getTotalPrice():number{
    let cart = this.getCart();
    let totaleSpesa = 0;
    for(let i = 0; i<cart.carrello.length; i++){
      totaleSpesa+= cart.carrello[i].prezzo * cart.carrello[i].quantita;
    }
    return totaleSpesa;
  }

  public setPunti(punti:number){
    let utente = this.getUserData();
    utente.loyalty = utente.loyalty+punti;
    this.setUserData(utente);

  }

  public clearAllStorage(){
    localStorage.clear();
  }
}
