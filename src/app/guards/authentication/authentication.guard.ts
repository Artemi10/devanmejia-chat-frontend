import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }
  canActivate(): boolean {
    if (!this.authenticationService.isTokenExpired() && this.authenticationService.getUserRole() === 'CLIENT') {
      return true;
    }else {
      window.location.replace('/logIn');
      return false;
    }

  }

}
