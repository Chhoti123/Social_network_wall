import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public creatNewUser(dataObj: any){
    return new Promise((resolve, reject)=>{
      this.http.post('http://localhost:3000/users',dataObj)     //=>This will return obserable so that's why we use .subscribe and subscribe use two parameter
      //1. response(res) and 2. error
      .subscribe(
        (res)=>{
          resolve(res)
        },
        (err) =>{
          reject(err)
        }
      )
    })
  }
//now let's call this function in  registration(create Account)


}
