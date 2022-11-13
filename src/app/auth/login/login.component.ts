import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myform: FormGroup = this.fb.group({
    username: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  login() {
    console.log('Form: ', this.myform.value);
    
  }

}
