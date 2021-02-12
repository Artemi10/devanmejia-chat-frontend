import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../authentication/authentication.service';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public user: User;
  public getCurrentUserEvent: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
    this.getCurrentUser();
  }

  private getCurrentUser(): void{
    const login = this.authenticationService.getUserName();
    this.http.get(environment.url + '/api/user/' + login)
      .subscribe((data: User) => {
        this.user = data;
        this.setImageURL();
        this.getCurrentUserEvent.next();
      }, error => console.log(error));
  }

  public updateUser(user: User): Promise<any>{
    return this.http.patch(environment.url + '/api/user', user).toPromise();
  }

  private setImageURL(): void{
    if (this.user.imageUrl === null){
      this.user.imageUrl = this.user.male ? './assets/images/avatar/male.png' : './assets/images/avatar/female.jpg';
    }
  }
}
