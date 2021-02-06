import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient) { }

  sendLogInRequest(userLogInForm):void{
    this.http.post(environment.url + "/logIn", {login:userLogInForm.login, password:userLogInForm.password})
      .subscribe(data=>console.log(data));

  }
  sendSignUpRequest(userSignUpForm):void{
    this.http.post(environment.url + "/signUp", {login:userSignUpForm.login, password:userSignUpForm.password, firstName: userSignUpForm.firstName, lastName:userSignUpForm.lastName, age:userSignUpForm.age})
      .subscribe(data=>console.log(data));
  }
}
