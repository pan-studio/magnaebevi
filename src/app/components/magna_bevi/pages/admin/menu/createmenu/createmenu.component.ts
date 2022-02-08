import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import createMenuFormModel from 'src/app/constants/formlymodel/createmenu';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.scss']
})
export class CreatemenuComponent  {

  model:any = createMenuFormModel;

 
  constructor(private menuService: MenuServiceService) { }

  onSubmit(menu:any) {
    this.menuService.creaMenu(menu).subscribe(res => {
      
    })
  }

}
