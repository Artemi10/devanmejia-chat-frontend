import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http: HttpClient) { }

  public sendLogInUserRequest(userLogInForm): Promise<any>{
    return this.http.post(environment.url + '/logIn', userLogInForm).toPromise();

  }
  public sendSignUpRequest(userSignUpForm): Promise<any>{
    console.log(userSignUpForm);
    return this.http.post(environment.url + '/signUp', userSignUpForm).toPromise();
  }
}
