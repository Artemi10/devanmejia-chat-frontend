import {Component, EventEmitter, Output} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {CurrentUserService} from '../../../services/current-user/current-user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent  {
  @Output() public clickCreateChatButton = new EventEmitter();

  constructor(private authenticationService: AuthenticationService, public currentUserService: CurrentUserService) {}

  public clickCreateChatButtonListener(): void{
   this.clickCreateChatButton.emit();
  }

  public exit():void{
    this.authenticationService.deleteToken();
    window.location.replace('/logIn');
  }
}
