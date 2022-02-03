import { Component, OnInit } from '@angular/core';
import magna_const from 'src/app/constants/constants';
import { Item } from 'src/app/interfaces/item.interface';
import { Ordine } from 'src/app/interfaces/ordine.interface';
import { OrdiniService } from 'src/app/services/ordini.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtenteService } from 'src/app/services/utente.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ordine!: Ordine;
  totalCart: number = 0;
  carrello: Item[] = [];

  constructor(private storageService: StorageService,
    private utenteService: UtenteService,
    private utilityService: UtilityService,
    private ordiniService:OrdiniService) { }

  ngOnInit(): void {
    this.updateCartView()
  }

  updateCartView(){
    let productFromLocalStorage = this.storageService.getCart();
    debugger;
    this.carrello = productFromLocalStorage.carrello;
    this.totalCart = this.storageService.getTotalPrice();
   }

   emptyCart(){
     this.storageService.emptyCart();
     this.updateCartView();
    //  const modale = this.modalService.open(ModalComponent)
    //  modale.componentInstance.titolo = "Success";
    //  modale.componentInstance.content = "Carrello svuotato con successo";
    //  modale.componentInstance.type = "type_success";
   }
   removeProductFromCart(index:number){
     
     this.storageService.removeFromCart(index);
     this.totalCart = this.storageService.getTotalPrice();
    //  const modale = this.modalService.open(ModalComponent)
    //  modale.componentInstance.titolo = "Success";
    //  modale.componentInstance.content = "Prodotto rimosso con successo dal carrello";
    //  modale.componentInstance.type = "type_success";

   }

   setQuantita(index:number, quantita:any){debugger
    let qt = parseInt(quantita.value);
    this.storageService.addQuantitaToProdotto(index, qt);
    this.totalCart = this.storageService.getTotalPrice();
     
   }


   aggiungiOrdine(){

    let productFromLocalStorage = this.storageService.getCart();
      let ordine:Ordine = {
        riferimento : this.utilityService.generateRandomString()+"",
        prodotti: productFromLocalStorage.carrello,
        tavolo: 0,
        cliente: this.storageService.getUserData(),
        totale:this.storageService.getTotalPrice(),
        numero_prodotti: productFromLocalStorage.carrello.length,
        stato: magna_const.ordini.creato,
      };
      
      this.ordiniService.creaOrdine(ordine).subscribe(res=>{

      })
      
   }

}