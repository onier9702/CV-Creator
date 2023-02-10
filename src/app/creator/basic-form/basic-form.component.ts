import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import {MultiSelectModule} from 'primeng/multiselect';

import { DropdownOptions } from '../../shared/entities/dropdown-options.class';

interface Skill {
  label: string,
  value: string
}

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
  // this is for p-multiselect from primeNg, it let me use class style 
  // Bad Practice from angular
  // encapsulation: ViewEncapsulation.None 
})
export class BasicFormComponent implements OnInit {

  skills: Skill[] = [ { label: 'React', value: 'React' }, 
                      { label: 'Angular', value: 'Angular' },
                      { label: 'NodeJs', value: 'NodeJs' }, 
                      { label: 'Next', value: 'Next' }, 
                      { label: 'MongoDB', value: 'MongoDB' }, 
                      { label: 'NestJs', value: 'NestJs' }, 
                      { label: 'SQL', value: 'SQL' }, 
                      { label: 'HTML', value: 'HTML' }, 
                      { label: 'CSS', value: 'CSS' }, 
                      { label: 'SCSS', value: 'SCSS' }, 
                      { label: 'Express', value: 'Express' }, 
                      { label: 'Vanilla', value: 'Vanilla' }, 
                      { label: 'JQuery', value: 'JQuery' }, 
                    ]
  selectedSkills!: Skill[];

  public basicForm!: FormGroup;
  public tags: DropdownOptions<any>[];
  public buttonsSelectOptions: DropdownOptions<any>[];
  public buttonsSelectOptions2: DropdownOptions<any>[];
  public selectedTags!: DropdownOptions<any>;

  public firstRadioChecked: boolean = true;


  constructor(
    private fb: FormBuilder,
    private router: Router
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
      role: new FormControl('', Validators.required  ),
      description: new FormControl('', Validators.required  ),
      disponibility: new FormControl('', Validators.required  ),
      favorite_tech: new FormControl('', Validators.required  ),
      expMoreThanYear: new FormControl('', Validators.required  ),
      nameEdu1: new FormControl('',[]),
      descEdu1: new FormControl('',[]),
      nameEdu2: new FormControl('',[]),
      descEdu2: new FormControl('',[]),
      nameExp1: new FormControl('',[]),
      descExp1: new FormControl('',[]),
      nameExp2: new FormControl('',[]),
      descExp2: new FormControl('',[]),
      
      
    })
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
    let option: DropdownOptions<any> | undefined;
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

  setCheck( opt: string ) {
    const elemRef = document.getElementById('section_one');

    if ( opt === 'second' ) {
      elemRef?.classList.add('especial');
      this.firstRadioChecked = false;
    } else {
      elemRef?.classList.remove('especial');
      this.firstRadioChecked = true;
    }
    
  }

  onSubmit() {
    const skillsSelected = this.selectedSkills.map( obj => obj.value );
    const { nameEdu1, descEdu1, nameEdu2, descEdu2, nameExp1, descExp1, nameExp2, descExp2, ...restData } = this.basicForm.value;
    restData.skills = skillsSelected;
    restData.experience = [];
    restData.education = [];
    if ( nameEdu1 ) restData.education.push({ input: nameEdu1, desc: descEdu1 });
    if ( nameEdu2 ) restData.education.push({ input: nameEdu2, desc: descEdu2 });
    if ( nameExp1 ) restData.experience.push({ input: nameExp1, desc: descExp1 }); 
    if ( nameExp2 ) restData.experience.push({ input: nameExp2, desc: descExp2 }); 
    console.log('Form: ', restData);
    console.log('Selected: ', this.selectedSkills);
    
    if ( this.basicForm.invalid ) {
      Swal.fire( 'Error', 'Form invalid, pease recheck', 'error');
      return;
    }
    localStorage.setItem('createdcv', JSON.stringify(restData));
    // TODO: raise up a message alert of successfully CV created
      
    this.router.navigateByUrl('/creator/details');
    
  }
    
}
