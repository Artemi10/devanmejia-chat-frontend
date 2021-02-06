import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '../../../../models/user.model';
import {AuthenticationService} from '../../../../services/authentication/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  @Input() public user: User;
  public currentUserName: string;
  public showAddButton: boolean;
  @Output() public deleteUserFromChatEvent = new EventEmitter();
  @Output() public addUserToChatEvent = new EventEmitter();

  constructor(private authenticationService: AuthenticationService) {
    this.currentUserName = this.authenticationService.getUserName();
    this.showAddButton = true;
  }

  public clickAddUserButtonListener(): void{
    this.addUserToChatEvent.emit(this.user);
    this.showAddButton = !this.showAddButton;
  }
  public clickDeleteUserButtonListener(): void{
    this.deleteUserFromChatEvent.emit(this.user);
    this.showAddButton = !this.showAddButton;
  }

}
