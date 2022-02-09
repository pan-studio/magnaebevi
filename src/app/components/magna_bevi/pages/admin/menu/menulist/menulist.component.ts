import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Item } from 'src/app/interfaces/item.interface';
import { Menu } from 'src/app/interfaces/menu.interface';
import { Sconto } from 'src/app/interfaces/sconto.interfaces';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

  listaMenu!: Menu[];
  listaSconti!: Sconto[];
  currentItem!: Item;

  scontoFormGroup: FormGroup = new FormGroup({
    id: new FormControl("-1", [Validators.required]),
    dataInizio: new FormControl("", [Validators.required]),
    dataFine: new FormControl("", [Validators.required]),
    percentuale: new FormControl("", [Validators.required]),
    active: new FormControl("", [Validators.required]),
  });




  constructor(private menuservice: MenuServiceService) { }


  ngOnInit(): void {

    this.menuservice.getAllMenu().subscribe(res => {
      this.listaMenu = res;
    })

    this.menuservice.getAllSconti().subscribe(res => {
      this.listaSconti = res;
    })
  }

  onSubmit(menu: any) {
    console.log(menu);
  }

  modificaSconto(item: any, idSezione = -1, idMenu = -1) {
    let el = document.getElementById("sconto-form");
    if (el && el.style)
      el.style.display = 'block';

    if (item != null) {

      if (item.value) {
        item = JSON.parse(item.value);
        this.updateScontoSelezionato(item);
      } else {
        this.currentItem = item;
        this.currentItem.idSezione = idSezione;
        this.currentItem.idMenu = idMenu;
        this.currentItem.idSconto = item.sconto.id;
        item = item.sconto;
      }

      this.scontoFormGroup.setValue(item);
    }


  }


  gestisciSconto() {
    let sconto = {
      id: this.scontoFormGroup.controls.id.value,
      dataInizio: this.scontoFormGroup.controls.dataInizio.value,
      dataFine: this.scontoFormGroup.controls.dataFine.value,
      percentuale: this.scontoFormGroup.controls.percentuale.value,
      active: Boolean(this.scontoFormGroup.controls.active.value)
    }

    this.menuservice.creaScontistica(sconto).subscribe(res => {

    })

  }

  updateScontoSelezionato(scontoSelezionato: Sconto) {
    debugger;
    this.currentItem.sconto = scontoSelezionato;

    
  }

  editSconto() {
    this.menuservice.updateItem(this.currentItem).subscribe(res => {

    })
  }

}
