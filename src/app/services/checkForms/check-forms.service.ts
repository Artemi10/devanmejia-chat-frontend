import { Injectable } from '@angular/core';
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class CheckFormsService {

  constructor() { }
  checkLogInForm(userLogInForm):String{
    if(this.checkTextInput(userLogInForm.login))
      return"Please, enter your login";
    else if(this.checkTextInput(userLogInForm.password))
      return"Please, enter your password";
    else
      return "";
  }
  checkSignUpForm(userSignUpForm):string{
    if(this.checkTextInput(userSignUpForm.firstName))
      return "Please, enter your firstname";

    else if(this.checkTextInput(userSignUpForm.lastName))
      return "Please, enter your surname";

    else if(this.checkTextInput(userSignUpForm.login))
      return "Please, enter your login";

    else if(this.checkTextInput(userSignUpForm.password))
      return "Please, enter your password";

    else if(this.checkTextInput(userSignUpForm.rePassword))
      return "Please, confirm your password";

    else if(!this.checkPasswords(userSignUpForm.password, userSignUpForm.rePassword ))
      return "Passwords are not the same";

    else if(this.checkNumberInput(userSignUpForm.age))
      return "Please, enter your age correctly";

    else
      return "";
  }
  private checkTextInput(input):boolean{
    return input===null||input===""||input===" ";
  }
  private checkNumberInput(input):boolean{
    return input===null||isNaN(Number.parseInt(input));
  }
  private checkPasswords(password, rePassword):boolean{
    return password===rePassword;
  }
}
