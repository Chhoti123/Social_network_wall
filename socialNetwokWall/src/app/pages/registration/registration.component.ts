import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
constructor(private fb: FormBuilder,
  public userService: UserService,
  ){}
ngOnInit(): void {
  
}
//formgroup takes json value like this {name:''}
registrationForm = this.fb.group({
username:['shweta',[Validators.required,Validators.minLength(6)]],
email:['',[Validators.required,Validators.email]],
password:['',[Validators.required,Validators.maxLength(10)]]
})
create(){
  // console.log(this.registrationForm.value) through this when we fill all field ..this will display all value 
  //like this -> {username: 'shweta chaudhary', email: 'shweta@gmail.com', password: 'shweta123'}
  this.userService.creatNewUser(this.registrationForm.value).then(
    (res)=>{
      console.log(res)
    }
  ).catch(
    (err)=>{
      console.log(err)
    }
  );
}

}
