import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { DropdownOptions } from '../../shared/entities/dropdown-options.class';


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  
  public basicForm!: FormGroup;
  public tags: DropdownOptions[];
  public buttonsSelectOptions: DropdownOptions[];
  public buttonsSelectOptions2: DropdownOptions[];
  public selectedTags!: DropdownOptions;


  constructor(
    private fb: FormBuilder,
  ) {
    this.tags = [ {label: 'React', value: 1}, {label: 'Angular', value: 2}, {label: 'Next', value: 3}, {label: 'NodeJs', value: 4}, {label: 'NestJs', value: 5}, {label: 'Sql', value: 6}, {label: 'Mongo DB', value: 7} ];
    this.buttonsSelectOptions = [ {label: 'No', value: 0}, {label: 'Yes', value: 1}, {label: 'Maybe', value: 2} ];
    this.buttonsSelectOptions2 = [ {label: 'No', value: 0}, {label: 'Yes', value: 1} ];
  }
  
  ngOnInit(): void {
    this.createForm();

    
  }

  createForm() {
    this.basicForm = new FormGroup({
      name: new FormControl('', Validators.required  ),
      lastname: new FormControl('', Validators.required  ),
      email: new FormControl('', [Validators.required, Validators.email]),
      github: new FormControl('', Validators.required  ),
      mobile: new FormControl('', Validators.required  ),
      description: new FormControl('', Validators.required  ),
      disponibility: new FormControl('', Validators.required  ),
      favorite_tech: new FormControl('', Validators.required  ),
      expMoreThanYear: new FormControl('', Validators.required  ),
      experience: new FormArray([]),
      education: new FormArray([]),
      // tags: new FormControl('', [ Validators.required ])
    })
  }

  onSubmit() {

    console.log('Form: ', this.basicForm.value);
    

  }

  newValue( optValue: any, formName: string ) {

    console.log('event: ', optValue);
    console.log('formName: ', formName);
    
    const option = this.getOptionForm(optValue, formName);
    console.log('option: ', option);
    
    (option) 
      ? this.basicForm.controls[formName].setValue(option?.label)
      : this.basicForm.controls[formName].setValue(null);

  }

  getOptionForm( value: number, formName: string ) {
    let option: DropdownOptions | undefined;
    switch (formName) {
      case 'favorite_tech':
        option = this.tags.find( opt => opt.value === value);
        break;

      case 'expMoreThanYear':
        option = this.buttonsSelectOptions2.find( opt => opt.value === value);
        break;
    
      default:
        break;

      }

    return option;

  }
    
}
