import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css']
})
export class DynamicFormComponent  {

  form = new FormGroup({});
  model: any = {};

  options: FormlyFormOptions = {};

  @Input()
  jsonFormFields: FormlyFieldConfig[] = [];

  @Output()
  callbackOnSubmit = new EventEmitter();

  onSubmit() {
    this.callbackOnSubmit.emit(this.model);
  }
  constructor() { }

  

}
