import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
constructor(private fb: FormBuilder
  ){}
ngOnInit(): void {
  
}
//formgroup takes json value like this {name:''}
registrationForm = this.fb.group({
username:['shweta',[Validators.required,Validators.minLength(6)]],
email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.maxLength(10)]]
})
}
