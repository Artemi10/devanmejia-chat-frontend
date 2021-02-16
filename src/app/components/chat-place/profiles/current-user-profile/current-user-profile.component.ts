import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../../../models/user.model';
import {CurrentUserService} from '../../../../services/current-user/current-user.service';


@Component({
  selector: 'app-current-user-profile',
  templateUrl: './current-user-profile.component.html',
  styleUrls: ['./current-user-profile.component.css']
})
export class CurrentUserProfileComponent implements OnInit {
  @Input() public user: User;
  @Output() public clickCloseIconEvent = new EventEmitter();

  public login: string;
  public firstName: string;
  public lastName: string;
  public imageURL: string;

  constructor(private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.login = this.user.login;
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.imageURL = '';
  }

  public clickCloseIconListener(): void{
    this.clickCloseIconEvent.emit();
  }
  public updateCurrentUser(): void{
    this.imageURL = this.imageURL === '' ? this.user.imageUrl : this.imageURL;
    const user: User = new User(this.login, this.firstName, this.lastName, this.imageURL, this.user.male);
    this.currentUserService.updateUser(user)
      .then(() => {
        this.user.lastName = this.lastName;
        this.user.firstName = this.firstName;
        this.user.imageUrl = this.imageURL;
        this.clickCloseIconEvent.emit();
      });
  }

}
