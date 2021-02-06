import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../authentication/authentication.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public user: User;

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.getCurrentUser();
  }

  public getCurrentUser(): void{
    const login = this.authenticationService.getUserName();
    this.http.get(environment.url + '/api/user/' + login)
      .subscribe((data: User) => this.user = data, error => console.log(error));
  }
}
