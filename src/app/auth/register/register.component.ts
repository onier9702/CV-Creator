import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myform: FormGroup = this.fb.group({
    username: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ],
    mobile: [ '', [ Validators.required, Validators.min(8) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  register() {
    console.log('Form: ', this.myform.value);
    
  }

}
