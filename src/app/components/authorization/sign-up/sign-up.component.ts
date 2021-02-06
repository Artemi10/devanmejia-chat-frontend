import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../../services/authorization/authorization.service";
import {CheckFormsService} from "../../../services/checkForms/check-forms.service";
import {AuthenticationService} from "../../../services/authentication/authentication.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public userSignUpForm:any={
    login:'',
    password:'',
    rePassword:'',
    firstName:'',
    lastName:'',
    age: null
  }

  constructor(private authorizationService: AuthorizationService, private checkFormsService: CheckFormsService, private authenticationService:AuthenticationService) {}

  signUp(){
    let message = this.checkFormsService.checkSignUpForm(this.userSignUpForm)
    if(message==="")
      this.authorizationService.sendSignUpRequest(this.userSignUpForm);
    else alert(message)
  }


}
