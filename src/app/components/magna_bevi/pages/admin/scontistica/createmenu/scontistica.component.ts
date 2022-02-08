import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import createMenuFormModel from 'src/app/constants/formlymodel/createmenu';
import scontisticaMenuFormModel from 'src/app/constants/formlymodel/scontistica';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-scontistica',
  templateUrl: './scontistica.component.html',
  styleUrls: ['./scontistica.component.scss']
})
export class ScontisticaComponent  {

  model:any = scontisticaMenuFormModel;

  
  constructor(private menuservice: MenuServiceService) { }

  onSubmit(sconto:any) {
    this.menuservice.creaScontistica(sconto).subscribe(res=>{})
  }

}
