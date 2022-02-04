import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import createMenuFormModel from 'src/app/constants/formlymodel/createmenu';

@Component({
  selector: 'app-createmenu',
  templateUrl: './createmenu.component.html',
  styleUrls: ['./createmenu.component.scss']
})
export class CreatemenuComponent  {

  model:any = createMenuFormModel;

  onSubmit(menu:any) {
    console.log(menu);
  }
  constructor() { }

  

}
