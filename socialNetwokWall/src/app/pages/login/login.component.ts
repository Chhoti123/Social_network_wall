import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
constructor(
  private fb: FormBuilder,
  public userService:UserService,
  private snackBar: MatSnackBar,
  private router : Router
  ){}
ngOnInit(){

}
loginForm = this.fb.group({
  email : ['',[Validators.required, Validators.email]],
  password: ['',[Validators.required,Validators.minLength(6)]]
})
// login(){
//   this.userService.getUser(this.loginForm.value.email).then(
//     (res:any)=>{
//       console.log(res);
//       if(res.length == 0){
//         console.log("account does not exist")
//         this.snackBar.open("account does not exist",'ok')
//       }
//       else if(res[0].password == this.loginForm.value.password){
//         console.log("matched")
//         this.snackBar.open("Login successfully", "ok");
//         this.userService.user = res[0]; //all the value of form or response will transfer to user of userservice
//         this.router.navigate(['/posts'])
//       }
//       else{
//         console.log("Incorect password")
//         this.snackBar.open("Incorrect password", 'ok')
//       }
//     }
//   ).catch(
//     (err)=>{
//       console.log(err)
//     }
//   );
// }

login(){
  this.userService.getUser(this.loginForm.value.email).then(
    (res:any)=>{
      console.log(res);
      if(res.length == 0){
        console.log("account does not exist")
        this.snackBar.open("account does not exist",'ok')
      }
      else if(res[0].password == this.loginForm.value.password){
        console.log("matched")
        this.snackBar.open("Login successfully", "ok");
        this.userService.user = res[0]; //all the value of form or response will transfer to user of userservice
        this.router.navigate(['/posts'])
      }
      else{
        console.log("Incorect password")
        this.snackBar.open("Incorrect password", 'ok')
      }
    }
  ).catch(
    (err)=>{
      console.log(err)
    }
  );
}
}
