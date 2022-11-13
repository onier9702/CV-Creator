import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Form, FormWeb } from '../interfaces/form-web.interface';

export interface Data {
  input: string;
  desc: string;
}

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styleUrls: ['./dinamic.component.scss']
})
export class DinamicComponent implements OnInit {

  numberAnswer: number = 1;
  formQuestion: any = {};
  showMethodPreviewQuestion: boolean = false;
  showResetButton: boolean = true;

  questionsFromDB: Form[] = [];
  keys: string[] = [];
  myform: FormGroup = this.fb.group({});
  model_form!: FormGroup;

  experienceArray: Data[] = [];
  indexExperience: number = 0;

  educationArray: Data[] = [];
  indexEducation: number = 0;

  newExperienceInput: FormControl = this.fb.control('', Validators.required);
  newExperienceDesc: FormControl = this.fb.control('', Validators.required);

  newEducationInput: FormControl = this.fb.control('', Validators.required);
  newEducationDesc: FormControl = this.fb.control('', Validators.required);

  newTag: FormControl = this.fb.control('', Validators.required);

  get experienceArr() {
    return this.myform.get('experience') as FormArray;
  }
  get educationArr() {
    return this.myform.get('education') as FormArray;
  }
  get tagArr() {
    return this.myform.get('tag') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    
    this.http.get<FormWeb>('../../../assets/web-form/form.json').subscribe( (resp) => {
      resp.form.forEach( q => {
        this.questionsFromDB.push( q );
        this.keys.push(q.form_name);      
        let newControl;
        ( q.kind === 'dinamic' ) ? newControl = new FormArray([]) 
                                 : newControl = new FormControl('', Validators.required);
        
        ( q.kind === 'dinamic' ) 
            ? this.myform.addControl( q.form_name, newControl )
            : this.myform.addControl( q.number, newControl )
      } );

      // Putting form in model_form as a constant
      this.model_form = this.myform;
      if ( this.numberAnswer > this.questionsFromDB.length ) {
        this.raiseUpMessageFormCompleted();
      }
      
    })

    this.formQuestion = JSON.parse(localStorage.getItem('form')!) || this.formQuestion ;    
    this.numberAnswer = (+JSON.parse(localStorage.getItem('position-form') || '0') + 1);   
  }

  raiseUpMessageFormCompleted(): void {
    this.showResetButton = false;
      Swal.fire({
        title: 'You have completed your CV successfully',
        text: "Do you want create a new one or watch this",
        icon: 'success',
        allowOutsideClick: false,
        background: '#22333b',
        color: '#fff',
        showDenyButton: true,
        focusConfirm: false,
        confirmButtonColor: '#38b000',
        confirmButtonText: 'Watch my CV',
        denyButtonColor: '#3085d6',
        denyButtonText: `Create new one`,
      }).then((result) => {
        if (result.isConfirmed) 
            this.router.navigateByUrl('/creator/details');
        if ( result.isDenied )
            ( this.numberAnswer = 1, this.formQuestion = {}, this.showResetButton = true );
      })
  }

  addExperince(): void {
    if ( this.newExperienceInput.invalid ) { return; }

    let data: Data = {
      input: this.fb.control( this.newExperienceInput.value).value,
      desc: this.fb.control( this.newExperienceDesc.value ).value
    }

    this.experienceArray.push(data);    

    this.newExperienceInput.reset();
    this.newExperienceDesc.reset();
    this.indexExperience += 1;
  }

  addEducation(): void {
    if ( this.newEducationInput.invalid ) { return; }

    let data: Data = {
      input: this.fb.control( this.newEducationInput.value).value,
      desc: this.fb.control( this.newEducationDesc.value ).value
    }

    this.educationArray.push(data);
        
    this.newEducationInput.reset();
    this.newEducationDesc.reset();
    this.indexEducation += 1;
  }
  
  addTag(): void {
    if (this.newTag.invalid) { return; }
    this.tagArr.push( this.fb.control( this.newTag.value, Validators.required ) );
    this.newTag.reset();
  }

  removeExperince(index: number): void {
    this.experienceArray.splice( index, 1 );
  }

  removeEducation(index: number): void {
    this.educationArray.splice( index, 1 );
  }

  removeTag(index: number): void {
    this.tagArr.removeAt(index);
  }

  validField( field: string ): boolean {
    return this.myform.controls[field].touched &&
            this.myform.controls[field].invalid 
  }

  // previewQuestion() {
  //   let count = this.numberAnswer;
  //   this.numberAnswer -= 1;

  //   this.formQuestion[count - 1] = '';
  //   console.log('Preview Question: ', this.formQuestion);
    
  //   localStorage.setItem('questions', JSON.stringify(this.formQuestion));
  //   localStorage.setItem('position', JSON.stringify(count - 2));
  // }


  submit(): void {

    console.log('HERE: ', this.myform.value);
    

    let nameOfForm = this.keys[this.numberAnswer - 1];

    if ( !this.formQuestion[nameOfForm] ) {
      if ( this.questionsFromDB[this.numberAnswer - 1].form_name === 'experience' ) {
        this.formQuestion[nameOfForm] = this.experienceArray; 
      } else if ( this.questionsFromDB[this.numberAnswer - 1].form_name === 'education' ) {
        this.formQuestion[nameOfForm] = this.educationArray;
      } else if (this.questionsFromDB[this.numberAnswer - 1].form_name === 'tag') {
        this.formQuestion[nameOfForm] = this.myform.get('tag')?.value;
      } else {
        this.formQuestion[nameOfForm] = this.myform.get(`${this.numberAnswer}`)!.value;
      }
      
    }

    localStorage.setItem('form', JSON.stringify(this.formQuestion));
    localStorage.setItem('position-form', JSON.stringify(this.numberAnswer));
    
    console.log(this.formQuestion);
    this.numberAnswer += 1;

    if (this.numberAnswer > (this.questionsFromDB.length - 1) ) {
      console.log('Form finished');
      localStorage.setItem('createdcv', JSON.stringify(this.formQuestion));
      localStorage.setItem('position', JSON.stringify(this.numberAnswer - 1));
      // TODO: raise up a message alert of successfully CV created
      this.router.navigateByUrl('/creator/details');
    }

  }

  reset_form(): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger mr-2'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You are going to reset it!",
      icon: 'warning',
      background: '#22333b',
      color: '#fff',
      showCancelButton: true,
      confirmButtonText: 'Yes, reset it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.numberAnswer = 1;
        localStorage.setItem('position-form', JSON.stringify(1))
        this.formQuestion = {};
        this.myform.reset();
        this.myform = this.model_form;
      }
    })
  }

}
