import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[] = [];
  public initializeUsersEvent: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) {
    this.getAllUsers();
  }

  public getAllUsers(): void{
    this.http.get(environment.url + '/api/users')
      .subscribe((data: User[]) => {
        this.users = data;
        this.setImagesURL();
        this.initializeUsersEvent.next();
      });
  }

  private setImagesURL(): void{
    for (const user of this.users){
      if (user.imageUrl === null){
        user.imageUrl = user.male ? './assets/images/avatar/male.png' : './assets/images/avatar/female.jpg';
      }
    }
  }
}
