import {ErrorHandler, Injectable} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
@Injectable()
export class AuthErrorHandler implements ErrorHandler{

  constructor(private authenticationService:AuthenticationService) {
  }

  handleError(error: any): void {
    if(error.status===401||error.status===403)
      window.location.replace('/logIn')
    if(error.status===200){
      this.authenticationService.setToken(error.error.text)
      window.location.replace('/chat')
    }
    if(error.status===404)
      alert("Please, enter correct login and password")
    else
      console.log(error);
  }

}
