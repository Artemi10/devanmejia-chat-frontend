import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../../services/authorization/authorization.service";
import {CheckFormsService} from "../../../services/checkForms/check-forms.service";


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {
  public userLogInForm: any={
    login: '',
    password:''
  }

  constructor(private authorizationService:AuthorizationService, private checkFormsService:CheckFormsService) { }
   logIn():void{
    let message = this.checkFormsService.checkLogInForm(this.userLogInForm);
    if(message==="")
      this.authorizationService.sendLogInRequest(this.userLogInForm);
    else alert(message)
  }

}
