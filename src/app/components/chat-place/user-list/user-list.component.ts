import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UsersService} from '../../../services/users/users.service';
import {User} from '../../../models/user.model';
import {AuthenticationService} from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Output() closeUserListEvent = new EventEmitter();

  constructor(public usersService: UsersService, private authenticationService: AuthenticationService) { }


  public isCurrentUser(user: User): boolean{
    return user.login === this.authenticationService.getUserName();
  }

  public clickGoBackButtonListener(): void {
    this.closeUserListEvent.emit();
  }

}
