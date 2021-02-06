import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {
  }

  canActivate(): boolean{
    if (!(this.authenticationService.isCookieExisted()
      && !this.authenticationService.isTokenExpired()
      && this.authenticationService.getUserRole() === 'CLIENT')){
      return true;
    }
    else {
      window.location.replace('/chat');
      return false;
    }
  }


}
