import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {

listaMenu!: Menu[]

scontoFormGroup:FormGroup = new FormGroup({
  id: new FormControl ("-1", [Validators.required]),
  data_inizio: new FormControl ("", [Validators.required]),
  data_fine: new FormControl ("", [Validators.required]),
  percentuale: new FormControl ("", [Validators.required]),
  active: new FormControl ("", [Validators.required]),
});




  constructor( private menuservice: MenuServiceService) { }


  ngOnInit(): void {

    this.menuservice.getAllMenu().subscribe(res=> {
      this.listaMenu = res;
    }) 
  }

  onSubmit(menu:any) {
    console.log(menu);
  }
  
 modificaSconto(id:string) {
debugger;
let el =  document.getElementById(id);
   if( el && el.style)
       el.style.display='block';
  
}

gestisciSconto(){

}

}
